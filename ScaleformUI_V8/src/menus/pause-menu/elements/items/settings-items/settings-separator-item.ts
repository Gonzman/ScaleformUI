import { BadgeStyle } from "elements/badge";
import { SettingsItem, SettingsItemType } from "./settings-item";

export class SettingsSeparatorItem extends SettingsItem {
    public readonly IsJumpable: boolean = false;
    public Jumpable: boolean = this.IsJumpable;

    constructor(label: string = "") {
        super(label, "");
        this._itemId = 9999;
        this.ItemType = label.length > 0 ? SettingsItemType.Separator : SettingsItemType.Empty;
    }

    public override SetLeftBadge(_badge: BadgeStyle | number): void {
        throw new Error("SettingsSeparatorItem cannot have a left badge.");
    }

    public override SetRightBadge(_badge: BadgeStyle | number): void {
        throw new Error("SettingsSeparatorItem cannot have a right badge.");
    }

    public override SetRightLabel(_label: string): void {
        throw new Error("SettingsSeparatorItem cannot have a right label.");
    }
}

export default SettingsSeparatorItem;
