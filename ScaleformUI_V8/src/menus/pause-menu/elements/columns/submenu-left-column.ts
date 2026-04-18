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

    public AddItem(item: TabLeftItem): void {
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
        this.Items[this.Index].Selected = false;
        this.index--;
        if (this.index < 0) this.index = this.Items.length - 1;
        this.Items[this.Index].Selected = true;
        this.populateCenterFromSelection();
    }

    public override GoDown(): void {
        if (!this.Items.length) return;
        this.Items[this.Index].Selected = false;
        this.index++;
        if (this.index >= this.Items.length) this.index = 0;
        this.Items[this.Index].Selected = true;
        this.populateCenterFromSelection();
    }

    private populateCenterFromSelection(): void {
        const tab: any = this.Parent;
        const center = tab?.CenterColumn;
        if (!center) return;
        center.Items = [];
        if (this.currentItemType !== LeftItemType.Empty) {
            const leftItem = this.Items[this.Index] as TabLeftItem;
            center.Items = [...leftItem.ItemList];
            center.Items.forEach((item: any) => item.ParentColumn = center);
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
