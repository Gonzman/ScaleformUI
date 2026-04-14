export class ScaleformLabel {
    private readonly _label: string;

    constructor(label: string) {
        this._label = label;
    }

    get Label(): string {
        return this._label;
    }

    get SplitLabel(): string[] {
        const stringsNeeded = Math.floor((this._label.length - 1) / 99) + 1;
        const outputString: string[] = [];

        for (let i = 0; i < stringsNeeded; i++) {
            outputString[i] = this._label.substring(i * 99, Math.min(this._label.length, (i + 1) * 99));
        }

        return outputString;
    }

    equals(obj: Object): boolean {
        if (!(obj instanceof ScaleformLabel)) {
            return false;
        }
        const otherLabel = obj as ScaleformLabel;
        return this.Label === otherLabel.Label;
    }
}

function implicitOperator(label: string): ScaleformLabel {
    return new ScaleformLabel(label);
}

function operatorEquals(a: ScaleformLabel, b: ScaleformLabel): boolean {
    return a.equals(b);
}

function operatorNotEquals(a: ScaleformLabel, b: ScaleformLabel): boolean {
    return !operatorEquals(a, b);
}
