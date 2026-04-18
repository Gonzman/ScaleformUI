import { MenuHandler } from "menus/menu-handler";
import { UIMenu } from "menus/UIMenu/uimenu";
import { InstructionalButton, InputGroup } from "scaleforms/instructional-buttons/instructionalbutton";
import { PauseMenuHandler } from "scaleforms/pausemenu/pausemenu-handler";
import { ScaleformUI } from "scaleforms/scaleformui/main";
import { PauseMenuBase } from "./pause-menu-base";
import { PM_Column } from "./elements/columns/pm-column";
import { LeftItemType } from "./items/tab-left-item";
import { BaseTab } from "./tabs/base-tab";
import { PlayerListTab } from "./tabs/player-list-tab";
import { SubmenuTab } from "./tabs/submenu-tab";
import { TextTab } from "./tabs/text-tab";

export type PauseMenuOpenEvent = (menu: TabView) => void;
export type PauseMenuCloseEvent = (menu: TabView) => void;
export type PauseMenuTabChanged = (menu: TabView, tab: BaseTab, index: number) => void;
export type PauseMenuFocusChanged = (menu: TabView, tab: BaseTab, focusLevel: number) => void;
export type ColumnItemEvent = (menu: TabView, tab: BaseTab, column: number, index: number) => void;

export class TabView extends PauseMenuBase {
    public static AUDIO_LIBRARY = "HUD_FRONTEND_DEFAULT_SOUNDSET";
    public static AUDIO_UPDOWN = "NAV_UP_DOWN";
    public static AUDIO_BACK = "BACK";

    public Title: string;
    public SubTitle: string;
    public SideStringTop: string;
    public SideStringMiddle: string;
    public SideStringBottom: string;
    public ShowStoreBackground = false;
    public StoreBackgroundAnimationSpeed = 240;
    public TabsColor = 117;
    public ShowBlur = true;
    public SetHeaderDynamicWidth = false;
    public Tabs: BaseTab[] = [];
    public TemporarilyHidden = false;
    public HideTabs = false;
    public DisplayHeader = true;
    public IsCorona = false;
    public hoveredColumn = 0;
    public focusLevel = 0;
    public coronaTab!: PlayerListTab;
    public _pause: PauseMenuHandler;
    public _loaded = false;

    private index = 0;
    private isBuilding = false;
    private controller = false;
    private changed = false;
    private tabArrowsHovered = false;
    private headerPicture: [string, string] = ["CHAR_DEFAULT", "CHAR_DEFAULT"];
    private crewPicture: [string, string] | null = null;

    private openHandlers: PauseMenuOpenEvent[] = [];
    private closeHandlers: PauseMenuCloseEvent[] = [];
    private tabChangedHandlers: PauseMenuTabChanged[] = [];
    private focusChangedHandlers: PauseMenuFocusChanged[] = [];
    private columnChangeHandlers: ColumnItemEvent[] = [];
    private columnSelectHandlers: ColumnItemEvent[] = [];

    constructor(title: string, subtitle = "", sideTop = "", sideMid = "", sideBot = "") {
        super();
        this.Title = title;
        this.SubTitle = subtitle;
        this.SideStringTop = sideTop;
        this.SideStringMiddle = sideMid;
        this.SideStringBottom = sideBot;
        this.InstructionalButtons = [
            new InstructionalButton(UIMenu._selectTextLocalized, -1, 176, 176, InputGroup.UNUSED),
            new InstructionalButton(UIMenu._backTextLocalized, -1, 177, 177, InputGroup.UNUSED),
            new InstructionalButton(GetLabelText("HUD_INPUT1C"), -1, -1, -1, InputGroup.INPUTGROUP_FRONTEND_BUMPERS)
        ];
        this._pause = ScaleformUI.Scaleforms._pauseMenu;
    }

    public get HeaderPicture(): [string, string] {
        return this.headerPicture;
    }

    public set HeaderPicture(value: [string, string]) {
        this.headerPicture = value;
        if (this.Visible) this._pause.setHeaderCharImg(value[0], value[1], true);
    }

    public get CrewPicture(): [string, string] | null {
        return this.crewPicture;
    }

    public set CrewPicture(value: [string, string] | null) {
        this.crewPicture = value;
    }

    public get FocusLevel(): number {
        return this.focusLevel;
    }

    public set FocusLevel(value: number) {
        const dir = value === this.focusLevel ? 0 : value < this.focusLevel ? -1 : 1;
        this.focusLevel += dir;
        this._pause?.setFocus(dir);
        if (dir > 0 && this.Tabs.length > 0 && this.focusLevel === 1) this.Tabs[this.Index].Focus();
        else if (dir < 0 && this.focusLevel === 0) this.Tabs[this.Index].UnFocus();
        this.SendPauseMenuFocusChange();
    }

