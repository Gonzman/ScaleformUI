import { ItemFont } from "elements/ItemFont";
import { ScaleformFonts } from "elements/scaleform-fonts";
import { SColor } from "elements/scolor";
import { ScaleformUI } from "scaleforms/scaleformui/main";
import { BreadcrumbsHandler } from "menus/breadcrumbs-handler";
import { replaceRstarColorsWith } from '../../../elements/color';
import { BadgeStyle } from "elements/badge";
import { ItemChangeCallbackBuilder, UIMenuItemChangeCallback } from "../emitters/emitters";
import { UIMenu } from "../uimenu";
import { UIMenuPanel } from "../panels/uimenupanel";
import { UIMenuSidePanel } from "../sidepanels/uimenusidepanel";
import { UIMissionDetailsPanel } from "../sidepanels/DetailsPanel/uimissiondetailspanel";

type SettingsListColumn = {
    Parent: { Visible: boolean };
    ParentTab: number;
    Pagination: { GetScaleformIndex(index: number): number };
    Items: any[];
};

class MainView { }
class TabView { }

export class UIMenuItem {
    public Parent: UIMenu | null = null;
    public ParentColumn: SettingsListColumn | null = null;
    public Panels: UIMenuPanel[] = [];
    public SidePanel: UIMenuSidePanel | UIMissionDetailsPanel | null = null;
    public ItemData: any;
    public Hovered: boolean = false;
    private _selected: boolean = false;
    private _label: string = "";
    private _rightLabel: string = "";
    private _enabled: boolean;
    private _leftBadge: BadgeStyle = BadgeStyle.NONE;
    private _rightBadge: BadgeStyle = BadgeStyle.NONE;
    private blinkDescription: boolean;
    private mainColor: SColor;
    private highlightColor: SColor;
    private textColor: SColor = SColor.HUD_White;
    private highlightedTextColor: SColor = SColor.HUD_Black;
    private description: string;
    private _activatedEmitter = new ItemChangeCallbackBuilder();
    private _highlighedEmitter = new ItemChangeCallbackBuilder();
    labelFont: ItemFont = ScaleformFonts.CHALET_LONDON_NINETEENSIXTY;
    rightLabelFont: ItemFont = ScaleformFonts.CHALET_LONDON_NINETEENSIXTY;
    _itemId: number = 0;
    _formatLeftLabel: string = "";
    _formatRightLabel: string = "";

    constructor(text: string, description?: string, mainColor?: SColor, highlightColor?: SColor, textColor?: SColor, highlightedTextColor?: SColor) {
        this._enabled = true;
        this.mainColor = mainColor ?? SColor.HUD_Panel_light;
        this.highlightColor = highlightColor ?? SColor.HUD_White;
        this.textColor = textColor ?? SColor.HUD_White;
        this.highlightedTextColor = highlightedTextColor ?? SColor.HUD_Black;
        this.Label = text;
        this.description = description ?? '';
        this.blinkDescription = false;
    }

    //EVENTS
    public onActivated(delegate: UIMenuItemChangeCallback) {
        this._activatedEmitter.add(delegate)
    }
    public onHighlighted(delegate: UIMenuItemChangeCallback) {
        this._highlighedEmitter.add(delegate)
    }

    activatedEmit() {
        this._activatedEmitter.toDelegate()(this.Parent, this);
    }
    highlighedEmit() {
        this._highlighedEmitter.toDelegate()(this.Parent, this);
    }

