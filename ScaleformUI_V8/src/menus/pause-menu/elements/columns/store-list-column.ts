import { UIMenuItem } from "menus/UIMenu/items/uimenuitem";
import { StoreItem } from "../items";
import PM_Column, { PLT_COLUMNS } from "./pm-column";
import { ScaleformUI } from "scaleforms/scaleformui/main";

export type StoreItemSelected = (item: StoreItem, index: number) => void;
export type IndexChanged = (index: number) => void;

export class StoreListColumn extends PM_Column {
    public OnIndexChanged?: IndexChanged;
    private _unfilteredItems: StoreItem[] = [];
    private _unfilteredSelection: number = 0;
    public StoreItemActivated?: StoreItemSelected;

    public override Items: StoreItem[] = [];

    constructor(label: string) {
        super(-1);
        this.Label = label;
        this.VisibleItems = 4;
        this.type = PLT_COLUMNS.STORE;
    }

    public AddStoreItem(item: StoreItem): void {
        item.ParentColumn = this;
        this.Items.push(item);
        if (this.visible && this.Items.length <= this.VisibleItems) {
            const idx = this.Items.length - 1;
            this.AddSlot(idx);
            item.Selected = idx === this.index;
        }
    }

    public override SetDataSlot(index: number): void {
        this.SendItemToScaleform(index);
    }
    public override UpdateSlot(index: number): void {
        if (index >= this.Items.length) return;
        if (this.visible) this.SendItemToScaleform(index, true);
    }
    public override AddSlot(index: number): void {
        if (index >= this.Items.length) return;
        if (this.visible) this.SendItemToScaleform(index, false, false, true);
    }

    public RemoveItem(item: StoreItem): void {
        const idx = this.Items.indexOf(item);
        if (idx >= 0) this.RemoveSlot(idx);
    }
    public RemoveItemAt(index: number): void {
        if (index >= this.Items.length) return;
        this.RemoveSlot(index);
    }

    public override Populate(): void {
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction("SET_DATA_SLOT_EMPTY", this.position as number);
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
            "SET_COLUMN_MAX_ITEMS",
            this.position as number,
            this.VisibleItems
        );
        for (let i = 0; i < this.Items.length; i++) this.SetDataSlot(i);
    }

    public SendItemToScaleform(
        i: number,
        update: boolean = false,
        newItem: boolean = false,
        isSlot: boolean = false
    ): void {
        if (i >= this.Items.length) return;
        const item = this.Items[i];
        let str = "SET_DATA_SLOT";
        if (update) str = "UPDATE_SLOT";
        if (newItem) str = "ADD_SLOT";
        if (isSlot) str = "SET_SLOT_EMPTY";
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
            str,
            this.position as number,
            i,
            0,
            0,
            i,
            0,
            item.Enabled,
            item.textureDictionary,
            item.textureName,
            item.Description
        );
    }

    public override ShowColumn(show: boolean = true): void {
        super.ShowColumn(show);
        this.InitColumnScroll(true, 1, 0, 1);
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
    }

    public override Clear(): void {
        if (this.visible) this.ClearColumn();
        this.Items = [];
    }

    public override GoUp(): void {
        try {
            try {
                this.CurrentItem.Selected = false;
            } catch (e) {}
            this.index--;
            if (this.index < 0) this.index = this.Items.length - 1;
            ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
                "SET_COLUMN_HIGHLIGHT",
                this.position as number,
                this.index,
                false,
                false
            );
            try {
                this.CurrentItem.Selected = true;
            } catch (e) {}
            this.IndexChangedEvent();
        } catch (e) {
            console.debug(e);
        }
    }

    public override GoDown(): void {
        try {
            try {
                this.CurrentItem.Selected = false;
            } catch (e) {}
            this.index++;
            if (this.index >= this.Items.length) this.index = 0;
            ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
                "SET_COLUMN_HIGHLIGHT",
                this.position as number,
                this.index,
                false,
                false
            );
            try {
                this.CurrentItem.Selected = true;
            } catch (e) {}
            this.IndexChangedEvent();
        } catch (e) {
            console.debug(e);
        }
    }

    public override Select(): void {
        this.SelectItem();
    }
    public override GoBack(): void {
        this.Focused = false;
    }

    public override MouseScroll(dir: number): void {
        try {
            try {
                this.CurrentItem.Selected = false;
            } catch (e) {}
            this.index += dir;
            if (this.index < 0) this.index = this.Items.length - 1;
            if (this.index >= this.Items.length) this.index = 0;
            try {
                this.CurrentItem.Selected = true;
            } catch (e) {}
            this.IndexChangedEvent();
        } catch (e) {
            console.debug(e);
        }
    }

    public get CurrentItem(): StoreItem {
        return this.Items[this.CurrentSelection];
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
            /* TODO */
        }
    }

    public SortMissions(compare: (a: StoreItem, b: StoreItem) => number): void {
        try {
            try {
                this.CurrentItem.Selected = false;
            } catch (e) {}
            this._unfilteredItems = [...this.Items];
            this._unfilteredSelection = this.CurrentSelection;
            this.Clear();
            const list = this._unfilteredItems;
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

    public FilterMissions(predicate: (it: StoreItem) => boolean): void {
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
        if (this.StoreItemActivated) this.StoreItemActivated(this.CurrentItem, this.CurrentSelection);
    }
    public IndexChangedEvent(): void {
        if (this.OnIndexChanged) this.OnIndexChanged(this.CurrentSelection);
    }
}

export default StoreListColumn;