    public get Index(): number {
        return this.index;
    }

    public set Index(value: number) {
        if (this.Tabs[this.Index]) this.Tabs[this.Index].Visible = false;
        this.index = value;
        if (this.index > this.Tabs.length - 1) this.index = 0;
        if (this.index < 0) this.index = this.Tabs.length - 1;
        if (this.Tabs[this.Index]) this.Tabs[this.Index].Visible = true;
        if (this.Visible) {
            this.BuildPauseMenu();
            this._pause.selectTab(this.index);
        }
        this.SendPauseMenuTabChange();
    }

    public get CurrentTab(): BaseTab {
        return this.Tabs[this.Index];
    }

    public override set Visible(value: boolean) {
        super.Visible = value;
        this._pause.Visible = value;
        SetPauseMenuActive(value);

        if (value) {
            ActivateFrontendMenu(GetHashKey("FE_MENU_VERSION_EMPTY_NO_BACKGROUND"), true, -1);
            if (this.ShowBlur) {
                AnimpostfxStop("PauseMenuOut");
                AnimpostfxPlay("PauseMenuIn", 0, true);
            }
            ScaleformUI.Scaleforms.InstructionalButtons.SetInstructionalButtons(this.InstructionalButtons);
            SetPlayerControl(PlayerId(), false, 0);
            this.isBuilding = true;
            if (this.Tabs[0]) this.Tabs[0].Visible = true;
            MenuHandler._currentPauseMenu = this as any;
            this.ShowHeader();
            this.BuildPauseMenu();
            this.SendPauseMenuOpen();
            if (this.IsCorona) {
                this.FocusLevel = 1;
                ScaleformUI.Scaleforms._pauseMenu.BGEnabled = this.ShowStoreBackground;
                this._pause._pauseBG?.callFunction("ANIMATE_BACKGROUND", this.StoreBackgroundAnimationSpeed);
            }
            return;
        }

        this.Tabs[this.Index]?.Minimap?.Dispose();
        if (this.ShowBlur || AnimpostfxIsRunning("PauseMenuIn")) {
            AnimpostfxStop("PauseMenuIn");
            AnimpostfxPlay("PauseMenuOut", 0, false);
        }
        this.SendPauseMenuClose();
        SetPlayerControl(PlayerId(), true, 0);
        MenuHandler._currentPauseMenu = null;
        ScaleformUI.Scaleforms.InstructionalButtons.ClearButtonList();
        this._pause.dispose();
        SetFrontendActive(false);
    }

    public override get Visible(): boolean {
        return super.Visible;
    }

    public AddTab(tab: BaseTab): void {
        if (tab.Minimap) tab.Minimap.Parent = this;
        tab.Parent = this;
        this.Tabs.push(tab);
    }

    public ShowHeader(): void {
        if (!this.SubTitle.trim()) this._pause.setHeaderTitle(this.Title, "", false);
        else {
            this._pause.shiftCoronaDescription(true, false);
            this._pause.setHeaderTitle(this.Title, `${this.SubTitle}\n\n\n\n\n\n\n\n\n\n\n`, false);
        }
        this._pause.setHeaderCharImg(this.HeaderPicture[0], this.HeaderPicture[1], true);
        if (this.CrewPicture) this._pause.setHeaderSecondaryImg(this.CrewPicture[0], this.CrewPicture[1], true);
        this._pause.setHeaderDetails(this.SideStringTop, this.SideStringMiddle, this.SideStringBottom);

        if (!this.IsCorona) {
            this._pause._header?.callFunction("ENABLE_DYNAMIC_WIDTH", this.SetHeaderDynamicWidth);
            this.Tabs.forEach((tab) => this._pause.addPauseMenuTab(tab.Title, 0, tab._type, tab.TabColor));
        } else {
            if (this.coronaTab.LeftColumn)
                this._pause.addLobbyMenuTab(this.coronaTab.LeftColumn.Label, 2, this.coronaTab.LeftColumn.Color);
            if (this.coronaTab.CenterColumn)
                this._pause.addLobbyMenuTab(this.coronaTab.CenterColumn.Label, 2, this.coronaTab.CenterColumn.Color);
            if (this.coronaTab.RightColumn)
                this._pause.addLobbyMenuTab(this.coronaTab.RightColumn.Label, 2, this.coronaTab.RightColumn.Color);
            this._pause._header?.callFunction("SET_ALL_HIGHLIGHTS", true, this.TabsColor);
            this._pause._header?.callFunction("ENABLE_DYNAMIC_WIDTH", false);
        }
        this._loaded = true;
    }

