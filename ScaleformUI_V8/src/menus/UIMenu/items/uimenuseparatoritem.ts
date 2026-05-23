import { BadgeStyle } from "elements/badge";
import { UIMenuItem } from "./uimenuitem";

export class UIMenuSeparatorItem extends UIMenuItem {
    public Jumpable: boolean;
    constructor(title: string, jumpable: boolean) {
        super(title, "");
        this.Jumpable = jumpable;
        this._itemId = 6;
    }

    public override SetLeftBadge(badge: BadgeStyle) {
        throw new Error("UIMenuSeparatorItem cannot have a left badge.");
    }

    public override SetRightBadge(badge: BadgeStyle) {
        throw new Error("UIMenuSeparatorItem cannot have a right badge.");
    }

    public override SetRightLabel(text: string) {
        throw new Error("UIMenuSeparatorItem cannot have a right label.");
    }
}
