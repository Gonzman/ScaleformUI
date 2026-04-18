import PM_Column, { PLT_COLUMNS } from "./pm-column";
import { ScaleformUI } from "scaleforms/scaleformui/main";
import { ChangeDirection } from "../../../UIMenu/items/uimenudynamiclistitem";
import { SColor } from "elements/scolor";
import { Delay } from "helpers/loaders";

export type SettingItemSelected = (item: any, index: number) => void;
export type IndexChanged = (index: number) => void;

export class SettingsListColumn extends PM_Column {
    public OnIndexChanged?: IndexChanged;
    private _unfilteredItems: any[] = [];
    private _unfilteredSelection: number = 0;
    public OnSettingItemActivated?: SettingItemSelected;

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

    public AddItem(item: any): void {
        this.AddSettings(item);
    }

    public AddSettings(item: any): void {
        const it: any = item as any;
        try {
            if (it.mainColor === SColor.HUD_Panel_light) {
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

    public RemoveItem(item: any): void {
        const idx = this.Items.indexOf(item);
        if (idx >= 0) this.RemoveSlot(idx);
    }
    public RemoveItemAt(index: number): void {
        if (index >= this.Items.length) return;
        this.RemoveSlot(index);
    }

    public RemoveSlot(idx: number): void {
        super.RemoveSlot(idx);
        AddTextEntry("PAUSEMENU_Current_Description", "");
    }

    public ShowColumn(show: boolean = true): void {
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
        if (it && it.Jumpable) {
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

    public Populate(): void {
        if (!this.visible) return;
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction("SET_DATA_SLOT_EMPTY", this.position as number);
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
            "SET_COLUMN_MAX_ITEMS",
            this.position as number,
            this.VisibleItems
        );
        for (let i = 0; i < this.Items.length; i++) this.SetDataSlot(i);
    }

    public SetDataSlot(index: number): void {
        if (index >= this.Items.length) return;
        if (this.visible) this.SendItemToScaleform(index);
    }
    public UpdateSlot(index: number): void {
        if (index >= this.Items.length) return;
        if (this.visible) this.SendItemToScaleform(index, true);
    }
    public AddSlot(index: number): void {
        if (index >= this.Items.length) return;
        if (this.visible) this.SendItemToScaleform(index, false, false, true);
    }

    public AddItemAt(item: any, idx: number): void {
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
        const item: any = this.Items[i];
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
        ScaleformMovieMethodAddParamInt(item._itemId);

        switch (item._itemId) {
            case 1:
                const dit = item as any;
                AddTextEntry("SCUI_SETTCOL_RLBL", dit.CurrentListItem);
                BeginTextCommandScaleformString("SCUI_SETTCOL_RLBL");
                EndTextCommandScaleformString_2();
                break;
            case 2:
                const check = item as any;
                ScaleformMovieMethodAddParamBool(check.Checked);
                break;
            case 3:
                const prItem = item as any;
                ScaleformMovieMethodAddParamInt(prItem.Value);
                break;
            case 4:
                const slItem = item as any;
                ScaleformMovieMethodAddParamInt(slItem.Value);
                break;
            case 5:
                const statsItem = item as any;
                ScaleformMovieMethodAddParamInt(statsItem.Value);
                break;
            default:
                ScaleformMovieMethodAddParamInt(0);
                break;
        }

        ScaleformMovieMethodAddParamBool(item.Enabled);
        AddTextEntry("SCUI_SETTCOL_LBL", item.Label);
        BeginTextCommandScaleformString("SCUI_SETTCOL_LBL");
        EndTextCommandScaleformString_2();
        ScaleformMovieMethodAddParamBool(item.BlinkDescription);

        // The C# implementation encodes many different branches; we simplify by attempting to follow it
        if ((item as any)._itemId === 1) {
            // dynamic list
            ScaleformMovieMethodAddParamInt(item.MainColor?.ArgbValue ?? 0);
            ScaleformMovieMethodAddParamInt(item.HighlightColor?.ArgbValue ?? 0);
            ScaleformMovieMethodAddParamInt(item.LeftBadge ?? 0);
            ScaleformMovieMethodAddParamPlayerNameString(item.customLeftBadge?.Key ?? "");
            ScaleformMovieMethodAddParamPlayerNameString(item.customLeftBadge?.Value ?? "");
            ScaleformMovieMethodAddParamPlayerNameString(item.labelFont?.FontName ?? "");
            ScaleformMovieMethodAddParamPlayerNameString(item.rightLabelFont?.FontName ?? "");
        } else if ((item as any)._itemId === 2) {
            // checkbox
            ScaleformMovieMethodAddParamInt(item.Style ?? 0);
            ScaleformMovieMethodAddParamInt(item.MainColor?.ArgbValue ?? 0);
            ScaleformMovieMethodAddParamInt(item.HighlightColor?.ArgbValue ?? 0);
            ScaleformMovieMethodAddParamInt(item.LeftBadge ?? 0);
            ScaleformMovieMethodAddParamPlayerNameString(item.customLeftBadge?.Key ?? "");
            ScaleformMovieMethodAddParamPlayerNameString(item.customLeftBadge?.Value ?? "");
            ScaleformMovieMethodAddParamPlayerNameString(item.labelFont?.FontName ?? "");
        } else if ((item as any)._itemId === 3) {
            // slider
            ScaleformMovieMethodAddParamInt(item._max ?? 0);
            ScaleformMovieMethodAddParamInt(item._multiplier ?? 0);
            ScaleformMovieMethodAddParamInt(item.MainColor?.ArgbValue ?? 0);
            ScaleformMovieMethodAddParamInt(item.HighlightColor?.ArgbValue ?? 0);
            ScaleformMovieMethodAddParamInt(item.SliderColor?.ArgbValue ?? 0);
            ScaleformMovieMethodAddParamBool(item._heritage ?? false);
            ScaleformMovieMethodAddParamInt(item.LeftBadge ?? 0);
            ScaleformMovieMethodAddParamPlayerNameString(item.customLeftBadge?.Key ?? "");
            ScaleformMovieMethodAddParamPlayerNameString(item.customLeftBadge?.Value ?? "");
            ScaleformMovieMethodAddParamPlayerNameString(item.labelFont?.FontName ?? "");
        } else if ((item as any)._itemId === 4) {
            // progress
            ScaleformMovieMethodAddParamInt(item._max ?? 0);
            ScaleformMovieMethodAddParamInt(item._multiplier ?? 0);
            ScaleformMovieMethodAddParamInt(item.MainColor?.ArgbValue ?? 0);
            ScaleformMovieMethodAddParamInt(item.HighlightColor?.ArgbValue ?? 0);
            ScaleformMovieMethodAddParamInt(item.SliderColor?.ArgbValue ?? 0);
            ScaleformMovieMethodAddParamInt(item.LeftBadge ?? 0);
            ScaleformMovieMethodAddParamPlayerNameString(item.customLeftBadge?.Key ?? "");
            ScaleformMovieMethodAddParamPlayerNameString(item.customLeftBadge?.Value ?? "");
            ScaleformMovieMethodAddParamPlayerNameString(item.labelFont?.FontName ?? "");
        } else if ((item as any)._itemId === 5) {
            ScaleformMovieMethodAddParamInt(item.Type ?? 0);
            ScaleformMovieMethodAddParamInt(item.SliderColor?.ArgbValue ?? 0);
            ScaleformMovieMethodAddParamInt(item.MainColor?.ArgbValue ?? 0);
            ScaleformMovieMethodAddParamInt(item.HighlightColor?.ArgbValue ?? 0);
        } else if ((item as any) instanceof Object && (item as any)._itemId === 9999) {
            // separator adaptation
            ScaleformMovieMethodAddParamBool(item.Jumpable ?? false);
            ScaleformMovieMethodAddParamInt(item.MainColor?.ArgbValue ?? 0);
            ScaleformMovieMethodAddParamInt(item.HighlightColor?.ArgbValue ?? 0);
            ScaleformMovieMethodAddParamPlayerNameString(item.labelFont?.FontName ?? "");
        } else {
            ScaleformMovieMethodAddParamInt(item.MainColor?.ArgbValue ?? 0);
            ScaleformMovieMethodAddParamInt(item.HighlightColor?.ArgbValue ?? 0);
            BeginTextCommandScaleformString("CELL_EMAIL_BCON");
            AddTextComponentScaleform(item.RightLabel ?? "");
            EndTextCommandScaleformString_2();
            ScaleformMovieMethodAddParamInt(item.LeftBadge ?? 0);
            ScaleformMovieMethodAddParamPlayerNameString(item.customLeftBadge?.Key ?? "");
            ScaleformMovieMethodAddParamPlayerNameString(item.customLeftBadge?.Value ?? "");
            ScaleformMovieMethodAddParamInt(item.RightBadge ?? 0);
            ScaleformMovieMethodAddParamPlayerNameString(item.customRightBadge?.Key ?? "");
            ScaleformMovieMethodAddParamPlayerNameString(item.customRightBadge?.Value ?? "");
            ScaleformMovieMethodAddParamPlayerNameString(item.labelFont?.FontName ?? "");
            ScaleformMovieMethodAddParamPlayerNameString(item.rightLabelFont?.FontName ?? "");
        }

        ScaleformMovieMethodAddParamBool(item.KeepTextColorWhite ?? false);
        EndScaleformMovieMethod();
    }

    public UpdateDescription(): void {
        AddTextEntry("PAUSEMENU_Current_Description", this.CurrentItem?.Description ?? "");
        this.SendItemToScaleform(this.Index, true);
    }

    public async GoUp(): Promise<void> {
        if (!this.visible) return;
        try {
            try {
                this.CurrentItem.Selected = false;
            } catch (e) {}
            do {
                this.index--;
                if (this.index < 0) this.index = this.Items.length - 1;
                await Delay(0);
            } while (this.CurrentItem && this.CurrentItem.Jumpable);
            ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
                "SET_COLUMN_INPUT_EVENT",
                this.position as number,
                8
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

    public async GoDown(): Promise<void> {
        if (!this.visible) return;
        try {
            try {
                this.CurrentItem.Selected = false;
            } catch (e) {}
            do {
                this.index++;
                if (this.index >= this.Items.length) this.index = 0;
                await Delay(0);
            } while (this.CurrentItem && this.CurrentItem.Jumpable);
            ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
                "SET_COLUMN_INPUT_EVENT",
                this.position as number,
                9
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

    public async GoLeft(): Promise<void> {
        if (!this.visible) return;
        if (!this.CurrentItem.Enabled) {
            PlaySoundFrontend(-1, "ERROR", "HUD_FRONTEND_DEFAULT_SOUNDSET", true);
            return;
        }
        const item: any = this.CurrentItem;
        if (item._itemId === 2) {
            item.Checked = !item.Checked;
            item.checkEmit?.();
        } else if (item._itemId === 3) {
            item.Value--;
        } else if (item._itemId === 4) {
            item.Value--;
        } else if (item._itemId === 5) {
            item.Value--;
        } else if (typeof item.listChangedEmit === "function") {
            item.Index--;
            item.listChangedEmit();
        } else if (item.callback?.toDelegate) {
            try {
                const newItem = await item.callback.toDelegate()(item, ChangeDirection.Left);
                if (typeof newItem === "string") item.CurrentListItem = newItem;
            } catch (e) {
                console.debug(e);
            }
        }
        PlaySoundFrontend(-1, "NAV_LEFT_RIGHT", "HUD_FRONTEND_DEFAULT_SOUNDSET", true);
    }

    public async GoRight(): Promise<void> {
        if (!this.visible) return;
        if (!this.CurrentItem.Enabled) {
            PlaySoundFrontend(-1, "ERROR", "HUD_FRONTEND_DEFAULT_SOUNDSET", true);
            return;
        }
        const item: any = this.CurrentItem;
        if (item._itemId === 2) {
            item.Checked = !item.Checked;
            item.checkEmit?.();
        } else if (item._itemId === 3) {
            item.Value++;
        } else if (item._itemId === 4) {
            item.Value++;
        } else if (item._itemId === 5) {
            item.Value++;
        } else if (typeof item.listChangedEmit === "function") {
            item.Index++;
            item.listChangedEmit();
        } else if (item.callback?.toDelegate) {
            try {
                const newItem = await item.callback.toDelegate()(item, ChangeDirection.Right);
                if (typeof newItem === "string") item.CurrentListItem = newItem;
            } catch (e) {
                console.debug(e);
            }
        }
        PlaySoundFrontend(-1, "NAV_LEFT_RIGHT", "HUD_FRONTEND_DEFAULT_SOUNDSET", true);
    }

    public Select(): void {
        if (!this.visible) return;
        const item: any = this.CurrentItem;
        if (!item.Enabled) {
            PlaySoundFrontend(-1, "ERROR", "HUD_FRONTEND_DEFAULT_SOUNDSET", true);
            return;
        }
        if (item._itemId === 2) {
            item.Checked = !item.Checked;
            item.checkEmit?.();
            this.SelectItem();
            return;
        }
        if (typeof item.listSelectedEmit === "function") {
            item.listSelectedEmit();
            item.activatedEmit?.();
            this.SelectItem();
            return;
        }
        item.activatedEmit?.();
        this.SelectItem();
    }

    public async MouseScroll(dir: number): Promise<void> {
        if (!this.visible) return;
        try {
            try {
                this.CurrentItem._selected = false;
            } catch (e) {}
            do {
                await Delay(0);
                this.index += dir;
                if (this.index < 0) this.index = this.Items.length - 1;
                if (this.index >= this.Items.length) this.index = 0;
            } while (this.CurrentItem && this.CurrentItem.Jumpable);
            AddTextEntry("PAUSEMENU_Current_Description", this.CurrentItem.Description ?? "");
            try {
                this.CurrentItem._selected = true;
            } catch (e) {}
            this.IndexChangedEvent();
        } catch (e) {
            console.debug(e);
        }
    }

    public get CurrentItem(): any {
        return this.Items[this.Index];
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
            this.Items[index].Label = leftLabel;
            this.Items[index].SetRightLabel?.(rightLabel);
        }
    }

    public UpdateItemBlinkDescription(index: number, blink: boolean): void {
        if (this.visible) {
            if (index >= this.Items.length) return;
            this.Items[index].BlinkDescription = blink;
        }
    }
    public UpdateItemLabel(index: number, label: string): void {
        if (this.visible) {
            if (index >= this.Items.length) return;
            this.Items[index].Label = label;
        }
    }
    public UpdateItemRightLabel(index: number, label: string): void {
        if (this.visible) {
            if (index >= this.Items.length) return;
            this.Items[index].SetRightLabel?.(label);
        }
    }
    public UpdateItemLeftBadge(index: number, badge: any): void {
        if (this.visible) {
            if (index >= this.Items.length) return;
            this.Items[index].SetLeftBadge?.(badge);
        }
    }
    public UpdateItemRightBadge(index: number, badge: any): void {
        if (this.visible) {
            if (index >= this.Items.length) return;
            this.Items[index].SetRightBadge?.(badge);
        }
    }
    public EnableItem(index: number, enable: boolean): void {
        if (this.visible) {
            if (index >= this.Items.length) return;
            this.Items[index].Enabled = enable;
        }
    }

    public SortSettings(compare: (a: any, b: any) => number): void {
        if (!this.visible) return;
        try {
            try {
                this.CurrentItem.Selected = false;
            } catch (e) {}
            this._unfilteredItems = [...this.Items];
            this._unfilteredSelection = this.CurrentSelection;
            this.Clear();
            const list: any[] = this._unfilteredItems as any[];
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

    public FilterSettings(predicate: (it: any) => boolean): void {
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

    public ClearColumn(): void {
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
