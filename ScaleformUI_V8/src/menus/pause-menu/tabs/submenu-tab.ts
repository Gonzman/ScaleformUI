import { Delay } from "helpers/loaders";
import { SColor } from "elements/scolor";
import { PM_COLUMNS } from "../elements/columns/pm-column";
import { SubmenuCentralColumn } from "../elements/columns/submenu-central-column";
import { SubmenuLeftColumn } from "../elements/columns/submenu-left-column";
import { SettingsItem } from "../elements/items/settings-items/settings-item";
import { LeftItemType, TabLeftItem } from "../items/tab-left-item";
import BaseTab, { ScrollArrowsPosition, ScrollType } from "./base-tab";
import { PauseMenuItem } from "../elements/items";

export class SubmenuTab extends BaseTab {
    public override LeftColumn: SubmenuLeftColumn;
    public override CenterColumn: SubmenuCentralColumn;

    constructor(name: string, color: SColor) {
        super(name, color);
        this._type = 1;
        this._identifier = "Page_Info";
        this.LeftColumn = new SubmenuLeftColumn(PM_COLUMNS.LEFT);
        this.LeftColumn.Parent = this;
        this.CenterColumn = new SubmenuCentralColumn(PM_COLUMNS.MIDDLE);
        this.CenterColumn.Parent = this;
    }

    public get currentItemType(): LeftItemType {
        return this.LeftColumn.currentItemType;
    }

    public SwitchColumn(index: number | PM_COLUMNS): void {
        this.switchColumnInternal(index as PM_COLUMNS);
    }

    public AddLeftItem(item: TabLeftItem): void {
        item.ParentTab = this;
        this.LeftColumn.AddItem(item);
    }

    public override StateChange(state: number): void {
        this.Parent?._pause._pause?.callFunction("MENU_STATE", this.currentItemType);
        this.CenterColumn.Items = [];
        if (state !== 0)
            this.CenterColumn.Items = [...(this.LeftColumn.Items[this.LeftColumn.Index] as TabLeftItem).ItemList];
        this.CenterColumn.Items.forEach((item) => (item.ParentColumn = this.CenterColumn));
        this.syncCenterSelection(true);
        switch (this.currentItemType) {
            case LeftItemType.Statistics:
                this.CenterColumn.VisibleItems = 16;
                this.CenterColumn.InitColumnScroll(true, 2, ScrollType.UP_DOWN, ScrollArrowsPosition.CENTER);
                this.CenterColumn.SetColumnScroll(
                    -1,
                    -1,
                    -1,
                    "",
                    this.CenterColumn.Items.length < this.CenterColumn.VisibleItems
                );
                break;
            case LeftItemType.Settings:
                this.CenterColumn.VisibleItems = 16;
                this.CenterColumn.InitColumnScroll(true, 2, ScrollType.ALL, ScrollArrowsPosition.RIGHT);
                this.CenterColumn.SetColumnScroll(
                    this.CenterColumn.Index + 1,
                    this.CenterColumn.Items.length,
                    this.CenterColumn.VisibleItems,
                    "",
                    this.CenterColumn.Items.length < this.CenterColumn.VisibleItems
                );
                break;
            case LeftItemType.Info:
                this.CenterColumn.VisibleItems = 10;
                this.CenterColumn.InitColumnScroll(true, 2, ScrollType.UP_DOWN, ScrollArrowsPosition.CENTER);
                this.CenterColumn.SetColumnScroll(
                    -1,
                    -1,
                    -1,
                    "",
                    this.CenterColumn.Items.length < this.CenterColumn.VisibleItems
                );
                break;
            case LeftItemType.Keymap:
                this.CenterColumn.VisibleItems = 15;
                this.CenterColumn.InitColumnScroll(true, 2, ScrollType.UP_DOWN, ScrollArrowsPosition.CENTER);
                this.CenterColumn.SetColumnScroll(
                    -1,
                    -1,
                    -1,
                    "",
                    this.CenterColumn.Items.length < this.CenterColumn.VisibleItems
                );
                break;
            default:
                this.CenterColumn.VisibleItems = 0;
                break;
        }
    }

    public override GoUp(): void {
        if (!this.Focused) return;
        if (!this.consumeVerticalNavigation(-1)) return;
        if (this.currentItemType !== LeftItemType.Settings && this.CurrentColumnIndex !== 0) {
            this.CurrentColumnIndex = 0;
            if (this.Parent && this.Parent.FocusLevel > 1) this.Parent.FocusLevel = 1;
        }
        if (this.CurrentColumnIndex === 0) {
            this.LeftColumn.GoUp();
            this.CenterColumn.currentColumnType = this.currentItemType;
            this.StateChange(this.currentItemType);
            this.Refresh(false);
            return;
        }
        if (this.CurrentColumnIndex === 1) {
            this.CenterColumn.GoUp();
            if (this.CenterColumn.currentColumnType === LeftItemType.Settings) {
                this.CenterColumn.SetColumnScroll(
                    this.CenterColumn.Index + 1,
                    this.CenterColumn.Items.length,
                    this.CenterColumn.VisibleItems,
                    "",
                    this.CenterColumn.Items.length < this.CenterColumn.VisibleItems
                );
            }
        }
    }

