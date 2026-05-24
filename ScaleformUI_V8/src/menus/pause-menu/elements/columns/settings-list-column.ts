import PM_Column, { PLT_COLUMNS } from "./pm-column";
import { ScaleformUI } from "scaleforms/scaleformui/main";
import { SColor } from "elements/scolor";
import { Delay } from "helpers/loaders";
import SettingsCheckboxItem from "../items/settings-items/settings-checkbox-item";
import SettingsItem from "../items/settings-items/settings-item";
import SettingsListItem from "../items/settings-items/settings-list-item";
import SettingsProgressItem from "../items/settings-items/settings-progress-item";
import SettingsSeparatorItem from "../items/settings-items/settings-separator-item";
import SettingsSliderItem from "../items/settings-items/settings-slider-item";
import { SettingsStatsItem } from "../items/settings-items";
import { UIMenuItem } from "menus/UIMenu/items/uimenuitem";

type SettingItemType = SettingsItem | UIMenuItem;

export type SettingItemSelected = (item: SettingItemType, index: number) => void;
export type IndexChanged = (index: number) => void;

const isSettingsItem = (item: SettingItemType): item is SettingsItem => item instanceof SettingsItem;

const isJumpableItem = (item: SettingItemType | null | undefined): item is SettingsItem =>
    !!item && isSettingsItem(item) && item.Jumpable;

export class SettingsListColumn extends PM_Column {
    public OnIndexChanged?: IndexChanged;
    private _unfilteredItems: SettingItemType[] = [];
    private _unfilteredSelection: number = 0;
    public OnSettingItemActivated?: SettingItemSelected;
    public override Items: SettingItemType[] = [];

    constructor(label: string, maxItems: number = 16) {
        super(-1);
        this.Label = label;
        this.VisibleItems = maxItems;
        this.type = PLT_COLUMNS.SETTINGS;
    }

    public SetVisibleItems(maxItems: number): void {
        this.VisibleItems = maxItems;
        if (this.visible) {
            this.Populate();
            this.ShowColumn();
        }
    }

    public override AddItem(item: SettingItemType): void {
        this.AddSettings(item);
    }

    public AddSettings(item: SettingItemType): void {
        const it: SettingItemType = item;
        try {
            if (it.MainColor === SColor.HUD_Panel_light) {
                it.MainColor = SColor.HUD_Pause_bg;
            }
        } catch (e) {}
        item.ParentColumn = this;
        this.Items.push(item);
        if (this.visible && this.Items.length <= this.VisibleItems) {
            const idx = this.Items.length - 1;
            this.AddSlot(idx);
            try {
                item.Selected = idx === this.index;
            } catch (e) {}
        }
    }

    public RemoveItem(item: SettingItemType): void {
        const idx = this.Items.indexOf(item);
        if (idx >= 0) this.RemoveSlot(idx);
    }
    public RemoveItemAt(index: number): void {
        if (index >= this.Items.length) return;
        this.RemoveSlot(index);
    }

    public override RemoveSlot(idx: number): void {
        super.RemoveSlot(idx);
        AddTextEntry("PAUSEMENU_Current_Description", "");
    }

