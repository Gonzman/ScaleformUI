import { ScaleformUI } from "scaleforms/scaleformui/main";
import PM_Column, { PM_COLUMNS } from "./pm-column";
import { LeftItemType, TabLeftItem } from "../../items/tab-left-item";

export class SubmenuLeftColumn extends PM_Column {
    constructor(position: PM_COLUMNS) {
        super(position);
        this.VisibleItems = 10;
    }

    public get currentItemType(): LeftItemType {
        const item = this.Items[this.Index] as TabLeftItem | undefined;
        return item?.ItemType ?? LeftItemType.Empty;
    }

    public override AddItem(item: TabLeftItem): void {
        item.ItemIndex = this.Items.length;
        this.Items.push(item);
    }

    public override SetDataSlot(index: number): void {
        this.sendItem(index, "SET_DATA_SLOT");
    }

    public override UpdateSlot(index: number): void {
        this.sendItem(index, "UPDATE_SLOT");
    }

    public override GoUp(): void {
        if (!this.Items.length) return;
        this.Index = this.Index - 1;
        this.refreshCenterFromSelection();
        this.SetColumnScroll(
            this.Index + 1,
            this.Items.length,
            this.VisibleItems,
            "",
            this.Items.length < this.VisibleItems
        );
    }

    public override GoDown(): void {
        if (!this.Items.length) return;
        this.Index = this.Index + 1;
        this.refreshCenterFromSelection();
        this.SetColumnScroll(
            this.Index + 1,
            this.Items.length,
            this.VisibleItems,
            "",
            this.Items.length < this.VisibleItems
        );
    }

    private refreshCenterFromSelection(): void {
        const tab = this.Parent;
        const center = tab?.CenterColumn;
        if (!center) return;
        center.Items.length = 0;
        if (this.currentItemType !== LeftItemType.Empty) {
            const leftItem = this.Items[this.Index] as TabLeftItem;
            center.Items.push(...leftItem.ItemList);
            center.Items.forEach((item) => (item.ParentColumn = center));
        }
        if (tab?.Visible && tab?.Parent?.Visible) {
            ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction("MENU_STATE", this.currentItemType);
        }
    }

    private sendItem(index: number, method: "SET_DATA_SLOT" | "UPDATE_SLOT"): void {
        if (index >= this.Items.length) return;
        const item = this.Items[index] as TabLeftItem;
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
            method,
            this.position as number,
            index,
            0,
            0,
            0,
            0,
            item.Enabled,
            item.Label,
            item.MainColor.getArgbValue(),
            item.HighlightColor.getArgbValue(),
            item.internalItem.RightLabel,
            item.internalItem.LeftBadge,
            "",
            "",
            item.internalItem.RightBadge,
            "",
            "",
            item.labelFont?.fontName ?? "",
            item.rightLabelFont?.fontName ?? ""
        );
    }
}

export default SubmenuLeftColumn;
