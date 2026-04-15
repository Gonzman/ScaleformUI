import { Delay } from "helpers/loaders";
import { Marker } from "./marker";
import { Vec3, Vector3 } from "math/vector3";

class MarkersHandler {
    private static instance: MarkersHandler;

    private list: Marker[] = [];

    private constructor() {
        setTick(async () => await this.handler());
    }

    async handler() {
        if (this.list.length == 0) return;

        const filterMarker = this.filterMarkers();
        for (let i = 0; i < filterMarker.length; i++) {
            filterMarker[i].draw();
        }

        await Delay(0);
    }

    private filterMarkers(): Marker[] {
        return this.list.filter((x) =>
            isInRange(Vector3.fromArr(GetEntityCoords(PlayerPedId(), true)), x.pos, x.distance)
        );
    }

    public addMarker(marker: Marker) {
        if (!this.list.includes(marker)) {
            this.list.push(marker);
        }
    }

    public removeMarker(marker: Marker) {
        if (this.list.includes(marker)) {
            this.list = this.list.filter((x) => x != marker);
        }
    }
}

//TODO: EntityClass
function isInRange(entityCoords: Vector3, objectCoords: Vector3, range: number) {
    if (entityCoords.subtract(objectCoords).length > range) {
        return false;
    }

    return true;
}
