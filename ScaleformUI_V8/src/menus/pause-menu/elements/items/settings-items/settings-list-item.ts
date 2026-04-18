import { SettingsItem, SettingsItemType } from "./settings-item";

export type SettingsListItemChanged = (item: SettingsListItem, value: number, listItem: string) => void;
export type SettingsListItemSelected = (item: SettingsListItem, value: number, listItem: string) => void;

export class SettingsListItem extends SettingsItem {
    private itemIndex: number;
    public ListItems: unknown[];

    private listChangedCallbacks: SettingsListItemChanged[] = [];
    private listSelectedCallbacks: SettingsListItemSelected[] = [];

    constructor(label: string, items: unknown[], startIndex: number) {
        super(label, "");
        this.ItemType = SettingsItemType.ListItem;
        this._itemId = 1;
        this.ListItems = items;
        this.itemIndex = 0;
        this.ItemIndex = startIndex;
    }

    public get ItemIndex(): number {
        return this.itemIndex;
    }

    public set ItemIndex(value: number) {
        this.itemIndex = this.normalizeIndex(value);
        this.updateParentSlot();
        this.ListChanged();
    }

    public get Index(): number {
        return this.ItemIndex;
    }

    public set Index(value: number) {
        this.ItemIndex = value;
    }

    public get CurrentListItem(): string {
        return this.CurrentItem();
    }

    public set CurrentListItem(value: string) {
        if (!this.ListItems.length) {
            return;
        }

        const foundIndex = this.ListItems.findIndex((item) => `${item}` === value);
        if (foundIndex >= 0) {
            this.ItemIndex = foundIndex;
        }
    }

    public CurrentItem(): string {
        if (!this.ListItems.length) {
            return "";
        }

        return `${this.ListItems[this.itemIndex]}`;
    }

    public OnListItemChanged(callback: SettingsListItemChanged): void {
        this.listChangedCallbacks.push(callback);
    }

    public OnListItemSelected(callback: SettingsListItemSelected): void {
        this.listSelectedCallbacks.push(callback);
    }

    public listChangedEmit(): void {
        this.ListChanged();
    }

    public listSelectedEmit(): void {
        this.ListSelected();
    }

    public ListSelected(): void {
        const currentItem = this.CurrentItem();
        for (const callback of this.listSelectedCallbacks) {
            callback(this, this.itemIndex, currentItem);
        }
    }

    public ListChanged(): void {
        const currentItem = this.CurrentItem();
        for (const callback of this.listChangedCallbacks) {
            callback(this, this.itemIndex, currentItem);
        }
    }

    private normalizeIndex(value: number): number {
        if (!this.ListItems.length) {
            return 0;
        }

        if (value < 0) {
            return this.ListItems.length - 1;
        }

        if (value >= this.ListItems.length) {
            return 0;
        }

        return value;
    }
}

export default SettingsListItem;
