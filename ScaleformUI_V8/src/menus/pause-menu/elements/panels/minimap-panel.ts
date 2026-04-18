import { Vector2 } from "math/vector2";
import { ScaleformUI } from "scaleforms/scaleformui/main";
import type { MissionDetailsPanel } from "./mission-details-panel";
import { PLT_COLUMNS } from "../columns/pm-column";
import { FakeBlip, MinimapRoute } from "../items";

interface TabLike {
    Visible?: boolean;
    CurrentColumn?: {
        type?: number;
        CurrentItem?: {
            KeepPanelVisible?: boolean;
            Dispose?: () => void;
            CreateClonedPed?: () => void;
        };
    };
    RightColumn?: MissionDetailsPanel | { ColumnVisible?: boolean } | null;
    bigPic?: boolean;
}

export class MinimapPanel {
    public Parent: { Visible?: boolean } | null = null;
    public ParentTab: TabLike | null = null;
    public HidePedBlip: boolean = true;
    internalMapPosition: Vector2 = Vector2.zero;
    internalZoomDistance: number = 0;
    internalEnabled: boolean = false;
    private turnedOn: boolean = false;
    private IsRadarVisible: boolean = !IsRadarHidden();
    public localCoronaMapStage: number = -1;

    public MinimapRoute: MinimapRoute;
    public MinimapBlips: FakeBlip[];

    constructor(parentTab: TabLike | null = null) {
        this.MinimapBlips = [];
        this.MinimapRoute = new MinimapRoute();
        this.ParentTab = parentTab;
    }

    public get Enabled(): boolean {
        return this.internalEnabled;
    }

    public set Enabled(value: boolean) {
        const currentColumn = this.ParentTab?.CurrentColumn;
        if (this.Parent?.Visible && currentColumn?.CurrentItem?.KeepPanelVisible) {
            return;
        }

        this.internalEnabled = value;
        if (this.internalEnabled) {
            if (this.localCoronaMapStage === -1) {
                this.localCoronaMapStage = 0;
            }
        } else {
            this.localCoronaMapStage = -1;
            if (this.turnedOn) {
                this.IsRadarVisible = !IsRadarHidden();
                DisplayRadar(false);
                RaceGalleryFullscreen(false);
                this.turnedOn = false;
            }
        }

        if (this.Parent?.Visible && this.ParentTab?.Visible) {
            if (value) {
                currentColumn?.CurrentItem?.Dispose?.();
            } else {
                currentColumn?.CurrentItem?.CreateClonedPed?.();
            }
            const rightColumn = this.ParentTab.RightColumn as { ColumnVisible?: boolean } | null | undefined;
            if (rightColumn) {
                rightColumn.ColumnVisible = !this.internalEnabled && currentColumn?.type !== PLT_COLUMNS.PLAYERS;
            }
        }
    }

    public InitializeMapSize(): void {
        let top = Number.NEGATIVE_INFINITY;
        let bottom = Number.POSITIVE_INFINITY;
        let left = Number.POSITIVE_INFINITY;
        let right = Number.NEGATIVE_INFINITY;

        for (const checkPoint of this.MinimapRoute.CheckPoints) {
            top = Math.max(top, checkPoint.Position.y);
            bottom = Math.min(bottom, checkPoint.Position.y);
            left = Math.min(left, checkPoint.Position.x);
            right = Math.max(right, checkPoint.Position.x);
        }

        top = Math.max(top, this.MinimapRoute.StartPoint.Position.y);
        bottom = Math.min(bottom, this.MinimapRoute.StartPoint.Position.y);
        left = Math.min(left, this.MinimapRoute.StartPoint.Position.x);
        right = Math.max(right, this.MinimapRoute.StartPoint.Position.x);

        top = Math.max(top, this.MinimapRoute.EndPoint.Position.y);
        bottom = Math.min(bottom, this.MinimapRoute.EndPoint.Position.y);
        left = Math.min(left, this.MinimapRoute.EndPoint.Position.x);
        right = Math.max(right, this.MinimapRoute.EndPoint.Position.x);

        this.internalMapPosition = new Vector2((left + right) / 2, (top + bottom) / 2);

        const distanceX = Math.abs(left - right);
        const distanceY = Math.abs(top - bottom);
        this.internalZoomDistance = distanceX > distanceY ? distanceX / 1.5 : distanceY / 2.0;

        this.RefreshMapPosition(this.internalMapPosition);
        LockMinimapAngle(0);
    }

