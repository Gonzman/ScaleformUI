import { MenuHandler } from "menus/menu-handler";
import { InstructionalButton } from "scaleforms/instructional-buttons/instructionalbutton";

// PauseMenuBase - Transpiled from C# PauseMenuBase.cs
// TODO: If other pause-menu classes require additional members, add them here.
export class PauseMenuBase {
    private visible: boolean = false;

    // Players won't be able to close the menu if this is false! Make sure players can close the menu in some way!
    public CanPlayerCloseMenu: boolean = true;

    public InstructionalButtons: InstructionalButton[] = [];

    public set Visible(state: boolean) {
        this.visible = state;
        MenuHandler.ableToDraw = state;
    }

    public get Visible(): boolean {
        return this.visible;
    }

    public ProcessControls(): void {
        // override in derived classes
    }

    public ProcessMouse(): void {
        // override in derived classes
    }

    public processControl(): void {
        this.ProcessControls();
    }

    public processMouse(): void {
        this.ProcessMouse();
    }

    public draw(): void {
        this.Draw();
    }

    public Draw(): void {
        // Prevent certain controls while the pause menu is drawn (mirrors C# API.DisableControlAction calls)
        DisableControlAction(0, 199, true);
        DisableControlAction(0, 200, true);
        DisableControlAction(1, 199, true);
        DisableControlAction(1, 200, true);
        DisableControlAction(2, 199, true);
        DisableControlAction(2, 200, true);
    }
}
