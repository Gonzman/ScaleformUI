import { SColor } from "elements/scolor";
import { PM_Column, PM_COLUMNS, PLT_COLUMNS } from "../elements/columns/pm-column";
import { MissionsListColumn } from "../elements/columns/missions-list-column";
import { PlayerListColumn } from "../elements/columns/player-list-column";
import { SettingsListColumn } from "../elements/columns/settings-list-column";
import { StoreListColumn } from "../elements/columns/store-list-column";
import { MinimapPanel } from "../elements/panels/minimap-panel";
import { MissionDetailsPanel } from "../elements/panels/mission-details-panel";
import { ScaleformUI } from "scaleforms/scaleformui/main";
import BaseTab from "./base-tab";

export class PlayerListTab extends BaseTab {
    public ForceFirstSelectionOnFocus = false;
    private order: number[] = [0, 0, 0];

    constructor(name: string, color: SColor) {
        super(name, color);
        this._type = 2;
        this._identifier = "Page_Multi";
        this.Minimap = new MinimapPanel(this as any);
        this.Minimap.HidePedBlip = true;
    }

    public SetupLeftColumn(column: PM_Column): void {
        if (column instanceof MissionDetailsPanel)
            throw new Error("You cannot set the mission details column as the left column.");
        column.position = PM_COLUMNS.LEFT;
        this.LeftColumn = column;
        this.LeftColumn.Parent = this;
        this.order[0] = column.type;
    }

    public SetupCenterColumn(column: PM_Column): void {
        if (column instanceof MissionDetailsPanel)
            throw new Error("You cannot set the mission details column as the center column.");
        column.position = PM_COLUMNS.MIDDLE;
        this.CenterColumn = column;
        this.CenterColumn.Parent = this;
        this.order[1] = column.type;
    }

    public SetupRightColumn(column: PM_Column): void {
        column.position = PM_COLUMNS.RIGHT;
        this.RightColumn = column;
        this.RightColumn.Parent = this;
        this.order[2] = column.type;
    }

    public SwitchColumn(index: number | PM_COLUMNS): void {
        this.switchColumnInternal(index as PM_COLUMNS);
    }