    public RefreshMapPosition(position: Vector2): void {
        this.internalMapPosition = Vector2.clone(position);
        if (this.ParentTab?.bigPic) {
            this.internalZoomDistance = 600;
        } else if (this.ParentTab) {
            this.internalZoomDistance = 1200;
        }
    }

    public SetupBlips(): void {
        for (const blip of this.MinimapBlips) {
            RaceGalleryNextBlipSprite(blip.Sprite);
            const handle = RaceGalleryAddBlip(blip.Position.x, blip.Position.y, blip.Position.z);
            if (blip.Scale > 0) {
                SetBlipScale(handle, blip.Scale);
            }
            SetBlipColour(handle, blip.Color as number);
        }
    }

    public MaintainMap(): void {
        switch (this.localCoronaMapStage) {
            case 0:
                this.InitializeMap();
                break;
            case 1:
                void this.ProcessMap();
                break;
        }
    }

    public async ProcessMap(): Promise<void> {
        if (this.internalEnabled) {
            if (!this.turnedOn) {
                DisplayRadar(this.IsRadarVisible);
                RaceGalleryFullscreen(true);
                this.turnedOn = true;
            }
        } else if (this.turnedOn) {
            this.IsRadarVisible = !IsRadarHidden();
            DisplayRadar(false);
            RaceGalleryFullscreen(false);
            this.turnedOn = false;
            this.Dispose();
        }

        if (this.HidePedBlip) {
            SetPlayerBlipPositionThisFrame(-5000, -5000);
        }
        this.RefreshZoom();
    }

    public InitializeMapDisplay(): void {
        DeleteWaypoint();
        SetWaypointOff();
        ClearGpsCustomRoute();
        ClearGpsMultiRoute();
        SetPoliceRadarBlips(false);

        this.MinimapRoute.SetupCustomRoute();
        this.SetupBlips();
    }

    public InitializeMap(): void {
        this.InitializeMapSize();
        this.InitializeMapDisplay();
        this.RefreshZoom();
        this.localCoronaMapStage = 1;
    }

    public RefreshZoom(): void {
        if (this.internalZoomDistance !== 0) {
            SetRadarZoomToDistance(this.internalZoomDistance);
        }
        LockMinimapPosition(this.internalMapPosition.x, this.internalMapPosition.y);
    }

    public Dispose(): void {
        this.localCoronaMapStage = 0;
        this.internalEnabled = false;
        const setMinimapState = (globalThis as Record<string, unknown>)["N_0x2de6c5e2e996f178"] as
            | ((state: number) => void)
            | undefined;
        setMinimapState?.(0);
        SetPoliceRadarBlips(true);
        DisplayRadar(this.IsRadarVisible);
        RaceGalleryFullscreen(false);
        ClearRaceGalleryBlips();
        this.internalZoomDistance = 0;
        SetRadarZoom(0);
        SetGpsCustomRouteRender(false, 18, 30);
        SetGpsMultiRouteRender(false);
        UnlockMinimapPosition();
        UnlockMinimapAngle();
        DeleteWaypoint();
        ClearGpsCustomRoute();
        ClearGpsFlags();
        this.MinimapBlips = [];
        this.MinimapRoute = new MinimapRoute();
        SetBigmapActive(false, false);
    }

    public ClearMinimap(): void {
        this.MinimapBlips = [];
        this.MinimapRoute = new MinimapRoute();
        this.localCoronaMapStage = 0;
        this.internalZoomDistance = 0;
        ClearRaceGalleryBlips();
        SetRadarZoom(0);
        SetGpsCustomRouteRender(false, 18, 30);
        DeleteWaypoint();
        ClearGpsCustomRoute();
        ClearGpsFlags();
        SetBigmapActive(false, false);
    }
}

export default MinimapPanel;
