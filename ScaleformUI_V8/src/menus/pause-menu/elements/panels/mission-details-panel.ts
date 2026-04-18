import { ItemFont } from "elements/ItemFont";
import { ScaleformLabel } from "elements/scaleform-label";
import { ScaleformFonts } from "elements/scaleform-fonts";
import { SColor } from "elements/scolor";
import { ScaleformUI } from "scaleforms/scaleformui/main";
import PM_Column, { PLT_COLUMNS, PM_COLUMNS } from "../columns/pm-column";
import type { CrewTag } from "../items/friend-item";

export interface MissionDetailsItem {
    Label: ScaleformLabel | string;
    TextRight: string;
    Type: number;
    Icon?: number;
    IconColor?: SColor;
    Tick?: boolean;
    CrewTag?: CrewTag;
    LabelFont?: ItemFont;
    _rightLabelFont?: ItemFont;
}

export class MissionDetailsPanel extends PM_Column {
    private title: string = "";
    public TextureDict: string = "";
    public TextureName: string = "";

    public get Title(): string {
        return this.title;
    }

    public set Title(value: string) {
        this.title = value;
        if (this.visible) {
            ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction("SET_COLUMN_TITLE", this.position as number, this.title);
        }
    }

    constructor(label: string) {
        super(PM_COLUMNS.RIGHT);
        this.Label = label;
        this.VisibleItems = 10;
        this.type = PLT_COLUMNS.MISSION_DETAILS;
    }

    public override ShowColumn(show: boolean = true): void {
        if (!this.visible) return;
        super.ShowColumn(show);
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
            "SET_COLUMN_TITLE",
            this.position as number,
            this.title,
            this.TextureDict,
            this.TextureName
        );
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
            "SET_COLUMN_FOCUS",
            this.position as number,
            this.Focused,
            false,
            false
        );
    }

    public override SetDataSlot(index: number): void {
        if (!this.visible) return;
        this.SendItemToScaleform(index);
    }

    public override UpdateSlot(index: number): void {
        if (index >= this.Items.length) return;
        if (this.visible) this.SendItemToScaleform(index, true);
    }

    public override AddSlot(index: number): void {
        if (index >= this.Items.length) return;
        if (this.visible) this.SendItemToScaleform(index, false, false, true);
    }

    public override Populate(): void {
        if (!this.visible) return;
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction("SET_DATA_SLOT_EMPTY", this.position as number);
        for (let i = 0; i < this.Items.length; i++) {
            this.SetDataSlot(i);
        }
    }

    public SendItemToScaleform(i: number, update: boolean = false, newItem: boolean = false, isSlot: boolean = false): void {
        if (!this.visible || i >= this.Items.length) return;
        const pause = ScaleformUI.Scaleforms._pauseMenu._pause;
        if (!pause) return;

        const item = this.Items[i] as MissionDetailsItem;
        let sfMethod = "SET_DATA_SLOT";
        if (update) sfMethod = "UPDATE_SLOT";
        if (newItem) sfMethod = "SET_DATA_SLOT_SPLICE";
        if (isSlot) sfMethod = "ADD_SLOT";

        BeginScaleformMovieMethod(pause.handle, sfMethod);
        PushScaleformMovieFunctionParameterInt(this.position as number);
        PushScaleformMovieFunctionParameterInt(i);
        PushScaleformMovieFunctionParameterInt(0);
        PushScaleformMovieFunctionParameterInt(0);
        PushScaleformMovieFunctionParameterInt(item.Type);
        PushScaleformMovieFunctionParameterInt(0);
        PushScaleformMovieFunctionParameterBool(false);
        BeginTextCommandScaleformString("CELL_EMAIL_BCON");
        for (const split of this.getSplitLabel(item.Label)) {
            AddTextComponentScaleform(split);
        }
        EndTextCommandScaleformString_2();
        PushScaleformMovieFunctionParameterString(item.TextRight ?? "");
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
        PushScaleformMovieFunctionParameterString(item.LabelFont?.fontName ?? ScaleformFonts.CHALET_LONDON_NINETEENSIXTY.fontName);
        PushScaleformMovieFunctionParameterString(
            item._rightLabelFont?.fontName ?? ScaleformFonts.CHALET_LONDON_NINETEENSIXTY.fontName
        );
        EndScaleformMovieMethod();
    }

    public UpdatePanelPicture(txd: string, txn: string): void {
        const changed = this.TextureDict !== txd || this.TextureName !== txn;
        this.TextureDict = txd;
        this.TextureName = txn;
        if (this.visible && changed) {
            ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
                "SET_COLUMN_TITLE",
                this.position as number,
                this.title,
                this.TextureDict,
                this.TextureName
            );
        }
    }

    public override AddItem(item: MissionDetailsItem): void {
        this.Items.push(item);
        if (this.visible && this.Items.length <= this.VisibleItems) {
            this.AddSlot(this.Items.length - 1);
        }
    }

    public RemoveItem(idx: number): void {
        if (idx >= 0 && idx < this.Items.length) {
            this.Items.splice(idx, 1);
        }
    }

    private getSplitLabel(label: ScaleformLabel | string): string[] {
        if (label instanceof ScaleformLabel) {
            return label.SplitLabel;
        }
        return new ScaleformLabel(label ?? "").SplitLabel;
    }
}

export default MissionDetailsPanel;