    private switchColumnInternal(index: PM_COLUMNS): void {
        if ((index as number) > PM_COLUMNS.RIGHT || this.order[index as number] === PLT_COLUMNS.MISSION_DETAILS) return;
        let canHideShow = true;
        const col = this.GetColumnAtPosition(index);
        if (!col) {
            if ((index as number) < PM_COLUMNS.RIGHT) {
                this.switchColumnInternal(
                    ((index as number) + ((index as number) < this.CurrentColumnIndex ? -1 : 1)) as PM_COLUMNS
                );
            }
            return;
        }

        if (this.LeftColumn instanceof PlayerListColumn && this.LeftColumn.CurrentItem?.KeepPanelVisible)
            canHideShow = false;
        else if (this.CenterColumn instanceof PlayerListColumn && this.CenterColumn.CurrentItem?.KeepPanelVisible)
            canHideShow = false;

        if (canHideShow) {
            if (this.Parent?.Visible) {
                if (col instanceof PlayerListColumn) {
                    if (col.CurrentItem?.Panel != null && this.RightColumn) this.RightColumn.ColumnVisible = false;
                } else {
                    let show = true;
                    const beforeCol = this.GetColumnAtPosition((index as number) - 1);
                    const afterCol = this.GetColumnAtPosition((index as number) + 1);
                    if (beforeCol instanceof PlayerListColumn && !beforeCol.CurrentItem?.KeepPanelVisible) {
                        beforeCol.CurrentItem.Dispose?.();
                        show = false;
                    }
                    if (afterCol instanceof PlayerListColumn && !afterCol.CurrentItem?.KeepPanelVisible) {
                        afterCol.CurrentItem.Dispose?.();
                        show = false;
                    }
                    const right = this.GetColumnAtPosition(PM_COLUMNS.RIGHT);
                    if (right) right.ColumnVisible = !show;
                }
            }
        } else if (this.RightColumn) this.RightColumn.ColumnVisible = false;

        if (index === PM_COLUMNS.RIGHT && !canHideShow) return;

        this.CurrentColumnIndex = index as number;
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction("SET_MENU_LEVEL", this.CurrentColumnIndex + 1);
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction("MENU_SHIFT_DEPTH", 0, true, true);
        if (this.Parent) this.Parent.focusLevel = this.CurrentColumnIndex + 1;
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
            "SET_COLUMN_HIGHLIGHT",
            col.position as number,
            col.Index,
            true,
            true
        );
        if (col.Items[col.Index]) col.Items[col.Index].Selected = true;
    }

    public override StateChange(_state: number): void {
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction("MENU_STATE", this.order.join(""));
    }

    public override GoUp(): void {
        if (!this.Focused || !this.CurrentColumn) return;
        if (!this.consumeVerticalNavigation(-1)) return;
        this.CurrentColumn.GoUp();
        this.CurrentColumn.SetColumnScroll(
            this.CurrentColumn.Index + 1,
            this.CurrentColumn.Items.length,
            this.CurrentColumn.VisibleItems,
            "",
            this.CurrentColumn.Items.length < this.CurrentColumn.VisibleItems
        );
    }

    public override GoDown(): void {
        if (!this.Focused || !this.CurrentColumn) return;
        if (!this.consumeVerticalNavigation(1)) return;
        this.CurrentColumn.GoDown();
        this.CurrentColumn.SetColumnScroll(
            this.CurrentColumn.Index + 1,
            this.CurrentColumn.Items.length,
            this.CurrentColumn.VisibleItems,
            "",
            this.CurrentColumn.Items.length < this.CurrentColumn.VisibleItems
        );
    }

    public override MouseEvent(eventType: number, context: number, index: number): void {
        if (!this.Focused) return;
        if (eventType === 10 || eventType === 11) {
            this.GetColumnAtPosition(this.CurrentColumnIndex)?.MouseScroll(eventType === 10 ? -1 : 1);
            return;
        }
        if (eventType !== 5) return;

        if (context > 999) {
            const columnIndex = context - 1000;
            const col = this.GetColumnAtPosition(columnIndex);
            if (!col) return;
            if (index === 0) col.GoLeft();
            if (index === 1) col.GoRight();
            if (index === 2) col.GoUp();
            if (index === 3) col.GoDown();
            return;
        }

        const target =
            this.CurrentColumnIndex === context
                ? this.GetColumnAtPosition(this.CurrentColumnIndex)
                : this.GetColumnAtPosition(context);
        if (this.CurrentColumnIndex !== context) this.switchColumnInternal(context as PM_COLUMNS);
        this.applyMouseSelection(target, index);
    }

    public override GoLeft(): void {
        if (this.Focused) this.CurrentColumn?.GoLeft();
    }
    public override GoRight(): void {
        if (this.Focused) this.CurrentColumn?.GoRight();
    }
    public override Select(): void {
        if (this.Focused) this.CurrentColumn?.Select();
    }

    public override GoBack(): void {
        if (!this.Focused || this.CurrentColumnIndex <= 0) return;
        let col = this.GetColumnAtPosition(this.CurrentColumnIndex);
        if (col?.Items[col.Index]) col.Items[col.Index].Selected = false;
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
            "SET_COLUMN_FOCUS",
            this.CurrentColumnIndex,
            false,
            false,
            false
        );
        this.switchColumnInternal((this.CurrentColumnIndex - 1) as PM_COLUMNS);
        col = this.GetColumnAtPosition(this.CurrentColumnIndex);
        if (!col && this.CurrentColumnIndex > 0) return this.GoBack();
        if (col?.Items[col.Index]) col.Items[col.Index].Selected = true;
        if (col instanceof PlayerListColumn && col.CurrentItem?.Panel != null) {
            col.CurrentItem.CreateClonedPed?.();
            this.GetColumnAtPosition(PM_COLUMNS.RIGHT)!.ColumnVisible = false;
        } else {
            const right = this.GetColumnAtPosition(PM_COLUMNS.RIGHT);
            if (right) right.ColumnVisible = true;
        }
    }

    public override Populate(): void {
        this.Parent?._pause._pause?.callFunction("SET_MENU_LEVEL", 1);
        this.StateChange(0);
        this.Parent?._pause._pause?.callFunction("SET_MENU_LEVEL", 0);
        this.LeftColumn?.Populate();
        this.CenterColumn?.Populate();
        this.RightColumn?.Populate();
    }

    public override ShowColumns(): void {
        this.LeftColumn?.ShowColumn();
        this.CenterColumn?.ShowColumn();
        this.RightColumn?.ShowColumn();
    }

    public override Focus(): void {
        super.Focus();
        const col = this.GetColumnAtPosition(this.CurrentColumnIndex);
        if (!col) return;

        if (col instanceof SettingsListColumn) {
            col.Focused = true;
            col.CurrentItem.Selected = true;
            AddTextEntry("PAUSEMENU_Current_Description", col.CurrentItem.Description ?? "");
        } else if (col instanceof PlayerListColumn) {
            ClearPedInPauseMenu();
            col.Focused = true;
            col.CurrentItem.Selected = true;
            col.CurrentItem.CreateClonedPed?.();
            if (col.CurrentItem.Panel != null && this.RightColumn) {
                col.CurrentItem.Panel.UpdatePanel?.();
                this.RightColumn.ColumnVisible = false;
            } else if (this.RightColumn) this.RightColumn.ColumnVisible = true;
        } else if (col instanceof MissionsListColumn || col instanceof StoreListColumn) {
            col.Focused = true;
            col.CurrentItem.Selected = true;
        }
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
            "SET_COLUMN_HIGHLIGHT",
            col.position as number,
            col.Index,
            true,
            false
        );
    }

    public override UnFocus(): void {
        super.UnFocus();
        ClearPedInPauseMenu();
        if (this.LeftColumn?.Items[this.LeftColumn.Index]) {
            this.LeftColumn.Focused = false;
            this.LeftColumn.Items[this.LeftColumn.Index].Selected = false;
        }
        if (this.CenterColumn?.Items[this.CenterColumn.Index]) {
            this.CenterColumn.Focused = false;
            this.CenterColumn.Items[this.CenterColumn.Index].Selected = false;
        }
        if (this.RightColumn?.Items[this.RightColumn.Index]) {
            this.RightColumn.Focused = false;
            this.RightColumn.Items[this.RightColumn.Index].Selected = false;
            if (!this.RightColumn.ColumnVisible) this.RightColumn.ColumnVisible = true;
        }
        AddTextEntry("PAUSEMENU_Current_Description", "");
    }

    private applyMouseSelection(col: PM_Column | null, index: number): void {
        if (!col) return;
        if (index === col.Index) return col.Select();
        if (col instanceof SettingsListColumn) {
            col.CurrentItem.Selected = false;
            col.CurrentSelection = index;
            col.CurrentItem.Selected = true;
            AddTextEntry("PAUSEMENU_Current_Description", col.CurrentItem.Description ?? "");
            return;
        }
        if (col instanceof PlayerListColumn) {
            ClearPedInPauseMenu();
            col.CurrentItem.Selected = false;
            col.CurrentSelection = index;
            col.CurrentItem.Selected = true;
            col.CurrentItem.CreateClonedPed?.();
            return;
        }
        if (col instanceof MissionsListColumn || col instanceof StoreListColumn) {
            col.CurrentItem.Selected = false;
            col.CurrentSelection = index;
            col.CurrentItem.Selected = true;
        }
    }
}

export default PlayerListTab;