    public BuildPauseMenu(): void {
        this.isBuilding = true;
        if (!HasStreamedTextureDictLoaded("commonmenu")) RequestStreamedTextureDict("commonmenu", true);
        const tab = this.Tabs[this.Index];
        this._pause._pause?.callFunction("LOAD_CHILD_PAGE", tab._identifier);
        tab.Populate();
        tab.ShowColumns();
        this.isBuilding = false;
    }

    public override Draw(): void {
        if (!this.Visible || this.TemporarilyHidden || this.isBuilding) return;
        this.Tabs[this.Index]?.Minimap?.MaintainMap();
        super.Draw();
        this._pause.draw(this.IsCorona);
        if (!this.IsCorona) this._pause._header?.callFunction("SHOW_ARROWS");
        this.UpdateKeymapItems();
        void this.GetHoveredColumn();
    }

    public override ProcessMouse(): void {
        if (!IsUsingKeyboard(2) || !this.Visible || this.TemporarilyHidden || this.isBuilding) return;
        SetMouseCursorActiveThisFrame();
        SetInputExclusive(2, 239);
        SetInputExclusive(2, 240);
        SetInputExclusive(2, 237);
        SetInputExclusive(2, 238);

        const [successHeader, eventTypeH, itemIdH, contextH] = GetScaleformMovieCursorSelection(
            this._pause._header?.handle ?? 0
        );
        if (successHeader && !this.IsCorona) {
            if (eventTypeH === 5 && contextH === -1) {
                this.FocusLevel = 0;
                this.CurrentTab.UnFocus();
                this._pause.selectTab(itemIdH);
                this.Index = itemIdH;
                this.FocusLevel = 1;
                this.Tabs[this.Index].Focus();
                PlaySoundFrontend(-1, "SELECT", "HUD_FRONTEND_DEFAULT_SOUNDSET", true);
            } else if (eventTypeH === 6 && contextH === 1000) {
                this.FocusLevel = 0;
                this.Tabs[this.Index].UnFocus();
                if (itemIdH === -1) this.Index--;
                if (itemIdH === 1) this.Index++;
                this.Tabs[this.Index].Focus();
                return;
            } else if (eventTypeH === 8) this.tabArrowsHovered = false;
            else if (eventTypeH === 9) this.tabArrowsHovered = true;
        }

        const [successPause, eventTypeP, itemIdP, contextP] = GetScaleformMovieCursorSelection(
            this._pause._pause?.handle ?? 0
        );
        if (successPause && !this.tabArrowsHovered) {
            if (eventTypeP === 5 && this.FocusLevel === 0) {
                this.FocusLevel++;
                return;
            }
            this.Tabs[this.Index].MouseEvent(eventTypeP, contextP, itemIdP);
        }
    }

    public override ProcessControls(): void {
        if (!this.Visible || this.TemporarilyHidden || this.isBuilding) return;
        if (IsDisabledControlJustPressed(2, 188)) this.CurrentTab.GoUp();
        else if (IsDisabledControlJustPressed(2, 187)) this.CurrentTab.GoDown();
        else if (IsDisabledControlJustPressed(2, 189)) {
            if (this.FocusLevel === 0 && !this.IsCorona) this.Index--;
            else this.CurrentTab.GoLeft();
        } else if (IsDisabledControlJustPressed(2, 190)) {
            if (this.FocusLevel === 0 && !this.IsCorona) this.Index++;
            else this.CurrentTab.GoRight();
        } else if (IsDisabledControlJustPressed(2, 205)) {
            if (!this.IsCorona) {
                if (this.FocusLevel > 0) this.FocusLevel = 0;
                this.Index--;
            }
        } else if (IsDisabledControlJustPressed(2, 206)) {
            if (!this.IsCorona) {
                if (this.FocusLevel > 0) this.FocusLevel = 0;
                this.Index++;
            }
        } else if (IsDisabledControlJustReleased(2, 201)) {
            if (this.focusLevel === 0) {
                this.Tabs[this.Index].Focus();
                this.FocusLevel++;
            } else this.CurrentTab.Select();
        } else if (IsDisabledControlJustReleased(2, 202) || IsDisabledControlJustReleased(0, 238)) this.GoBack();
        else if (IsDisabledControlJustPressed(2, 241)) {
            if (this.CurrentTab instanceof TextTab) {
                this.CurrentTab.MouseEvent(10, 0, -1);
                this._pause._pause?.callFunction("SET_COLUMN_INPUT_EVENT", 0, 8);
            } else if (
                this.CurrentTab instanceof SubmenuTab &&
                (this.CurrentTab.currentItemType === LeftItemType.Info ||
                    this.CurrentTab.currentItemType === LeftItemType.Statistics)
            ) {
                PlaySoundFrontend(-1, TabView.AUDIO_UPDOWN, TabView.AUDIO_LIBRARY, true);
                this._pause._pause?.callFunction("SET_COLUMN_INPUT_EVENT", 1, 8);
            }
        } else if (IsDisabledControlJustPressed(2, 242)) {
            if (this.CurrentTab instanceof TextTab) {
                this.CurrentTab.MouseEvent(11, 0, -1);
                this._pause._pause?.callFunction("SET_COLUMN_INPUT_EVENT", 0, 9);
            } else if (
                this.CurrentTab instanceof SubmenuTab &&
                (this.CurrentTab.currentItemType === LeftItemType.Info ||
                    this.CurrentTab.currentItemType === LeftItemType.Statistics)
            ) {
                PlaySoundFrontend(-1, TabView.AUDIO_UPDOWN, TabView.AUDIO_LIBRARY, true);
                this._pause._pause?.callFunction("SET_COLUMN_INPUT_EVENT", 1, 9);
            }
        }
    }

