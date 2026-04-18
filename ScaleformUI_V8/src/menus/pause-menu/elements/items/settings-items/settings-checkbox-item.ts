import { UIMenuCheckboxStyle } from "menus/UIMenu/items/uimenucheckboxitem";
import { SettingsItem, SettingsItemType } from "./settings-item";

export type SettingsCheckboxChanged = (item: SettingsCheckboxItem, value: boolean) => void;

export class SettingsCheckboxItem extends SettingsItem {
    private isChecked: boolean;
    public CheckBoxStyle: UIMenuCheckboxStyle;

    private checkboxCallbacks: SettingsCheckboxChanged[] = [];

    constructor(label: string, style: UIMenuCheckboxStyle, checked: boolean) {
        super(label, "");
        this.ItemType = SettingsItemType.CheckBox;
        this._itemId = 2;
        this.CheckBoxStyle = style;
        this.isChecked = checked;
    }

    public get IsChecked(): boolean {
        return this.isChecked;
    }

    public set IsChecked(value: boolean) {
        this.isChecked = value;
        this.updateParentSlot();
        this.CheckboxChanged();
    }

    public get Checked(): boolean {
        return this.IsChecked;
    }

    public set Checked(value: boolean) {
        this.IsChecked = value;
    }

    public OnCheckboxChange(callback: SettingsCheckboxChanged): void {
        this.checkboxCallbacks.push(callback);
    }

    public checkEmit(): void {
        this.CheckboxChanged();
    }

    public CheckboxChanged(): void {
        for (const callback of this.checkboxCallbacks) {
            callback(this, this.isChecked);
        }
    }
}

export default SettingsCheckboxItem;
