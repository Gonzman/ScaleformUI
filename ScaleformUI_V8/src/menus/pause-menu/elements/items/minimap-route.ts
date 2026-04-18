import { HudColor } from "elements/color";
import MinimapBaseItem from "./minimap-base-item";
import { MinimapRaceCheckpoint } from "./minimap-race-checkpoint";

export enum GPSFlags {
    NONE = 0,
    IGNORE_ONE_WAY = 1,
    FOLLOW_RULES = 2,
    AVOID_HIGHWAY = 4,
    NO_ROUTE_SHIFT = 8,
    CUSTOM_PROXIMITY = 16,
    NO_PULL_PATH_TO_RIGHT_LANE = 32,
    AVOID_OFF_ROAD = 64,
    IGNORE_DESTINATION_Z = 128
}

export class MinimapRoute extends MinimapBaseItem {
    public StartPoint: MinimapRaceCheckpoint = new MinimapRaceCheckpoint();
    public EndPoint: MinimapRaceCheckpoint = new MinimapRaceCheckpoint();
    public CheckPoints: MinimapRaceCheckpoint[] = [];
    public RadarThickness: number = 18;
    public MapThickness: number = 30;
    public FollowStreet: boolean = true;
    public RouteColor: HudColor = HudColor.HUD_COLOUR_FREEMODE;

    public SetupCustomRoute(): void {
        if (this.StartPoint.Position.x === 0 && this.StartPoint.Position.y === 0 && this.StartPoint.Position.z === 0) {
            return;
        }

        ClearGpsFlags();
        SetGpsFlags(GPSFlags.NO_ROUTE_SHIFT, 0.0);
        StartGpsCustomRoute(this.RouteColor, true, true);

        RaceGalleryNextBlipSprite(this.StartPoint.BlipSprite);
        RaceGalleryAddBlip(this.StartPoint.Position.x, this.StartPoint.Position.y, this.StartPoint.Position.z);

        AddPointToGpsCustomRoute(this.StartPoint.Position.x, this.StartPoint.Position.y, this.StartPoint.Position.z);

        for (let i = 0; i < this.CheckPoints.length; i++) {
            const checkPoint = this.CheckPoints[i];
            RaceGalleryNextBlipSprite(checkPoint.BlipSprite);
            const blip = RaceGalleryAddBlip(checkPoint.Position.x, checkPoint.Position.y, checkPoint.Position.z);
            if (checkPoint.Scale > 0) SetBlipScale(blip, checkPoint.Scale);
            if (checkPoint.Number) SetBlipColour(blip, checkPoint.Color);
            else HideNumberOnBlip(blip);
            AddPointToGpsCustomRoute(checkPoint.Position.x, checkPoint.Position.y, checkPoint.Position.z);
        }

        RaceGalleryNextBlipSprite(this.EndPoint.BlipSprite);
        RaceGalleryAddBlip(this.EndPoint.Position.x, this.EndPoint.Position.y, this.EndPoint.Position.z);
        AddPointToGpsCustomRoute(this.EndPoint.Position.x, this.EndPoint.Position.y, this.EndPoint.Position.z);

        SetGpsCustomRouteRender(true, this.RadarThickness, this.MapThickness);
    }
}

export default MinimapRoute;
