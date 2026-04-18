import { Delay } from "helpers/loaders";
import { ScaleformUI } from "scaleforms/scaleformui/main";
import { KeymapItem } from "../items/keymap-item";
import { StatsTabItem, StatItemType } from "../items/stats-tab-item";
import { SettingsCheckboxItem } from "../items/settings-items/settings-checkbox-item";
import { SettingsItem, SettingsItemType } from "../items/settings-items/settings-item";
import { SettingsListItem } from "../items/settings-items/settings-list-item";
import { SettingsProgressItem } from "../items/settings-items/settings-progress-item";
import { SettingsSliderItem } from "../items/settings-items/settings-slider-item";
import { LeftItemType } from "../../items/tab-left-item";
import PM_Column from "./pm-column";

export class SubmenuCentralColumn extends PM_Column {
    public currentColumnType: LeftItemType = LeftItemType.Empty;

    public override SetDataSlot(index: number): void {
        this.sendItem(index, "SET_DATA_SLOT");
    }

    public override UpdateSlot(index: number): void {
        this.sendItem(index, "UPDATE_SLOT");
    }

    public override async GoUp(): Promise<void> {
        if (this.currentColumnType !== LeftItemType.Settings || !this.Items.length) return;
        (this.Items[this.Index] as SettingsItem).Selected = false;
        do {
            this.index--;
            if (this.index < 0) this.index = this.Items.length - 1;
            await Delay(0);
        } while (this.isJumpableSetting(this.Items[this.Index] as SettingsItem));
        (this.Items[this.Index] as SettingsItem).Selected = true;
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction("SET_COLUMN_HIGHLIGHT", this.position as number, this.index, true, true);
        this.SetColumnScroll(this.Index + 1, this.Items.length, this.VisibleItems, "", this.Items.length < this.VisibleItems);
    }

    public override async GoDown(): Promise<void> {
        if (this.currentColumnType !== LeftItemType.Settings || !this.Items.length) return;
        (this.Items[this.Index] as SettingsItem).Selected = false;
        do {
            this.index++;
            if (this.index >= this.Items.length) this.index = 0;
            await Delay(0);
        } while (this.isJumpableSetting(this.Items[this.Index] as SettingsItem));
        (this.Items[this.Index] as SettingsItem).Selected = true;
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction("SET_COLUMN_HIGHLIGHT", this.position as number, this.index, true, true);
        this.SetColumnScroll(this.Index + 1, this.Items.length, this.VisibleItems, "", this.Items.length < this.VisibleItems);
    }

    public override GoLeft(): void {
        if (this.currentColumnType !== LeftItemType.Settings) return;
        const item = this.Items[this.Index];
        if (item instanceof SettingsListItem) item.ItemIndex--;
        else if (item instanceof SettingsSliderItem) item.Value--;
        else if (item instanceof SettingsProgressItem) item.Value--;
    }

    public override GoRight(): void {
        if (this.currentColumnType !== LeftItemType.Settings) return;
        const item = this.Items[this.Index];
        if (item instanceof SettingsListItem) item.ItemIndex++;
        else if (item instanceof SettingsSliderItem) item.Value++;
        else if (item instanceof SettingsProgressItem) item.Value++;
    }

    public override Select(): void {
        const item = this.Items[this.Index];
        if (item instanceof SettingsItem) {
            if (!item.Enabled) {
                PlaySoundFrontend(-1, "ERROR", "HUD_FRONTEND_DEFAULT_SOUNDSET", true);
                return;
            }
            if (item instanceof SettingsListItem) item.ListSelected();
            else if (item instanceof SettingsCheckboxItem) item.IsChecked = !item.IsChecked;
            else if (item instanceof SettingsProgressItem) item.ProgressSelected();
            else if (item instanceof SettingsSliderItem) item.SliderSelected();
            if (!(item instanceof SettingsCheckboxItem)) item.activatedEmit();
        }
    }

    private sendItem(index: number, method: "SET_DATA_SLOT" | "UPDATE_SLOT"): void {
        if (index >= this.Items.length) return;
        const item: any = this.Items[index];
        const pause = ScaleformUI.Scaleforms._pauseMenu._pause;
        if (!pause) return;

        if (item instanceof StatsTabItem) {
            pause.callFunction(
                method,
                this.position as number,
                index,
                0,
                index,
                item.Type,
                0,
                true,
                item.Label,
                item.Type === StatItemType.Basic ? item.RightLabel : item.Value,
                item.Type === StatItemType.ColoredBar ? item.ColoredBarColor.getArgbValue() : 0
            );
            return;
        }

        if (item instanceof SettingsItem) {
            pause.callFunction(
                method,
                this.position as number,
                index,
                0,
                index,
                item.ItemType,
                this.getSettingsValue(item),
                true,
                item.Label,
                this.getSettingsExtra(item),
                this.getSettingsExtra2(item)
            );
            this.SetColumnScroll(this.Index + 1, this.Items.length, this.VisibleItems, "", this.Items.length < this.VisibleItems);
            return;
        }

        if (item instanceof KeymapItem) {
            pause.callFunction(
                method,
                this.position as number,
                index,
                0,
                index,
                0,
                0,
                true,
                item.Label,
                IsUsingKeyboard(2) ? item.PrimaryKeyboard : item.PrimaryGamepad,
                IsUsingKeyboard(2) ? item.SecondaryKeyboard : item.SecondaryGamepad
            );
            return;
        }

        pause.callFunction(method, this.position as number, index, 0, index, 0, 0, true, item.Label);
    }

    private getSettingsValue(item: SettingsItem): number {
        if (item instanceof SettingsListItem) return item.ItemIndex;
        if (item instanceof SettingsSliderItem) return item.Value;
        if (item instanceof SettingsProgressItem) return item.Value;
        return 0;
    }

    private getSettingsExtra(item: SettingsItem): any {
        if (item instanceof SettingsItem && item.ItemType === SettingsItemType.Basic) return item.RightLabel;
        if (item instanceof SettingsListItem) return item.ListItems.join(",");
        if (item instanceof SettingsCheckboxItem) return item.CheckBoxStyle;
        if (item instanceof SettingsProgressItem) return item.MaxValue;
        if (item instanceof SettingsSliderItem) return item.MaxValue;
        return "";
    }

    private getSettingsExtra2(item: SettingsItem): any {
        if (item instanceof SettingsCheckboxItem) return item.IsChecked;
        if (item instanceof SettingsProgressItem) return item.ColoredBarColor.getArgbValue();
        if (item instanceof SettingsSliderItem) return item.ColoredBarColor.getArgbValue();
        return 0;
    }

    private isJumpableSetting(item: SettingsItem): boolean {
        return item.ItemType === SettingsItemType.Empty || item.ItemType === SettingsItemType.Separator;
    }
}

export default SubmenuCentralColumn;
