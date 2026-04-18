import { SColor } from "elements/scolor";
import { UIMenuCheckboxStyle } from "menus/UIMenu/items/uimenucheckboxitem";
import { SettingsCheckboxItem } from "menus/pause-menu/elements/items/settings-items/settings-checkbox-item";
import { SettingsListItem } from "menus/pause-menu/elements/items/settings-items/settings-list-item";
import { SettingsProgressItem } from "menus/pause-menu/elements/items/settings-items/settings-progress-item";
import { SettingsSliderItem } from "menus/pause-menu/elements/items/settings-items/settings-slider-item";
import { TabLeftItem, LeftItemType } from "menus/pause-menu/items/tab-left-item";
import { TabView } from "menus/pause-menu/tab-view";
import { SubmenuTab } from "menus/pause-menu/tabs/submenu-tab";

const EXAMPLE_COMMAND = "scui_pause";
let pauseMenuExample: TabView | null = null;

function buildPauseMenuExample(): TabView {
    const menu = new TabView(
        "ScaleformUI V8",
        "Pause Menu Example",
        "Type",
        `/${EXAMPLE_COMMAND}`,
        "to open/close"
    );

    const mainTab = new SubmenuTab("Example", SColor.HUD_Freemode);
    const settingsCategory = new TabLeftItem("Settings", LeftItemType.Settings);

    const checkbox = new SettingsCheckboxItem("Show markers", UIMenuCheckboxStyle.Tick, true);
    const difficulty = new SettingsListItem("Difficulty", ["Easy", "Normal", "Hard"], 1);
    const volume = new SettingsSliderItem("Music volume", 100, 70, SColor.HUD_Freemode);
    const brightness = new SettingsProgressItem("Brightness", 100, 60, false, SColor.HUD_Freemode);

    settingsCategory.AddItem(checkbox);
    settingsCategory.AddItem(difficulty);
    settingsCategory.AddItem(volume);
    settingsCategory.AddItem(brightness);

    mainTab.AddLeftItem(settingsCategory);
    menu.AddTab(mainTab);
    return menu;
}

function getPauseMenuExample(): TabView {
    if (pauseMenuExample == null) {
        pauseMenuExample = buildPauseMenuExample();
    }
    return pauseMenuExample;
}

RegisterCommand(
    EXAMPLE_COMMAND,
    () => {
        const menu = getPauseMenuExample();
        menu.Visible = !menu.Visible;
    },
    false
);

emit("chat:addSuggestion", `/${EXAMPLE_COMMAND}`, "Open/close the ScaleformUI pause menu example");
