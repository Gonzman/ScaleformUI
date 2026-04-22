import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDir, "..");
const distDir = path.join(projectRoot, "dist");

const exists = async (filePath) => {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
};

const walk = async (dir) => {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        return walk(fullPath);
      }

      return entry.isFile() && entry.name.endsWith(".d.ts") ? [fullPath] : [];
    })
  );

  return nested.flat();
};

const resolveInternalSpecifier = async (currentFile, specifier) => {
  // Skip if already relative, absolute, or external module
  if (
    specifier.startsWith(".") ||
    specifier.startsWith("/") ||
    specifier.startsWith("node:") ||
    specifier.startsWith("@") ||
    specifier.includes("/node_modules/")
  ) {
    return specifier;
  }

  // For bare imports like "item" -> "./item"
  // First try direct file resolution
  const candidateFile = path.join(distDir, `${specifier}.d.ts`);
  const candidateIndex = path.join(distDir, specifier, "index.d.ts");

  let target;
  if (await exists(candidateFile)) {
    target = candidateFile;
  } else if (await exists(candidateIndex)) {
    target = candidateIndex;
  } else {
    // If no exact match, treat as a bare import and make it relative to current directory
    const currentDir = path.dirname(currentFile);
    const currentDirRelativeToDist = path.relative(distDir, currentDir);
    
    // Check if there's a file with this name in current directory
    const localCandidateFile = path.join(currentDir, `${specifier}.d.ts`);
    const localCandidateIndex = path.join(currentDir, specifier, "index.d.ts");
    
    if (await exists(localCandidateFile)) {
      return `./${specifier}`;
    } else if (await exists(localCandidateIndex)) {
      return `./${specifier}`;
    } else {
      // Search for the file anywhere in dist
      const allFiles = await walk(distDir);
      const matchingFile = allFiles.find(file => {
        const baseName = path.basename(file, '.d.ts');
        return baseName === specifier;
      });
      
      if (matchingFile) {
        const currentDir = path.dirname(currentFile);
        const targetWithoutExt = matchingFile.replace(/\.d\.ts$/, "");
        let relativeSpecifier = path.relative(currentDir, targetWithoutExt).split(path.sep).join("/");

        if (!relativeSpecifier.startsWith(".")) {
          relativeSpecifier = `./${relativeSpecifier}`;
        }

        return relativeSpecifier;
      }
      
      // If still no match, return as-is (might be external)
      return specifier;
    }
  }

  const currentDir = path.dirname(currentFile);
  const targetWithoutExt = target.replace(/\.d\.ts$/, "");
  let relativeSpecifier = path.relative(currentDir, targetWithoutExt).split(path.sep).join("/");

  if (!relativeSpecifier.startsWith(".")) {
    relativeSpecifier = `./${relativeSpecifier}`;
  }

  return relativeSpecifier;
};

const rewriteSpecifiers = async (content, filePath) => {
  const replacers = [];

  // Match "from 'module'" and "from "module"" patterns
  for (const match of content.matchAll(/(from\s+["'])([^"']+)(["'])/g)) {
    replacers.push({
      start: match.index + match[1].length,
      end: match.index + match[1].length + match[2].length,
      original: match[2]
    });
  }

  // Match dynamic imports: import("module")
  for (const match of content.matchAll(/(import\s*\(\s*["'])([^"']+)(["']\s*\))/g)) {
    replacers.push({
      start: match.index + match[1].length,
      end: match.index + match[1].length + match[2].length,
      original: match[2]
    });
  }

  // Match direct imports: import "module" (side-effect imports)
  for (const match of content.matchAll(/(import\s+["'])([^"']+)(["'])/g)) {
    replacers.push({
      start: match.index + match[1].length,
      end: match.index + match[1].length + match[2].length,
      original: match[2]
    });
  }

  // Match export from: export { ... } from "module"
  for (const match of content.matchAll(/(export\s+{[^}]*}\s+from\s+["'])([^"']+)(["'])/g)) {
    replacers.push({
      start: match.index + match[1].length,
      end: match.index + match[1].length + match[2].length,
      original: match[2]
    });
  }

  // Match export * from: export * from "module"
  for (const match of content.matchAll(/(export\s+\*\s+from\s+["'])([^"']+)(["'])/g)) {
    replacers.push({
      start: match.index + match[1].length,
      end: match.index + match[1].length + match[2].length,
      original: match[2]
    });
  }

  if (replacers.length === 0) {
    return content;
  }

  const sorted = replacers.sort((a, b) => b.start - a.start);
  let nextContent = content;

  for (const replacer of sorted) {
    const rewritten = await resolveInternalSpecifier(filePath, replacer.original);
    if (rewritten !== replacer.original) {
      nextContent =
        nextContent.slice(0, replacer.start) +
        rewritten +
        nextContent.slice(replacer.end);
    }
  }

  return nextContent;
};

if (!(await exists(distDir))) {
  throw new Error("dist folder was not found. Run the build first.");
}

const dtsFiles = await walk(distDir);
let changedCount = 0;

for (const filePath of dtsFiles) {
  const original = await fs.readFile(filePath, "utf8");
  const rewritten = await rewriteSpecifiers(original, filePath);
  if (rewritten !== original) {
    await fs.writeFile(filePath, rewritten, "utf8");
    changedCount++;
  }
}

process.stdout.write(`Rewrote imports in ${changedCount} declaration file(s).\n`);
