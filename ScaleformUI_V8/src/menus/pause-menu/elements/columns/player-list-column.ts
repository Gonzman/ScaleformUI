import PM_Column, { PLT_COLUMNS } from "./pm-column";
import { ScaleformUI } from "scaleforms/scaleformui/main";
import { LobbyItem } from "../items/lobby-item";
import { FriendItem, PauseMenuItem } from "../items";

export type PlayerItemSelected = (item: FriendItem, index: number) => void;
export type IndexChanged = (index: number) => void;

export class PlayerListColumn extends PM_Column {
    public OnIndexChanged?: IndexChanged;
    private _unfilteredItems: LobbyItem[] = [];
    private _unfilteredSelection: number = 0;
    public OnPlayerItemActivated?: PlayerItemSelected;
    public override Items: LobbyItem[] = [];

    constructor(label: string, maxItems: number = 16) {
        super(-1);
        this.Label = label;
        this.VisibleItems = maxItems;
        this.type = PLT_COLUMNS.PLAYERS;
    }

    public SetVisibleItems(maxItems: number): void {
        this.VisibleItems = maxItems;
        if (this.visible) {
            this.Populate();
            this.ShowColumn();
        }
    }

    public AddItem(item: PauseMenuItem): void {
        this.AddPlayer(item as FriendItem);
    }
    public AddPlayer(item: FriendItem): void {
        item.ParentColumn = this;
        this.Items.push(item);
        if (this.visible) {
            const idx = this.Items.length - 1;
            this.SendItemToScaleform(idx, false, false, this.Items.length <= this.VisibleItems);
            item.Selected = idx === 0;
        }
    }

    public SetDataSlot(index: number): void {
        this.SendItemToScaleform(index);
    }
    public UpdateSlot(index: number): void {
        this.SendItemToScaleform(index, true);
    }
    public AddSlot(index: number): void {
        this.SendItemToScaleform(index, false, false, true);
    }

    public RemoveItem(item: FriendItem): void {
        const idx = this.Items.indexOf(item);
        if (idx >= 0) this.RemoveSlot(idx);
    }
    public RemoveItemAt(index: number): void {
        if (index >= this.Items.length) return;
        this.RemoveSlot(index);
    }

    public RemoveSlot(index: number): void {
        if (index >= this.Items.length) return;
        try {
            this.Items[this.Index].Dispose?.();
        } catch (e) {}
        super.RemoveSlot(index);
    }

    public SendItemToScaleform(
        i: number,
        update: boolean = false,
        newItem: boolean = false,
        isSlot: boolean = false
    ): void {
        if (i >= this.Items.length) return;
        const fi = this.Items[i] as FriendItem;
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
            2,
            fi.Rank,
            true,
            fi.Label,
            fi.ItemColor,
            fi.ColoredTag,
            fi.iconL,
            fi.boolL,
            fi.iconR,
            fi.boolR,
            fi.Status,
            fi.StatusColor,
            fi.CrewTag?.TAG
        );
        if ((this.position as number) === 0 && i === this.index) fi.Panel?.UpdatePanel?.();
    }

    public Populate(): void {
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction("SET_DATA_SLOT_EMPTY", this.position as number);
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
            "SET_COLUMN_MAX_ITEMS",
            this.position as number,
            this.VisibleItems
        );
        for (let i = 0; i < this.Items.length; i++) this.SetDataSlot(i);
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
    }

    public ClearColumn(): void {
        super.ClearColumn();
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction("SET_DATA_SLOT_EMPTY", 3);
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction("SET_DATA_SLOT_EMPTY", 4);
    }

    public Clear(): void {
        if (this.visible) this.ClearColumn();
        this.Items = [];
    }

    public RemovePlayer(id: number): void {
        this.Items.splice(id, 1);
        if (this.visible) {
            /* TODO: Remove player from scaleform */
        }
    }

    public GoUp(): void {
        try {
            ClearPedInPauseMenu();
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
            try {
                this.CurrentItem.CreateClonedPed?.();
            } catch (e) {}
            this.IndexChangedEvent();
        } catch (e) {
            console.debug(e);
        }
    }

    public GoDown(): void {
        try {
            ClearPedInPauseMenu();
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
            try {
                this.CurrentItem.CreateClonedPed?.();
            } catch (e) {}
            try {
                this.CurrentItem.Panel?.UpdatePanel!(true);
            } catch (e) {}
            this.IndexChangedEvent();
        } catch (e) {
            console.debug(e);
        }
    }

    public Select(): void {
        this.SelectItem();
    }
    public GoBack(): void {
        this.Focused = false;
    }

    public MouseScroll(dir: number): void {
        try {
            ClearPedInPauseMenu();
            try {
                this.CurrentItem.Selected = false;
            } catch (e) {}
            this.index += dir;
            if (this.index < 0) this.index = this.Items.length - 1;
            if (this.index >= this.Items.length) this.index = 0;
            try {
                this.CurrentItem.Selected = true;
            } catch (e) {}
            try {
                this.CurrentItem.CreateClonedPed?.();
            } catch (e) {}
            this.IndexChangedEvent();
        } catch (e) {
            console.debug(e);
        }
    }

    public get CurrentItem(): FriendItem {
        return this.Items[this.CurrentSelection] as FriendItem;
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
        try {
            this.CurrentItem.CreateClonedPed?.();
        } catch (e) {}
        try {
            this.CurrentItem.Panel?.UpdatePanel!(true);
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

    public SortPlayers(compare: (a: LobbyItem, b: LobbyItem) => number): void {
        try {
            try {
                this.CurrentItem.Selected = false;
            } catch (e) {}
            this._unfilteredItems = [...this.Items];
            this._unfilteredSelection = this.CurrentSelection;
            this.Clear();
            const list: LobbyItem[] = this._unfilteredItems;
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

    public FilterPlayers(predicate: (it: LobbyItem) => boolean): void {
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
        if (this.OnPlayerItemActivated) this.OnPlayerItemActivated(this.CurrentItem, this.CurrentSelection);
    }
    public IndexChangedEvent(): void {
        if (this.OnIndexChanged) this.OnIndexChanged(this.CurrentSelection);
    }
}

export default PlayerListColumn;