    public override GoDown(): void {
        if (!this.Focused) return;
        if (!this.consumeVerticalNavigation(1)) return;
        if (this.currentItemType !== LeftItemType.Settings && this.CurrentColumnIndex !== 0) {
            this.CurrentColumnIndex = 0;
            if (this.Parent && this.Parent.FocusLevel > 1) this.Parent.FocusLevel = 1;
        }
        if (this.CurrentColumnIndex === 0) {
            this.LeftColumn.GoDown();
            this.CenterColumn.currentColumnType = this.currentItemType;
            this.StateChange(this.currentItemType);
            this.Refresh(false);
            return;
        }
        if (this.CurrentColumnIndex === 1) {
            this.CenterColumn.GoDown();
            if (this.CenterColumn.currentColumnType === LeftItemType.Settings) {
                this.CenterColumn.SetColumnScroll(
                    this.CenterColumn.Index + 1,
                    this.CenterColumn.Items.length,
                    this.CenterColumn.VisibleItems,
                    "",
                    this.CenterColumn.Items.length < this.CenterColumn.VisibleItems
                );
            }
        }
    }

    public override async MouseEvent(eventType: number, context: number, index: number): Promise<void> {
        if (!this.Focused) return;
        if (eventType === 10 || eventType === 11) return this.MouseScroll(eventType === 10 ? -1 : 1);
        if (eventType !== 5) return;

        if (this.CurrentColumnIndex === context) {
            if (this.CurrentColumn?.Index !== index) {
                if (this.CurrentColumnIndex === 0) {
                    this.setSelectedSafe(this.LeftColumn.Items, this.LeftColumn.Index, false);
                    this.LeftColumn.Index = this.clampIndex(this.LeftColumn.Items, index);
                    this.setSelectedSafe(this.LeftColumn.Items, this.LeftColumn.Index, true);
                    this.StateChange(this.currentItemType);
                    this.Refresh(false);
                } else {
                    this.setSelectedSafe(this.CenterColumn.Items, this.CenterColumn.Index, false);
                    this.CenterColumn.Index = this.clampIndex(this.CenterColumn.Items, index);
                    this.setSelectedSafe(this.CenterColumn.Items, this.CenterColumn.Index, true);
                }
                return;
            }

            if (this.CurrentColumnIndex === 0 && this.currentItemType === LeftItemType.Settings) {
                const leftItem = this.LeftColumn.Items[this.LeftColumn.Index] as TabLeftItem;
                if (!leftItem.Enabled) {
                    PlaySoundFrontend(-1, "ERROR", "HUD_FRONTEND_DEFAULT_SOUNDSET", true);
                    return;
                }
                this.CurrentColumnIndex++;
                if (!leftItem.ItemList.every((x) => !x.Enabled)) {
                    while (!(this.CenterColumn.Items[this.CenterColumn.Index] as SettingsItem).Enabled) {
                        await Delay(0);
                        this.CenterColumn.Index++;
                    }
                }
                if (this.Parent) {
                    this.Parent.FocusLevel++;
                    this.Parent.SendColumnItemSelect(this.LeftColumn);
                }
                return;
            }

            if (this.CurrentColumnIndex === 1) {
                this.CenterColumn.Select();
                this.Parent?.SendColumnItemSelect(this.CenterColumn);
            }
            return;
        }

        if (context > this.CurrentColumnIndex) {
            this.Parent && this.Parent.FocusLevel++;
            this.CurrentColumnIndex++;
        } else if (context < this.CurrentColumnIndex) {
            this.Parent && this.Parent.FocusLevel--;
            this.CurrentColumnIndex--;
        }

        if (this.CurrentColumnIndex === 0) {
            this.setSelectedSafe(this.LeftColumn.Items, this.LeftColumn.Index, false);
            this.LeftColumn.Index = this.clampIndex(this.LeftColumn.Items, index);
            this.setSelectedSafe(this.LeftColumn.Items, this.LeftColumn.Index, true);
            this.StateChange(this.currentItemType);
            this.Refresh(false);
        } else {
            this.setSelectedSafe(this.CenterColumn.Items, this.CenterColumn.Index, false);
            this.CenterColumn.Index = this.clampIndex(this.CenterColumn.Items, index);
            this.setSelectedSafe(this.CenterColumn.Items, this.CenterColumn.Index, true);
        }
    }

