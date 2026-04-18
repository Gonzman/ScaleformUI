import { SColor } from "elements/scolor";
import { SettingsItem, SettingsItemType } from "./settings-item";

export type SettingsProgressEvent = (item: SettingsProgressItem, value: number) => void;

export class SettingsProgressItem extends SettingsItem {
    private value: number;
    private coloredBarColor: SColor = SColor.HUD_Freemode;

    public MaxValue: number;
    public _max: number;
    public _multiplier: number = 5;

    private barChangedCallbacks: SettingsProgressEvent[] = [];
    private progressSelectedCallbacks: SettingsProgressEvent[] = [];

    constructor(label: string, max: number, startIndex: number, masked: boolean, barColor: SColor) {
        super(label, "");
        this.ItemType = masked ? SettingsItemType.MaskedProgressBar : SettingsItemType.ProgressBar;
        this._itemId = 4;
        this.MaxValue = max;
        this._max = max;
        this.value = startIndex;
        this.ColoredBarColor = barColor;
    }

    public get Value(): number {
        return this.value;
    }

    public set Value(value: number) {
        this.value = value;
        this.updateParentSlot();
        this.ProgressChanged();
    }

    public get SliderColor(): SColor {
        return this.ColoredBarColor;
    }

    public set SliderColor(value: SColor) {
        this.ColoredBarColor = value;
    }

    public get ColoredBarColor(): SColor {
        return this.coloredBarColor;
    }

    public set ColoredBarColor(value: SColor) {
        this.coloredBarColor = value;
        this.updateParentSlot();
    }

    public OnBarChanged(callback: SettingsProgressEvent): void {
        this.barChangedCallbacks.push(callback);
    }

    public OnProgressSelected(callback: SettingsProgressEvent): void {
        this.progressSelectedCallbacks.push(callback);
    }

    public ProgressSelected(): void {
        for (const callback of this.progressSelectedCallbacks) {
            callback(this, this.Value);
        }
    }

    public ProgressChanged(): void {
        for (const callback of this.barChangedCallbacks) {
            callback(this, this.Value);
        }
    }
}

export default SettingsProgressItem;
