import { BadgeStyle } from "elements/badge";
import { ItemFont } from "elements/ItemFont";
import { ScaleformFonts } from "elements/scaleform-fonts";
import { SColor } from "elements/scolor";
import type { PauseMenuColumnLike } from "../pause-menu-item";
import PauseMenuItem from "../pause-menu-item";

export enum SettingsItemType {
    Basic,
    ListItem,
    ProgressBar,
    CheckBox,
    MaskedProgressBar = 4,
    BlipType,
    Separator,
    SliderBar,
    Empty,
    Basic_tabbed = 10,
    Progress_tabbed = 20,
}

export interface StringPair {
    Key: string;
    Value: string;
}

export type SettingsItemSelected = (item: SettingsItem) => void;

type SettingsParentColumn = PauseMenuColumnLike;

export class SettingsItem extends PauseMenuItem {
    private rightLabel: string;
    private enabled: boolean = true;

    public Hovered: boolean = false;
    public ItemType: SettingsItemType = SettingsItemType.Basic;

    public _itemId: number = 0;
    public Description: string = "";
    public BlinkDescription: boolean = false;
    public MainColor: SColor = SColor.HUD_Panel_light;
    public HighlightColor: SColor = SColor.HUD_White;
    public LeftBadge: BadgeStyle | number = BadgeStyle.NONE;
    public RightBadge: BadgeStyle | number = BadgeStyle.NONE;
    public customLeftBadge: StringPair = { Key: "", Value: "" };
    public customRightBadge: StringPair = { Key: "", Value: "" };
    public KeepTextColorWhite: boolean = false;
    public labelFont: ItemFont = ScaleformFonts.CHALET_LONDON_NINETEENSIXTY;
    public rightLabelFont: ItemFont = ScaleformFonts.CHALET_LONDON_NINETEENSIXTY;

    public override ParentColumn: SettingsParentColumn | null = null;

    private activatedCallbacks: SettingsItemSelected[] = [];

    constructor(label: string, rightLabel: string) {
        super(label);
        this.rightLabel = rightLabel;
    }

    public get Enabled(): boolean {
        return this.enabled;
    }

    public set Enabled(value: boolean) {
        this.enabled = value;
        this.updateParentSlot();
    }

    public get RightLabel(): string {
        return this.rightLabel;
    }

    public set RightLabel(value: string) {
        this.rightLabel = value;
        this.updateParentSlot();
    }

    public OnActivated(callback: SettingsItemSelected): void {
        this.activatedCallbacks.push(callback);
    }

    public activatedEmit(): void {
        if (this.ItemType !== SettingsItemType.Basic) {
            return;
        }

        for (const callback of this.activatedCallbacks) {
            callback(this);
        }
    }

    public SetLeftBadge(badge: BadgeStyle | number): void {
        this.LeftBadge = badge;
        this.updateParentSlot();
    }

    public SetRightBadge(badge: BadgeStyle | number): void {
        this.RightBadge = badge;
        this.updateParentSlot();
    }

    public SetRightLabel(label: string): void {
        this.RightLabel = label;
    }

    protected updateParentSlot(): void {
        if (!this.ParentColumn?.visible) {
            return;
        }

        const index = this.ParentColumn.Items.indexOf(this);
        if (index >= 0) {
            this.ParentColumn.UpdateSlot?.(index);
        }
    }
}

export default SettingsItem;
