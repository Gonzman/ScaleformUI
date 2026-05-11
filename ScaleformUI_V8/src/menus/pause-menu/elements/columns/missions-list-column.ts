import PM_Column, { PLT_COLUMNS } from "./pm-column";
import { ScaleformUI } from "scaleforms/scaleformui/main";
import { Delay } from "helpers/loaders";
import { MissionItem, PauseMenuItem } from "../items";

export type MissionItemSelected = (item: MissionItem, index: number) => void;
export type IndexChanged = (index: number) => void;

export class MissionsListColumn extends PM_Column {
    public OnIndexChanged?: IndexChanged;
    private _unfilteredItems: PauseMenuItem[] = [];
    private _unfilteredSelection: number = 0;
    public OnMissionItemActivated?: MissionItemSelected;

    constructor(label: string, maxItems: number = 16) {
        super(-1);
        this.Label = label;
        this.VisibleItems = maxItems;
        this.type = PLT_COLUMNS.MISSIONS;
    }

    public SetVisibleItems(maxItems: number): void {
        this.VisibleItems = maxItems;
        if (this.visible) {
            this.Populate();
            this.ShowColumn();
        }
    }

    public AddItem(item: PauseMenuItem): void {
        this.AddMissionItem(item as MissionItem);
    }
    public AddMissionItem(item: MissionItem): void {
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

    public SetDataSlot(index: number): void {
        this.SendItemToScaleform(index);
    }

    public UpdateSlot(index: number): void {
        if (index >= this.Items.length) return;
        if (this.visible) this.SendItemToScaleform(index, true);
    }

    public AddSlot(index: number): void {
        if (index >= this.Items.length) return;
        if (this.visible) this.SendItemToScaleform(index, false, false, true);
    }

    public AddItemAt(item: MissionItem, idx: number): void {
        if (idx >= this.Items.length) return;
        this.Items.splice(idx, 0, item);
        if (this.visible) {
            this.SendItemToScaleform(idx, false, true, false);
            item.Selected = idx === this.index;
        }
    }

    public RemoveItem(item: MissionItem): void {
        const idx = this.Items.indexOf(item);
        if (idx >= 0) this.RemoveSlot(idx);
    }

    public RemoveItemAt(index: number): void {
        if (index >= this.Items.length) return;
        this.RemoveSlot(index);
    }

    public Populate(): void {
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction("SET_DATA_SLOT_EMPTY", this.position as number);
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
            "SET_COLUMN_MAX_ITEMS",
            this.position as number,
            this.VisibleItems
        );
        for (let i = 0; i < this.Items.length; i++) {
            this.SetDataSlot(i);
        }
    }

    internalSendItemToScaleform(
        i: number,
        update: boolean = false,
        newItem: boolean = false,
        isSlot: boolean = false
    ): void {
        // helper if needed externally
        this.SendItemToScaleform(i, update, newItem, isSlot);
    }

    public SendItemToScaleform(
        i: number,
        update: boolean = false,
        newItem: boolean = false,
        isSlot: boolean = false
    ): void {
        if (i >= this.Items.length) return;
        const item: MissionItem = this.Items[i] as MissionItem;
        let str = "SET_DATA_SLOT";
        if (update) str = "UPDATE_SLOT";
        if (newItem) str = "SET_DATA_SLOT_SPLICE";
        if (isSlot) str = "ADD_SLOT";
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
            str,
            this.position as number,
            i,
            0,
            i,
            item.type,
            0,
            item.Enabled,
            item.Label,
            item.MainColor,
            item.HighlightColor,
            item.LeftIcon,
            item.RightIcon,
            item.LeftIconColor,
            item.RightIconColor,
            item.customLeftBadge?.Key,
            item.customLeftBadge?.Value,
            item.customRightBadge?.Key,
            item.customRightBadge?.Value,
            item.RightIconChecked,
            item.Jumpable
        );
    }

    public ShowColumn(show: boolean = true): void {
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
        if (this.Items.length >= 0) {
            const it = this.CurrentItem;
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
    }

    public async GoUp(): Promise<void> {
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
                "SET_COLUMN_HIGHLIGHT",
                this.position as number,
                this.index,
                false,
                false
            );
            this.SetColumnScroll(
                this.Index + 1,
                this.Items.length,
                this.VisibleItems,
                this.CaptionLeft,
                this.Items.length < this.VisibleItems
            );
            try {
                this.CurrentItem.Selected = true;
            } catch (e) {}
            this.IndexChangedEvent();
        } catch (e) {
            console.debug(e);
        }
    }

    public async GoDown(): Promise<void> {
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
                "SET_COLUMN_HIGHLIGHT",
                this.position as number,
                this.index,
                false,
                false
            );
            this.SetColumnScroll(
                this.Index + 1,
                this.Items.length,
                this.VisibleItems,
                this.CaptionLeft,
                this.Items.length < this.VisibleItems
            );
            try {
                this.CurrentItem.Selected = true;
            } catch (e) {}
            this.IndexChangedEvent();
        } catch (e) {
            console.debug(e);
        }
    }

    public Select(): void {
        try {
            this.CurrentItem.ActivateMission(this.Parent);
        } catch (e) {}
        this.SelectItem();
    }

    public GoBack(): void {
        this.Focused = false;
    }

    public async MouseScroll(dir: number): Promise<void> {
        try {
            try {
                this.CurrentItem.Selected = false;
            } catch (e) {}
            do {
                this.index += dir;
                if (this.index < 0) this.index = this.Items.length - 1;
                if (this.index >= this.Items.length) this.index = 0;
                await Delay(0);
            } while (this.CurrentItem && this.CurrentItem.Jumpable);
            try {
                this.CurrentItem.Selected = true;
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

        if (this.visible)
            ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
                "SET_COLUMN_HIGHLIGHT",
                this.position as number,
                this.index,
                true,
                true
            );
        this.IndexChangedEvent();
    }

    public RemoveItemById(id: number): void {
        this.Items.splice(id, 1);
        if (this.visible) {
            /* TODO: implement remove slot behavior */
        }
    }

    public SortMissions(compare: (a: MissionItem, b: MissionItem) => number): void {
        try {
            try {
                this.CurrentItem.Selected = false;
            } catch (e) {}
            this._unfilteredItems = [...this.Items];
            this._unfilteredSelection = this.CurrentSelection;
            this.Clear();
            const list: MissionItem[] = this._unfilteredItems as MissionItem[];
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

    public FilterMissions(predicate: (m: MissionItem) => boolean): void {
        if (!predicate) throw new Error("predicate is null");
        try {
            this._unfilteredItems = [...this.Items];
            this._unfilteredSelection = this.CurrentSelection;
            const filteredItems = this.Items.filter((it) => predicate(it as MissionItem));
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
        try {
            if (this._unfilteredItems && this._unfilteredItems.length > 0) {
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

    public SelectItem(): void {
        if (this.OnMissionItemActivated) this.OnMissionItemActivated(this.CurrentItem, this.CurrentSelection);
    }

    public IndexChangedEvent(): void {
        if (this.OnIndexChanged) this.OnIndexChanged(this.CurrentSelection);
    }
}

export default MissionsListColumn;
