import { Delay } from "helpers/loaders";
import PauseMenuItem from "./pause-menu-item";
import type { PauseMenuColumnLike } from "./pause-menu-item";

interface PlayerStatsPanelLike {
    UpdatePanel?(overrideVisibility?: boolean): void;
    ShowColumn?(): void;
    ColumnVisible?: boolean;
}

export class LobbyItem extends PauseMenuItem {
    public _type: number = 0;
    private clonePed: number | null = null;
    private _clonePed: number | null = null;
    private _clonePedForPauseMenu: number | null = null;
    private _clonePedAsleep: boolean = true;
    private _clonePedLighting: boolean = false;
    private keepPanelVisible: boolean = false;
    public Hovered: boolean = false;
    public override ParentColumn: PauseMenuColumnLike | null = null;
    public Panel?: PlayerStatsPanelLike;

    constructor(label: string) {
        super(label);
    }

    public override get Selected(): boolean {
        return this._selected;
    }

    public override set Selected(value: boolean) {
        if (this._selected === value) {
            return;
        }

        this._selected = value;
        ClearPedInPauseMenu();
        if (value) {
            this.CreateClonedPed();
        } else {
            this.Dispose();
        }
    }

    public get KeepPanelVisible(): boolean {
        return this.keepPanelVisible;
    }

    public set KeepPanelVisible(value: boolean) {
        this.keepPanelVisible = value;
        if (this.ParentColumn?.Parent?.Visible) {
            this.Panel?.UpdatePanel?.();
        }
    }

    public get ClonePed(): number | null {
        return this.clonePed;
    }

    public set ClonePed(value: number | null) {
        this.clonePed = value;
        if (this.entityExists(this.clonePed)) {
            this.CreateClonedPed();
        } else {
            ClearPedInPauseMenu();
        }
    }

    public get ClonePedAsleep(): boolean {
        return this._clonePedAsleep;
    }

    public set ClonePedAsleep(value: boolean) {
        this._clonePedAsleep = value;
        SetPauseMenuPedSleepState(!this._clonePedAsleep);
    }

    public get ClonePedLighting(): boolean {
        return this._clonePedLighting;
    }

    public set ClonePedLighting(value: boolean) {
        this._clonePedLighting = value;
        SetPauseMenuPedLighting(this._clonePedLighting);
    }

    public SetOffline(): void {
        this.ClonePedLighting = false;
        this.ClonePedAsleep = true;
    }

    public SetOnline(): void {
        this.ClonePedLighting = true;
        this.ClonePedAsleep = false;
    }

    public CreateClonedPed(): void {
        if (this.entityExists(this.clonePed)) {
            if (!this.entityExists(this._clonePedForPauseMenu)) {
                this._clonePedForPauseMenu = ClonePed(this.clonePed as number, false, true, true);
                this.HidePed(this._clonePedForPauseMenu);
            }
        }

        if (this.ParentColumn?.visible) {
            this.Panel?.UpdatePanel?.();
            this.Panel?.ShowColumn?.();
            if (this.Panel) {
                this.Panel.ColumnVisible = true;
            }
            void this.UpdateClone();
        }
    }

    public Dispose(): void {
        ClearPedInPauseMenu();
        if (this.entityExists(this._clonePed)) {
            DeletePed(this._clonePed as number);
        }
        if (this.entityExists(this._clonePedForPauseMenu)) {
            DeletePed(this._clonePedForPauseMenu as number);
        }
        if (this.Panel) {
            this.Panel.ColumnVisible = false;
        }
    }

    public override get Enabled(): boolean {
        return this._enabled;
    }

    public override set Enabled(value: boolean) {
        this._enabled = value;
    }

    private HidePed(pedHandle: number | null): void {
        if (!this.entityExists(pedHandle)) {
            return;
        }

        SetEntityVisible(pedHandle as number, true, false);
        SetEntityInvincible(pedHandle as number, true);
        SetEntityCollision(pedHandle as number, false, false);
        FreezeEntityPosition(pedHandle as number, true);
        SetEntityAsMissionEntity(pedHandle as number, true, false);

        const [x, y, z] = GetEntityCoords(pedHandle as number, false) as [number, number, number];
        SetEntityCoordsNoOffset(pedHandle as number, x, y, z - 50.0, false, false, false);
    }

    private async UpdateClone(): Promise<void> {
        if (this.entityExists(this._clonePed)) {
            DeletePed(this._clonePed as number);
        }

        if (!this.entityExists(this.clonePed)) {
            return;
        }

        this._clonePed = ClonePed(this.clonePed as number, false, true, true);
        await Delay(1);
        this.HidePed(this._clonePed);
        GivePedToPauseMenu(this._clonePed as number, 2);
        SetPauseMenuPedSleepState(!this._clonePedAsleep);

        if (this.ParentColumn?.visible) {
            const focusLevel = this.ParentColumn.Parent?.Parent?.FocusLevel ?? 0;
            SetPauseMenuPedLighting(this._clonePedLighting && focusLevel > 0);
        }
    }

    private entityExists(entity: number | null): entity is number {
        return typeof entity === "number" && entity !== 0 && DoesEntityExist(entity);
    }
}

export default LobbyItem;
