import { ScaleformUI } from "scaleforms/scaleformui/main";
import PM_Column from "./pm-column";

export class TextColumn extends PM_Column {
    constructor(position: number) {
        super(position);
        this.VisibleItems = 16;
    }

    public override SetDataSlot(index: number): void {
        this.sendItem(index, "SET_DATA_SLOT");
    }

    public override UpdateSlot(index: number): void {
        this.sendItem(index, "UPDATE_SLOT");
    }

    private sendItem(index: number, method: "SET_DATA_SLOT" | "UPDATE_SLOT"): void {
        if (index >= this.Items.length) return;
        const item: any = this.Items[index];
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
            method,
            this.position as number,
            index,
            0,
            index,
            0,
            0,
            true,
            item.Label
        );
    }
}

export default TextColumn;
