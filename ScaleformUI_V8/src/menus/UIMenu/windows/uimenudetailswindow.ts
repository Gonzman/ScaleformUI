import { Vector2 } from "math/vector2";
import { UIMenuWindow } from "./uimenuwindow";
import { SColor } from "elements/scolor";
import { ScaleformUI } from "scaleforms/scaleformui/main";

export class UIDetailImage {
    public Txd: string;
    public Txn: string;
    public Pos: Vector2;
    public Size: Vector2;

    constructor(txd: string, txn: string, pos: Vector2, size: Vector2) {
        this.Txd = txd;
        this.Txn = txn;
        this.Pos = pos;
        this.Size = size;
    }
}

export class UIDetailStat {
    public Percentage: number;
    public HudColor: SColor;
    constructor(percentage: number, color: SColor) {
        this.Percentage = percentage;
        this.HudColor = color;
    }
}

export class UIMenuDetailsWindow extends UIMenuWindow {
    public DetailTop: string;
    public DetailMid: string;
    public DetailBottom: string;
    public DetailLeft: UIDetailImage;
    public StatWheelEnabled: boolean;
    public DetailStats: UIDetailStat[];

    constructor(detailTop: string, detailMid: string, detailBottom: string);

    constructor(detailTop: string, detailMid: string, detailBottom: string, detailLeft: UIDetailImage);

    constructor(
        detailTop: string,
        detailMid: string,
        detailBottom: string,
        statWheelEnabled: boolean,
        detailStats: UIDetailStat[]
    );

    // Implementation
    constructor(
        detailTop: string,
        detailMid: string,
        detailBottom: string,
        arg4?: UIDetailImage | boolean,
        arg5?: UIDetailStat[]
    ) {
        super();

        this.id = 1;

        this.DetailTop = detailTop;
        this.DetailMid = detailMid;
        this.DetailBottom = detailBottom;

        this.StatWheelEnabled = false;
        this.DetailLeft = new UIDetailImage("", "", Vector2.zero, Vector2.zero);
        this.DetailStats = [];

        if (arg4 instanceof UIDetailImage) {
            this.DetailLeft = arg4;
        } else if (typeof arg4 === "boolean") {
            this.StatWheelEnabled = arg4;
            this.DetailStats = arg5 ?? [];
        }
    }
    public UpdateLabels(top: string, mid: string, bot: string, leftDetail: UIDetailImage) {
        this.DetailTop = top;
        this.DetailMid = mid;
        this.DetailBottom = bot;
        this.DetailLeft = leftDetail == undefined ? new UIDetailImage("", "", Vector2.zero, Vector2.zero) : leftDetail;
        if (this.ParentMenu != undefined && this.ParentMenu.Visible) {
            let wid = this.ParentMenu.Windows.indexOf(this);
            if (!this.StatWheelEnabled)
                ScaleformUI.Scaleforms._ui?.callFunction(
                    "UPDATE_DETAILS_WINDOW_VALUES",
                    wid,
                    this.DetailBottom,
                    this.DetailMid,
                    this.DetailTop,
                    this.DetailLeft.Txd,
                    this.DetailLeft.Txn,
                    this.DetailLeft.Pos.x,
                    this.DetailLeft.Pos.y,
                    this.DetailLeft.Size.x,
                    this.DetailLeft.Size.y
                );
            else
                ScaleformUI.Scaleforms._ui?.callFunction(
                    "UPDATE_DETAILS_WINDOW_VALUES",
                    wid,
                    this.DetailBottom,
                    this.DetailMid,
                    this.DetailTop,
                    "statWheel"
                );
        }
    }

    public AddStatsListToWheel(stats: UIDetailStat[]) {
        if (this.StatWheelEnabled) {
            this.DetailStats = stats;
            if (this.ParentMenu != undefined && this.ParentMenu.Visible) {
                let wid = this.ParentMenu.Windows.indexOf(this);
                stats.forEach((value: UIDetailStat) => {
                    ScaleformUI.Scaleforms._ui?.callFunction(
                        "ADD_STATS_DETAILS_WINDOW_STATWHEEL",
                        wid,
                        value.Percentage,
                        value.HudColor
                    );
                });
            }
        }
    }

    public AddStatSingleToWheel(stat: UIDetailStat) {
        if (this.StatWheelEnabled) {
            this.DetailStats.push(stat);
            if (this.ParentMenu != undefined && this.ParentMenu.Visible) {
                let wid = this.ParentMenu.Windows.indexOf(this);
                ScaleformUI.Scaleforms._ui?.callFunction(
                    "ADD_STATS_DETAILS_WINDOW_STATWHEEL",
                    wid,
                    stat.Percentage,
                    stat.HudColor
                );
            }
        }
    }

    public UpdateStatsToWheel(): void;
    public UpdateStatsToWheel(stats: UIDetailStat[]): void;
    public UpdateStatsToWheel(stats?: UIDetailStat[]) {
        const statsToApply = stats ?? this.DetailStats;
        if (this.StatWheelEnabled) {
            if (this.DetailStats.length != statsToApply.length) {
                throw new Error("You cannot add items using this function");
            }
            this.DetailStats = statsToApply;
            if (this.ParentMenu != undefined && this.ParentMenu.Visible) {
                let wid = this.ParentMenu.Windows.indexOf(this);
                statsToApply.forEach((value: UIDetailStat) => {
                    ScaleformUI.Scaleforms._ui?.callFunction(
                        "UPDATE_STATS_DETAILS_WINDOW_STATWHEEL",
                        wid,
                        this.DetailStats.indexOf(value),
                        value.Percentage,
                        value.HudColor
                    );
                });
            }
        }
    }

    public RemoveStatToWheel(stat: UIDetailStat): void;
    public RemoveStatToWheel(idx: number): void;
    public RemoveStatToWheel(statOrIdx: UIDetailStat | number) {
        const idx =
            typeof statOrIdx === "number"
                ? statOrIdx
                : this.DetailStats.findIndex(
                      (s) => s.Percentage === statOrIdx.Percentage && s.HudColor === statOrIdx.HudColor
                  );
        if (idx < 0 || idx >= this.DetailStats.length) return;
        this.DetailStats.splice(idx, 1);
        if (this.ParentMenu != undefined && this.ParentMenu.Visible) {
            let wid = this.ParentMenu.Windows.indexOf(this);
            ScaleformUI.Scaleforms._ui?.callFunction("REMOVE_STATS_DETAILS_WINDOW_STATWHEEL", wid, idx);
        }
    }
}
