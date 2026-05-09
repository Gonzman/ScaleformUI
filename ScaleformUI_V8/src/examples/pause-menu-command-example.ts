/// <reference types="@citizenfx/client" />
import { SColor } from "../elements/scolor";
import { UIMenuCheckboxItem, UIMenuCheckboxStyle } from "../menus/UIMenu/items/uimenucheckboxitem";
import { UIMenuItem } from "../menus/UIMenu/items/uimenuitem";
import { UIMenuListItem } from "../menus/UIMenu/items/uimenulistitem";
import { UIMenuSliderItem } from "../menus/UIMenu/items/uimenuslideritem";
import { UIMenuProgressItem } from "../menus/UIMenu/items/uimenuprogressitem";
import {
    SettingsCheckboxItem,
    SettingsListItem,
    SettingsProgressItem,
    SettingsSliderItem
} from "../menus/pause-menu/elements/items/settings-items";
import {
    PauseMenuItem,
    KeymapItem,
    MissionItem,
    MissionSeparatorItem,
    StatsTabItem
} from "../menus/pause-menu/elements/items";
import { TabLeftItem, LeftItemType, LeftItemBGType } from "../menus/pause-menu/items/tab-left-item";
import { TabView } from "../menus/pause-menu/tab-view";
import { SubmenuTab } from "../menus/pause-menu/tabs/submenu-tab";
import { TextTab } from "../menus/pause-menu/tabs/text-tab";
import { PlayerListTab } from "../menus/pause-menu/tabs/player-list-tab";
import { SettingsListColumn, PlayerListColumn, MissionsListColumn } from "../menus/pause-menu/elements/columns";
import { MissionDetailsPanel } from "../menus/pause-menu/elements/panels";

const EXAMPLE_COMMAND = "scui_pause";
let pauseMenuExample: TabView | null = null;

function buildPauseMenuExample(): TabView {
    const menu = new TabView(
        "PauseMenu example",
        "Look there's a subtitle too! It can be veeeeery long or not so long it depends on you!! (2 lines max)~n~Look there's a subtitle too! It can be veeeeery long or not so long it depends on you!! (2 lines max)",
        "Detail 1",
        "Detail 2",
        "Detail 3"
    );

    menu.AddTab(buildTextTab());
    menu.AddTab(buildSubmenuTab());
    menu.AddTab(buildPlayerListTab());

    return menu;
}

