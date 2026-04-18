import { ItemFont } from "elements/ItemFont";
import { ScaleformFonts } from "elements/scaleform-fonts";
import { SColor } from "elements/scolor";
import PauseMenuItem from "./pause-menu-item";

export enum StatItemType {
    Basic,
    ColoredBar,
}

interface PauseColumnParent {
    visible?: boolean;
    UpdateSlot?: (index: number) => void;
    Items: PauseMenuItem[];
}

export class StatsTabItem extends PauseMenuItem {
    private rightLabel: string = "";
    private coloredBarColor: SColor = SColor.HUD_Freemode;
    private value: number = 0;

    public Type: StatItemType;
    public labelFont: ItemFont = ScaleformFonts.CHALET_LONDON_NINETEENSIXTY;
    public rightLabelFont: ItemFont = ScaleformFonts.CHALET_LONDON_NINETEENSIXTY;

    public override ParentColumn: PauseColumnParent | null = null;

    constructor(label: string, rightLabel: string);
    constructor(label: string, value: number, color: SColor);
    constructor(label: string, rightLabelOrValue: string | number, color?: SColor) {
        super(label);

        if (typeof rightLabelOrValue === "string") {
            this.Type = StatItemType.Basic;
            this.RightLabel = rightLabelOrValue;
            return;
        }

        this.Type = StatItemType.ColoredBar;
        this.Value = rightLabelOrValue;
        this.ColoredBarColor = color ?? SColor.HUD_Freemode;
    }

    public get RightLabel(): string {
        return this.rightLabel;
    }

    public set RightLabel(value: string) {
        this.rightLabel = value;
        this.updateParentSlot();
    }

    public get ColoredBarColor(): SColor {
        return this.coloredBarColor;
    }

    public set ColoredBarColor(value: SColor) {
        this.coloredBarColor = value;
        this.updateParentSlot();
    }

    public get Value(): number {
        return this.value;
    }

    public set Value(value: number) {
        this.value = value;
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

export default StatsTabItem;
