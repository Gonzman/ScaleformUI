import { BadgeStyle } from "elements/badge";
import { HudColor } from "elements/color";
import { SColor } from "elements/scolor";
import type { PauseMenuColumnLike } from "./pause-menu-item";
import PauseMenuItem from "./pause-menu-item";

export type MissionActivated = (tab: unknown, column: unknown, item: MissionItem) => void;

export interface StringPair {
    Key: string;
    Value: string;
}

export class MissionItem extends PauseMenuItem {
    private enabled: boolean = true;
    public type: number = 0;
    public customLeftBadge: StringPair;
    public customRightBadge: StringPair;
    public rIcChecked: boolean = false;
    public Jumpable: boolean = false;
    public override ParentColumn: PauseMenuColumnLike | null = null;
    public MainColor: SColor = SColor.FromHudColor(HudColor.HUD_COLOUR_PAUSE_BG);
    public HighlightColor: SColor = SColor.FromHudColor(HudColor.HUD_COLOUR_WHITE);
    public LeftIcon: number = BadgeStyle.NONE;
    public LeftIconColor: SColor = SColor.FromHudColor(HudColor.HUD_COLOUR_WHITE);
    public RightIcon: number = BadgeStyle.NONE;
    public RightIconColor: SColor = SColor.FromHudColor(HudColor.HUD_COLOUR_WHITE);
    public RightIconChecked: boolean = false;
    public Hovered: boolean = false;
    private missionActivatedCallbacks: MissionActivated[] = [];

    constructor(label: string, mainColor?: SColor, highlightColor?: SColor) {
        super(label);
        this.MainColor = mainColor ?? this.MainColor;
        this.HighlightColor = highlightColor ?? this.HighlightColor;
        this.type = 0;
        this.customLeftBadge = { Key: "", Value: "" };
        this.customRightBadge = { Key: "", Value: "" };
    }

    public override get Enabled(): boolean {
        return this.enabled;
    }

    public override set Enabled(value: boolean) {
        this.enabled = value;
    }

    public onMissionActivated(callback: MissionActivated): void {
        this.missionActivatedCallbacks.push(callback);
    }

    public ActivateMission(tab: unknown): void {
        for (const callback of this.missionActivatedCallbacks) {
            callback(tab, this.ParentColumn, this);
        }
    }

    public SetLeftIcon(icon: BadgeStyle | number, color: SColor): void {
        this.LeftIcon = icon as number;
        this.LeftIconColor = color;
        this.updateParentSlot();
    }

    public SetRightIcon(icon: BadgeStyle | number, color: SColor, checked: boolean = false): void {
        this.RightIcon = icon as number;
        this.RightIconColor = color;
        this.RightIconChecked = checked;
        this.updateParentSlot();
    }

    public SetCustomLeftIcon(txd: string, txn: string): void {
        this.LeftIcon = -1;
        this.customLeftBadge = { Key: txd, Value: txn };
        this.updateParentSlot();
    }

    public SetCustomRightIcon(txd: string, txn: string, checked: boolean = false): void {
        this.RightIcon = -1;
        this.customRightBadge = { Key: txd, Value: txn };
        this.rIcChecked = checked;
        this.updateParentSlot();
    }

    private updateParentSlot(): void {
        if (!this.ParentColumn?.visible) {
            return;
        }

        const index = this.ParentColumn.Items.indexOf(this);
        if (index >= 0) {
            this.ParentColumn.UpdateSlot?.(index);
        }
    }
}

export class MissionSeparatorItem extends MissionItem {
    constructor(title: string, jumpable: boolean) {
        super(title);
        this.type = 1;
        this.Jumpable = jumpable;
        this.customLeftBadge = { Key: "", Value: "" };
        this.customRightBadge = { Key: "", Value: "" };
    }

    public override SetLeftIcon(_badge: BadgeStyle | number, _color: SColor): void {
        throw new Error("MissionSeparatorItem cannot have a left badge.");
    }

    public override SetRightIcon(_badge: BadgeStyle | number, _color: SColor, _checked: boolean = false): void {
        throw new Error("MissionSeparatorItem cannot have a right badge.");
    }
}

export default MissionItem;
