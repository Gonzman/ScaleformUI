import { SColor } from "elements/scolor";
import { UIMenu } from "menus/UIMenu/uimenu";
import { PM_Column, PM_COLUMNS } from "menus/pause-menu/elements/columns/pm-column";
import { MinimapPanel } from "menus/pause-menu/elements/panels/minimap-panel";
import { PlayerListTab } from "menus/pause-menu/tabs/player-list-tab";
import { TabView } from "menus/pause-menu/tab-view";
import { InstructionalButton, InputGroup } from "scaleforms/instructional-buttons/instructionalbutton";

export type LobbyMenuOpenEvent = (menu: MainView) => void;
export type LobbyMenuCloseEvent = (menu: MainView) => void;

export class MainView extends TabView {
    public declare coronaTab: PlayerListTab;
    private lobbyOpenHandlers: LobbyMenuOpenEvent[] = [];
    private lobbyCloseHandlers: LobbyMenuCloseEvent[] = [];

    constructor(title: string, subtitle = "", sideTop = "", sideMid = "", sideBot = "") {
        super(title, subtitle, sideTop, sideMid, sideBot);
        this.IsCorona = true;
        this.coronaTab = new PlayerListTab("corona for mainview", SColor.HUD_None);
        this.AddTab(this.coronaTab);
        this.InstructionalButtons = [
            new InstructionalButton(UIMenu._selectTextLocalized, -1, 176, 176, InputGroup.UNUSED),
            new InstructionalButton(UIMenu._backTextLocalized, -1, 177, 177, InputGroup.UNUSED),
        ];
    }

    public get Minimap(): MinimapPanel | null {
        return this.coronaTab.Minimap;
    }

    public SelectColumn(column: number | PM_COLUMNS): void {
        this.coronaTab.SwitchColumn(column);
    }

    public SetupLeftColumn(column: PM_Column): void { this.coronaTab.SetupLeftColumn(column); }
    public SetupCenterColumn(column: PM_Column): void { this.coronaTab.SetupCenterColumn(column); }
    public SetupRightColumn(column: PM_Column): void { this.coronaTab.SetupRightColumn(column); }

    public onLobbyMenuOpen(handler: LobbyMenuOpenEvent): void { this.lobbyOpenHandlers.push(handler); }
    public onLobbyMenuClose(handler: LobbyMenuCloseEvent): void { this.lobbyCloseHandlers.push(handler); }

    public override SendPauseMenuOpen(): void {
        super.SendPauseMenuOpen();
        this.lobbyOpenHandlers.forEach((h) => h(this));
    }

    public override SendPauseMenuClose(): void {
        super.SendPauseMenuClose();
        this.lobbyCloseHandlers.forEach((h) => h(this));
    }
}

export default MainView;
