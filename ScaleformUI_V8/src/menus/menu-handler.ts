import { BreadcrumbsHandler } from "./breadcrumbs-handler";
import { BaseMenu } from "./menu.base";
import { UIMenu } from "./UIMenu/uimenu";
import { ScaleformUI } from "scaleforms/scaleformui/main";

export class MenuHandler {
    static _currentMenu: BaseMenu | null = null;
    static _currentPauseMenu: BaseMenu | null = null;
    static ableToDraw = false;

    static SwitchTo(
        currentMenu: BaseMenu,
        newMenu: BaseMenu,
        newMenuCurrentSelection?: number,
        inheritOldMenuParams?: boolean,
        data?: any
    ) {
        if (currentMenu == null) throw "The menu you're switching from cannot be null";
        if (currentMenu != this._currentMenu) throw "The menu you're switching from must be opened";
        if (newMenu == null) throw "The menu you're switching to cannot be null";
        if (newMenu == currentMenu) throw "You cannot switch a menu to itself";
        if (newMenu instanceof UIMenu && newMenu.Items.length === 0) throw "You cannot switch to an empty menu";
        if (newMenu.Visible) throw "The menu you're switching to is already open";

        if (BreadcrumbsHandler.SwitchInProgress) return;
        BreadcrumbsHandler.SwitchInProgress = true;

        if (newMenuCurrentSelection == null) newMenuCurrentSelection = 0;
        if (currentMenu instanceof UIMenu && newMenu instanceof UIMenu) {
            const newUIMenu = newMenu as UIMenu;
            const old = currentMenu as UIMenu;
            if (inheritOldMenuParams == null) {
                inheritOldMenuParams = false;
            }
            if (inheritOldMenuParams) {
                newUIMenu._customTexture = [...old._customTexture] as [string, string];
                newUIMenu.Offset = old.Offset;
                newUIMenu.Glare = old.Glare;
                newUIMenu.MaxItemsOnScreen = old.MaxItemsOnScreen;
                newUIMenu.EnableAnimation = old.EnableAnimation;
                newUIMenu.AnimationType = old.AnimationType;
                newUIMenu.BuildingAnimation = old.BuildingAnimation;
                newUIMenu.ScrollingType = old.ScrollingType;
                newUIMenu.SetMouse(
                    old.MouseControlsEnabled,
                    old.MouseEdgeEnabled,
                    old.MouseWheelControlEnabled,
                    old.ResetCursorOnOpen,
                    old.leftClickEnabled
                );
                newUIMenu.Enabled3DAnimations = old.Enabled3DAnimations;
                newUIMenu.fadingTime = old.fadingTime;
            }
            newUIMenu.CurrentSelection = newMenuCurrentSelection;
        }
        if (currentMenu instanceof UIMenu) {
            currentMenu.fadeOutMenu();
        }
        currentMenu.Visible = false;
        newMenu.Visible = true;
        if (newMenu instanceof UIMenu) {
            newMenu.fadeInItems();
        }
        BreadcrumbsHandler.Forward(newMenu, data);
        BreadcrumbsHandler.SwitchInProgress = false;
    }

    static ProcessMenus() {
        this.Draw();
        this.ProcessControl();
        this.ProcessMouse();
    }

    static ProcessControl() {
        if (this._currentMenu !== null && this._currentPauseMenu === null) {
            this._currentMenu.processControl();
        } else if (this._currentPauseMenu !== null) {
            this._currentPauseMenu.processControl();
        }
    }

    static ProcessMouse() {
        if (this._currentMenu !== null && this._currentPauseMenu === null) {
            this._currentMenu.processMouse();
        } else if (this._currentPauseMenu !== null) {
            this._currentPauseMenu.processMouse();
        }
    }

    static Draw() {
        if (this._currentMenu !== null && this._currentPauseMenu === null) {
            this._currentMenu.draw();
        } else if (this._currentPauseMenu !== null) {
            this._currentPauseMenu.draw();
        }
    }

    static CloseAndClearHistory() {
        this.ableToDraw = false;
        if (this._currentMenu !== null && this._currentMenu.Visible) {
            this._currentMenu.Visible = false;
        }
        if (this._currentPauseMenu !== null && this._currentPauseMenu.Visible) {
            this._currentPauseMenu.Visible = false;
        }
        BreadcrumbsHandler.Clear();
        ScaleformUI.Scaleforms.InstructionalButtons.ClearButtonList();
    }

    static get IsAnyMenuOpen(): boolean {
        return (this._currentMenu != null && this._currentMenu.Visible) || BreadcrumbsHandler.Count > 0;
    }

    static IsAnyPauseMenuOpen(): boolean {
        return this._currentPauseMenu !== null && this._currentPauseMenu.Visible;
    }
}
