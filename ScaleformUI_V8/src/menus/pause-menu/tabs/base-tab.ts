import { SColor } from "elements/scolor";
import { PM_COLUMNS, PM_Column } from "../elements/columns/pm-column";
import type { MinimapPanel } from "../elements/panels/minimap-panel";
import type { TabView } from "../tab-view";

export enum ScrollType {
    ALL = 0,
    UP_DOWN = 1,
    LEFT_RIGHT = 2,
    NONE = 3,
}

export enum ScrollArrowsPosition {
    LEFT = 0,
    CENTER = 1,
    RIGHT = 2,
}

export class BaseTab {
    public _type = 0;
    public _identifier = "";
    public TabColor: SColor;
    public Minimap: MinimapPanel | null = null;

    public LeftColumn: PM_Column | null = null;
    public CenterColumn: PM_Column | null = null;
    public RightColumn: PM_Column | null = null;
    public Visible = false;
    public Focused = false;
    public Title: string;
    public Active = false;
    public Parent: TabView | null = null;
    public CurrentColumnIndex = 0;

    constructor(name: string, color: SColor) {
        this.Title = name;
        this.TabColor = color;
    }

    public get CurrentColumn(): PM_Column | null {
        switch (this.CurrentColumnIndex) {
            case 1:
                return this.CenterColumn;
            case 2:
                return this.RightColumn;
            default:
                return this.LeftColumn;
        }
    }

    public Populate(): void {}
    public Refresh(_highlightOldIndex: boolean): void {}
    public ShowColumns(): void {}
    public SetDataSlot(_slot: PM_COLUMNS, _index: number): void {}
    public UpdateSlot(_slot: PM_COLUMNS, _index: number): void {}
    public AddSlot(_slot: PM_COLUMNS, _index: number): void {}
    public Focus(): void { this.Focused = true; }
    public UnFocus(): void { this.Focused = false; }
    public GoUp(): void {}
    public GoDown(): void {}
    public GoLeft(): void {}
    public GoRight(): void {}
    public Select(): void {}
    public GoBack(): void {}
    public MouseEvent(_eventType: number, _context: number, _index: number): void {}
    public StateChange(_state: number): void {}

    public GetColumnAtPosition(position: PM_COLUMNS | number): PM_Column | null {
        const pos = typeof position === "number" ? position as PM_COLUMNS : position;
        switch (pos) {
            case PM_COLUMNS.LEFT:
                return this.LeftColumn;
            case PM_COLUMNS.MIDDLE:
                return this.CenterColumn;
            case PM_COLUMNS.RIGHT:
                return this.RightColumn;
            default:
                return null;
        }
    }
}

export default BaseTab;