function buildTextTab(): TextTab {
    const textTab = new TextTab("TEXTTAB", "This is the title!", SColor.HUD_Freemode);
    const runtimeTxdName = "scui_pause_example";
    const runtimeTxdHandle = CreateRuntimeTxd(runtimeTxdName);
    const backgroundDui = CreateDui("https://giphy.com/embed/sxwk9hGlsULcYm6hDX", 1280, 720);
    CreateRuntimeTextureFromDuiHandle(runtimeTxdHandle, "pausebigbg", GetDuiHandle(backgroundDui));
    const rightPic = CreateDui("https://i.giphy.com/sEU384ODAcnSg.webp", 288, 430);
    CreateRuntimeTextureFromDuiHandle(runtimeTxdHandle, "rightPic", GetDuiHandle(rightPic));

    textTab.UpdateBackground(runtimeTxdName, "pausebigbg");
    textTab.AddPicture(runtimeTxdName, "rightPic");

    const lines = [
        "~y~Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "~BLIP_INFO_ICON~ ~r~Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "~BLIP_INFO_ICON~ ~b~Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "~BLIP_INFO_ICON~ ~g~Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "~BLIP_INFO_ICON~ ~p~Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    ];

    for (const line of lines) {
        textTab.AddItem(new PauseMenuItem(line));
    }

    for (let i = 0; i < 8; i++) {
        textTab.AddItem(new PauseMenuItem("~BLIP_INFO_ICON~ ~r~Use the mouse wheel to scroll the text!!"));
    }

    return textTab;
}

function buildSubmenuTab(): SubmenuTab {
    const submenuTab = new SubmenuTab("SUBMENUTAB", SColor.HUD_Freemode);

    const first = new TabLeftItem("1 - Empty", LeftItemType.Empty);
    const second = new TabLeftItem("2 - Info", LeftItemType.Info);
    const third = new TabLeftItem("3 - Statistics", LeftItemType.Statistics);
    const fourth = new TabLeftItem("4 - Settings", LeftItemType.Settings);
    const fifth = new TabLeftItem("5 - Keymaps", LeftItemType.Keymap);

    first.Enabled = false;
    second.RightTitle = "Info Title!!";
    second.UpdateBackground("scaleformui", "pauseinfobg", LeftItemBGType.Full);
    third.UpdateBackground("scaleformui", "pausestatsbg", LeftItemBGType.Masked);
    fourth.UpdateBackground("scaleformui", "pausesetsbg", LeftItemBGType.Resized);

    second.AddItem(
        new PauseMenuItem(
            "~BLIP_INFO_ICON~ ~y~Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        )
    );
    second.AddItem(
        new PauseMenuItem(
            "~BLIP_INFO_ICON~ ~r~Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        )
    );
    second.AddItem(
        new PauseMenuItem(
            "~BLIP_INFO_ICON~ ~b~Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        )
    );
    second.AddItem(
        new PauseMenuItem(
            "~BLIP_INFO_ICON~ ~g~Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        )
    );
    second.AddItem(
        new PauseMenuItem(
            "~BLIP_INFO_ICON~ ~p~Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        )
    );

    const stats = [
        new StatsTabItem("Item's Label", "Item's right label"),
        new StatsTabItem("Item's Label", 0, SColor.HUD_Orange),
        new StatsTabItem("Item's Label", 25, SColor.HUD_Red),
        new StatsTabItem("Item's Label", 50, SColor.HUD_Blue),
        new StatsTabItem("Item's Label", 75, SColor.HUD_Green),
        new StatsTabItem("Item's Label", 100, SColor.HUD_Purple)
    ];

    stats.forEach((item) => third.AddItem(item));
    stats.forEach((item) => third.AddItem(item));

    fifth.KeymapRightLabel_1 = "PRIMARY";
    fifth.KeymapRightLabel_2 = "SECONDARY";

    fifth.AddItem(new KeymapItem("Simple Keymap", "~INPUT_FRONTEND_ACCEPT~", "~INPUT_VEH_EXIT~"));
    fifth.AddItem(
        new KeymapItem("Advanced Keymap", "~INPUT_SPRINT~ + ~INPUT_CONTEXT~", "", "", "~INPUTGROUP_FRONTEND_TRIGGERS~")
    );
    fifth.AddItem(new KeymapItem("Simple Keymap", "~INPUT_FRONTEND_ACCEPT~", "~INPUT_VEH_EXIT~"));
    fifth.AddItem(
        new KeymapItem("Advanced Keymap", "~INPUT_SPRINT~ + ~INPUT_CONTEXT~", "", "", "~INPUTGROUP_FRONTEND_TRIGGERS~")
    );

    submenuTab.AddLeftItem(first);
    submenuTab.AddLeftItem(second);
    submenuTab.AddLeftItem(third);
    submenuTab.AddLeftItem(fourth);
    submenuTab.AddLeftItem(fifth);

    return submenuTab;
}

function buildPlayerListTab(): PlayerListTab {
    const playersTab = new PlayerListTab("PLAYERLISTTAB", SColor.HUD_Freemode);

    const settings = new SettingsListColumn("settings", 16);
    const players = new PlayerListColumn("players", 16);
    const missions = new MissionsListColumn("missions", 16);
    const missionPanel = new MissionDetailsPanel("missionPanel");

    playersTab.SetupLeftColumn(settings);
    playersTab.SetupCenterColumn(players);
    playersTab.SetupRightColumn(missionPanel);

    missionPanel.Title = "ScaleformUI - Title";
    missionPanel.UpdatePanelPicture("scaleformui", "bannerbackground");

    settings.AddSettings(new SettingsCheckboxItem("Show markers", UIMenuCheckboxStyle.Tick, true));
    settings.AddSettings(new SettingsListItem("Difficulty", ["Easy", "Normal", "Hard"], 1));
    settings.AddSettings(new SettingsSliderItem("Music volume", 100, 70, SColor.HUD_Freemode));
    settings.AddSettings(new SettingsProgressItem("Brightness", 100, 60, false, SColor.HUD_Freemode));
    // settings.AddSettings(new UIMenuItem("Base Item", "Basic Description"));
    // settings.AddSettings(
    //     new UIMenuListItem(
    //         "List Item",
    //         ["~r~item1", "item2", "item3"],
    //         0,
    //         "List Description",
    //         SColor.HUD_Panel_light,
    //         SColor.HUD_White,
    //         SColor.HUD_White,
    //         SColor.HUD_Black
    //     )
    // );
    // settings.AddSettings(
    //     new UIMenuCheckboxItem(
    //         "Checkbox Item",
    //         UIMenuCheckboxStyle.Tick,
    //         true,
    //         "Checkbox Description",
    //         SColor.HUD_Panel_light,
    //         SColor.HUD_White
    //     )
    // );
    // settings.AddSettings(
    //     new UIMenuSliderItem("Slider Item", "Slider Description", 100, 10, 50, SColor.HUD_Freemode, false)
    // );
    // settings.AddSettings(new UIMenuProgressItem("Progress Item", 100, 50, "Progress Description", SColor.HUD_Freemode));

    settings.OnSettingItemActivated = (item) => {
        if (item instanceof UIMenuCheckboxItem) {
            PlaySoundFrontend(-1, "SELECT", "HUD_FRONTEND_DEFAULT_SOUNDSET", true);
        }
    };

    const missionItems = [
        new MissionItem("Mission 1"),
        new MissionItem("Mission 2"),
        new MissionItem("Mission 3"),
        new MissionItem("Mission 4"),
        new MissionItem("Mission 5")
    ];

    missionItems.forEach((mission) => {
        mission.SetCustomLeftIcon("scaleformui", "kitty");
        mission.SetCustomRightIcon("scaleformui", "kitty");
        mission.onMissionActivated(() => {
            PlaySoundFrontend(-1, "SELECT", "HUD_FRONTEND_DEFAULT_SOUNDSET", true);
        });
        missions.AddMissionItem(mission);
    });

    missions.AddMissionItem(new MissionSeparatorItem("Separator", true));

    return playersTab;
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
