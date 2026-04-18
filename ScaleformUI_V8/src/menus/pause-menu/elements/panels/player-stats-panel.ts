import { ItemFont } from "elements/ItemFont";
import { ScaleformLabel } from "elements/scaleform-label";
import { ScaleformFonts } from "elements/scaleform-fonts";
import { SColor } from "elements/scolor";
import { ScaleformUI } from "scaleforms/scaleformui/main";
import PM_Column, { PM_COLUMNS } from "../columns/pm-column";
import type { CrewTag, FriendItem } from "../items/friend-item";
import PauseMenuItem from "../items/pause-menu-item";
import type { MissionDetailsItem } from "./mission-details-panel";

export class PlayerStatsPanel extends PM_Column {
    public ParentItem: FriendItem | null = null;
    private title: string;
    private description: ScaleformLabel = new ScaleformLabel("");
    private titleColor: SColor = SColor.HUD_Freemode;
    private hasPlane: boolean = false;
    private hasVehicle: boolean = false;
    private hasBoat: boolean = false;
    private hasHeli: boolean = false;

    public RankInfo: UpperInformation;
    public CrewInfo: BottomInformation;

    public HardwareVisible: boolean = true;
    public DetailsItems: MissionDetailsItem[] = [];

    constructor(title: string, titleColor: SColor) {
        super(PM_COLUMNS.RIGHT);
        this.VisibleItems = 10;
        this.title = title;
        this.titleColor = titleColor;
        this.description = new ScaleformLabel("");
        this.RankInfo = new UpperInformation(this);
        this.CrewInfo = new BottomInformation(this);
        this.Items = [];
    }

    public get Title(): string {
        return this.title;
    }
    public set Title(value: string) {
        this.title = value;
        if (this.visible) this.UpdatePanel();
    }

    public get TitleColor(): SColor {
        return this.titleColor;
    }
    public set TitleColor(value: SColor) {
        this.titleColor = value;
        if (this.visible) this.UpdatePanel();
    }

    public get Description(): ScaleformLabel {
        return this.description;
    }
    public set Description(value: ScaleformLabel) {
        this.description = value;
        if (this.visible) this.UpdatePanel();
    }

    public get HasPlane(): boolean {
        return this.hasPlane;
    }
    public set HasPlane(value: boolean) {
        this.hasPlane = value;
        if (this.visible) this.UpdatePanel();
    }

    public get HasHeli(): boolean {
        return this.hasHeli;
    }
    public set HasHeli(value: boolean) {
        this.hasHeli = value;
        if (this.visible) this.UpdatePanel();
    }

    public get HasBoat(): boolean {
        return this.hasBoat;
    }
    public set HasBoat(value: boolean) {
        this.hasBoat = value;
        if (this.visible) this.UpdatePanel();
    }

    public get HasVehicle(): boolean {
        return this.hasVehicle;
    }
    public set HasVehicle(value: boolean) {
        this.hasVehicle = value;
        if (this.visible) this.UpdatePanel();
    }

    public AddStat(item: PlayerStatsPanelStatItem): void {
        item.Parent = this;
        this.Items.push(item);
        if (this.visible) this.UpdatePanel();
    }

    public AddDescriptionStatItem(item: MissionDetailsItem): void {
        this.DetailsItems.push(item);
        if (this.visible) this.UpdatePanel();
    }

    public UpdatePanel(overrideVisibility: boolean = false): void {
        const parentItem = this.ParentItem;
        if (parentItem == null) return;
        const parentColumnVisible = parentItem?.ParentColumn?.visible ?? false;
        if (!parentColumnVisible && !overrideVisibility) {
            return;
        }

        this.position = parentItem.ClonePed == null ? PM_COLUMNS.EXTRA3 : PM_COLUMNS.EXTRA4;
        this.Parent = (parentItem.ParentColumn as { Parent?: unknown } | null)?.Parent ?? null;
        this.Populate();
        this.ShowColumn();
    }