    public MouseScroll(dir: number): void {
        const hoveredColumn = this.Parent?.hoveredColumn ?? 0;
        if (this.CurrentColumnIndex === 0) {
            if (
                hoveredColumn === 1 &&
                (this.currentItemType === LeftItemType.Info || this.currentItemType === LeftItemType.Statistics)
            ) {
                PlaySoundFrontend(-1, "NAV_UP_DOWN", "HUD_FRONTEND_DEFAULT_SOUNDSET", true);
                return;
            }
            if (dir === -1) this.LeftColumn.GoUp();
            else this.LeftColumn.GoDown();
            this.CenterColumn.currentColumnType = this.currentItemType;
            this.StateChange(this.currentItemType);
            this.Refresh(false);
            return;
        }
        if (this.CurrentColumnIndex === 1) {
            if (this.currentItemType === LeftItemType.Settings) {
                if (dir === -1) this.CenterColumn.GoUp();
                else this.CenterColumn.GoDown();
            }
            if (this.CenterColumn.currentColumnType === LeftItemType.Settings) {
                this.CenterColumn.SetColumnScroll(
                    this.CenterColumn.Index + 1,
                    this.CenterColumn.Items.length,
                    this.CenterColumn.VisibleItems,
                    "",
                    this.CenterColumn.Items.length < this.CenterColumn.VisibleItems
                );
            }
            PlaySoundFrontend(-1, "NAV_UP_DOWN", "HUD_FRONTEND_DEFAULT_SOUNDSET", true);
        }
    }

    public override GoLeft(): void {
        if (!this.Focused) return;
        this.Parent?._pause._pause?.callFunction("SET_COLUMN_INPUT_EVENT", this.CurrentColumnIndex, 10);
        if (this.CurrentColumnIndex === 1) this.CenterColumn.GoLeft();
    }

    public override GoRight(): void {
        if (!this.Focused) return;
        this.Parent?._pause._pause?.callFunction("SET_COLUMN_INPUT_EVENT", this.CurrentColumnIndex, 11);
        if (this.CurrentColumnIndex === 1) this.CenterColumn.GoRight();
    }

    public override async Select(): Promise<void> {
        if (!this.Focused) return;
        if (this.CurrentColumnIndex === 0) {
            if (this.currentItemType !== LeftItemType.Settings) return;
            const leftItem = this.LeftColumn.Items[this.LeftColumn.Index] as TabLeftItem;
            if (!leftItem.Enabled) {
                PlaySoundFrontend(-1, "ERROR", "HUD_FRONTEND_DEFAULT_SOUNDSET", true);
                return;
            }
            this.CurrentColumnIndex++;
            if (!leftItem.ItemList.every((x) => !x.Enabled)) {
                while (!(this.CenterColumn.Items[this.CenterColumn.Index] as SettingsItem).Enabled) {
                    await Delay(0);
                    this.CenterColumn.Index++;
                }
            }
            if (this.Parent) {
                this.Parent.FocusLevel++;
                this.Parent.SendColumnItemSelect(this.LeftColumn);
            }
            return;
        }
        if (this.CurrentColumnIndex === 1) {
            this.CenterColumn.Select();
            this.Parent?.SendColumnItemSelect(this.CenterColumn);
        }
    }

    public override GoBack(): void {
        if (!this.Focused) return;
        if (this.CurrentColumnIndex === 1) {
            this.CurrentColumnIndex--;
            if (this.Parent) this.Parent.FocusLevel--;
        }
    }

    public override Focus(): void {
        super.Focus();
        this.CurrentColumnIndex = 0;
        if (this.Parent && this.Parent.FocusLevel > 1) this.Parent.FocusLevel = 1;
        this.LeftColumn.Index = this.LeftColumn.index;
        this.LeftColumn.HighlightColumn(true, false, true);
        this.setSelectedSafe(this.LeftColumn.Items, this.LeftColumn.Index, true);
        this.Refresh(true);
    }

    public override UnFocus(): void {
        super.UnFocus();
        this.setSelectedSafe(this.LeftColumn.Items, this.LeftColumn.Index, false);
    }

