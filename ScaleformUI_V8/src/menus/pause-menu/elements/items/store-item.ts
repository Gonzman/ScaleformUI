import PauseMenuItem from "./pause-menu-item";
import type { PauseMenuColumnLike } from "./pause-menu-item";

export type StoreItemActivated = (tab: unknown, column: unknown, index: number) => void;

export class StoreItem extends PauseMenuItem {
    public textureName: string;
    public textureDictionary: string;
    public description: string = "";
    public override ParentColumn: PauseMenuColumnLike | null = null;
    public Enabled: boolean = true;
    public Hovered: boolean = false;
    private activatedCallbacks: StoreItemActivated[] = [];

    constructor(textureDictionary: string, textureName: string, description: string = "") {
        super("");
        this.textureName = textureName;
        this.textureDictionary = textureDictionary;
        this.description = description;
    }

    public get TextureDictionary(): string {
        return this.textureDictionary;
    }

    public get TextureName(): string {
        return this.textureName;
    }

    public get Description(): string {
        return this.description;
    }

    public override get Selected(): boolean {
        return super.Selected;
    }

    public override set Selected(value: boolean) {
        super.Selected = value;
        if (!this.ParentColumn?.visible) {
            return;
        }

        const index = this.ParentColumn.Items.indexOf(this);
        if (index >= 0) {
            this.ParentColumn.UpdateSlot?.(index);
        }
    }

    public onActivated(callback: StoreItemActivated): void {
        this.activatedCallbacks.push(callback);
    }

    public Activate(tab: unknown): void {
        const index = this.ParentColumn ? this.ParentColumn.Items.indexOf(this) : -1;
        for (const callback of this.activatedCallbacks) {
            callback(tab, this.ParentColumn, index);
        }
    }
}

export default StoreItem;