    public GoBack(): void {
        PlaySoundFrontend(-1, TabView.AUDIO_BACK, TabView.AUDIO_LIBRARY, true);
        if (this.IsCorona) {
            if (this.CurrentTab.CurrentColumnIndex > 0) this.CurrentTab.GoBack();
            else if (this.CanPlayerCloseMenu) {
                if (this.CurrentTab instanceof PlayerListTab && this.CurrentTab.Minimap)
                    this.CurrentTab.Minimap.Enabled = false;
                this.Visible = false;
            }
            return;
        }
        if (this.FocusLevel > 0) {
            if (this.FocusLevel === 1 && this.CurrentTab.CurrentColumnIndex === 0) {
                this.CurrentTab.UnFocus();
                this.FocusLevel--;
                if (this.CurrentTab instanceof PlayerListTab && this.CurrentTab.Minimap)
                    this.CurrentTab.Minimap.Enabled = false;
            } else this.CurrentTab.GoBack();
        } else if (this.CanPlayerCloseMenu) this.Visible = false;
    }

    public onPauseMenuOpen(handler: PauseMenuOpenEvent): void {
        this.openHandlers.push(handler);
    }
    public onPauseMenuClose(handler: PauseMenuCloseEvent): void {
        this.closeHandlers.push(handler);
    }
    public onPauseMenuTabChanged(handler: PauseMenuTabChanged): void {
        this.tabChangedHandlers.push(handler);
    }
    public onPauseMenuFocusChanged(handler: PauseMenuFocusChanged): void {
        this.focusChangedHandlers.push(handler);
    }
    public onColumnItemChange(handler: ColumnItemEvent): void {
        this.columnChangeHandlers.push(handler);
    }
    public onColumnItemSelect(handler: ColumnItemEvent): void {
        this.columnSelectHandlers.push(handler);
    }

    public SendPauseMenuOpen(): void {
        this.openHandlers.forEach((h) => h(this));
    }
    public SendPauseMenuClose(): void {
        this.closeHandlers.forEach((h) => h(this));
    }
    public SendPauseMenuTabChange(): void {
        this.tabChangedHandlers.forEach((h) => h(this, this.Tabs[this.Index], this.Index));
    }
    public SendPauseMenuFocusChange(): void {
        this.focusChangedHandlers.forEach((h) => h(this, this.Tabs[this.Index], this.FocusLevel));
    }
    public SendColumnItemSelect(col: PM_Column): void {
        this.columnSelectHandlers.forEach((h) => h(this, this.CurrentTab, col.position as number, col.Index));
    }
    public SendColumnItemChange(col: PM_Column): void {
        this.columnChangeHandlers.forEach((h) => h(this, this.CurrentTab, col.position as number, col.Index));
    }

    private UpdateKeymapItems(): void {
        if (!IsUsingKeyboard(2)) {
            if (!this.controller) {
                this.controller = true;
                this.changed = true;
            }
        } else if (this.controller) {
            this.controller = false;
            this.changed = true;
        }

        if (this.changed && this.Tabs[this.Index] instanceof SubmenuTab) {
            const smTab = this.Tabs[this.Index] as SubmenuTab;
            if (smTab.currentItemType === LeftItemType.Keymap) {
                for (let i = 0; i < smTab.CenterColumn.Items.length; i++) smTab.CenterColumn.UpdateSlot(i);
            }
            this.changed = false;
        }
    }

    private async GetHoveredColumn(): Promise<void> {
        this.hoveredColumn = await (ScaleformUI.Scaleforms._pauseMenu._pause?.callFunctionReturnInt(
            "GET_HOVERED_COLUMN"
        ) ?? Promise.resolve(0));
    }
}

export default TabView;
