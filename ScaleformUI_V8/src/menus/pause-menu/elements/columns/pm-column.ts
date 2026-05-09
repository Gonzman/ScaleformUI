import { SColor } from "elements/scolor";
import { ScaleformUI } from "scaleforms/scaleformui/main";
import { PauseMenuItem } from "../items";

export enum PM_COLUMNS {
    LEFT,
    MIDDLE,
    RIGHT,
    EXTRA3,
    EXTRA4,
    LEFT_MIDDLE,
    MIDDLE_RIGHT
}

export enum PLT_COLUMNS {
    SETTINGS,
    PLAYERS,
    MISSIONS,
    STORE,
    MISSION_DETAILS
}

export type IndexChanged = (index: number) => void;

export class PM_Column {
    public position: PM_COLUMNS;
    public index: number = 0;
    public type: number = -1;
    private columnVisible: boolean = false;

    public Items: PauseMenuItem[] = [];
    public VisibleItems: number = 0;
    public Focused: boolean = false;
    public CaptionLeft: string = "";
    public CaptionRight: string = "";
    public Label: string = "";
    public Color: SColor = SColor.HUD_Freemode;
    public Parent: any = null;

    constructor(position: PM_COLUMNS | number) {
        this.position = typeof position === "number" ? (position as PM_COLUMNS) : position;
    }

    public get visible(): boolean {
        return this.Parent != null && this.Parent.Visible && this.Parent.Parent != null && this.Parent.Parent.Visible;
    }

    public get Index(): number {
        return this.index;
    }
    public set Index(value: number) {
        if (this.Items.length === 0) {
            this.index = 0;
            return;
        }
        try {
            this.Items[this.index].Selected = false;
        } catch (e) {
            /* ignore */
        }
        this.index = value;
        if (this.index < 0) this.index = this.Items.length - 1;
        else if (this.index >= this.Items.length) this.index = 0;
        try {
            this.Items[this.index].Selected = true;
        } catch (e) {
            /* ignore */
        }
        if (this.visible && this.Parent && this.Parent.CurrentColumnIndex === (this.position as number))
            ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
                "SET_COLUMN_HIGHLIGHT",
                this.position as number,
                this.index,
                false,
                false
            );
    }

    public get ColumnVisible(): boolean {
        return this.columnVisible;
    }
    public set ColumnVisible(value: boolean) {
        this.columnVisible = value;
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
            "SHOW_COLUMN",
            this.position as number,
            this.columnVisible
        );
    }

    public AddItem(item: any) {
        this.Items.push(item);
    }

    public Clear() {
        this.ClearColumn();
    }

    public Populate(): void {}
    public SetDataSlot(index: number): void {}
    public UpdateSlot(index: number): void {}
    public AddSlot(index: number): void {}

    public RemoveSlot(idx: number): void {
        if (idx >= this.Items.length) return;
        const selectedItem = this.Index;
        try {
            this.Items[idx].Selected = false;
        } catch (e) {}
        this.Items.splice(idx, 1);
        if (this.visible)
            ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
                "REMOVE_SLOT",
                this.position as number,
                idx,
                false,
                false
            );
        if (this.Items.length > 0) {
            if (idx === this.index)
                this.index =
                    idx >= this.Items.length ? this.Items.length - 1 : idx >= 0 && idx < this.Items.length ? idx : 0;
            else {
                if (selectedItem < this.Items.length) this.index = selectedItem;
                else this.index = this.Items.length - 1;
            }
            try {
                this.Items[this.index].Selected = true;
            } catch (e) {}
            if (this.visible && this.Parent && this.Parent.CurrentColumnIndex === (this.position as number))
                ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
                    "SET_COLUMN_HIGHLIGHT",
                    this.position as number,
                    idx,
                    false,
                    false
                );
        }
    }

    public GoUp(): void {}
    public GoDown(): void {}
    public GoLeft(): void {}
    public GoRight(): void {}
    public Select(): void {}
    public GoBack(): void {}
    public MouseScroll(dir: number): void {}

    public HighlightColumn(
        highlighted: boolean = false,
        moveFocus: boolean = false,
        prevHighlight: boolean = false
    ): void {
        if (this.visible)
            ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
                "SET_COLUMN_FOCUS",
                this.position as number,
                highlighted,
                moveFocus,
                prevHighlight
            );
    }

    public ClearColumn(): void {
        this.Items = [];
        this.index = 0;
        if (this.visible)
            ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction("SET_DATA_SLOT_EMPTY", this.position as number);
    }

    public ShowColumn(show: boolean = true): void {
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction("DISPLAY_DATA_SLOT", this.position as number);
    }

    public InitColumnScroll(
        visible: boolean,
        columns: number,
        scrollType: number,
        arrowPosition: number,
        overrideFlag: boolean = false,
        xColOffset: number = 0
    ): void {
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
            "INIT_COLUMN_SCROLL",
            this.position as number,
            visible,
            columns,
            scrollType,
            arrowPosition,
            overrideFlag,
            xColOffset
        );
    }

    public SetColumnScroll(
        currentPosition: number,
        maxPosition: number,
        maxVisible: number,
        caption?: string,
        forceInvisible: boolean = false,
        captionR: string = ""
    ): void {
        if (this.visible)
            ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
                "SET_COLUMN_SCROLL",
                this.position as number,
                currentPosition,
                maxPosition,
                maxVisible,
                caption ?? "",
                forceInvisible,
                captionR
            );
    }

    public SetColumnScroll_Caption(caption: string, ...args: any[]): void {
        if (this.visible) {
            const pause = ScaleformUI.Scaleforms._pauseMenu._pause;
            if (!pause) return;
            BeginScaleformMovieMethod(pause.handle, "SET_COLUMN_SCROLL");
            ScaleformMovieMethodAddParamInt(this.position as number);
            ScaleformMovieMethodAddParamInt(0);
            ScaleformMovieMethodAddParamInt(0);
            ScaleformMovieMethodAddParamInt(0);
            BeginTextCommandScaleformString(caption);
            for (const arg of args) {
                if (typeof arg === "number" && Number.isInteger(arg)) AddTextComponentInteger(arg as number);
                else if (typeof arg === "string") AddTextComponentSubstringPlayerName(arg as string);
                else if (typeof arg === "number") AddTextComponentFloat(arg as number, 2);
            }
            EndTextCommandScaleformString_2();
            EndScaleformMovieMethod();
        }
    }

    public SetColumnScroll_CaptionRight(caption: string, rightC: string): void {
        if (this.visible) {
            const pause = ScaleformUI.Scaleforms._pauseMenu._pause;
            if (!pause) return;
            BeginScaleformMovieMethod(pause.handle, "SET_COLUMN_SCROLL");
            ScaleformMovieMethodAddParamInt(this.position as number);
            ScaleformMovieMethodAddParamInt(0);
            ScaleformMovieMethodAddParamInt(0);
            ScaleformMovieMethodAddParamInt(0);
            BeginTextCommandScaleformString("CELL_EMAIL_BCON");
            AddTextComponentSubstringPlayerName(caption);
            EndTextCommandScaleformString_2();
            ScaleformMovieMethodAddParamBool(false);
            ScaleformMovieMethodAddParamPlayerNameString(rightC);
            EndScaleformMovieMethod();
        }
    }
}

export default PM_Column;