    public override Populate(): void {
        const pause = ScaleformUI.Scaleforms._pauseMenu._pause;
        if (!pause) return;

        pause.callFunction("SET_DATA_SLOT_EMPTY", this.position as number);
        if (this.CrewInfo.isFilled) {
            pause.callFunction(
                "SET_COLUMN_TITLE",
                this.position as number,
                this.Title,
                this.CrewInfo.CrewName,
                this.TitleColor,
                "",
                this.CrewInfo.RankName,
                this.ParentItem?.CrewTag?.TAG ?? "",
                this.CrewInfo.CrewDict,
                this.CrewInfo.CrewTxtr,
                this.CrewInfo.CrewTag,
                this.CrewInfo.CrewColor.R,
                this.CrewInfo.CrewColor.G,
                this.CrewInfo.CrewColor.B,
                0,
                ""
            );
        } else {
            pause.callFunction(
                "SET_COLUMN_TITLE",
                this.position as number,
                this.Title,
                "",
                this.TitleColor,
                "",
                "",
                this.ParentItem?.CrewTag?.TAG ?? "",
                "",
                "",
                "",
                0,
                0,
                0,
                0,
                ""
            );
        }

        pause.callFunction(
            "SET_DATA_SLOT",
            this.position as number,
            0,
            0,
            0,
            0,
            this.HasPlane,
            this.HasHeli,
            this.HasBoat,
            this.HasVehicle,
            0,
            this.RankInfo.RankLevel,
            this.RankInfo.LowLabel,
            0,
            0,
            this.RankInfo.MidLabel,
            0,
            0,
            this.RankInfo.UpLabel,
            0,
            0,
            this.HardwareVisible
        );

        for (let i = 0; i < this.Items.length; i++) {
            const stat = this.Items[i] as PlayerStatsPanelStatItem;
            pause.callFunction("SET_DATA_SLOT", this.position as number, 1, i, 0, stat.Label, stat.Description, stat.Value);
        }

        if (this.DetailsItems.length > 0 && this.position === PM_COLUMNS.EXTRA3) {
            for (let i = 0; i < this.DetailsItems.length; i++) {
                const item = this.DetailsItems[i];
                BeginScaleformMovieMethod(pause.handle, "SET_DATA_SLOT");
                PushScaleformMovieFunctionParameterInt(this.position as number);
                PushScaleformMovieFunctionParameterInt(2);
                PushScaleformMovieFunctionParameterInt(i);
                PushScaleformMovieFunctionParameterInt(0);
                PushScaleformMovieFunctionParameterInt(0);
                PushScaleformMovieFunctionParameterInt(item.Type);
                PushScaleformMovieFunctionParameterInt(0);
                PushScaleformMovieFunctionParameterBool(true);
                BeginTextCommandScaleformString("CELL_EMAIL_BCON");
                for (const split of this.getSplitLabel(item.Label)) {
                    AddTextComponentScaleform(split);
                }
                EndTextCommandScaleformString_2();
                PushScaleformMovieFunctionParameterString(item.TextRight);
                switch (item.Type) {
                    case 2:
                        PushScaleformMovieFunctionParameterInt(item.Icon ?? 0);
                        PushScaleformMovieFunctionParameterInt(item.IconColor?.getArgbValue() ?? SColor.HUD_None.getArgbValue());
                        PushScaleformMovieFunctionParameterBool(item.Tick ?? false);
                        break;
                    case 3:
                        PushScaleformMovieFunctionParameterString(item.CrewTag?.TAG ?? "");
                        PushScaleformMovieFunctionParameterBool(false);
                        break;
                }
                PushScaleformMovieFunctionParameterString(
                    item.LabelFont?.fontName ?? ScaleformFonts.CHALET_LONDON_NINETEENSIXTY.fontName
                );
                PushScaleformMovieFunctionParameterString(
                    item._rightLabelFont?.fontName ?? ScaleformFonts.CHALET_LONDON_NINETEENSIXTY.fontName
                );
                EndScaleformMovieMethod();
            }
            return;
        }

        if (this.Description.Label.trim().length > 0 && !this.CrewInfo.isFilled) {
            BeginScaleformMovieMethod(pause.handle, "SET_DESCRIPTION");
            PushScaleformMovieFunctionParameterInt(this.position as number);
            BeginTextCommandScaleformString("CELL_EMAIL_BCON");
            for (const split of this.Description.SplitLabel) {
                AddTextComponentScaleform(split);
            }
            EndTextCommandScaleformString_2();
            PushScaleformMovieFunctionParameterInt(0);
            PushScaleformMovieFunctionParameterString(this.ParentItem?.CrewTag?.TAG ?? "");
            PushScaleformMovieFunctionParameterBool(this.ParentItem?.ClonePed != null);
            EndScaleformMovieMethod();
        }
    }

