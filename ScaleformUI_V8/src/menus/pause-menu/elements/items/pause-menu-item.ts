import { ItemFont } from "elements/ItemFont";
import { ScaleformFonts } from "elements/scaleform-fonts";

export class PauseMenuItem {
    public LabelFont: ItemFont = ScaleformFonts.CHALET_LONDON_NINETEENSIXTY;
    private _label: string;
    public ParentLeftItem: unknown = null;
    public ParentTab: unknown = null;
    public ParentColumn: unknown = null;
    protected _selected: boolean = false;

    constructor(label: string, labelFont?: ItemFont) {
        this._label = label;
        if (labelFont) {
            this.LabelFont = labelFont;
        }
    }

    public get Label(): string {
        return this._label;
    }

    public set Label(value: string) {
        this._label = value;
    }

    public get Selected(): boolean {
        return this._selected;
    }

    public set Selected(value: boolean) {
        this._selected = value;
    }
}

export default PauseMenuItem;
