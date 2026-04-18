import { BadgeStyle } from "elements/badge";
import { HudColor } from "elements/color";
import { SColor } from "elements/scolor";
import LobbyItem from "./lobby-item";

export enum LobbyBadgeIcon {
    NONE = 0,
    ACTIVE_HEADSET = 47,
    INACTIVE_HEADSET = 48,
    MUTED_HEADSET = 49,
    GTAV = 54,
    WORLD = 63,
    KICK = 64,
    RANK_FREEMODE = 65,
    SPECTATOR = 66,
    IS_CONSOLE_PLAYER = 119,
    IS_PC_PLAYER = 120
}

export class CrewTag {
    constructor(public TAG: string = "") {}
}

export class FriendItem extends LobbyItem {
    private itemColor: SColor;
    private rank: number;
    private status: string;
    private statusColor: SColor = SColor.FromHudColor(HudColor.NONE);
    private crewTag: CrewTag = new CrewTag();
    public iconL: number;
    public iconR: number;
    public boolL: boolean = false;
    public boolR: boolean = false;
    private coloredTag: boolean;

    constructor(
        label: string,
        itemColor: SColor,
        coloredTag: boolean,
        rank: number,
        status: string = "",
        crewTag: CrewTag | null = null
    ) {
        super(label);
        this._type = 1;
        this.itemColor = itemColor;
        this.coloredTag = coloredTag;
        this.rank = rank;
        this.status = status;
        this.CrewTag = crewTag;

        if (this.itemColor.equals(SColor.FromHudColor(HudColor.NONE))) {
            this.itemColor = SColor.FromHudColor(HudColor.HUD_COLOUR_BLUE);
        }
        if (this.statusColor.equals(SColor.FromHudColor(HudColor.NONE))) {
            this.statusColor = this.itemColor;
        }

        this.iconL = 0;
        this.iconR = 65;
    }

    public override get Label(): string {
        return super.Label;
    }

    public override set Label(value: string) {
        super.Label = value;
        this.updateParentSlot();
    }

    public get ItemColor(): SColor {
        return this.itemColor;
    }

    public set ItemColor(value: SColor) {
        this.itemColor = value;
        this.updateParentSlot();
    }

    public get ColoredTag(): boolean {
        return this.coloredTag;
    }

    public set ColoredTag(value: boolean) {
        this.coloredTag = value;
        this.updateParentSlot();
    }

    public get Rank(): number {
        return this.rank;
    }

    public set Rank(value: number) {
        this.rank = value;
        this.updateParentSlot();
    }

    public get Status(): string {
        return this.status;
    }

    public set Status(value: string) {
        this.status = value;
        this.updateParentSlot();
    }

    public get StatusColor(): SColor {
        return this.statusColor;
    }

    public set StatusColor(value: SColor) {
        this.statusColor = value;
        this.updateParentSlot();
    }

    public get CrewTag(): CrewTag {
        return this.crewTag;
    }

    public set CrewTag(value: CrewTag | null) {
        this.crewTag = value ?? new CrewTag();
        this.updateParentSlot();
    }

    public SetLeftIcon(icon: LobbyBadgeIcon | BadgeStyle): void {
        this.iconL = icon as number;
        this.boolL = !Object.values(LobbyBadgeIcon).includes(icon as LobbyBadgeIcon);
        this.updateParentSlot();
    }

    public SetRightIcon(icon: LobbyBadgeIcon | BadgeStyle): void {
        this.iconR = icon as number;
        this.boolR = !Object.values(LobbyBadgeIcon).includes(icon as LobbyBadgeIcon);
        this.updateParentSlot();
    }

    public override get Selected(): boolean {
        return super.Selected;
    }

    public override set Selected(value: boolean) {
        super.Selected = value;
        this.updateParentSlot();
    }

    public AddPanel(panel: unknown): void {
        this.Panel = panel as { ParentItem?: FriendItem; UpdatePanel?: (overrideVisibility?: boolean) => void };
        if (this.Panel) {
            (this.Panel as { ParentItem?: FriendItem }).ParentItem = this;
            this.Panel.UpdatePanel?.();
        }
    }

    private updateParentSlot(): void {
        const column = this.ParentColumn as
            | {
                  visible?: boolean;
                  UpdateSlot?: (index: number) => void;
                  Items?: unknown[];
              }
            | undefined;

        if (!column?.visible || !column.Items) {
            return;
        }

        const index = column.Items.indexOf(this);
        if (index >= 0) {
            column.UpdateSlot?.(index);
        }
    }
}

export default FriendItem;