    public override ShowColumn(show: boolean = true): void {
        if (!this.visible) return;
        super.ShowColumn(show);
        this.InitColumnScroll(this.Items.length >= this.VisibleItems, 1, 0, 1);
        this.SetColumnScroll(
            this.Index + 1,
            this.Items.length,
            this.VisibleItems,
            this.CaptionLeft,
            this.Items.length < this.VisibleItems
        );
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
            "SET_COLUMN_FOCUS",
            this.position as number,
            this.Focused,
            false,
            false
        );
        const it = this.Items.length > 0 ? this.CurrentItem : null;
        if (isJumpableItem(it)) {
            try {
                this.CurrentItem.Selected = false;
            } catch (e) {}
            this.index++;
            if (this.index >= this.Items.length) this.index = 0;
            try {
                this.CurrentItem.Selected = true;
            } catch (e) {}
        }
    }

    public override Populate(): void {
        if (!this.visible) return;
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction("SET_DATA_SLOT_EMPTY", this.position as number);
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
            "SET_COLUMN_MAX_ITEMS",
            this.position as number,
            this.VisibleItems
        );
        for (let i = 0; i < this.Items.length; i++) this.SetDataSlot(i);
    }

    public override SetDataSlot(index: number): void {
        if (index >= this.Items.length) return;
        if (this.visible) this.SendItemToScaleform(index);
    }
    public override UpdateSlot(index: number): void {
        if (index >= this.Items.length) return;
        if (this.visible) this.SendItemToScaleform(index, true);
    }
    public override AddSlot(index: number): void {
        if (index >= this.Items.length) return;
        if (this.visible) this.SendItemToScaleform(index, false, false, true);
    }

    public AddItemAt(item: SettingItemType, idx: number): void {
        if (!this.visible) return;
        if (idx >= this.Items.length) return;
        this.Items.splice(idx, 0, item);
        if (this.visible) {
            this.SendItemToScaleform(idx, false, true, false);
            item.Selected = idx === this.index;
        }
    }

    public SendItemToScaleform(
        i: number,
        update: boolean = false,
        newItem: boolean = false,
        isSlot: boolean = false
    ): void {
        if (i >= this.Items.length) return;
        const item = this.Items[i];
        const settingsItem = isSettingsItem(item) ? item : null;
        let str = "SET_DATA_SLOT";
        if (update) str = "UPDATE_SLOT";
        if (newItem) str = "SET_DATA_SLOT_SPLICE";
        if (isSlot) str = "ADD_SLOT";

        const pause = ScaleformUI.Scaleforms._pauseMenu._pause;
        if (!pause) return;

        BeginScaleformMovieMethod(pause.handle, str);
        ScaleformMovieMethodAddParamInt(this.position as number);
        ScaleformMovieMethodAddParamInt(i);
        ScaleformMovieMethodAddParamInt(0);
        ScaleformMovieMethodAddParamInt(0);
        ScaleformMovieMethodAddParamInt(item._itemId ?? 0);

        if (item instanceof SettingsListItem) {
            AddTextEntry("SCUI_SETTCOL_RLBL", item.CurrentListItem ?? "");
            BeginTextCommandScaleformString("SCUI_SETTCOL_RLBL");
            EndTextCommandScaleformString_2();
        } else if (item instanceof SettingsCheckboxItem) {
            ScaleformMovieMethodAddParamBool(item.Checked);
        } else if (item instanceof SettingsSliderItem) {
            ScaleformMovieMethodAddParamInt(item.Value);
        } else if (item instanceof SettingsProgressItem) {
            ScaleformMovieMethodAddParamInt(item.Value);
        } else if (item instanceof SettingsStatsItem) {
            ScaleformMovieMethodAddParamInt(item.Value);
        } else {
            ScaleformMovieMethodAddParamInt(0);
        }

        ScaleformMovieMethodAddParamBool(item.Enabled ?? false);
        AddTextEntry("SCUI_SETTCOL_LBL", item.Label == null ? "" : `${item.Label}`);
        BeginTextCommandScaleformString("SCUI_SETTCOL_LBL");
        EndTextCommandScaleformString_2();
        ScaleformMovieMethodAddParamBool(item.BlinkDescription ?? false);

        // The C# implementation encodes many different branches; we simplify by attempting to follow it
        if (item instanceof SettingsListItem) {
            // list
            ScaleformMovieMethodAddParamInt(item.MainColor?.getArgbValue() ?? 0);
            ScaleformMovieMethodAddParamInt(item.HighlightColor?.getArgbValue() ?? 0);
            ScaleformMovieMethodAddParamInt(item.LeftBadge ?? 0);
            ScaleformMovieMethodAddParamPlayerNameString(item.customLeftBadge?.Key ?? "");
            ScaleformMovieMethodAddParamPlayerNameString(item.customLeftBadge?.Value ?? "");
            ScaleformMovieMethodAddParamPlayerNameString(item.labelFont?.fontName ?? "");
            ScaleformMovieMethodAddParamPlayerNameString(item.rightLabelFont?.fontName ?? "");
        } else if (item instanceof SettingsCheckboxItem) {
            // checkbox
            ScaleformMovieMethodAddParamInt(item.CheckBoxStyle ?? 0);
            ScaleformMovieMethodAddParamInt(item.MainColor?.getArgbValue() ?? 0);
            ScaleformMovieMethodAddParamInt(item.HighlightColor?.getArgbValue() ?? 0);
            ScaleformMovieMethodAddParamInt(item.LeftBadge ?? 0);
            ScaleformMovieMethodAddParamPlayerNameString(item.customLeftBadge?.Key ?? "");
            ScaleformMovieMethodAddParamPlayerNameString(item.customLeftBadge?.Value ?? "");
            ScaleformMovieMethodAddParamPlayerNameString(item.labelFont?.fontName ?? "");
        } else if (item instanceof SettingsSliderItem) {
            // slider
            ScaleformMovieMethodAddParamInt(item._max ?? 0);
            ScaleformMovieMethodAddParamInt(item._multiplier ?? 0);
            ScaleformMovieMethodAddParamInt(item.MainColor?.getArgbValue() ?? 0);
            ScaleformMovieMethodAddParamInt(item.HighlightColor?.getArgbValue() ?? 0);
            ScaleformMovieMethodAddParamInt(item.SliderColor?.getArgbValue() ?? 0);
            ScaleformMovieMethodAddParamBool(item._heritage ?? false);
            ScaleformMovieMethodAddParamInt(item.LeftBadge ?? 0);
            ScaleformMovieMethodAddParamPlayerNameString(item.customLeftBadge?.Key ?? "");
            ScaleformMovieMethodAddParamPlayerNameString(item.customLeftBadge?.Value ?? "");
            ScaleformMovieMethodAddParamPlayerNameString(item.labelFont?.fontName ?? "");
        } else if (item instanceof SettingsProgressItem) {
            // progress
            ScaleformMovieMethodAddParamInt(item._max ?? 0);
            ScaleformMovieMethodAddParamInt(item._multiplier ?? 0);
            ScaleformMovieMethodAddParamInt(item.MainColor?.getArgbValue() ?? 0);
            ScaleformMovieMethodAddParamInt(item.HighlightColor?.getArgbValue() ?? 0);
            ScaleformMovieMethodAddParamInt(item.SliderColor?.getArgbValue() ?? 0);
            ScaleformMovieMethodAddParamInt(item.LeftBadge ?? 0);
            ScaleformMovieMethodAddParamPlayerNameString(item.customLeftBadge?.Key ?? "");
            ScaleformMovieMethodAddParamPlayerNameString(item.customLeftBadge?.Value ?? "");
            ScaleformMovieMethodAddParamPlayerNameString(item.labelFont?.fontName ?? "");
        } else if (item instanceof SettingsStatsItem) {
            // stats
            ScaleformMovieMethodAddParamInt(item.Type ?? 0);
            ScaleformMovieMethodAddParamInt(item.SliderColor?.getArgbValue() ?? 0);
            ScaleformMovieMethodAddParamInt(item.MainColor?.getArgbValue() ?? 0);
            ScaleformMovieMethodAddParamInt(item.HighlightColor?.getArgbValue() ?? 0);
        } else if (item instanceof SettingsSeparatorItem) {
            // separator adaptation
            ScaleformMovieMethodAddParamBool(item.Jumpable ?? false);
            ScaleformMovieMethodAddParamInt(item.MainColor?.getArgbValue() ?? 0);
            ScaleformMovieMethodAddParamInt(item.HighlightColor?.getArgbValue() ?? 0);
            ScaleformMovieMethodAddParamPlayerNameString(item.labelFont?.fontName ?? "");
        } else {
            ScaleformMovieMethodAddParamInt(item.MainColor?.getArgbValue() ?? 0);
            ScaleformMovieMethodAddParamInt(item.HighlightColor?.getArgbValue() ?? 0);
            BeginTextCommandScaleformString("CELL_EMAIL_BCON");
            AddTextComponentScaleform(item.RightLabel ?? "");
            EndTextCommandScaleformString_2();
            ScaleformMovieMethodAddParamInt(item.LeftBadge ?? 0);
            ScaleformMovieMethodAddParamPlayerNameString(settingsItem?.customLeftBadge?.Key ?? "");
            ScaleformMovieMethodAddParamPlayerNameString(settingsItem?.customLeftBadge?.Value ?? "");
            ScaleformMovieMethodAddParamInt(item.RightBadge ?? 0);
            ScaleformMovieMethodAddParamPlayerNameString(settingsItem?.customRightBadge?.Key ?? "");
            ScaleformMovieMethodAddParamPlayerNameString(settingsItem?.customRightBadge?.Value ?? "");
            ScaleformMovieMethodAddParamPlayerNameString(item.labelFont?.fontName ?? "");
            ScaleformMovieMethodAddParamPlayerNameString(item.rightLabelFont?.fontName ?? "");
        }

        ScaleformMovieMethodAddParamBool(settingsItem?.KeepTextColorWhite ?? false);
        EndScaleformMovieMethod();
    }

    public UpdateDescription(): void {
        AddTextEntry("PAUSEMENU_Current_Description", this.CurrentItem?.Description ?? "");
        this.SendItemToScaleform(this.Index, true);
    }

    public override async GoUp(): Promise<void> {
        if (!this.visible) return;
        try {
            try {
                this.CurrentItem.Selected = false;
            } catch (e) {}
            do {
                this.index--;
                if (this.index < 0) this.index = this.Items.length - 1;
                await Delay(0);
            } while (isJumpableItem(this.CurrentItem));
            ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
                "SET_COLUMN_HIGHLIGHT",
                this.position as number,
                this.index,
                false,
                false
            );
            AddTextEntry("PAUSEMENU_Current_Description", this.CurrentItem?.Description ?? "");
            try {
                this.CurrentItem.Selected = true;
            } catch (e) {}
            this.IndexChangedEvent();
        } catch (e) {
            console.debug(e);
        }
    }

    public override async GoDown(): Promise<void> {
        if (!this.visible) return;
        try {
            try {
                this.CurrentItem.Selected = false;
            } catch (e) {}
            do {
                this.index++;
                if (this.index >= this.Items.length) this.index = 0;
                await Delay(0);
            } while (isJumpableItem(this.CurrentItem));
            ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
                "SET_COLUMN_HIGHLIGHT",
                this.position as number,
                this.index,
                false,
                false
            );
            AddTextEntry("PAUSEMENU_Current_Description", this.CurrentItem?.Description ?? "");
            try {
                this.CurrentItem.Selected = true;
            } catch (e) {}
            this.IndexChangedEvent();
        } catch (e) {
            console.debug(e);
        }
    }

    public override async GoLeft(): Promise<void> {
        if (!this.visible || this.Items.length === 0) return;
        if (!this.CurrentItem.Enabled) {
            PlaySoundFrontend(-1, "ERROR", "HUD_FRONTEND_DEFAULT_SOUNDSET", true);
            return;
        }
        const item = this.CurrentItem;
        if (item instanceof SettingsCheckboxItem) {
            item.Checked = !item.Checked;
            item.checkEmit();
        } else if (item instanceof SettingsSliderItem) {
            item.Value = item.Value - 1;
        } else if (item instanceof SettingsProgressItem) {
            item.Value = item.Value - 1;
        } else if (item instanceof SettingsStatsItem) {
            item.Value = item.Value - 1;
        } else if (item instanceof SettingsListItem) {
            item.Index = item.Index - 1;
            item.listChangedEmit();
        }
        PlaySoundFrontend(-1, "NAV_LEFT_RIGHT", "HUD_FRONTEND_DEFAULT_SOUNDSET", true);
    }

    public override async GoRight(): Promise<void> {
        if (!this.visible || this.Items.length === 0) return;
        if (!this.CurrentItem.Enabled) {
            PlaySoundFrontend(-1, "ERROR", "HUD_FRONTEND_DEFAULT_SOUNDSET", true);
            return;
        }
        const item = this.CurrentItem;
        if (item instanceof SettingsCheckboxItem) {
            item.Checked = !item.Checked;
            item.checkEmit();
        } else if (item instanceof SettingsSliderItem) {
            item.Value = item.Value + 1;
        } else if (item instanceof SettingsProgressItem) {
            item.Value = item.Value + 1;
        } else if (item instanceof SettingsStatsItem) {
            item.Value = item.Value + 1;
        } else if (item instanceof SettingsListItem) {
            item.Index = item.Index + 1;
            item.listChangedEmit();
        }
        PlaySoundFrontend(-1, "NAV_LEFT_RIGHT", "HUD_FRONTEND_DEFAULT_SOUNDSET", true);
    }

    public override Select(): void {
        if (!this.visible || this.Items.length === 0) return;
        const item = this.CurrentItem;
        if (!item.Enabled) {
            PlaySoundFrontend(-1, "ERROR", "HUD_FRONTEND_DEFAULT_SOUNDSET", true);
            return;
        }

        if (item instanceof SettingsCheckboxItem) {
            item.Checked = !item.Checked;
            item.checkEmit();
            this.SelectItem();
            return;
        }

        if (item instanceof SettingsListItem) {
            item.listSelectedEmit();
            item.activatedEmit();
            this.SelectItem();
            return;
        }

        item.activatedEmit();
        this.SelectItem();
    }

    public override async MouseScroll(dir: number): Promise<void> {
        if (!this.visible || this.Items.length === 0) return;
        try {
            try {
                this.CurrentItem.Selected = false;
            } catch (e) {}
            do {
                await Delay(0);
                this.index += dir;
                if (this.index < 0) this.index = this.Items.length - 1;
                if (this.index >= this.Items.length) this.index = 0;
            } while (isJumpableItem(this.CurrentItem));
            AddTextEntry("PAUSEMENU_Current_Description", this.CurrentItem.Description ?? "");
            try {
                this.CurrentItem.Selected = true;
            } catch (e) {}
            this.IndexChangedEvent();
        } catch (e) {
            console.debug(e);
        }
    }

    public get CurrentItem(): SettingItemType {
        return this.Items[this.Index] as SettingItemType;
    }

    public get CurrentSelection(): number {
        return this.index;
    }
    public set CurrentSelection(value: number) {
        try {
            this.CurrentItem.Selected = false;
        } catch (e) {}
        this.index = value;
        if (this.index < 0) this.index = this.Items.length - 1;
        else if (this.index >= this.Items.length) this.index = 0;
        try {
            this.CurrentItem.Selected = true;
        } catch (e) {}
        if (this.visible && this.Focused)
            ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
                "SET_COLUMN_HIGHLIGHT",
                this.position as number,
                this.index,
                true,
                true
            );
        this.IndexChangedEvent();
    }

    public UpdateItemLabels(index: number, leftLabel: string, rightLabel: string): void {
        if (this.visible) {
            if (index >= this.Items.length) return;
            const item = this.Items[index];
            item.Label = leftLabel;
            try {
                item.SetRightLabel(rightLabel);
            } catch (e) {}
        }
    }

    public UpdateItemBlinkDescription(index: number, blink: boolean): void {
        if (this.visible) {
            if (index >= this.Items.length) return;
            const item = this.Items[index];
            item.BlinkDescription = blink;
        }
    }
    public UpdateItemLabel(index: number, label: string): void {
        if (this.visible) {
            if (index >= this.Items.length) return;
            const item = this.Items[index];
            item.Label = label;
        }
    }
    public UpdateItemRightLabel(index: number, label: string): void {
        if (this.visible) {
            if (index >= this.Items.length) return;
            const item = this.Items[index];
            try {
                item.SetRightLabel(label);
            } catch (e) {}
        }
    }
    public UpdateItemLeftBadge(index: number, badge: number): void {
        if (this.visible) {
            if (index >= this.Items.length) return;
            const item = this.Items[index];
            try {
                item.SetLeftBadge(badge);
            } catch (e) {}
        }
    }
    public UpdateItemRightBadge(index: number, badge: number): void {
        if (this.visible) {
            if (index >= this.Items.length) return;
            const item = this.Items[index];
            try {
                item.SetRightBadge(badge);
            } catch (e) {}
        }
    }
    public EnableItem(index: number, enable: boolean): void {
        if (this.visible) {
            if (index >= this.Items.length) return;
            const item = this.Items[index];
            item.Enabled = enable;
        }
    }

    public SortSettings(compare: (a: SettingItemType, b: SettingItemType) => number): void {
        if (!this.visible) return;
        try {
            try {
                this.CurrentItem.Selected = false;
            } catch (e) {}
            this._unfilteredItems = [...this.Items];
            this._unfilteredSelection = this.CurrentSelection;
            this.Clear();
            const list = [...this._unfilteredItems];
            list.sort(compare);
            this.Items = [...list];
            if (this.visible) {
                this.Populate();
                this.ShowColumn();
            }
        } catch (ex) {
            this.ResetFilter();
            console.debug(ex);
        }
    }

    public FilterSettings(predicate: (it: SettingItemType) => boolean): void {
        if (!this.visible) return;
        if (!predicate) throw new Error("predicate is null");
        try {
            this._unfilteredItems = [...this.Items];
            this._unfilteredSelection = this.CurrentSelection;
            const filteredItems = this.Items.filter((it) => predicate(it));
            if (!filteredItems.length) {
                console.debug("ScaleformUI - No items were found, resetting the filter");
                this._unfilteredItems = [];
                this._unfilteredSelection = 0;
                return;
            }
            try {
                this.Items[this.CurrentSelection].Selected = false;
            } catch (e) {}
            this.Clear();
            this.Items = [...filteredItems];
            this.CurrentSelection = 0;
            if (this.visible) {
                this.Populate();
                this.ShowColumn();
            }
        } catch (ex) {
            this.ResetFilter();
            console.debug(ex);
            throw ex;
        }
    }

    public ResetFilter(): void {
        if (!this.visible) return;
        try {
            if (this._unfilteredItems != null && this._unfilteredItems.length > 0) {
                try {
                    this.CurrentItem.Selected = false;
                } catch (e) {}
                this.Clear();
                this.Items = [...this._unfilteredItems];
                this.CurrentSelection = this._unfilteredSelection;
                if (this.visible) {
                    this.Populate();
                    this.ShowColumn();
                }
            }
        } catch (ex) {
            console.debug(ex);
        }
    }

    public override ClearColumn(): void {
        super.ClearColumn();
        AddTextEntry("PAUSEMENU_Current_Description", "");
    }

    public SelectItem(): void {
        if (this.OnSettingItemActivated) this.OnSettingItemActivated(this.CurrentItem, this.CurrentSelection);
    }
    public IndexChangedEvent(): void {
        if (this.OnIndexChanged) this.OnIndexChanged(this.CurrentSelection);
    }
}

export default SettingsListColumn;
