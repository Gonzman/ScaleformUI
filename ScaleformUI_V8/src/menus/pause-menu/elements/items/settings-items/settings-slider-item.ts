import { SColor } from "elements/scolor";
import { SettingsItem, SettingsItemType } from "./settings-item";

export type SettingsSliderEvent = (item: SettingsSliderItem, value: number) => void;

export class SettingsSliderItem extends SettingsItem {
    private value: number;
    private coloredBarColor: SColor = SColor.HUD_Freemode;

    public MaxValue: number;
    public _max: number;
    public _multiplier: number = 5;
    public _heritage: boolean = false;

    private barChangedCallbacks: SettingsSliderEvent[] = [];
    private sliderSelectedCallbacks: SettingsSliderEvent[] = [];

    constructor(label: string, max: number, startIndex: number, barColor: SColor) {
        super(label, "");
        this.ItemType = SettingsItemType.SliderBar;
        this._itemId = 3;
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
        this.SliderChanged();
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

    public OnBarChanged(callback: SettingsSliderEvent): void {
        this.barChangedCallbacks.push(callback);
    }

    public OnSliderSelected(callback: SettingsSliderEvent): void {
        this.sliderSelectedCallbacks.push(callback);
    }

    public SliderChanged(): void {
        for (const callback of this.barChangedCallbacks) {
            callback(this, this.Value);
        }
    }

    public SliderSelected(): void {
        for (const callback of this.sliderSelectedCallbacks) {
            callback(this, this.Value);
        }
    }
}

export default SettingsSliderItem;