    //MEMBERS
    public set Label(_label: string) {
        this._label = _label;
        this._formatLeftLabel = _label.startsWith("~") ? _label : "~s~" + _label;
        if (this._selected) {
            this._formatLeftLabel = this._formatLeftLabel.replace("~w~", "~l~");
            this._formatLeftLabel = this._formatLeftLabel.replace("~s~", "~l~");
        }
        else {
            this._formatLeftLabel = this._formatLeftLabel.replace("~l~", "~s~");
        }
        if (this.Parent !== null && this.Parent.Visible && this.Parent.Pagination.IsItemVisible(this.Parent.Items.indexOf(this))) {
            ScaleformUI.Scaleforms._ui.callFunction("SET_LEFT_LABEL", this.Parent.Pagination.GetScaleformIndex(this.Parent.Items.indexOf(this)), this._formatLeftLabel)
        }
        if (this.ParentColumn != null && this.ParentColumn.Parent.Visible) {
            if (this.ParentColumn.Parent instanceof MainView)
                ScaleformUI.Scaleforms._pauseMenu._lobby?.callFunction("UPDATE_SETTINGS_ITEM_LABEL", this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this)), this._formatLeftLabel);
            else if (this.ParentColumn.Parent instanceof TabView)
                ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction("UPDATE_PLAYERS_TAB_SETTINGS_ITEM_LABEL", this.ParentColumn.ParentTab, this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this)), this._formatLeftLabel);
        }
    }
    public get Label(): string {
        return this._label
    }

    set RightLabel(value: string) {
        this._rightLabel = value;
        this._formatRightLabel = value.startsWith("~") ? value : "~s~" + value;
        if (this._selected) {
            this._formatRightLabel = this._formatRightLabel.replace("~w~", "~l~");
            this._formatRightLabel = this._formatRightLabel.replace("~s~", "~l~");
        }
        else {
            this._formatRightLabel = this._formatRightLabel.replace("~l~", "~s~");
        }
        if (this.Parent != null && this.Parent.Visible && this.Parent.Pagination.IsItemVisible(this.Parent.MenuItems.indexOf(this))) {
            ScaleformUI.Scaleforms._ui.callFunction("SET_RIGHT_LABEL", this.Parent.Pagination.GetScaleformIndex(this.Parent.MenuItems.indexOf(this)),
                this._formatRightLabel);
        }
        if (this.ParentColumn != null && this.ParentColumn.Parent.Visible) {
            if (this.ParentColumn.Parent instanceof MainView)
                ScaleformUI.Scaleforms._pauseMenu._lobby?.callFunction("UPDATE_SETTINGS_ITEM_LABEL_RIGHT", this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this)),
                    this._formatRightLabel);
            else if (this.ParentColumn.Parent instanceof TabView)
                ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction("UPDATE_PLAYERS_TAB_SETTINGS_ITEM_LABEL_RIGHT", this.ParentColumn.ParentTab,
                    this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this)),
                    this._formatRightLabel);
        }

    }
    public get RightLabel(): string {
        return this._rightLabel;
    }

    set LeftBadge(value: BadgeStyle) {
        this._leftBadge = value;
    }
    public get LeftBadge(): BadgeStyle {
        return this._leftBadge;
    }

    set RightBadge(value: BadgeStyle) {
        this._rightBadge = value;
    }
    public get RightBadge(): BadgeStyle {
        return this._rightBadge;
    }

    public set MainColor(value: SColor) {
        this.mainColor = value;
        if (this.Parent !== null && this.Parent.Visible && this.Parent.Pagination.IsItemVisible(this.Parent.Items.indexOf(this))) {
            ScaleformUI.Scaleforms._ui.callFunction("UPDATE_COLORS", this.Parent.Pagination.GetScaleformIndex(this.Parent.Items.indexOf(this)),
                value, this.highlightColor, this.textColor, this.highlightedTextColor)
        }
    }
    public get MainColor(): SColor {
        return this.mainColor
    }

    public set HighlightColor(value: SColor) {
        this.highlightColor = value;
        if (this.Parent !== null && this.Parent.Visible && this.Parent.Pagination.IsItemVisible(this.Parent.Items.indexOf(this))) {
            ScaleformUI.Scaleforms._ui.callFunction("UPDATE_COLORS", this.Parent.Pagination.GetScaleformIndex(this.Parent.Items.indexOf(this)),
                this.mainColor, value, this.textColor, this.highlightedTextColor)
        }
    }
    public get HighlightColor(): SColor {
        return this.highlightColor
    }

    public set TextColor(value: SColor) {
        this.textColor = value;
        if (this.Parent !== null && this.Parent.Visible && this.Parent.Pagination.IsItemVisible(this.Parent.Items.indexOf(this))) {
            ScaleformUI.Scaleforms._ui.callFunction("UPDATE_COLORS", this.Parent.Pagination.GetScaleformIndex(this.Parent.Items.indexOf(this)),
                this.mainColor, this.highlightColor, value, this.highlightedTextColor)
        }
    }
    public get TextColor(): SColor {
        return this.textColor
    }

    public set HighlightedTextColor(value: SColor) {
        this.highlightedTextColor = value;
        if (this.Parent !== null && this.Parent.Visible && this.Parent.Pagination.IsItemVisible(this.Parent.Items.indexOf(this))) {
            ScaleformUI.Scaleforms._ui.callFunction("UPDATE_COLORS", this.Parent.Pagination.GetScaleformIndex(this.Parent.Items.indexOf(this)),
                this.mainColor, this.highlightColor, this.textColor, value)
        }
    }
    public get HighlightedTextColor(): SColor {
        return this.highlightedTextColor
    }

    public set LabelFont(value: ItemFont) {
        this.labelFont = value;
        if (this.Parent !== null && this.Parent.Visible && this.Parent.Pagination.IsItemVisible(this.Parent.Items.indexOf(this))) {
            ScaleformUI.Scaleforms._ui.callFunction("SET_ITEM_LABEL_FONT", this.Parent.Pagination.GetScaleformIndex(this.Parent.Items.indexOf(this)),
                value.fontName, value.fontId)
        }
        if (this.ParentColumn != null && this.ParentColumn.Parent.Visible) {
            if (this.ParentColumn.Parent instanceof MainView)
                ScaleformUI.Scaleforms._pauseMenu._lobby?.callFunction("SET_SETTINGS_ITEM_LABEL_FONT",
                    this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this)),
                    value.fontName, value.fontId);
            else if (this.ParentColumn.Parent instanceof TabView)
                ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction("SET_PLAYERS_TAB_SETTINGS_ITEM_LABEL_FONT", this.ParentColumn.ParentTab,
                    this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this)),
                    value.fontName, value.fontId);
        }
    }
    public get LabelFont(): ItemFont {
        return this.labelFont
    }

    public set RightLabelFont(value: ItemFont) {
        this.rightLabelFont = value;
        if (this.Parent !== null && this.Parent.Visible && this.Parent.Pagination.IsItemVisible(this.Parent.Items.indexOf(this))) {
            ScaleformUI.Scaleforms._ui.callFunction("SET_ITEM_RIGHT_LABEL_FONT", this.Parent.Pagination.GetScaleformIndex(this.Parent.Items.indexOf(this)),
                value.fontName, value.fontId)
        }
        if (this.ParentColumn != null && this.ParentColumn.Parent.Visible) {
            if (this.ParentColumn.Parent instanceof MainView)
                ScaleformUI.Scaleforms._pauseMenu._lobby?.callFunction("SET_SETTINGS_ITEM_RIGHT_LABEL_FONT",
                    this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this)),
                    value.fontName, value.fontId);
            else if (this.ParentColumn.Parent instanceof TabView)
                ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction("SET_PLAYERS_TAB_SETTINGS_ITEM_RIGHT_LABEL_FONT", this.ParentColumn.ParentTab,
                    this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this)),
                    value.fontName, value.fontId);
        }
    }
    public get RightLabelFont(): ItemFont {
        return this.rightLabelFont
    }

    public set BlinkDescription(value: boolean) {
        this.blinkDescription = value;
        if (this.Parent !== null && this.Parent.Visible && this.Parent.Pagination.IsItemVisible(this.Parent.Items.indexOf(this))) {
            ScaleformUI.Scaleforms._ui.callFunction("SET_BLINK_DESC", this.Parent.Pagination.GetScaleformIndex(this.Parent.Items.indexOf(this)),
                value);
        }
        if (this.ParentColumn != null && this.ParentColumn.Parent.Visible) {
            if (this.ParentColumn.Parent instanceof MainView)
                ScaleformUI.Scaleforms._pauseMenu._lobby?.callFunction("UPDATE_SETTINGS_ITEM_BLINK_DESC",
                    this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this)),
                    value);
            else if (this.ParentColumn.Parent instanceof TabView)
                ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction("UPDATE_PLAYERS_TAB_SETTINGS_ITEM_BLINK_DESC", this.ParentColumn.ParentTab,
                    this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this)),
                    value);
        }
    }
    public get BlinkDescription(): boolean {
        return this.blinkDescription;
    }

    set Selected(value: boolean) {
        this._selected = value;
        if (value) {
            this._formatLeftLabel = this._formatLeftLabel.replace("~w~", "~l~");
            this._formatLeftLabel = this._formatLeftLabel.replace("~s~", "~l~");
            if (!isNullOrWhiteSpace(this._formatRightLabel)) {
                this._formatRightLabel = this._formatRightLabel.replace("~w~", "~l~");
                this._formatRightLabel = this._formatRightLabel.replace("~s~", "~l~");
            }
            this.highlighedEmit();
        }
        else {
            this._formatLeftLabel = this._formatLeftLabel.replace("~l~", "~s~");
            if (!isNullOrWhiteSpace(this._formatRightLabel)) {
                this._formatRightLabel = this._formatRightLabel.replace("~l~", "~s~");
            }
        }
        if (this.Parent !== null && this.Parent.Visible && this.Parent.Pagination.IsItemVisible(this.Parent.Items.indexOf(this))) {
            ScaleformUI.Scaleforms._ui.callFunction("SET_ITEM_LABELS", this.Parent.Pagination.GetScaleformIndex(this.Parent.Items.indexOf(this)),
                this._formatLeftLabel, this._formatRightLabel);
        }
        if (this.ParentColumn != null && this.ParentColumn.Parent.Visible) {
            if (this.ParentColumn.Parent instanceof MainView)
                ScaleformUI.Scaleforms._pauseMenu._lobby?.callFunction("UPDATE_SETTINGS_ITEM_LABELS", this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this)),
                    this._formatLeftLabel, this._formatRightLabel);
            else if (this.ParentColumn.Parent instanceof TabView)
                ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction("UPDATE_PLAYERS_TAB_SETTINGS_ITEM_LABELS", this.ParentColumn.ParentTab,
                    this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this)),
                    this._formatLeftLabel, this._formatRightLabel);
        }
    }

    public get Selected(): boolean {
        return this._selected;
    }

    public set Description(value: string) {
        this.description = value;
        if (this.Parent !== null && this.Parent.Visible && this.Parent.Pagination.IsItemVisible(this.Parent.Items.indexOf(this))) {
            AddTextEntry(`menu_${BreadcrumbsHandler.CurrentDepth}_desc_${this.Parent.Items.indexOf(this)}`, this.description);
            BeginScaleformMovieMethod(ScaleformUI.Scaleforms._ui.handle, "UPDATE_ITEM_DESCRIPTION");
            ScaleformMovieMethodAddParamInt(this.Parent.Pagination.GetScaleformIndex(this.Parent.Items.indexOf(this)));
            BeginTextCommandScaleformString(`menu_${BreadcrumbsHandler.CurrentDepth}_desc_${this.Parent.Items.indexOf(this)}`);
            EndTextCommandScaleformString_2();
            EndScaleformMovieMethod();
        }
        if (this.ParentColumn != null && this.ParentColumn.Parent.Visible) {
            if (this.ParentColumn.Parent instanceof MainView) {
                AddTextEntry(`lobbymenu_desc_${this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this))}`, this.description);
                const lobby = ScaleformUI.Scaleforms._pauseMenu._lobby;
                if (lobby) {
                    BeginScaleformMovieMethod(lobby.handle, "UPDATE_SETTINGS_ITEM_DESCRIPTION");
                    ScaleformMovieMethodAddParamInt(this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this)));
                    BeginTextCommandScaleformString(`lobbymenu_desc_${this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this))}`);
                    EndTextCommandScaleformString_2();
                    EndScaleformMovieMethod();
                }
            }
            else if (this.ParentColumn.Parent instanceof TabView) {
                AddTextEntry(`pausemenu_${this.ParentColumn.ParentTab}_desc_${this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this))}`, this.description);
                const pause = ScaleformUI.Scaleforms._pauseMenu._pause;
                if (pause) {
                    BeginScaleformMovieMethod(pause.handle, "UPDATE_PLAYERS_TAB_SETTINGS_ITEM_DESCRIPTION");
                    ScaleformMovieMethodAddParamInt(this.ParentColumn.ParentTab);
                    ScaleformMovieMethodAddParamInt(this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this)));
                    BeginTextCommandScaleformString(`pausemenu_${this.ParentColumn.ParentTab}_desc_${this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this))}`);
                    EndTextCommandScaleformString_2();
                    EndScaleformMovieMethod();
                }
            }
        }
    }
    public get Description(): string {
        return this.description;
    }

    public set Enabled(value: boolean) {
        this._enabled = value;
        if (!value)
            this._formatLeftLabel = replaceRstarColorsWith(this._formatLeftLabel, "~c~");
        else
            this.Label = this._label;
        if (this.Parent !== null && this.Parent.Visible && this.Parent.Pagination.IsItemVisible(this.Parent.Items.indexOf(this))) {
            ScaleformUI.Scaleforms._ui.callFunction("SET_ITEM_LABELS", this.Parent.Pagination.GetScaleformIndex(this.Parent.MenuItems.indexOf(this)), this._formatLeftLabel, this._formatRightLabel);
            ScaleformUI.Scaleforms._ui.callFunction("ENABLE_ITEM", this.Parent.Pagination.GetScaleformIndex(this.Parent.MenuItems.indexOf(this)), this._enabled);
        }
        if (this.ParentColumn != null && this.ParentColumn.Parent.Visible) {
            if (this.ParentColumn.Parent instanceof MainView) {
                ScaleformUI.Scaleforms._pauseMenu._lobby?.callFunction("UPDATE_SETTINGS_ITEM_LABELS", this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this)),
                    this._formatLeftLabel, this._formatRightLabel);
                ScaleformUI.Scaleforms._pauseMenu._lobby?.callFunction("ENABLE_SETTINGS_ITEM", this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this)),
                    this._enabled);
            }
            else if (this.ParentColumn.Parent instanceof TabView) {
                ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction("UPDATE_PLAYERS_TAB_SETTINGS_ITEM_LABELS", this.ParentColumn.ParentTab,
                    this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this)),
                    this._formatLeftLabel, this._formatRightLabel);
                ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction("ENABLE_PLAYERS_TAB_SETTINGS_ITEM", this.ParentColumn.ParentTab,
                    this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this)),
                    this._enabled);
            }
        }
    }

    public SetLeftBadge(icon: BadgeStyle) {
        this.LeftBadge = icon;
        if (this.Parent !== null && this.Parent.Visible && this.Parent.Pagination.IsItemVisible(this.Parent.Items.indexOf(this))) {
            ScaleformUI.Scaleforms._ui.callFunction("SET_LEFT_BADGE", this.Parent.Pagination.GetScaleformIndex(this.Parent.MenuItems.indexOf(this)), icon);
        }
        if (this.ParentColumn != null && this.ParentColumn.Parent.Visible) {
            if (this.ParentColumn.Parent instanceof MainView) {
                ScaleformUI.Scaleforms._pauseMenu._lobby?.callFunction("SET_SETTINGS_ITEM_LEFT_BADGE", this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this)),
                    icon);
            }
            else if (this.ParentColumn.Parent instanceof TabView) {
                ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction("SET_PLAYERS_TAB_SETTINGS_ITEM_LEFT_BADGE", this.ParentColumn.ParentTab,
                    this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this)),
                    icon);
            }
        }
    }

    public SetRightBadge(icon: BadgeStyle) {
        this.RightBadge = icon;
        if (this.Parent !== null && this.Parent.Visible && this.Parent.Pagination.IsItemVisible(this.Parent.Items.indexOf(this))) {
            ScaleformUI.Scaleforms._ui.callFunction("SET_RIGHT_BADGE", this.Parent.Pagination.GetScaleformIndex(this.Parent.MenuItems.indexOf(this)), icon);
        }
        if (this.ParentColumn != null && this.ParentColumn.Parent.Visible) {
            if (this.ParentColumn.Parent instanceof MainView) {
                ScaleformUI.Scaleforms._pauseMenu._lobby?.callFunction("SET_SETTINGS_ITEM_RIGHT_BADGE", this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this)),
                    icon);
            }
            else if (this.ParentColumn.Parent instanceof TabView) {
                ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction("SET_PLAYERS_TAB_SETTINGS_ITEM_RIGHT_BADGE", this.ParentColumn.ParentTab,
                    this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this)),
                    icon);
            }
        }
    }

    public SetRightLabel(text: string) {
        this.RightLabel = text;
    }

    public AddPanel(panel: UIMenuPanel){
        panel.SetParentItem(this)
        this.Panels.push(panel)
    }

    public RemovePanelAt(index:number){
        this.Panels.splice(index, 1);
        if (this.Parent !== null && this.Parent.Visible && this.Parent.Pagination.IsItemVisible(this.Parent.Items.indexOf(this))) {
            ScaleformUI.Scaleforms._ui.callFunction("REMOVE_PANEL", this.Parent.Pagination.GetScaleformIndex(this.Parent.MenuItems.indexOf(this)), index);
        }
    }

    public AddSidePanel(panel: UIMenuSidePanel | UIMissionDetailsPanel){
        panel.SetParentItem(this)
        this.SidePanel = panel;
        if (this.Parent !== null && this.Parent.Visible && this.Parent.Pagination.IsItemVisible(this.Parent.Items.indexOf(this))) {
            if (panel instanceof UIMissionDetailsPanel) {
                const mis = panel;
                const itemIndex = this.Parent.Pagination.GetScaleformIndex(this.Parent.Items.indexOf(this));
                ScaleformUI.Scaleforms._ui.callFunction("ADD_SIDE_PANEL_TO_ITEM", itemIndex, 0, mis.PanelSide, mis.TitleType, mis.Title, mis.TitleColor, mis.TextureDict, mis.TextureName);
                for (const _it of mis.Items) {
                    ScaleformUI.Scaleforms._ui.callFunction(
                        "ADD_MISSION_DETAILS_DESC_ITEM",
                        itemIndex,
                        _it.Type,
                        _it.TextLeft,
                        _it.TextRight,
                        _it.Icon,
                        _it.IconColor,
                        _it.Tick,
                        _it._labelFont.fontName,
                        _it._labelFont.fontId,
                        _it._rightLabelFont.fontName,
                        _it._rightLabelFont.fontId
                    );
                }
            }
        }
    }

    public RemoveSidePanel(){
        this.SidePanel = null;
        if (this.Parent !== null && this.Parent.Visible && this.Parent.Pagination.IsItemVisible(this.Parent.Items.indexOf(this))) {
            ScaleformUI.Scaleforms._ui.callFunction("REMOVE_SIDE_PANEL_TO_ITEM", this.Parent.Pagination.GetScaleformIndex(this.Parent.MenuItems.indexOf(this)));
        }
    }
}