import { ItemFont } from "elements/ItemFont";
import { ScaleformFonts } from "elements/scaleform-fonts";
import { PM_Column } from "../columns";
import { BaseTab } from "menus/pause-menu/tabs";
import { TabLeftItem } from "menus/pause-menu/items";

export class PauseMenuItem {
    public labelFont: ItemFont = ScaleformFonts.CHALET_LONDON_NINETEENSIXTY;
    private _label: string;
    public ParentLeftItem: TabLeftItem | null = null;
    public ParentTab: BaseTab | null = null;
    public ParentColumn: PM_Column | null = null;
    protected _selected: boolean = false;

    constructor(label: string, labelFont?: ItemFont) {
        this._label = label;
        if (labelFont) {
            this.labelFont = labelFont;
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