    public override Refresh(highlightOldIndex: boolean): void {
        this.Parent?._pause._pause?.callFunction("ALLOW_CLICK_FROM_COLUMN", 0, true);
        this.Parent?._pause._pause?.callFunction("SET_DATA_SLOT_EMPTY", 1);
        for (let i = 0; i < this.CenterColumn.Items.length; i++) this.SetDataSlot(this.CenterColumn.position, i);

        if (this.currentItemType === LeftItemType.Keymap) {
            const selected = this.LeftColumn.Items[this.LeftColumn.Index] as TabLeftItem;
            this.Parent?._pause._pause?.callFunction(
                "SET_COLUMN_TITLE",
                1,
                selected.RightTitle,
                selected.KeymapRightLabel_1,
                selected.KeymapRightLabel_2
            );
            this.Parent?._pause._pause?.callFunction("SET_COLUMN_FOCUS", 1, false, false, false);
        } else if (this.currentItemType === LeftItemType.Settings && highlightOldIndex) {
            this.Parent?._pause._pause?.callFunction("SET_COLUMN_HIGHLIGHT", 1, this.CenterColumn.Index, true, true);
        }
        this.CenterColumn.ShowColumn();
    }

    public override Populate(): void {
        const item = this.LeftColumn.Items[this.LeftColumn.Index] as TabLeftItem;
        item.Selected = true;
        this.CenterColumn.Items = [];
        if (this.currentItemType !== LeftItemType.Empty) {
            this.CenterColumn.Items = [...item.ItemList];
            this.CenterColumn.Items.forEach((it) => (it.ParentColumn = this.CenterColumn));
        }
        this.Parent?._pause._pause?.callFunction("SET_MENU_LEVEL", 1);
        this.Parent?._pause._pause?.callFunction("MENU_STATE", this.currentItemType);
        this.Parent?._pause._pause?.callFunction("SET_MENU_LEVEL", 0);
        for (let i = 0; i < this.LeftColumn.Items.length; i++) this.SetDataSlot(this.LeftColumn.position, i);
        for (let i = 0; i < this.CenterColumn.Items.length; i++) this.SetDataSlot(this.CenterColumn.position, i);
    }

    public override ShowColumns(): void {
        this.LeftColumn.ShowColumn();
        this.CenterColumn.ShowColumn();
        if (this.currentItemType === LeftItemType.Settings)
            this.Parent?._pause._pause?.callFunction("SET_COLUMN_STATE", 0);
        this.Parent?._pause._pause?.callFunction("SET_COLUMN_FOCUS", 0, false, false, false);
        this.LeftColumn.InitColumnScroll(true, 1, ScrollType.UP_DOWN, ScrollArrowsPosition.RIGHT);
        this.LeftColumn.SetColumnScroll(
            this.LeftColumn.Index,
            this.LeftColumn.Items.length,
            16,
            "",
            this.LeftColumn.Items.length < 16
        );
    }

    public override SetDataSlot(slot: PM_COLUMNS, index: number): void {
        if (slot === PM_COLUMNS.LEFT) this.LeftColumn.SetDataSlot(index);
        else if (slot === PM_COLUMNS.MIDDLE) this.CenterColumn.SetDataSlot(index);
    }

    public override UpdateSlot(slot: PM_COLUMNS, index: number): void {
        if (slot === PM_COLUMNS.LEFT) this.LeftColumn.UpdateSlot(index);
        else if (slot === PM_COLUMNS.MIDDLE) this.CenterColumn.UpdateSlot(index);
    }

    private switchColumnInternal(index: PM_COLUMNS): void {
        const col = this.GetColumnAtPosition(index);
        if (!col) return;
        this.CurrentColumnIndex = index as number;
        if (this.Parent?.Visible) {
            this.Parent._pause._pause?.callFunction("SET_MENU_LEVEL", this.CurrentColumnIndex + 1);
            this.Parent._pause._pause?.callFunction("MENU_SHIFT_DEPTH", 0, true, true);
            this.Parent.focusLevel = this.CurrentColumnIndex + 1;
            this.Parent._pause._pause?.callFunction(
                "SET_COLUMN_HIGHLIGHT",
                col.position as number,
                col.Index,
                true,
                true
            );
            this.setSelectedSafe(col.Items, col.Index, true);
        }
    }

    private clampIndex(items: PauseMenuItem[], index: number): number {
        if (!items.length) return 0;
        if (index < 0) return 0;
        if (index >= items.length) return items.length - 1;
        return index;
    }

    private setSelectedSafe(items: PauseMenuItem[], index: number, selected: boolean): void {
        const item = items[index];
        if (item) {
            item.Selected = selected;
        }
    }

    private syncCenterSelection(resetIndex: boolean): void {
        if (!this.CenterColumn.Items.length) {
            this.CenterColumn.Index = 0;
            return;
        }

        if (resetIndex) {
            this.CenterColumn.Index = 0;
        } else {
            this.CenterColumn.Index = this.clampIndex(this.CenterColumn.Items, this.CenterColumn.Index);
        }

        this.CenterColumn.Items.forEach((item, idx) => {
            item.Selected = idx === this.CenterColumn.Index;
        });
    }
}

export default SubmenuTab;
