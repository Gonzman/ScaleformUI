import { Vec2 } from "math/vector2";
import { Vector3 } from "../math/vector3";

//Wurde noch nicht von einen anderen Code implementiert
export class PointExtensions {
    public static addPoints(left: Vec2, right: Vec2): Vec2 {
        return { x: left.x + right.x, y: left.y + right.y };
    }

    public static subtractPoints(left: Vec2, right: Vec2): Vec2 {
        return { x: left.x - right.x, y: left.y - right.y };
    }

    public static addPointsFloat(left: Vec2, right: Vec2): Vec2 {
        return { x: left.x + right.x, y: left.y + right.y };
    }

    public static subtractPointsFloat(left: Vec2, right: Vec2): Vec2 {
        return { x: left.x - right.x, y: left.y - right.y };
    }

    public static clamp(val: number, min: number, max: number): number {
        if (val > max) return max;
        if (val < min) return min;
        return val;
    }

    public static linearVectorLerp(start: Vector3, end: Vector3, currentTime: number, duration: number): Vector3 {
        return new Vector3(
            PointExtensions.linearFloatLerp(start.x, end.x, currentTime, duration),
            PointExtensions.linearFloatLerp(start.y, end.y, currentTime, duration),
            PointExtensions.linearFloatLerp(start.z, end.z, currentTime, duration)
        );
    }

    public static vectorLerp(
        start: Vector3,
        end: Vector3,
        currentTime: number,
        duration: number,
        easingFunc: (start: number, end: number, currentTime: number, duration: number) => number
    ): Vector3 {
        return new Vector3(
            easingFunc(start.x, end.x, currentTime, duration),
            easingFunc(start.y, end.y, currentTime, duration),
            easingFunc(start.z, end.z, currentTime, duration)
        );
    }

    public static linearFloatLerp(start: number, end: number, currentTime: number, duration: number): number {
        const change = end - start;
        return (change * currentTime) / duration + start;
    }

    public static quadraticEasingLerp(start: number, end: number, currentTime: number, duration: number): number {
        const change = end - start;
        let time = currentTime / (duration / 2);

        if (time < 1) {
            return (change / 2) * time * time + start;
        }

        time -= 1;
        return (-change / 2) * (time * (time - 2) - 1) + start;
    }
}
