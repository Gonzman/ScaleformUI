import { replaceRstarColorsWith } from "elements/color";
import { ItemFont } from "elements/ItemFont";
import { ScaleformFonts } from "elements/scaleform-fonts";
import { SColor } from "elements/scolor";
import { UIMenuItem } from "menus/UIMenu/items/uimenuitem";
import PauseMenuItem from "../elements/items/pause-menu-item";
import { PM_COLUMNS } from "../elements/columns/pm-column";
import type { SubmenuTab } from "../tabs/submenu-tab";

export enum LeftItemType {
    Empty,
    Info,
    Statistics,
    Settings,
    Keymap
}

export enum LeftItemBGType {
    Full,
    Masked,
    Resized
}

export type ActivatedEvent = (item: TabLeftItem, index: number) => void;

export class TabLeftItem extends PauseMenuItem {
    public internalItem: UIMenuItem;
    private enabled = true;
    private mainColor: SColor = SColor.HUD_Pause_bg;
    private highlightColor: SColor = SColor.HUD_White;
    private textTitle = "";
    private label = "";
    public formatLeftLabel = "";
    private keymapRightLabel1 = "";
    private keymapRightLabel2 = "";
    public TextureDict = "";
    public TextureName = "";
    public LeftItemBGType = LeftItemBGType.Full;
    public labelFont: ItemFont = ScaleformFonts.CHALET_LONDON_NINETEENSIXTY;
    public rightLabelFont: ItemFont = ScaleformFonts.CHALET_LONDON_NINETEENSIXTY;
    public ItemType: LeftItemType;
    public Hovered = false;
    public ItemIndex = 0;
    public ItemList: PauseMenuItem[] = [];
    public ParentTab: SubmenuTab | null = null;
    private activatedHandlers: ActivatedEvent[] = [];

    constructor(
        label: string,
        type: LeftItemType,
        mainColor: SColor = SColor.HUD_Pause_bg,
        highlightColor: SColor = SColor.HUD_White,
        labelFont?: ItemFont
    ) {
        super(label);
        this.Label = label;
        this.ItemType = type;
        this.MainColor = mainColor;
        this.HighlightColor = highlightColor;
        if (labelFont) this.labelFont = labelFont;
        this.internalItem = new UIMenuItem(
            label,
            "",
            SColor.HUD_Pause_bg,
            SColor.HUD_White,
            undefined,
            undefined,
            this.labelFont
        );
    }

    public override get Label(): string {
        return this.label;
    }

    public override set Label(value: string) {
        this.label = value;
        this.formatLeftLabel = value.startsWith("~") ? value : `~s~${value}`;
        if (!this.Enabled) {
            this.formatLeftLabel = replaceRstarColorsWith(this.formatLeftLabel, "~c~");
        } else if (this.Selected) {
            this.formatLeftLabel = this.formatLeftLabel.replace(/~w~|~s~/g, "~l~");
        } else {
            this.formatLeftLabel = this.formatLeftLabel.replace(/~l~/g, "~s~");
        }
    }

    public get MainColor(): SColor {
        return this.mainColor;
    }
    public set MainColor(value: SColor) {
        this.mainColor = value;
    }
    public get HighlightColor(): SColor {
        return this.highlightColor;
    }
    public set HighlightColor(value: SColor) {
        this.highlightColor = value;
    }
    public get Enabled(): boolean {
        return this.enabled;
    }

    public set Enabled(value: boolean) {
        this.enabled = value;
        if (!value) this.formatLeftLabel = replaceRstarColorsWith(this.formatLeftLabel, "~c~");
        else this.Label = this.label;
        this.updateLeftSlot();
    }

    public override get Selected(): boolean {
        return super.Selected;
    }

    public override set Selected(value: boolean) {
        super.Selected = value;
        if (value) this.formatLeftLabel = this.formatLeftLabel.replace(/~w~|~s~/g, "~l~");
        else this.formatLeftLabel = this.formatLeftLabel.replace(/~l~/g, "~s~");
        this.updateLeftSlot();
    }

    public get RightTitle(): string {
        return this.textTitle;
    }
    public set RightTitle(value: string) {
        this.textTitle = value;
        this.updateLeftSlot();
    }
    public get KeymapRightLabel_1(): string {
        return this.keymapRightLabel1;
    }
    public set KeymapRightLabel_1(value: string) {
        this.keymapRightLabel1 = value;
        this.updateLeftSlot();
    }
    public get KeymapRightLabel_2(): string {
        return this.keymapRightLabel2;
    }
    public set KeymapRightLabel_2(value: string) {
        this.keymapRightLabel2 = value;
        this.updateLeftSlot();
    }

    public onActivated(handler: ActivatedEvent): void {
        this.activatedHandlers.push(handler);
    }

    public UpdateBackground(txd: string, txn: string, resizeType: LeftItemBGType): void {
        this.TextureDict = txd;
        this.TextureName = txn;
        this.LeftItemBGType = resizeType;
        this.updateLeftSlot();
    }

    public AddItem(item: PauseMenuItem): void {
        item.ParentLeftItem = this;
        item.ParentTab = this.ParentTab;
        this.ItemList.push(item);
    }

    public Activated(): void {
        const index = this.ParentTab?.LeftColumn?.Items.indexOf(this) ?? -1;
        this.activatedHandlers.forEach((handler) => handler(this, index));
    }

    private updateLeftSlot(): void {
        const parentTab = this.ParentTab;
        if (!parentTab || !parentTab.Visible || !parentTab.Parent?.Visible || !parentTab.LeftColumn) return;
        const idx = parentTab.LeftColumn.Items.indexOf(this);
        if (idx >= 0) parentTab.UpdateSlot(PM_COLUMNS.LEFT, idx);
    }
}

export default TabLeftItem;
