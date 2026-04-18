import { Vector3 } from "math/vector3";

export interface IMinimapRaceCheckpoint {
    Position: Vector3;
    BlipSprite: number;
    Scale: number;
    Color: number;
    Number: boolean;
}

export class MinimapRaceCheckpoint implements IMinimapRaceCheckpoint {
    public Position: Vector3 = Vector3.zero();
    public BlipSprite: number = 0;
    public Scale: number = 0;
    public Color: number = 0;
    public Number: boolean = false;

    constructor();
    constructor(position: Vector3, blipSprite: number);
    constructor(blipSprite: number, position: Vector3);
    constructor(positionOrBlipSprite?: Vector3 | number, blipSpriteOrPosition?: number | Vector3) {
        if (positionOrBlipSprite instanceof Vector3 && typeof blipSpriteOrPosition === "number") {
            this.Position = positionOrBlipSprite;
            this.BlipSprite = blipSpriteOrPosition;
            return;
        }

        if (typeof positionOrBlipSprite === "number" && blipSpriteOrPosition instanceof Vector3) {
            this.BlipSprite = positionOrBlipSprite;
            this.Position = blipSpriteOrPosition;
        }
    }
}

export default MinimapRaceCheckpoint;
