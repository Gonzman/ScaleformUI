import { ItemFont } from "elements/ItemFont";
import { ScaleformFonts } from "elements/scaleform-fonts";
import type { PM_Column } from "../columns";
import type { BaseTab } from "menus/pause-menu/tabs";
import type { TabLeftItem } from "menus/pause-menu/items/tab-left-item";

export interface PauseMenuColumnLike {
    visible?: boolean;
    UpdateSlot?(index: number): void;
    Items: PauseMenuItem[];
    Parent?: BaseTab | null;
}

export class PauseMenuItem {
    public labelFont: ItemFont = ScaleformFonts.CHALET_LONDON_NINETEENSIXTY;
    private _label: string;
    public ParentLeftItem: TabLeftItem | null = null;
    public ParentTab: BaseTab | null = null;
    public ParentColumn: PauseMenuColumnLike | null = null;
    protected _selected: boolean = false;
    protected _enabled: boolean = true;

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

    public get Enabled(): boolean {
        return this._enabled;
    }

    public set Enabled(value: boolean) {
        this._enabled = value;
    }
}

export default PauseMenuItem;
