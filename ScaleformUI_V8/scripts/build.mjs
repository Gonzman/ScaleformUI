#!/usr/bin/env node

import { spawn } from "child_process";
import { existsSync } from "fs";
import { rm, mkdir, cp } from "fs/promises";
import path from "path";

const projectRoot = path.resolve(import.meta.dirname, "..");
const distDir = path.join(projectRoot, "dist");
const tempDir = path.join(projectRoot, ".build-tmp");
const scriptsDir = path.join(projectRoot, "scripts");
const clientBundlePath = path.join(
    projectRoot,
    "server",
    "txData",
    "FiveMBasicServerCFXDefault_E3ABCD.base",
    "resources",
    "ScaleformUI",
    "client",
    "index.js"
);

// Helper to run commands and wait for completion
function runCommand(command, args = [], cwd = projectRoot) {
    return new Promise((resolve, reject) => {
        console.log(`Running: ${command} ${args.join(" ")}`);
        const child = spawn(command, args, {
            cwd,
            stdio: "inherit",
            shell: true
        });

        child.on("close", (code) => {
            if (code === 0) {
                resolve();
            } else {
                reject(new Error(`Command failed with exit code ${code}: ${command} ${args.join(" ")}`));
            }
        });

        child.on("error", (error) => {
            reject(error);
        });
    });
}

async function main() {
    try {
        console.log("🚀 Starting build process...");

        // Step 1: Clean existing dist and temp directories
        console.log("🧹 Cleaning existing directories...");
        if (existsSync(distDir)) {
            await rm(distDir, { recursive: true, force: true });
        }
        if (existsSync(tempDir)) {
            await rm(tempDir, { recursive: true, force: true });
        }

        // Step 2: Generate bundle entry
        console.log("📝 Generating bundle entry...");
        await runCommand("node", ["generate-bundle-entry.mjs"], scriptsDir);

        // Step 3: Prepare bundle with TypeScript compilation
        console.log("🔨 Preparing bundle with TypeScript...");
        await runCommand("bunx", ["tsc", "--project", "tsconfig.bundle.json"]);

        // Step 4: Bundle with Bun from temp to dist
        console.log("📦 Creating bundle...");
        await runCommand("bunx", ["bun", "build", ".build-tmp/index.js", "--outdir", "dist", "--target", "bun"]);

        // Step 4b: Copy individual JS files from .build-tmp to dist
        console.log("📂 Copying individual JS files to dist...");
        await cp(tempDir, distDir, { recursive: true, filter: (src) => !src.endsWith(".d.ts") });

        // Step 5: Generate TypeScript declarations
        console.log("📜 Generating TypeScript declarations...");
        await runCommand("bunx", ["tsc", "--project", "tsconfig.build.json"]);

        // Step 6: Rewrite declaration imports to be relative
        console.log("🔧 Rewriting declaration imports...");
        await runCommand("node", ["rewrite-dts-imports.mjs"], scriptsDir);

        // Step 7: Clean up temp directory
        console.log("🧹 Cleaning up temporary files...");
        if (existsSync(tempDir)) {
            await rm(tempDir, { recursive: true, force: true });
        }

        // Step 8: Publish the client bundle into the server resource tree.
        console.log("🚚 Publishing client bundle to server resource...");
        await mkdir(path.dirname(clientBundlePath), { recursive: true });
        await cp(path.join(distDir, "index.js"), clientBundlePath);

        console.log("✅ Build completed successfully!");
    } catch (error) {
        console.error("❌ Build failed:", error.message);
        process.exit(1);
    }
}

main();