    public override SetDataSlot(_index: number): void {
        this.Populate();
    }

    public override UpdateSlot(index: number): void {
        if (index >= this.Items.length) return;
        if (this.visible) this.Populate();
    }

    public override AddSlot(index: number): void {
        if (index >= this.Items.length) return;
        if (this.visible) this.Populate();
    }

    private getSplitLabel(label: ScaleformLabel | string): string[] {
        if (label instanceof ScaleformLabel) {
            return label.SplitLabel;
        }
        return new ScaleformLabel(label ?? "").SplitLabel;
    }
}

export class UpperInformation {
    private rankLevel: number = 0;
    private upLabel: string = "";
    private lowLabel: string = "";
    private midLabel: string = "";

    constructor(private parent: PlayerStatsPanel) {}

    public get RankLevel(): number {
        return this.rankLevel;
    }
    public set RankLevel(value: number) {
        this.rankLevel = value;
        if (this.parent.visible) this.parent.UpdatePanel();
    }

    public get UpLabel(): string {
        return this.upLabel;
    }
    public set UpLabel(value: string) {
        this.upLabel = value;
        if (this.parent.visible) this.parent.UpdatePanel();
    }

    public get MidLabel(): string {
        return this.midLabel;
    }
    public set MidLabel(value: string) {
        this.midLabel = value;
        if (this.parent.visible) this.parent.UpdatePanel();
    }

    public get LowLabel(): string {
        return this.lowLabel;
    }
    public set LowLabel(value: string) {
        this.lowLabel = value;
        if (this.parent.visible) this.parent.UpdatePanel();
    }
}

export class BottomInformation {
    private crewName: string = "";
    private rankName: string = "";
    private crewDict: string = "";
    private crewTxtr: string = "";
    private crewTag: string = "";
    private crewColor: SColor = SColor.HUD_Pure_white;

    constructor(private parent: PlayerStatsPanel) {}

    public get isFilled(): boolean {
        return (
            this.CrewName.trim().length > 0 &&
            this.RankName.trim().length > 0 &&
            this.CrewDict.trim().length > 0 &&
            this.CrewTxtr.trim().length > 0 &&
            this.CrewTag.trim().length > 0
        );
    }

    public get CrewName(): string {
        return this.crewName;
    }
    public set CrewName(value: string) {
        this.crewName = value;
        if (this.parent.visible) this.parent.UpdatePanel();
    }

    public get RankName(): string {
        return this.rankName;
    }
    public set RankName(value: string) {
        this.rankName = value;
        if (this.parent.visible) this.parent.UpdatePanel();
    }

    public get CrewDict(): string {
        return this.crewDict;
    }
    public set CrewDict(value: string) {
        this.crewDict = value;
        if (this.parent.visible) this.parent.UpdatePanel();
    }

    public get CrewTxtr(): string {
        return this.crewTxtr;
    }
    public set CrewTxtr(value: string) {
        this.crewTxtr = value;
        if (this.parent.visible) this.parent.UpdatePanel();
    }

    public get CrewColor(): SColor {
        return this.crewColor;
    }
    public set CrewColor(value: SColor) {
        this.crewColor = value;
        if (this.parent.visible) this.parent.UpdatePanel();
    }

    public get CrewTag(): string {
        return this.crewTag;
    }
    public set CrewTag(value: string) {
        this.crewTag = value;
        if (this.parent.visible) this.parent.UpdatePanel();
    }
}

export class PlayerStatsPanelStatItem extends PauseMenuItem {
    private value: number;
    private description: string;
    private label: string;
    public Parent: PlayerStatsPanel | null = null;

    constructor(label: string, description: string, value: number) {
        super(label);
        this.label = label;
        this.description = description;
        this.value = value;
    }

    public override get Label(): string {
        return this.label;
    }
    public override set Label(value: string) {
        super.Label = value;
        this.label = value;
        this.Parent?.UpdatePanel();
    }

    public get Description(): string {
        return this.description;
    }
    public set Description(value: string) {
        this.description = value;
        this.Parent?.UpdatePanel();
    }

    public get Value(): number {
        return this.value;
    }
    public set Value(value: number) {
        this.value = value;
        this.Parent?.UpdatePanel();
    }
}

export type { MissionDetailsItem, CrewTag, ItemFont };
export default PlayerStatsPanel;
