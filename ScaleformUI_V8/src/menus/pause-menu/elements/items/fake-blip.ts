import { Vector3 } from "math/vector3";

// FakeBlip - Transpiled from C# FakeBlip.cs
export enum BlipColor {
    White = 0,
}

export enum BlipSprite {
    Standard = 1,
}

export class FakeBlip {
    public Sprite: number = 0;
    public Position: Vector3 = Vector3.zero();
    public Scale: number = 0;
    public Color: BlipColor = BlipColor.White;

    constructor();
    constructor(sprite: number, position: Vector3);
    constructor(sprite: BlipSprite, position: Vector3);
    constructor(sprite?: number | BlipSprite, position?: Vector3) {
        if (typeof sprite === "number") {
            this.Sprite = sprite;
        }
        if (position) {
            this.Position = position;
        }
    }
}

export default FakeBlip;
