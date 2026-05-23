import { SColor } from "elements/scolor";
import { SettingsItem, SettingsItemType } from "./settings-item";

export type SettingsStatsEvent = (item: SettingsStatsItem, value: number) => void;

export class SettingsStatsItem extends SettingsItem {
    private value: number;
    private type: number;
    private sliderColor: SColor;

    private statsChangedCallbacks: SettingsStatsEvent[] = [];

    constructor(label: string, value: number, type: number, sliderColor: SColor) {
        super(label, "");
        this.ItemType = SettingsItemType.BlipType;
        this._itemId = 5;
        this.value = value;
        this.type = type;
        this.sliderColor = sliderColor;
    }

    public get Value(): number {
        return this.value;
    }

    public set Value(value: number) {
        this.value = value;
        this.updateParentSlot();
        this.StatsChanged();
    }

    public get Type(): number {
        return this.type;
    }

    public set Type(value: number) {
        this.type = value;
        this.updateParentSlot();
    }

    public get SliderColor(): SColor {
        return this.sliderColor;
    }

    public set SliderColor(value: SColor) {
        this.sliderColor = value;
        this.updateParentSlot();
    }

    public OnStatsChanged(callback: SettingsStatsEvent): void {
        this.statsChangedCallbacks.push(callback);
    }

    public StatsChanged(): void {
        for (const callback of this.statsChangedCallbacks) {
            callback(this, this.value);
        }
    }
}

export default SettingsStatsItem;
