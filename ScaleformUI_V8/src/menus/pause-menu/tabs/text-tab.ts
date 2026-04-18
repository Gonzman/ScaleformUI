import { SColor } from "elements/scolor";
import { PM_COLUMNS } from "../elements/columns/pm-column";
import { TextColumn } from "../elements/columns/text-column";
import PauseMenuItem from "../elements/items/pause-menu-item";
import BaseTab, { ScrollArrowsPosition, ScrollType } from "./base-tab";

export class TextTab extends BaseTab {
    public TextTitle: string;
    public WordWrap = 0;
    public BGTextureDict = "";
    public BGTextureName = "";
    public RightTextureDict = "";
    public RightTextureName = "";
    public override LeftColumn: TextColumn;

    constructor(name: string, title: string, color: SColor) {
        super(name, color);
        this.TextTitle = title;
        this.LeftColumn = new TextColumn(0);
        this._identifier = "Page_Simple";
        this._type = 0;
    }

    public AddItem(item: PauseMenuItem): void {
        this.LeftColumn.AddItem(item);
    }

    public override Populate(): void {
        for (let i = 0; i < this.LeftColumn.Items.length; i++) {
            this.SetDataSlot(this.LeftColumn.position, i);
        }
        if (this.BGTextureDict.trim()) {
            this.Parent?._pause._pause?.callFunction("CALL_CUSTOM_COLUMN_FUNCTION", this.LeftColumn.position as number, "SET_BACKGROUND", this.BGTextureDict, this.BGTextureName);
        }
        if (this.RightTextureDict.trim()) {
            this.Parent?._pause._pause?.callFunction("CALL_CUSTOM_COLUMN_FUNCTION", this.LeftColumn.position as number, "SET_RIGHT_PICTURE", this.RightTextureDict, this.RightTextureName);
        }
    }

    public override ShowColumns(): void {
        this.LeftColumn.ShowColumn();
        this.LeftColumn.InitColumnScroll(true, 3, ScrollType.UP_DOWN, ScrollArrowsPosition.CENTER);
        this.LeftColumn.SetColumnScroll(-1, -1, -1, "", this.LeftColumn.Items.length < this.LeftColumn.VisibleItems);
        this.LeftColumn.HighlightColumn(true, false, true);
    }

    public override Focus(): void {
        super.Focus();
        this.LeftColumn.HighlightColumn(true, false, true);
    }

    public override SetDataSlot(_slot: PM_COLUMNS, index: number): void {
        this.LeftColumn.SetDataSlot(index);
    }

    public UpdateBackground(txd: string, txn: string): void {
        this.BGTextureDict = txd;
        this.BGTextureName = txn;
        if (this.Parent?.Visible) {
            this.Parent._pause._pause?.callFunction("CALL_CUSTOM_COLUMN_FUNCTION", this.LeftColumn.position as number, "SET_BACKGROUND", txd, txn);
        }
    }

    public AddPicture(txd: string, txn: string): void {
        this.RightTextureDict = txd;
        this.RightTextureName = txn;
        if (this.Parent?.Visible) {
            this.Parent._pause._pause?.callFunction("CALL_CUSTOM_COLUMN_FUNCTION", this.LeftColumn.position as number, "SET_RIGHT_PICTURE", txd, txn);
        }
    }
}

export default TextTab;
