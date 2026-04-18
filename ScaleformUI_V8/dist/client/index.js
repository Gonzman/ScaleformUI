var __legacyDecorateClassTS = function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// src/elements/color.ts
var HudColor;
((HudColor2) => {
    HudColor2[(HudColor2["NONE"] = -1)] = "NONE";
    HudColor2[(HudColor2["HUD_COLOUR_PURE_WHITE"] = 0)] = "HUD_COLOUR_PURE_WHITE";
    HudColor2[(HudColor2["HUD_COLOUR_WHITE"] = 1)] = "HUD_COLOUR_WHITE";
    HudColor2[(HudColor2["HUD_COLOUR_BLACK"] = 2)] = "HUD_COLOUR_BLACK";
    HudColor2[(HudColor2["HUD_COLOUR_GREY"] = 3)] = "HUD_COLOUR_GREY";
    HudColor2[(HudColor2["HUD_COLOUR_GREYLIGHT"] = 4)] = "HUD_COLOUR_GREYLIGHT";
    HudColor2[(HudColor2["HUD_COLOUR_GREYDARK"] = 5)] = "HUD_COLOUR_GREYDARK";
    HudColor2[(HudColor2["HUD_COLOUR_RED"] = 6)] = "HUD_COLOUR_RED";
    HudColor2[(HudColor2["HUD_COLOUR_REDLIGHT"] = 7)] = "HUD_COLOUR_REDLIGHT";
    HudColor2[(HudColor2["HUD_COLOUR_REDDARK"] = 8)] = "HUD_COLOUR_REDDARK";
    HudColor2[(HudColor2["HUD_COLOUR_BLUE"] = 9)] = "HUD_COLOUR_BLUE";
    HudColor2[(HudColor2["HUD_COLOUR_BLUELIGHT"] = 10)] = "HUD_COLOUR_BLUELIGHT";
    HudColor2[(HudColor2["HUD_COLOUR_BLUEDARK"] = 11)] = "HUD_COLOUR_BLUEDARK";
    HudColor2[(HudColor2["HUD_COLOUR_YELLOW"] = 12)] = "HUD_COLOUR_YELLOW";
    HudColor2[(HudColor2["HUD_COLOUR_YELLOWLIGHT"] = 13)] = "HUD_COLOUR_YELLOWLIGHT";
    HudColor2[(HudColor2["HUD_COLOUR_YELLOWDARK"] = 14)] = "HUD_COLOUR_YELLOWDARK";
    HudColor2[(HudColor2["HUD_COLOUR_ORANGE"] = 15)] = "HUD_COLOUR_ORANGE";
    HudColor2[(HudColor2["HUD_COLOUR_ORANGELIGHT"] = 16)] = "HUD_COLOUR_ORANGELIGHT";
    HudColor2[(HudColor2["HUD_COLOUR_ORANGEDARK"] = 17)] = "HUD_COLOUR_ORANGEDARK";
    HudColor2[(HudColor2["HUD_COLOUR_GREEN"] = 18)] = "HUD_COLOUR_GREEN";
    HudColor2[(HudColor2["HUD_COLOUR_GREENLIGHT"] = 19)] = "HUD_COLOUR_GREENLIGHT";
    HudColor2[(HudColor2["HUD_COLOUR_GREENDARK"] = 20)] = "HUD_COLOUR_GREENDARK";
    HudColor2[(HudColor2["HUD_COLOUR_PURPLE"] = 21)] = "HUD_COLOUR_PURPLE";
    HudColor2[(HudColor2["HUD_COLOUR_PURPLELIGHT"] = 22)] = "HUD_COLOUR_PURPLELIGHT";
    HudColor2[(HudColor2["HUD_COLOUR_PURPLEDARK"] = 23)] = "HUD_COLOUR_PURPLEDARK";
    HudColor2[(HudColor2["HUD_COLOUR_PINK"] = 24)] = "HUD_COLOUR_PINK";
    HudColor2[(HudColor2["HUD_COLOUR_RADAR_HEALTH"] = 25)] = "HUD_COLOUR_RADAR_HEALTH";
    HudColor2[(HudColor2["HUD_COLOUR_RADAR_ARMOUR"] = 26)] = "HUD_COLOUR_RADAR_ARMOUR";
    HudColor2[(HudColor2["HUD_COLOUR_RADAR_DAMAGE"] = 27)] = "HUD_COLOUR_RADAR_DAMAGE";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER1"] = 28)] = "HUD_COLOUR_NET_PLAYER1";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER2"] = 29)] = "HUD_COLOUR_NET_PLAYER2";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER3"] = 30)] = "HUD_COLOUR_NET_PLAYER3";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER4"] = 31)] = "HUD_COLOUR_NET_PLAYER4";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER5"] = 32)] = "HUD_COLOUR_NET_PLAYER5";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER6"] = 33)] = "HUD_COLOUR_NET_PLAYER6";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER7"] = 34)] = "HUD_COLOUR_NET_PLAYER7";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER8"] = 35)] = "HUD_COLOUR_NET_PLAYER8";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER9"] = 36)] = "HUD_COLOUR_NET_PLAYER9";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER10"] = 37)] = "HUD_COLOUR_NET_PLAYER10";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER11"] = 38)] = "HUD_COLOUR_NET_PLAYER11";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER12"] = 39)] = "HUD_COLOUR_NET_PLAYER12";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER13"] = 40)] = "HUD_COLOUR_NET_PLAYER13";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER14"] = 41)] = "HUD_COLOUR_NET_PLAYER14";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER15"] = 42)] = "HUD_COLOUR_NET_PLAYER15";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER16"] = 43)] = "HUD_COLOUR_NET_PLAYER16";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER17"] = 44)] = "HUD_COLOUR_NET_PLAYER17";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER18"] = 45)] = "HUD_COLOUR_NET_PLAYER18";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER19"] = 46)] = "HUD_COLOUR_NET_PLAYER19";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER20"] = 47)] = "HUD_COLOUR_NET_PLAYER20";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER21"] = 48)] = "HUD_COLOUR_NET_PLAYER21";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER22"] = 49)] = "HUD_COLOUR_NET_PLAYER22";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER23"] = 50)] = "HUD_COLOUR_NET_PLAYER23";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER24"] = 51)] = "HUD_COLOUR_NET_PLAYER24";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER25"] = 52)] = "HUD_COLOUR_NET_PLAYER25";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER26"] = 53)] = "HUD_COLOUR_NET_PLAYER26";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER27"] = 54)] = "HUD_COLOUR_NET_PLAYER27";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER28"] = 55)] = "HUD_COLOUR_NET_PLAYER28";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER29"] = 56)] = "HUD_COLOUR_NET_PLAYER29";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER30"] = 57)] = "HUD_COLOUR_NET_PLAYER30";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER31"] = 58)] = "HUD_COLOUR_NET_PLAYER31";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER32"] = 59)] = "HUD_COLOUR_NET_PLAYER32";
    HudColor2[(HudColor2["HUD_COLOUR_SIMPLEBLIP_DEFAULT"] = 60)] = "HUD_COLOUR_SIMPLEBLIP_DEFAULT";
    HudColor2[(HudColor2["HUD_COLOUR_MENU_BLUE"] = 61)] = "HUD_COLOUR_MENU_BLUE";
    HudColor2[(HudColor2["HUD_COLOUR_MENU_GREY_LIGHT"] = 62)] = "HUD_COLOUR_MENU_GREY_LIGHT";
    HudColor2[(HudColor2["HUD_COLOUR_MENU_BLUE_EXTRA_DARK"] = 63)] = "HUD_COLOUR_MENU_BLUE_EXTRA_DARK";
    HudColor2[(HudColor2["HUD_COLOUR_MENU_YELLOW"] = 64)] = "HUD_COLOUR_MENU_YELLOW";
    HudColor2[(HudColor2["HUD_COLOUR_MENU_YELLOW_DARK"] = 65)] = "HUD_COLOUR_MENU_YELLOW_DARK";
    HudColor2[(HudColor2["HUD_COLOUR_MENU_GREEN"] = 66)] = "HUD_COLOUR_MENU_GREEN";
    HudColor2[(HudColor2["HUD_COLOUR_MENU_GREY"] = 67)] = "HUD_COLOUR_MENU_GREY";
    HudColor2[(HudColor2["HUD_COLOUR_MENU_GREY_DARK"] = 68)] = "HUD_COLOUR_MENU_GREY_DARK";
    HudColor2[(HudColor2["HUD_COLOUR_MENU_HIGHLIGHT"] = 69)] = "HUD_COLOUR_MENU_HIGHLIGHT";
    HudColor2[(HudColor2["HUD_COLOUR_MENU_STANDARD"] = 70)] = "HUD_COLOUR_MENU_STANDARD";
    HudColor2[(HudColor2["HUD_COLOUR_MENU_DIMMED"] = 71)] = "HUD_COLOUR_MENU_DIMMED";
    HudColor2[(HudColor2["HUD_COLOUR_MENU_EXTRA_DIMMED"] = 72)] = "HUD_COLOUR_MENU_EXTRA_DIMMED";
    HudColor2[(HudColor2["HUD_COLOUR_BRIEF_TITLE"] = 73)] = "HUD_COLOUR_BRIEF_TITLE";
    HudColor2[(HudColor2["HUD_COLOUR_MID_GREY_MP"] = 74)] = "HUD_COLOUR_MID_GREY_MP";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER1_DARK"] = 75)] = "HUD_COLOUR_NET_PLAYER1_DARK";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER2_DARK"] = 76)] = "HUD_COLOUR_NET_PLAYER2_DARK";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER3_DARK"] = 77)] = "HUD_COLOUR_NET_PLAYER3_DARK";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER4_DARK"] = 78)] = "HUD_COLOUR_NET_PLAYER4_DARK";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER5_DARK"] = 79)] = "HUD_COLOUR_NET_PLAYER5_DARK";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER6_DARK"] = 80)] = "HUD_COLOUR_NET_PLAYER6_DARK";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER7_DARK"] = 81)] = "HUD_COLOUR_NET_PLAYER7_DARK";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER8_DARK"] = 82)] = "HUD_COLOUR_NET_PLAYER8_DARK";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER9_DARK"] = 83)] = "HUD_COLOUR_NET_PLAYER9_DARK";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER10_DARK"] = 84)] = "HUD_COLOUR_NET_PLAYER10_DARK";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER11_DARK"] = 85)] = "HUD_COLOUR_NET_PLAYER11_DARK";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER12_DARK"] = 86)] = "HUD_COLOUR_NET_PLAYER12_DARK";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER13_DARK"] = 87)] = "HUD_COLOUR_NET_PLAYER13_DARK";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER14_DARK"] = 88)] = "HUD_COLOUR_NET_PLAYER14_DARK";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER15_DARK"] = 89)] = "HUD_COLOUR_NET_PLAYER15_DARK";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER16_DARK"] = 90)] = "HUD_COLOUR_NET_PLAYER16_DARK";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER17_DARK"] = 91)] = "HUD_COLOUR_NET_PLAYER17_DARK";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER18_DARK"] = 92)] = "HUD_COLOUR_NET_PLAYER18_DARK";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER19_DARK"] = 93)] = "HUD_COLOUR_NET_PLAYER19_DARK";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER20_DARK"] = 94)] = "HUD_COLOUR_NET_PLAYER20_DARK";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER21_DARK"] = 95)] = "HUD_COLOUR_NET_PLAYER21_DARK";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER22_DARK"] = 96)] = "HUD_COLOUR_NET_PLAYER22_DARK";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER23_DARK"] = 97)] = "HUD_COLOUR_NET_PLAYER23_DARK";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER24_DARK"] = 98)] = "HUD_COLOUR_NET_PLAYER24_DARK";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER25_DARK"] = 99)] = "HUD_COLOUR_NET_PLAYER25_DARK";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER26_DARK"] = 100)] = "HUD_COLOUR_NET_PLAYER26_DARK";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER27_DARK"] = 101)] = "HUD_COLOUR_NET_PLAYER27_DARK";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER28_DARK"] = 102)] = "HUD_COLOUR_NET_PLAYER28_DARK";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER29_DARK"] = 103)] = "HUD_COLOUR_NET_PLAYER29_DARK";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER30_DARK"] = 104)] = "HUD_COLOUR_NET_PLAYER30_DARK";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER31_DARK"] = 105)] = "HUD_COLOUR_NET_PLAYER31_DARK";
    HudColor2[(HudColor2["HUD_COLOUR_NET_PLAYER32_DARK"] = 106)] = "HUD_COLOUR_NET_PLAYER32_DARK";
    HudColor2[(HudColor2["HUD_COLOUR_BRONZE"] = 107)] = "HUD_COLOUR_BRONZE";
    HudColor2[(HudColor2["HUD_COLOUR_SILVER"] = 108)] = "HUD_COLOUR_SILVER";
    HudColor2[(HudColor2["HUD_COLOUR_GOLD"] = 109)] = "HUD_COLOUR_GOLD";
    HudColor2[(HudColor2["HUD_COLOUR_PLATINUM"] = 110)] = "HUD_COLOUR_PLATINUM";
    HudColor2[(HudColor2["HUD_COLOUR_GANG1"] = 111)] = "HUD_COLOUR_GANG1";
    HudColor2[(HudColor2["HUD_COLOUR_GANG2"] = 112)] = "HUD_COLOUR_GANG2";
    HudColor2[(HudColor2["HUD_COLOUR_GANG3"] = 113)] = "HUD_COLOUR_GANG3";
    HudColor2[(HudColor2["HUD_COLOUR_GANG4"] = 114)] = "HUD_COLOUR_GANG4";
    HudColor2[(HudColor2["HUD_COLOUR_SAME_CREW"] = 115)] = "HUD_COLOUR_SAME_CREW";
    HudColor2[(HudColor2["HUD_COLOUR_FREEMODE"] = 116)] = "HUD_COLOUR_FREEMODE";
    HudColor2[(HudColor2["HUD_COLOUR_PAUSE_BG"] = 117)] = "HUD_COLOUR_PAUSE_BG";
    HudColor2[(HudColor2["HUD_COLOUR_FRIENDLY"] = 118)] = "HUD_COLOUR_FRIENDLY";
    HudColor2[(HudColor2["HUD_COLOUR_ENEMY"] = 119)] = "HUD_COLOUR_ENEMY";
    HudColor2[(HudColor2["HUD_COLOUR_LOCATION"] = 120)] = "HUD_COLOUR_LOCATION";
    HudColor2[(HudColor2["HUD_COLOUR_PICKUP"] = 121)] = "HUD_COLOUR_PICKUP";
    HudColor2[(HudColor2["HUD_COLOUR_PAUSE_SINGLEPLAYER"] = 122)] = "HUD_COLOUR_PAUSE_SINGLEPLAYER";
    HudColor2[(HudColor2["HUD_COLOUR_FREEMODE_DARK"] = 123)] = "HUD_COLOUR_FREEMODE_DARK";
    HudColor2[(HudColor2["HUD_COLOUR_INACTIVE_MISSION"] = 124)] = "HUD_COLOUR_INACTIVE_MISSION";
    HudColor2[(HudColor2["HUD_COLOUR_DAMAGE"] = 125)] = "HUD_COLOUR_DAMAGE";
    HudColor2[(HudColor2["HUD_COLOUR_PINKLIGHT"] = 126)] = "HUD_COLOUR_PINKLIGHT";
    HudColor2[(HudColor2["HUD_COLOUR_PM_MITEM_HIGHLIGHT"] = 127)] = "HUD_COLOUR_PM_MITEM_HIGHLIGHT";
    HudColor2[(HudColor2["HUD_COLOUR_SCRIPT_VARIABLE"] = 128)] = "HUD_COLOUR_SCRIPT_VARIABLE";
    HudColor2[(HudColor2["HUD_COLOUR_YOGA"] = 129)] = "HUD_COLOUR_YOGA";
    HudColor2[(HudColor2["HUD_COLOUR_TENNIS"] = 130)] = "HUD_COLOUR_TENNIS";
    HudColor2[(HudColor2["HUD_COLOUR_GOLF"] = 131)] = "HUD_COLOUR_GOLF";
    HudColor2[(HudColor2["HUD_COLOUR_SHOOTING_RANGE"] = 132)] = "HUD_COLOUR_SHOOTING_RANGE";
    HudColor2[(HudColor2["HUD_COLOUR_FLIGHT_SCHOOL"] = 133)] = "HUD_COLOUR_FLIGHT_SCHOOL";
    HudColor2[(HudColor2["HUD_COLOUR_NORTH_BLUE"] = 134)] = "HUD_COLOUR_NORTH_BLUE";
    HudColor2[(HudColor2["HUD_COLOUR_SOCIAL_CLUB"] = 135)] = "HUD_COLOUR_SOCIAL_CLUB";
    HudColor2[(HudColor2["HUD_COLOUR_PLATFORM_BLUE"] = 136)] = "HUD_COLOUR_PLATFORM_BLUE";
    HudColor2[(HudColor2["HUD_COLOUR_PLATFORM_GREEN"] = 137)] = "HUD_COLOUR_PLATFORM_GREEN";
    HudColor2[(HudColor2["HUD_COLOUR_PLATFORM_GREY"] = 138)] = "HUD_COLOUR_PLATFORM_GREY";
    HudColor2[(HudColor2["HUD_COLOUR_FACEBOOK_BLUE"] = 139)] = "HUD_COLOUR_FACEBOOK_BLUE";
    HudColor2[(HudColor2["HUD_COLOUR_INGAME_BG"] = 140)] = "HUD_COLOUR_INGAME_BG";
    HudColor2[(HudColor2["HUD_COLOUR_DARTS"] = 141)] = "HUD_COLOUR_DARTS";
    HudColor2[(HudColor2["HUD_COLOUR_WAYPOINT"] = 142)] = "HUD_COLOUR_WAYPOINT";
    HudColor2[(HudColor2["HUD_COLOUR_MICHAEL"] = 143)] = "HUD_COLOUR_MICHAEL";
    HudColor2[(HudColor2["HUD_COLOUR_FRANKLIN"] = 144)] = "HUD_COLOUR_FRANKLIN";
    HudColor2[(HudColor2["HUD_COLOUR_TREVOR"] = 145)] = "HUD_COLOUR_TREVOR";
    HudColor2[(HudColor2["HUD_COLOUR_GOLF_P1"] = 146)] = "HUD_COLOUR_GOLF_P1";
    HudColor2[(HudColor2["HUD_COLOUR_GOLF_P2"] = 147)] = "HUD_COLOUR_GOLF_P2";
    HudColor2[(HudColor2["HUD_COLOUR_GOLF_P3"] = 148)] = "HUD_COLOUR_GOLF_P3";
    HudColor2[(HudColor2["HUD_COLOUR_GOLF_P4"] = 149)] = "HUD_COLOUR_GOLF_P4";
    HudColor2[(HudColor2["HUD_COLOUR_WAYPOINTLIGHT"] = 150)] = "HUD_COLOUR_WAYPOINTLIGHT";
    HudColor2[(HudColor2["HUD_COLOUR_WAYPOINTDARK"] = 151)] = "HUD_COLOUR_WAYPOINTDARK";
    HudColor2[(HudColor2["HUD_COLOUR_PANEL_LIGHT"] = 152)] = "HUD_COLOUR_PANEL_LIGHT";
    HudColor2[(HudColor2["HUD_COLOUR_MICHAEL_DARK"] = 153)] = "HUD_COLOUR_MICHAEL_DARK";
    HudColor2[(HudColor2["HUD_COLOUR_FRANKLIN_DARK"] = 154)] = "HUD_COLOUR_FRANKLIN_DARK";
    HudColor2[(HudColor2["HUD_COLOUR_TREVOR_DARK"] = 155)] = "HUD_COLOUR_TREVOR_DARK";
    HudColor2[(HudColor2["HUD_COLOUR_OBJECTIVE_ROUTE"] = 156)] = "HUD_COLOUR_OBJECTIVE_ROUTE";
    HudColor2[(HudColor2["HUD_COLOUR_PAUSEMAP_TINT"] = 157)] = "HUD_COLOUR_PAUSEMAP_TINT";
    HudColor2[(HudColor2["HUD_COLOUR_PAUSE_DESELECT"] = 158)] = "HUD_COLOUR_PAUSE_DESELECT";
    HudColor2[(HudColor2["HUD_COLOUR_PM_WEAPONS_PURCHASABLE"] = 159)] = "HUD_COLOUR_PM_WEAPONS_PURCHASABLE";
    HudColor2[(HudColor2["HUD_COLOUR_PM_WEAPONS_LOCKED"] = 160)] = "HUD_COLOUR_PM_WEAPONS_LOCKED";
    HudColor2[(HudColor2["HUD_COLOUR_END_SCREEN_BG"] = 161)] = "HUD_COLOUR_END_SCREEN_BG";
    HudColor2[(HudColor2["HUD_COLOUR_CHOP"] = 162)] = "HUD_COLOUR_CHOP";
    HudColor2[(HudColor2["HUD_COLOUR_PAUSEMAP_TINT_HALF"] = 163)] = "HUD_COLOUR_PAUSEMAP_TINT_HALF";
    HudColor2[(HudColor2["HUD_COLOUR_NORTH_BLUE_OFFICIAL"] = 164)] = "HUD_COLOUR_NORTH_BLUE_OFFICIAL";
    HudColor2[(HudColor2["HUD_COLOUR_SCRIPT_VARIABLE_2"] = 165)] = "HUD_COLOUR_SCRIPT_VARIABLE_2";
    HudColor2[(HudColor2["HUD_COLOUR_H"] = 166)] = "HUD_COLOUR_H";
    HudColor2[(HudColor2["HUD_COLOUR_HDARK"] = 167)] = "HUD_COLOUR_HDARK";
    HudColor2[(HudColor2["HUD_COLOUR_T"] = 168)] = "HUD_COLOUR_T";
    HudColor2[(HudColor2["HUD_COLOUR_TDARK"] = 169)] = "HUD_COLOUR_TDARK";
    HudColor2[(HudColor2["HUD_COLOUR_HSHARD"] = 170)] = "HUD_COLOUR_HSHARD";
    HudColor2[(HudColor2["HUD_COLOUR_CONTROLLER_MICHAEL"] = 171)] = "HUD_COLOUR_CONTROLLER_MICHAEL";
    HudColor2[(HudColor2["HUD_COLOUR_CONTROLLER_FRANKLIN"] = 172)] = "HUD_COLOUR_CONTROLLER_FRANKLIN";
    HudColor2[(HudColor2["HUD_COLOUR_CONTROLLER_TREVOR"] = 173)] = "HUD_COLOUR_CONTROLLER_TREVOR";
    HudColor2[(HudColor2["HUD_COLOUR_CONTROLLER_CHOP"] = 174)] = "HUD_COLOUR_CONTROLLER_CHOP";
    HudColor2[(HudColor2["HUD_COLOUR_VIDEO_EDITOR_VIDEO"] = 175)] = "HUD_COLOUR_VIDEO_EDITOR_VIDEO";
    HudColor2[(HudColor2["HUD_COLOUR_VIDEO_EDITOR_AUDIO"] = 176)] = "HUD_COLOUR_VIDEO_EDITOR_AUDIO";
    HudColor2[(HudColor2["HUD_COLOUR_VIDEO_EDITOR_TEXT"] = 177)] = "HUD_COLOUR_VIDEO_EDITOR_TEXT";
    HudColor2[(HudColor2["HUD_COLOUR_HB_BLUE"] = 178)] = "HUD_COLOUR_HB_BLUE";
    HudColor2[(HudColor2["HUD_COLOUR_HB_YELLOW"] = 179)] = "HUD_COLOUR_HB_YELLOW";
    HudColor2[(HudColor2["HUD_COLOUR_VIDEO_EDITOR_SCORE"] = 180)] = "HUD_COLOUR_VIDEO_EDITOR_SCORE";
    HudColor2[(HudColor2["HUD_COLOUR_VIDEO_EDITOR_AUDIO_FADEOUT"] = 181)] = "HUD_COLOUR_VIDEO_EDITOR_AUDIO_FADEOUT";
    HudColor2[(HudColor2["HUD_COLOUR_VIDEO_EDITOR_TEXT_FADEOUT"] = 182)] = "HUD_COLOUR_VIDEO_EDITOR_TEXT_FADEOUT";
    HudColor2[(HudColor2["HUD_COLOUR_VIDEO_EDITOR_SCORE_FADEOUT"] = 183)] = "HUD_COLOUR_VIDEO_EDITOR_SCORE_FADEOUT";
    HudColor2[(HudColor2["HUD_COLOUR_HEIST_BACKGROUND"] = 184)] = "HUD_COLOUR_HEIST_BACKGROUND";
    HudColor2[(HudColor2["HUD_COLOUR_VIDEO_EDITOR_AMBIENT"] = 185)] = "HUD_COLOUR_VIDEO_EDITOR_AMBIENT";
    HudColor2[(HudColor2["HUD_COLOUR_VIDEO_EDITOR_AMBIENT_FADEOUT"] = 186)] = "HUD_COLOUR_VIDEO_EDITOR_AMBIENT_FADEOUT";
    HudColor2[(HudColor2["HUD_COLOUR_GB"] = 187)] = "HUD_COLOUR_GB";
    HudColor2[(HudColor2["HUD_COLOUR_G"] = 188)] = "HUD_COLOUR_G";
    HudColor2[(HudColor2["HUD_COLOUR_B"] = 189)] = "HUD_COLOUR_B";
    HudColor2[(HudColor2["HUD_COLOUR_LOW_FLOW"] = 190)] = "HUD_COLOUR_LOW_FLOW";
    HudColor2[(HudColor2["HUD_COLOUR_LOW_FLOW_DARK"] = 191)] = "HUD_COLOUR_LOW_FLOW_DARK";
    HudColor2[(HudColor2["HUD_COLOUR_G1"] = 192)] = "HUD_COLOUR_G1";
    HudColor2[(HudColor2["HUD_COLOUR_G2"] = 193)] = "HUD_COLOUR_G2";
    HudColor2[(HudColor2["HUD_COLOUR_G3"] = 194)] = "HUD_COLOUR_G3";
    HudColor2[(HudColor2["HUD_COLOUR_G4"] = 195)] = "HUD_COLOUR_G4";
    HudColor2[(HudColor2["HUD_COLOUR_G5"] = 196)] = "HUD_COLOUR_G5";
    HudColor2[(HudColor2["HUD_COLOUR_G6"] = 197)] = "HUD_COLOUR_G6";
    HudColor2[(HudColor2["HUD_COLOUR_G7"] = 198)] = "HUD_COLOUR_G7";
    HudColor2[(HudColor2["HUD_COLOUR_G8"] = 199)] = "HUD_COLOUR_G8";
    HudColor2[(HudColor2["HUD_COLOUR_G9"] = 200)] = "HUD_COLOUR_G9";
    HudColor2[(HudColor2["HUD_COLOUR_G10"] = 201)] = "HUD_COLOUR_G10";
    HudColor2[(HudColor2["HUD_COLOUR_G11"] = 202)] = "HUD_COLOUR_G11";
    HudColor2[(HudColor2["HUD_COLOUR_G12"] = 203)] = "HUD_COLOUR_G12";
    HudColor2[(HudColor2["HUD_COLOUR_G13"] = 204)] = "HUD_COLOUR_G13";
    HudColor2[(HudColor2["HUD_COLOUR_G14"] = 205)] = "HUD_COLOUR_G14";
    HudColor2[(HudColor2["HUD_COLOUR_G15"] = 206)] = "HUD_COLOUR_G15";
    HudColor2[(HudColor2["HUD_COLOUR_ADVERSARY"] = 207)] = "HUD_COLOUR_ADVERSARY";
    HudColor2[(HudColor2["HUD_COLOUR_DEGEN_RED"] = 208)] = "HUD_COLOUR_DEGEN_RED";
    HudColor2[(HudColor2["HUD_COLOUR_DEGEN_YELLOW"] = 209)] = "HUD_COLOUR_DEGEN_YELLOW";
    HudColor2[(HudColor2["HUD_COLOUR_DEGEN_GREEN"] = 210)] = "HUD_COLOUR_DEGEN_GREEN";
    HudColor2[(HudColor2["HUD_COLOUR_DEGEN_CYAN"] = 211)] = "HUD_COLOUR_DEGEN_CYAN";
    HudColor2[(HudColor2["HUD_COLOUR_DEGEN_BLUE"] = 212)] = "HUD_COLOUR_DEGEN_BLUE";
    HudColor2[(HudColor2["HUD_COLOUR_DEGEN_MAGENTA"] = 213)] = "HUD_COLOUR_DEGEN_MAGENTA";
    HudColor2[(HudColor2["HUD_COLOUR_STUNT_1"] = 214)] = "HUD_COLOUR_STUNT_1";
    HudColor2[(HudColor2["HUD_COLOUR_STUNT_2"] = 215)] = "HUD_COLOUR_STUNT_2";
    HudColor2[(HudColor2["HUD_COLOUR_SPECIAL_RACE_SERIES"] = 216)] = "HUD_COLOUR_SPECIAL_RACE_SERIES";
    HudColor2[(HudColor2["HUD_COLOUR_SPECIAL_RACE_SERIES_DARK"] = 217)] = "HUD_COLOUR_SPECIAL_RACE_SERIES_DARK";
    HudColor2[(HudColor2["HUD_COLOUR_CS"] = 218)] = "HUD_COLOUR_CS";
    HudColor2[(HudColor2["HUD_COLOUR_CS_DARK"] = 219)] = "HUD_COLOUR_CS_DARK";
    HudColor2[(HudColor2["HUD_COLOUR_TECH_GREEN"] = 220)] = "HUD_COLOUR_TECH_GREEN";
    HudColor2[(HudColor2["HUD_COLOUR_TECH_GREEN_DARK"] = 221)] = "HUD_COLOUR_TECH_GREEN_DARK";
    HudColor2[(HudColor2["HUD_COLOUR_TECH_RED"] = 222)] = "HUD_COLOUR_TECH_RED";
    HudColor2[(HudColor2["HUD_COLOUR_TECH_GREEN_VERY_DARK"] = 223)] = "HUD_COLOUR_TECH_GREEN_VERY_DARK";
})((HudColor ||= {}));
var ignoredFormats = [
    "~n",
    "~h",
    "~bold",
    "~italic",
    "~ws",
    "~wanted_star",
    "~nrt",
    "~EX_R*",
    "~BLIP_",
    "~a",
    "~1",
    "~a_",
    "~1_",
    "~x",
    "~z",
    "~INPUT_",
    "~INPUTGROUP_",
    "~ACCEPT",
    "~CANCEL",
    "~PAD_UP",
    "~PAD_DOWN",
    "~PAD_LEFT",
    "~PAD_RIGHT",
    "~PAD_A",
    "~PAD_B",
    "~PAD_X",
    "~PAD_Y",
    "~PAD_START",
    "~PAD_BACK",
    "~PAD_LB",
    "~PAD_LT",
    "~PAD_RB",
    "~PAD_RT",
    "~PAD_DPAD_UP",
    "~PAD_DPAD_DOWN",
    "~PAD_DPAD_LEFT",
    "~PAD_DPAD_RIGHT",
    "~PAD_DPAD_NONE",
    "~PAD_DPAD_ALL",
    "~PAD_DPAD_UPDOWN",
    "~PAD_DPAD_LEFTRIGHT",
    "~PAD_LSTICK_UP",
    "~PAD_LSTICK_DOWN",
    "~PAD_LSTICK_LEFT",
    "~PAD_LSTICK_RIGHT",
    "~PAD_LSTICK_NONE",
    "~PAD_LSTICK_ALL",
    "~PAD_LSTICK_UPDOWN",
    "~PAD_LSTICK_LEFTRIGHT",
    "~PAD_LSTICK_ROTATE",
    "~PAD_RSTICK_UP",
    "~PAD_RSTICK_DOWN",
    "~PAD_RSTICK_LEFT",
    "~PAD_RSTICK_RIGHT",
    "~PAD_RSTICK_NONE",
    "~PAD_RSTICK_ALL",
    "~PAD_RSTICK_UPDOWN",
    "~PAD_RSTICK_LEFTRIGHT",
    "~PAD_RSTICK_ROTATE"
];
var getAllIndexes = (label, substr) => {
    let first = 0;
    const result = [];
    while (true) {
        first = label.indexOf(substr, first + 1);
        if (first === -1) break;
        result.push(first);
    }
    return result;
};
var replaceRstarColorsWith = (label, color) => {
    if (!label.includes("~")) return label;
    const findIndexes = getAllIndexes(label, "~");
    return findIndexes
        .reverse()
        .filter((_, i) => i % 2 === 0)
        .reduce((currentLabel, index, i) => {
            const endIndex = findIndexes[findIndexes.length - 2 - i];
            const length = endIndex - index + 1;
            const char = currentLabel.substring(index, index + length);
            if (!ignoredFormats.some((v) => char.startsWith(v))) {
                return currentLabel.replace(char, color);
            }
            return currentLabel;
        }, label);
};

// src/elements/scolor.ts
class SColor {
    a;
    r;
    g;
    b;
    constructor(a, r, g, b) {
        this.a = a;
        this.r = r;
        this.g = g;
        this.b = b;
    }
    get A() {
        return this.a;
    }
    get B() {
        return this.b;
    }
    get G() {
        return this.g;
    }
    get R() {
        return this.r;
    }
    get IsEmpty() {
        return this.A === 0 && this.R === 0 && this.G === 0 && this.B === 0;
    }
    static FromHex(hexColor) {
        if (!hexColor || !hexColor.startsWith("#")) {
            throw new Error("Invalid Hex value");
        }
        const hex = hexColor.substring(1);
        if (hex.length === 6) {
            const r = parseInt(hex.slice(0, 2), 16);
            const g = parseInt(hex.slice(2, 4), 16);
            const b = parseInt(hex.slice(4, 6), 16);
            return SColor.FromArgb(255, r, g, b);
        }
        if (hex.length === 8) {
            const a = parseInt(hex.slice(0, 2), 16);
            const r = parseInt(hex.slice(2, 4), 16);
            const g = parseInt(hex.slice(4, 6), 16);
            const b = parseInt(hex.slice(6, 8), 16);
            return new SColor(a, r, g, b);
        }
        throw new Error("Invalid Hex value");
    }
    static FromHudColor(color) {
        if (Object.values(HudColor).includes(color)) {
            const [r, g, b, a] = GetHudColour(color);
            return new SColor(a, r, g, b);
        } else {
            throw new Error("Invalid argument type");
        }
    }
    static FromRandomValues() {
        const a = 255;
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return new SColor(a, r, g, b);
    }
    static FromArgbInt(argb) {
        const value = argb >>> 0;
        const a = (value >>> 24) & 255;
        const r = (value >>> 16) & 255;
        const g = (value >>> 8) & 255;
        const b = value & 255;
        return new SColor(a, r, g, b);
    }
    static FromArgb(...args) {
        if (args.length === 3) {
            return SColor.FromArgb(255, args[0], args[1], args[2]);
        }
        if (args.length === 4) {
            return new SColor(args[0], args[1], args[2], args[3]);
        }
        throw new Error("Invalid number of arguments for FromArgb");
    }
    static FromColor(color) {
        return new SColor(color.A, color.R, color.G, color.B);
    }
    static FromRgb(red, green, blue) {
        return SColor.FromArgb(255, red, green, blue);
    }
    getBrightness() {
        let [min, max] = this.minMaxRGB(this.R, this.G, this.B);
        return (max + min) / (255 * 2);
    }
    getHue() {
        if (this.R === this.G && this.G === this.B) {
            return 0;
        }
        let [min, max] = this.minMaxRGB(this.R, this.G, this.B);
        let delta = max - min;
        let hue = 0;
        if (this.R === max) {
            hue = (this.G - this.B) / delta;
        } else if (this.G === max) {
            hue = (this.B - this.R) / delta + 2;
        } else {
            hue = (this.R - this.G) / delta + 4;
        }
        hue = hue * 60;
        if (hue < 0) {
            hue = hue + 360;
        }
        return hue;
    }
    getSaturation() {
        if (this.R === this.G && this.G === this.B) {
            return 0;
        }
        let [min, max] = this.minMaxRGB(this.R, this.G, this.B);
        let div = max + min;
        if (div > 255) {
            div = 255 * 2 - max - min;
        }
        return (max - min) / div;
    }
    minMaxRGB(r, g, b) {
        let min,
            max = 0;
        if (r > g) {
            max = r;
            min = g;
        } else {
            max = g;
            min = r;
        }
        if (b > max) {
            max = b;
        } else if (b < min) {
            min = b;
        }
        return [min, max];
    }
    getArgbValue() {
        return this.toArgb();
    }
    getHexValue() {
        return this.toHex();
    }
    toArgb() {
        let result = (this.A << 24) | (this.R << 16) | (this.G << 8) | this.B;
        if (result > 2147483647) {
            result -= 4294967296;
        }
        return result;
    }
    toHex() {
        return `#${this.A.toString(16).padStart(2, "0")}${this.R.toString(16).padStart(2, "0")}${this.G.toString(16).padStart(2, "0")}${this.B.toString(16).padStart(2, "0")}`;
    }
    toString() {
        return (
            "Color [A=" +
            this.A +
            ", R=:" +
            this.R +
            ", G=" +
            this.G +
            ", B=" +
            this.B +
            "] - INT=" +
            this.toArgb() +
            " - HEX=" +
            this.toHex()
        );
    }
    equals(other) {
        return this.A === other.A && this.R === other.R && this.G === other.G && this.B === other.B;
    }
    static Transparent = SColor.FromArgbInt(16777215);
    static AliceBlue = SColor.FromArgbInt(-984833);
    static AntiqueWhite = SColor.FromArgbInt(-332841);
    static Aqua = SColor.FromArgbInt(-16711681);
    static Aquamarine = SColor.FromArgbInt(-8388652);
    static Azure = SColor.FromArgbInt(-983041);
    static Beige = SColor.FromArgbInt(-657956);
    static Bisque = SColor.FromArgbInt(-6972);
    static Black = SColor.FromArgbInt(-16777216);
    static BlanchedAlmond = SColor.FromArgbInt(-5171);
    static Blue = SColor.FromArgbInt(-16776961);
    static BlueViolet = SColor.FromArgbInt(-7722014);
    static Brown = SColor.FromArgbInt(-5952982);
    static BurlyWood = SColor.FromArgbInt(-2180985);
    static CadetBlue = SColor.FromArgbInt(-10510688);
    static Chartreuse = SColor.FromArgbInt(-8388864);
    static Chocolate = SColor.FromArgbInt(-2987746);
    static Coral = SColor.FromArgbInt(-32944);
    static CornflowerBlue = SColor.FromArgbInt(-10185235);
    static Cornsilk = SColor.FromArgbInt(-1828);
    static Crimson = SColor.FromArgbInt(-2354116);
    static Cyan = SColor.FromArgbInt(-16711681);
    static DarkBlue = SColor.FromArgbInt(-16777077);
    static DarkCyan = SColor.FromArgbInt(-16741493);
    static DarkGoldenrod = SColor.FromArgbInt(-4684277);
    static DarkGray = SColor.FromArgbInt(-5658199);
    static DarkGreen = SColor.FromArgbInt(-16751616);
    static DarkKhaki = SColor.FromArgbInt(-4343957);
    static DarkMagenta = SColor.FromArgbInt(-7667573);
    static DarkOliveGreen = SColor.FromArgbInt(-11179217);
    static DarkOrange = SColor.FromArgbInt(-29696);
    static DarkOrchid = SColor.FromArgbInt(-6737204);
    static DarkRed = SColor.FromArgbInt(-7667712);
    static DarkSalmon = SColor.FromArgbInt(-1468806);
    static DarkSeaGreen = SColor.FromArgbInt(-7357301);
    static DarkSlateBlue = SColor.FromArgbInt(-12042869);
    static DarkSlateGray = SColor.FromArgbInt(-13676721);
    static DarkTurquoise = SColor.FromArgbInt(-16724271);
    static DarkViolet = SColor.FromArgbInt(-7077677);
    static DeepPink = SColor.FromArgbInt(-60269);
    static DeepSkyBlue = SColor.FromArgbInt(-16728065);
    static DimGray = SColor.FromArgbInt(-9868951);
    static DodgerBlue = SColor.FromArgbInt(-14774017);
    static Firebrick = SColor.FromArgbInt(-5103070);
    static FloralWhite = SColor.FromArgbInt(-1296);
    static ForestGreen = SColor.FromArgbInt(-14513374);
    static Fuchsia = SColor.FromArgbInt(-65281);
    static Gainsboro = SColor.FromArgbInt(-2302756);
    static GhostWhite = SColor.FromArgbInt(-460545);
    static Gold = SColor.FromArgbInt(-10496);
    static Goldenrod = SColor.FromArgbInt(-2448096);
    static Gray = SColor.FromArgbInt(-8355712);
    static Green = SColor.FromArgbInt(-16744448);
    static GreenYellow = SColor.FromArgbInt(-5374161);
    static Honeydew = SColor.FromArgbInt(-983056);
    static HotPink = SColor.FromArgbInt(-38476);
    static IndianRed = SColor.FromArgbInt(-3318692);
    static Indigo = SColor.FromArgbInt(-11861886);
    static Ivory = SColor.FromArgbInt(-16);
    static Khaki = SColor.FromArgbInt(-989556);
    static Lavender = SColor.FromArgbInt(-1644806);
    static LavenderBlush = SColor.FromArgbInt(-3851);
    static LawnGreen = SColor.FromArgbInt(-8586240);
    static LemonChiffon = SColor.FromArgbInt(-1331);
    static LightBlue = SColor.FromArgbInt(-5383962);
    static LightCoral = SColor.FromArgbInt(-1015680);
    static LightCyan = SColor.FromArgbInt(-2031617);
    static LightGoldenrodYellow = SColor.FromArgbInt(-329006);
    static LightGreen = SColor.FromArgbInt(-7278960);
    static LightGray = SColor.FromArgbInt(-2894893);
    static LightPink = SColor.FromArgbInt(-18751);
    static LightSalmon = SColor.FromArgbInt(-24454);
    static LightSeaGreen = SColor.FromArgbInt(-14634326);
    static LightSkyBlue = SColor.FromArgbInt(-7876870);
    static LightSlateGray = SColor.FromArgbInt(-8943463);
    static LightSteelBlue = SColor.FromArgbInt(-5192482);
    static LightYellow = SColor.FromArgbInt(-32);
    static Lime = SColor.FromArgbInt(-16711936);
    static LimeGreen = SColor.FromArgbInt(-13447886);
    static Linen = SColor.FromArgbInt(-331546);
    static Magenta = SColor.FromArgbInt(-65281);
    static Maroon = SColor.FromArgbInt(-8388608);
    static MediumAquamarine = SColor.FromArgbInt(-10039894);
    static MediumBlue = SColor.FromArgbInt(-16777011);
    static MediumOrchid = SColor.FromArgbInt(-4565549);
    static MediumPurple = SColor.FromArgbInt(-7114533);
    static MediumSeaGreen = SColor.FromArgbInt(-12799119);
    static MediumSlateBlue = SColor.FromArgbInt(-8689426);
    static MediumSpringGreen = SColor.FromArgbInt(-16713062);
    static MediumTurquoise = SColor.FromArgbInt(-12004916);
    static MediumVioletRed = SColor.FromArgbInt(-3730043);
    static MidnightBlue = SColor.FromArgbInt(-15132304);
    static MintCream = SColor.FromArgbInt(-655366);
    static MistyRose = SColor.FromArgbInt(-6943);
    static Moccasin = SColor.FromArgbInt(-6987);
    static NavajoWhite = SColor.FromArgbInt(-8531);
    static Navy = SColor.FromArgbInt(-16777088);
    static OldLace = SColor.FromArgbInt(-133658);
    static Olive = SColor.FromArgbInt(-8355840);
    static OliveDrab = SColor.FromArgbInt(-9728477);
    static Orange = SColor.FromArgbInt(-23296);
    static OrangeRed = SColor.FromArgbInt(-47872);
    static Orchid = SColor.FromArgbInt(-2461482);
    static PaleGoldenrod = SColor.FromArgbInt(-1120086);
    static PaleGreen = SColor.FromArgbInt(-6751336);
    static PaleTurquoise = SColor.FromArgbInt(-5247250);
    static PaleVioletRed = SColor.FromArgbInt(-2396013);
    static PapayaWhip = SColor.FromArgbInt(-4139);
    static PeachPuff = SColor.FromArgbInt(-9543);
    static Peru = SColor.FromArgbInt(-3308225);
    static Pink = SColor.FromArgbInt(-16181);
    static Plum = SColor.FromArgbInt(-2252579);
    static PowderBlue = SColor.FromArgbInt(-5185306);
    static Purple = SColor.FromArgbInt(-8388480);
    static Red = SColor.FromArgbInt(-65536);
    static RosyBrown = SColor.FromArgbInt(-4419697);
    static RoyalBlue = SColor.FromArgbInt(-12490271);
    static SaddleBrown = SColor.FromArgbInt(-7650029);
    static Salmon = SColor.FromArgbInt(-360334);
    static SandyBrown = SColor.FromArgbInt(-744352);
    static SeaGreen = SColor.FromArgbInt(-13726889);
    static SeaShell = SColor.FromArgbInt(-2578);
    static Sienna = SColor.FromArgbInt(-6270419);
    static Silver = SColor.FromArgbInt(-4144960);
    static SkyBlue = SColor.FromArgbInt(-7876885);
    static SlateBlue = SColor.FromArgbInt(-9807155);
    static SlateGray = SColor.FromArgbInt(-9404272);
    static Snow = SColor.FromArgbInt(-1286);
    static SpringGreen = SColor.FromArgbInt(-16711809);
    static SteelBlue = SColor.FromArgbInt(-12156236);
    static Tan = SColor.FromArgbInt(-2968436);
    static Teal = SColor.FromArgbInt(-16744320);
    static Thistle = SColor.FromArgbInt(-2572328);
    static Tomato = SColor.FromArgbInt(-40121);
    static Turquoise = SColor.FromArgbInt(-12525360);
    static Violet = SColor.FromArgbInt(-1146130);
    static Wheat = SColor.FromArgbInt(-663885);
    static White = SColor.FromArgbInt(-1);
    static WhiteSmoke = SColor.FromArgbInt(-657931);
    static Yellow = SColor.FromArgbInt(-256);
    static YellowGreen = SColor.FromArgbInt(-6632142);
    static HUD_None = SColor.FromArgbInt(-1);
    static HUD_Pure_white = SColor.FromHudColor(0);
    static HUD_White = SColor.FromHudColor(1);
    static HUD_Black = SColor.FromHudColor(2);
    static HUD_Grey = SColor.FromHudColor(3);
    static HUD_Greylight = SColor.FromHudColor(4);
    static HUD_Greydark = SColor.FromHudColor(5);
    static HUD_Red = SColor.FromHudColor(6);
    static HUD_Redlight = SColor.FromHudColor(7);
    static HUD_Reddark = SColor.FromHudColor(8);
    static HUD_Blue = SColor.FromHudColor(9);
    static HUD_Bluelight = SColor.FromHudColor(10);
    static HUD_Bluedark = SColor.FromHudColor(11);
    static HUD_Yellow = SColor.FromHudColor(12);
    static HUD_Yellowlight = SColor.FromHudColor(13);
    static HUD_Yellowdark = SColor.FromHudColor(14);
    static HUD_Orange = SColor.FromHudColor(15);
    static HUD_Orangelight = SColor.FromHudColor(16);
    static HUD_Orangedark = SColor.FromHudColor(17);
    static HUD_Green = SColor.FromHudColor(18);
    static HUD_Greenlight = SColor.FromHudColor(19);
    static HUD_Greendark = SColor.FromHudColor(20);
    static HUD_Purple = SColor.FromHudColor(21);
    static HUD_Purplelight = SColor.FromHudColor(22);
    static HUD_Purpledark = SColor.FromHudColor(23);
    static HUD_Pink = SColor.FromHudColor(24);
    static HUD_Radar_health = SColor.FromHudColor(25);
    static HUD_Radar_armour = SColor.FromHudColor(26);
    static HUD_Radar_damage = SColor.FromHudColor(27);
    static HUD_Net_player1 = SColor.FromHudColor(28);
    static HUD_Net_player2 = SColor.FromHudColor(29);
    static HUD_Net_player3 = SColor.FromHudColor(30);
    static HUD_Net_player4 = SColor.FromHudColor(31);
    static HUD_Net_player5 = SColor.FromHudColor(32);
    static HUD_Net_player6 = SColor.FromHudColor(33);
    static HUD_Net_player7 = SColor.FromHudColor(34);
    static HUD_Net_player8 = SColor.FromHudColor(35);
    static HUD_Net_player9 = SColor.FromHudColor(36);
    static HUD_Net_player10 = SColor.FromHudColor(37);
    static HUD_Net_player11 = SColor.FromHudColor(38);
    static HUD_Net_player12 = SColor.FromHudColor(39);
    static HUD_Net_player13 = SColor.FromHudColor(40);
    static HUD_Net_player14 = SColor.FromHudColor(41);
    static HUD_Net_player15 = SColor.FromHudColor(42);
    static HUD_Net_player16 = SColor.FromHudColor(43);
    static HUD_Net_player17 = SColor.FromHudColor(44);
    static HUD_Net_player18 = SColor.FromHudColor(45);
    static HUD_Net_player19 = SColor.FromHudColor(46);
    static HUD_Net_player20 = SColor.FromHudColor(47);
    static HUD_Net_player21 = SColor.FromHudColor(48);
    static HUD_Net_player22 = SColor.FromHudColor(49);
    static HUD_Net_player23 = SColor.FromHudColor(50);
    static HUD_Net_player24 = SColor.FromHudColor(51);
    static HUD_Net_player25 = SColor.FromHudColor(52);
    static HUD_Net_player26 = SColor.FromHudColor(53);
    static HUD_Net_player27 = SColor.FromHudColor(54);
    static HUD_Net_player28 = SColor.FromHudColor(55);
    static HUD_Net_player29 = SColor.FromHudColor(56);
    static HUD_Net_player30 = SColor.FromHudColor(57);
    static HUD_Net_player31 = SColor.FromHudColor(58);
    static HUD_Net_player32 = SColor.FromHudColor(59);
    static HUD_Simpleblip_default = SColor.FromHudColor(60);
    static HUD_Menu_blue = SColor.FromHudColor(61);
    static HUD_Menu_grey_light = SColor.FromHudColor(62);
    static HUD_Menu_blue_extra_dark = SColor.FromHudColor(63);
    static HUD_Menu_yellow = SColor.FromHudColor(64);
    static HUD_Menu_yellow_dark = SColor.FromHudColor(65);
    static HUD_Menu_green = SColor.FromHudColor(66);
    static HUD_Menu_grey = SColor.FromHudColor(67);
    static HUD_Menu_grey_dark = SColor.FromHudColor(68);
    static HUD_Menu_highlight = SColor.FromHudColor(69);
    static HUD_Menu_standard = SColor.FromHudColor(70);
    static HUD_Menu_dimmed = SColor.FromHudColor(71);
    static HUD_Menu_extra_dimmed = SColor.FromHudColor(72);
    static HUD_Brief_title = SColor.FromHudColor(73);
    static HUD_Mid_grey_mp = SColor.FromHudColor(74);
    static HUD_Net_player1_dark = SColor.FromHudColor(75);
    static HUD_Net_player2_dark = SColor.FromHudColor(76);
    static HUD_Net_player3_dark = SColor.FromHudColor(77);
    static HUD_Net_player4_dark = SColor.FromHudColor(78);
    static HUD_Net_player5_dark = SColor.FromHudColor(79);
    static HUD_Net_player6_dark = SColor.FromHudColor(80);
    static HUD_Net_player7_dark = SColor.FromHudColor(81);
    static HUD_Net_player8_dark = SColor.FromHudColor(82);
    static HUD_Net_player9_dark = SColor.FromHudColor(83);
    static HUD_Net_player10_dark = SColor.FromHudColor(84);
    static HUD_Net_player11_dark = SColor.FromHudColor(85);
    static HUD_Net_player12_dark = SColor.FromHudColor(86);
    static HUD_Net_player13_dark = SColor.FromHudColor(87);
    static HUD_Net_player14_dark = SColor.FromHudColor(88);
    static HUD_Net_player15_dark = SColor.FromHudColor(89);
    static HUD_Net_player16_dark = SColor.FromHudColor(90);
    static HUD_Net_player17_dark = SColor.FromHudColor(91);
    static HUD_Net_player18_dark = SColor.FromHudColor(92);
    static HUD_Net_player19_dark = SColor.FromHudColor(93);
    static HUD_Net_player20_dark = SColor.FromHudColor(94);
    static HUD_Net_player21_dark = SColor.FromHudColor(95);
    static HUD_Net_player22_dark = SColor.FromHudColor(96);
    static HUD_Net_player23_dark = SColor.FromHudColor(97);
    static HUD_Net_player24_dark = SColor.FromHudColor(98);
    static HUD_Net_player25_dark = SColor.FromHudColor(99);
    static HUD_Net_player26_dark = SColor.FromHudColor(100);
    static HUD_Net_player27_dark = SColor.FromHudColor(101);
    static HUD_Net_player28_dark = SColor.FromHudColor(102);
    static HUD_Net_player29_dark = SColor.FromHudColor(103);
    static HUD_Net_player30_dark = SColor.FromHudColor(104);
    static HUD_Net_player31_dark = SColor.FromHudColor(105);
    static HUD_Net_player32_dark = SColor.FromHudColor(106);
    static HUD_Bronze = SColor.FromHudColor(107);
    static HUD_Silver = SColor.FromHudColor(108);
    static HUD_Gold = SColor.FromHudColor(109);
    static HUD_Platinum = SColor.FromHudColor(110);
    static HUD_Gang1 = SColor.FromHudColor(111);
    static HUD_Gang2 = SColor.FromHudColor(112);
    static HUD_Gang3 = SColor.FromHudColor(113);
    static HUD_Gang4 = SColor.FromHudColor(114);
    static HUD_Same_crew = SColor.FromHudColor(115);
    static HUD_Freemode = SColor.FromHudColor(116);
    static HUD_Pause_bg = SColor.FromHudColor(117);
    static HUD_Friendly = SColor.FromHudColor(118);
    static HUD_Enemy = SColor.FromHudColor(119);
    static HUD_Location = SColor.FromHudColor(120);
    static HUD_Pickup = SColor.FromHudColor(121);
    static HUD_Pause_singleplayer = SColor.FromHudColor(122);
    static HUD_Freemode_dark = SColor.FromHudColor(123);
    static HUD_Inactive_mission = SColor.FromHudColor(124);
    static HUD_Damage = SColor.FromHudColor(125);
    static HUD_Pinklight = SColor.FromHudColor(126);
    static HUD_Pm_mitem_highlight = SColor.FromHudColor(127);
    static HUD_Script_variable = SColor.FromHudColor(128);
    static HUD_Yoga = SColor.FromHudColor(129);
    static HUD_Tennis = SColor.FromHudColor(130);
    static HUD_Golf = SColor.FromHudColor(131);
    static HUD_Shooting_range = SColor.FromHudColor(132);
    static HUD_Flight_school = SColor.FromHudColor(133);
    static HUD_North_blue = SColor.FromHudColor(134);
    static HUD_Social_club = SColor.FromHudColor(135);
    static HUD_Platform_blue = SColor.FromHudColor(136);
    static HUD_Platform_green = SColor.FromHudColor(137);
    static HUD_Platform_grey = SColor.FromHudColor(138);
    static HUD_Facebook_blue = SColor.FromHudColor(139);
    static HUD_Ingame_bg = SColor.FromHudColor(140);
    static HUD_Darts = SColor.FromHudColor(141);
    static HUD_Waypoint = SColor.FromHudColor(142);
    static HUD_Michael = SColor.FromHudColor(143);
    static HUD_Franklin = SColor.FromHudColor(144);
    static HUD_Trevor = SColor.FromHudColor(145);
    static HUD_Golf_p1 = SColor.FromHudColor(146);
    static HUD_Golf_p2 = SColor.FromHudColor(147);
    static HUD_Golf_p3 = SColor.FromHudColor(148);
    static HUD_Golf_p4 = SColor.FromHudColor(149);
    static HUD_Waypointlight = SColor.FromHudColor(150);
    static HUD_Waypointdark = SColor.FromHudColor(151);
    static HUD_Panel_light = SColor.FromHudColor(152);
    static HUD_Michael_dark = SColor.FromHudColor(153);
    static HUD_Franklin_dark = SColor.FromHudColor(154);
    static HUD_Trevor_dark = SColor.FromHudColor(155);
    static HUD_Objective_route = SColor.FromHudColor(156);
    static HUD_Pausemap_tint = SColor.FromHudColor(157);
    static HUD_Pause_deselect = SColor.FromHudColor(158);
    static HUD_Pm_weapons_purchasable = SColor.FromHudColor(159);
    static HUD_Pm_weapons_locked = SColor.FromHudColor(160);
    static HUD_End_screen_bg = SColor.FromHudColor(161);
    static HUD_Chop = SColor.FromHudColor(162);
    static HUD_Pausemap_tint_half = SColor.FromHudColor(163);
    static HUD_North_blue_official = SColor.FromHudColor(164);
    static HUD_Script_variable_2 = SColor.FromHudColor(165);
    static HUD_H = SColor.FromHudColor(166);
    static HUD_Hdark = SColor.FromHudColor(167);
    static HUD_T = SColor.FromHudColor(168);
    static HUD_Tdark = SColor.FromHudColor(169);
    static HUD_Hshard = SColor.FromHudColor(170);
    static HUD_Controller_michael = SColor.FromHudColor(171);
    static HUD_Controller_franklin = SColor.FromHudColor(172);
    static HUD_Controller_trevor = SColor.FromHudColor(173);
    static HUD_Controller_chop = SColor.FromHudColor(174);
    static HUD_Video_editor_video = SColor.FromHudColor(175);
    static HUD_Video_editor_audio = SColor.FromHudColor(176);
    static HUD_Video_editor_text = SColor.FromHudColor(177);
    static HUD_Hb_blue = SColor.FromHudColor(178);
    static HUD_Hb_yellow = SColor.FromHudColor(179);
    static HUD_Video_editor_score = SColor.FromHudColor(180);
    static HUD_Video_editor_audio_fadeout = SColor.FromHudColor(181);
    static HUD_Video_editor_text_fadeout = SColor.FromHudColor(182);
    static HUD_Video_editor_score_fadeout = SColor.FromHudColor(183);
    static HUD_Heist_background = SColor.FromHudColor(184);
    static HUD_Video_editor_ambient = SColor.FromHudColor(185);
    static HUD_Video_editor_ambient_fadeout = SColor.FromHudColor(186);
    static HUD_Gb = SColor.FromHudColor(187);
    static HUD_G = SColor.FromHudColor(188);
    static HUD_B = SColor.FromHudColor(189);
    static HUD_Low_flow = SColor.FromHudColor(190);
    static HUD_Low_flow_dark = SColor.FromHudColor(191);
    static HUD_G1 = SColor.FromHudColor(192);
    static HUD_G2 = SColor.FromHudColor(193);
    static HUD_G3 = SColor.FromHudColor(194);
    static HUD_G4 = SColor.FromHudColor(195);
    static HUD_G5 = SColor.FromHudColor(196);
    static HUD_G6 = SColor.FromHudColor(197);
    static HUD_G7 = SColor.FromHudColor(198);
    static HUD_G8 = SColor.FromHudColor(199);
    static HUD_G9 = SColor.FromHudColor(200);
    static HUD_G10 = SColor.FromHudColor(201);
    static HUD_G11 = SColor.FromHudColor(202);
    static HUD_G12 = SColor.FromHudColor(203);
    static HUD_G13 = SColor.FromHudColor(204);
    static HUD_G14 = SColor.FromHudColor(205);
    static HUD_G15 = SColor.FromHudColor(206);
    static HUD_Adversary = SColor.FromHudColor(207);
    static HUD_Degen_red = SColor.FromHudColor(208);
    static HUD_Degen_yellow = SColor.FromHudColor(209);
    static HUD_Degen_green = SColor.FromHudColor(210);
    static HUD_Degen_cyan = SColor.FromHudColor(211);
    static HUD_Degen_blue = SColor.FromHudColor(212);
    static HUD_Degen_magenta = SColor.FromHudColor(213);
    static HUD_Stunt_1 = SColor.FromHudColor(214);
    static HUD_Stunt_2 = SColor.FromHudColor(215);
    static HUD_Special_race_series = SColor.FromHudColor(216);
    static HUD_Special_race_series_dark = SColor.FromHudColor(217);
    static HUD_Cs = SColor.FromHudColor(218);
    static HUD_Cs_dark = SColor.FromHudColor(219);
    static HUD_Tech_green = SColor.FromHudColor(220);
    static HUD_Tech_green_dark = SColor.FromHudColor(221);
    static HUD_Tech_red = SColor.FromHudColor(222);
    static HUD_Tech_green_very_dark = SColor.FromHudColor(223);
}

// src/elements/ItemFont.ts
class ItemFont {
    fontName;
    fontId;
    constructor(fontName, fontId = 0) {
        this.fontName = fontName;
        this.fontId = fontId;
    }
    static registerFont(gfxName, fontName) {
        RegisterFontFile(gfxName);
        return new ItemFont(fontName, RegisterFontId(fontName));
    }
}

// src/elements/scaleform-fonts.ts
class ScaleformFonts {
    static CHALET_LONDON_NINETEENSIXTY = new ItemFont("$Font2");
    static SIGNPAINTER_HOUSESCRIPT = new ItemFont("$Font5");
    static GTAV_LEADERBOARD = new ItemFont("$GTAVLeaderboard");
    static CHALET_COMPRIME_COLOGNE_SIXTY = new ItemFont("$Font2_cond");
    static CHALET_LONDON_NINETEENSIXTY_NUMB = new ItemFont("$FixedWidthNumbers");
    static PRICEDOWN_GTAV_INT = new ItemFont("$gtaCash");
    static CHALET_COMPRIME_COLOGNESIXTY_NOT_GAMERNAME = new ItemFont("$Font2_cond_NOT_GAMERNAME");
    static GTAV_TIMER_FIXED_COND = new ItemFont("$Font2_cond_MPTimer");
    static ROCKSTAR_TAG = new ItemFont("$RockstarTAG");
    static HANDSTYLE_HEIST = ItemFont.registerFont("font_lib_editor", "$HandstyleHeist");
    static REDEMPTION = ItemFont.registerFont("font_lib_editor", "$Redemption");
    static GTA_SUBTRACT = ItemFont.registerFont("font_lib_editor", "$Subtract");
    static HELVETICA_55 = ItemFont.registerFont("font_lib_editor", "$Helvetica55");
    static DIN = ItemFont.registerFont("font_lib_editor", "$Din");
    static HELVETICA_107 = ItemFont.registerFont("font_lib_editor", "$Helvetica107");
    static UNIVERS = ItemFont.registerFont("font_lib_editor", "$Univers");
    static SUBTRACT = ItemFont.registerFont("font_lib_heist4", "$Subtract");
    static HELVETICANEUE_LT_47_LIGHTCN = ItemFont.registerFont("font_lib_sc", "$SOCIAL_CLUB_COND_REG");
    static HELVETICANEUE_LT_67_MDCN = ItemFont.registerFont("font_lib_sc", "$SOCIAL_CLUB_COND_BOLD");
    static GTAV_TAXI_DIGITAL = ItemFont.registerFont("font_lib_taxi", "$Taxi_font");
    static GTAV_COURIER = ItemFont.registerFont("font_lib_typewriter", "$Courier");
    static ANNA_SC_ITC_TT = ItemFont.registerFont("font_lib_org", "$AnnaSC");
    static BAUHAUSITCTT = ItemFont.registerFont("font_lib_org", "$Bauhaus");
    static BOOKMANMDITCTT = ItemFont.registerFont("font_lib_org", "$Bookman");
    static ENGRAVERS_OLD_ENGLISH_MT_STD = ItemFont.registerFont("font_lib_org", "$EngraversOldEnglish");
    static HELVETICA_NEUE_LT_COM_95_BLK = ItemFont.registerFont("font_lib_org", "$HelveticaBLK");
    static HELVETICA_NEUE_LT_COM_96_BLKIT = ItemFont.registerFont("font_lib_org", "$HelveticaBLKI");
    static LUBALINGRAPHMDITCTT = ItemFont.registerFont("font_lib_org", "$Lubalin");
    static MISTRAL_STD = ItemFont.registerFont("font_lib_org", "$Mistral");
    static STENBERGITC_TT = ItemFont.registerFont("font_lib_org", "$Stenberg");
    static STENCIL_STD = ItemFont.registerFont("font_lib_org", "$Stencil");
    static TIMES_NEW_ROMAN = ItemFont.registerFont("font_lib_org", "$Times");
    static TRADE_GOTHIC_LT_COM_BOLD = ItemFont.registerFont("font_lib_org", "$TradeGothic");
    static ITC_MACHINE_STD = ItemFont.registerFont("font_lib_org", "$Machine");
    static HELVETICANEUELT_W1G_55_ROMAN = ItemFont.registerFont("font_lib_org", "$WebFont1_Hbold");
    static HELVETICANEUELT_W1G_55_ROMAN_2 = ItemFont.registerFont("font_lib_org", "$WebFont2_Hitalic");
    static TIMES_NEW_ROMAN_CE = ItemFont.registerFont("font_lib_org", "$WebFont3_Times");
    static COURIER_TWELVE_MT_STD = ItemFont.registerFont("font_lib_org", "$WebFont4_Courier");
    static BELL_GOTHIC_BLACK = ItemFont.registerFont("font_lib_org", "$WebFont5_BellGothic");
}

// src/menus/breadcrumbs-handler.ts
class BreadcrumbsHandler {
    static breadcrumbs = [];
    static SwitchInProgress = false;
    static get Count() {
        return this.breadcrumbs.length;
    }
    static get CurrentDepth() {
        return this.breadcrumbs.length === 0 ? 0 : this.breadcrumbs.length - 1;
    }
    static get PreviousMenu() {
        return this.breadcrumbs[this.CurrentDepth - 1][0];
    }
    static Forward(menu, data) {
        this.breadcrumbs.push([menu, data]);
    }
    static Clear() {
        this.breadcrumbs.length = 0;
    }
    static Backwards() {
        this.breadcrumbs.pop();
    }
}

// src/menus/menu.base.ts
class BaseMenu {
    visible = false;
    instructionalButtons = [];
    Items = [];
    set Visible(state) {
        this.visible = state;
        MenuHandler.ableToDraw = state;
    }
    get Visible() {
        return this.visible;
    }
}

// src/menus/UIMenu/pagination-handler.ts
class PaginationHandler {
    _currentPageIndex;
    _currentMenuIndex;
    currentPage;
    itemsPerPage;
    minItem;
    maxItem;
    totalItems;
    scaleformIndex;
    scrollType;
    constructor() {
        this._currentPageIndex = 0;
        this._currentMenuIndex = 0;
        this.currentPage = 0;
        this.itemsPerPage = 0;
        this.minItem = 0;
        this.maxItem = 0;
        this.totalItems = 0;
        this.scaleformIndex = 0;
        this.scrollType = 1 /* CLASSIC */;
    }
    set CurrentPage(_val) {
        this.currentPage = _val;
    }
    get CurrentPage() {
        return this.currentPage;
    }
    set ItemsPerPage(val) {
        this.itemsPerPage = val;
    }
    get ItemsPerPage() {
        return this.itemsPerPage;
    }
    set TotalItems(val) {
        this.totalItems = val;
    }
    get TotalItems() {
        return this.totalItems;
    }
    get TotalPages() {
        return Math.ceil(this.totalItems / this.itemsPerPage);
    }
    get CurrentPageStartIndex() {
        return this.currentPage * this.itemsPerPage;
    }
    get CurrentPageEndIndex() {
        let index = this.CurrentPageStartIndex + this.itemsPerPage - 1;
        if (index >= this.totalItems) index = this.totalItems - 1;
        return index;
    }
    set CurrentPageIndex(_val) {
        this._currentPageIndex = this.GetPageIndexFromMenuIndex(_val);
    }
    get CurrentPageIndex() {
        return this._currentPageIndex;
    }
    set CurrentMenuIndex(val) {
        this._currentMenuIndex = val;
    }
    get CurrentMenuIndex() {
        return this._currentMenuIndex;
    }
    set MinItem(val) {
        this.minItem = val;
    }
    get MinItem() {
        return this.minItem;
    }
    set MaxItem(val) {
        this.maxItem = val;
    }
    get MaxItem() {
        return this.maxItem;
    }
    set ScaleformIndex(val) {
        this.scaleformIndex = val;
    }
    get ScaleformIndex() {
        return this.scaleformIndex;
    }
    IsItemVisible(menuIndex) {
        return menuIndex >= this.minItem || (menuIndex <= this.minItem && menuIndex <= this.maxItem);
    }
    GetScaleformIndex(menuIndex) {
        let id = 0;
        if (this.minItem <= menuIndex) id = menuIndex - this.minItem;
        else if (this.minItem > menuIndex && this.maxItem >= menuIndex)
            id = menuIndex - this.minItem + (this.itemsPerPage - 1);
        return id;
    }
    GetMenuIndexFromScaleformIndex(scaleformIndex) {
        let tmpIndex = this.minItem + scaleformIndex;
        if (tmpIndex >= this.totalItems) tmpIndex = this.totalItems - 1;
        return tmpIndex;
    }
    GetPageIndexFromScaleformIndex(scaleformIndex) {
        let menuIndex = this.GetMenuIndexFromScaleformIndex(scaleformIndex);
        return this.GetPageIndexFromMenuIndex(menuIndex);
    }
    GetPageIndexFromMenuIndex(menuIndex) {
        let page = this.GetPage(menuIndex);
        let startIndex = page * this.itemsPerPage;
        return menuIndex - startIndex;
    }
    GetPageFromScaleformIndex(scaleformIndex) {
        let menuIndex = this.GetMenuIndexFromScaleformIndex(scaleformIndex);
        return this.GetPage(menuIndex);
    }
    GetPage(menuIndex) {
        return Math.floor(menuIndex / this.itemsPerPage);
    }
    GetPageItemsCount(page) {
        let minItem = page * this.itemsPerPage;
        let maxItem = minItem + this.itemsPerPage - 1;
        if (maxItem >= this.totalItems) maxItem = this.totalItems - 1;
        return maxItem - minItem + 1;
    }
    GetMenuIndexFromPageIndex(page, index) {
        let initialIndex = page * this.itemsPerPage;
        return initialIndex + index;
    }
    GetMissingItems() {
        let count = this.GetPageItemsCount(this.currentPage);
        return this.itemsPerPage - count;
    }
    Reset() {
        this._currentPageIndex = 0;
        this._currentMenuIndex = 0;
        this.currentPage = 0;
        this.minItem = 0;
        this.maxItem = 0;
        this.totalItems = 0;
        this.scaleformIndex = 0;
    }
    GoUp() {
        let overflow = false;
        this.CurrentMenuIndex--;
        if (this.CurrentMenuIndex < 0) {
            this.CurrentMenuIndex = this.TotalItems - 1;
            overflow = this.TotalPages > 1;
        }
        this.CurrentPageIndex = this.CurrentMenuIndex;
        this.ScaleformIndex--;
        this.CurrentPage = this.GetPage(this.CurrentMenuIndex);
        if (this.ScaleformIndex < 0) {
            if (this.TotalItems <= this.itemsPerPage) {
                this.ScaleformIndex = this.TotalItems - 1;
                return false;
            }
            if (this.scrollType == 3 /* ENDLESS */ || (this.scrollType == 1 /* CLASSIC */ && !overflow)) {
                this.minItem--;
                this.maxItem--;
                if (this.minItem < 0) this.minItem = this.TotalItems - 1;
                if (this.maxItem < 0) this.maxItem = this.TotalItems - 1;
                this.ScaleformIndex = 0;
                return true;
            } else if (this.scrollType == 2 /* PAGINATED */ || (this.scrollType == 1 /* CLASSIC */ && overflow)) {
                this.minItem = this.CurrentPageStartIndex;
                this.maxItem = this.CurrentPageEndIndex;
                this.ScaleformIndex = this.GetPageIndexFromMenuIndex(this.CurrentPageEndIndex);
                if (this.scrollType == 1 /* CLASSIC */) {
                    let missingItems = this.GetMissingItems();
                    if (missingItems > 0) {
                        this.ScaleformIndex = this.GetPageIndexFromMenuIndex(this.CurrentPageEndIndex) + missingItems;
                        this.minItem = this.CurrentPageStartIndex - missingItems;
                    }
                }
                return true;
            }
        }
        return false;
    }
    GoDown() {
        let overflow = false;
        this.CurrentMenuIndex++;
        if (this.CurrentMenuIndex >= this.TotalItems) {
            this.CurrentMenuIndex = 0;
            overflow = this.TotalPages > 1;
        }
        this.CurrentPageIndex = this.CurrentMenuIndex;
        this.ScaleformIndex++;
        if (this.ScaleformIndex >= this.totalItems) {
            this.ScaleformIndex = 0;
            this.CurrentPage = this.GetPage(this.CurrentMenuIndex);
            return false;
        } else if (this.scaleformIndex > this.itemsPerPage - 1) {
            if (this.scrollType == 3 /* ENDLESS */ || (this.scrollType == 1 /* CLASSIC */ && !overflow)) {
                this.CurrentPage = this.GetPage(this.CurrentMenuIndex);
                this.ScaleformIndex = this.itemsPerPage - 1;
                this.minItem++;
                this.maxItem++;
                if (this.minItem >= this.totalItems) this.minItem = 0;
                if (this.maxItem >= this.totalItems) this.maxItem = 0;
                return true;
            } else if (this.scrollType == 2 /* PAGINATED */ || (this.scrollType == 1 /* CLASSIC */ && overflow)) {
                this.CurrentPage = this.GetPage(this.CurrentMenuIndex);
                this.minItem = this.CurrentPageStartIndex;
                this.maxItem = this.CurrentPageEndIndex;
                this.ScaleformIndex = 0;
                return true;
            }
        } else if (
            this.scrollType == 2 /* PAGINATED */ &&
            this.scaleformIndex > this.GetPageIndexFromMenuIndex(this.CurrentPageEndIndex)
        ) {
            this.CurrentPage = this.GetPage(this.CurrentMenuIndex);
            this.minItem = this.CurrentPageStartIndex;
            this.maxItem = this.CurrentPageEndIndex;
            this.ScaleformIndex = 0;
            return true;
        }
        this.CurrentPage = this.GetPage(this.CurrentMenuIndex);
        return false;
    }
}

// src/helpers/eventemitter.ts
class DelegateBuilder {
    callees;
    constructor() {
        this.callees = [];
    }
    invoke(...parameters) {
        this.callees.forEach((callee) => callee && callee(...parameters));
    }
    contains(callee) {
        return !!callee && this.callees.includes(callee);
    }
    add(callee) {
        if (callee && !this.contains(callee)) {
            this.callees.push(callee);
        }
        return this;
    }
    remove(callee) {
        const index = this.callees.indexOf(callee);
        if (index >= 0) {
            this.callees.splice(index, 1);
        }
        return this;
    }
    clear() {
        this.callees.length = 0;
    }
    toDelegate() {
        return async (...parameters) => this.invoke(...parameters);
    }
}

// src/menus/UIMenu/emitters/emitters.ts
class ItemChangeCallbackBuilder extends DelegateBuilder {
    add(callback) {
        super.add(callback);
        return this;
    }
    remove(callback) {
        super.remove(callback);
        return this;
    }
    toDelegate() {
        return async (menu, item) => {
            await super.toDelegate()(menu, item);
        };
    }
}

class CheckboxItemChangeCallbackBuilder extends DelegateBuilder {
    add(callback) {
        super.add(callback);
        return this;
    }
    remove(callback) {
        super.remove(callback);
        return this;
    }
    toDelegate() {
        return async (item, checked) => {
            await super.toDelegate()(item, checked);
        };
    }
}

class UIMenuDynamicListItemChangeCallbackBuilder extends DelegateBuilder {
    add(callback) {
        super.add(callback);
        return this;
    }
    remove(callback) {
        super.remove(callback);
        return this;
    }
    toDelegate() {
        return async (sender, direction) => {
            return await super.toDelegate()(sender, direction);
        };
    }
}

class ListItemChangeCallbackBuilder extends DelegateBuilder {
    add(callback) {
        super.add(callback);
        return this;
    }
    remove(callback) {
        super.remove(callback);
        return this;
    }
    toDelegate() {
        return async (item, newIndex) => {
            await super.toDelegate()(item, newIndex);
        };
    }
}

class ProgressItemCallbackBuilder extends DelegateBuilder {
    add(callback) {
        super.add(callback);
        return this;
    }
    remove(callback) {
        super.remove(callback);
        return this;
    }
    toDelegate() {
        return async (item, newIndex) => {
            await super.toDelegate()(item, newIndex);
        };
    }
}

class SliderItemCallbackBuilder extends DelegateBuilder {
    add(callback) {
        super.add(callback);
        return this;
    }
    remove(callback) {
        super.remove(callback);
        return this;
    }
    toDelegate() {
        return async (item, newIndex) => {
            await super.toDelegate()(item, newIndex);
        };
    }
}

class StatsItemCallbackBuilder extends DelegateBuilder {
    add(callback) {
        super.add(callback);
        return this;
    }
    remove(callback) {
        super.remove(callback);
        return this;
    }
    toDelegate() {
        return async (newIndex) => {
            await super.toDelegate()(newIndex);
        };
    }
}

class IndexChangedEventBuilder extends DelegateBuilder {
    add(callback) {
        super.add(callback);
        return this;
    }
    remove(callback) {
        super.remove(callback);
        return this;
    }
    toDelegate() {
        return async (menu, newIndex) => {
            await super.toDelegate()(menu, newIndex);
        };
    }
}

class ListChangedEventBuilder extends DelegateBuilder {
    add(callback) {
        super.add(callback);
        return this;
    }
    remove(callback) {
        super.remove(callback);
        return this;
    }
    toDelegate() {
        return async (menu, listItem, newIndex) => {
            await super.toDelegate()(menu, listItem, newIndex);
        };
    }
}

class SliderChangedEventBuilder extends DelegateBuilder {
    add(callback) {
        super.add(callback);
        return this;
    }
    remove(callback) {
        super.remove(callback);
        return this;
    }
    toDelegate() {
        return async (menu, sliderItem, newIndex) => {
            await super.toDelegate()(menu, sliderItem, newIndex);
        };
    }
}

class ListSelectedEventBuilder extends DelegateBuilder {
    add(callback) {
        super.add(callback);
        return this;
    }
    remove(callback) {
        super.remove(callback);
        return this;
    }
    toDelegate() {
        return async (menu, listItem, newIndex) => {
            await super.toDelegate()(menu, listItem, newIndex);
        };
    }
}

class CheckboxChangeEventBuilder extends DelegateBuilder {
    add(callback) {
        super.add(callback);
        return this;
    }
    remove(callback) {
        super.remove(callback);
        return this;
    }
    toDelegate() {
        return async (menu, checkboxItem, checked) => {
            await super.toDelegate()(menu, checkboxItem, checked);
        };
    }
}

class ItemSelectEventBuilder extends DelegateBuilder {
    add(callback) {
        super.add(callback);
        return this;
    }
    remove(callback) {
        super.remove(callback);
        return this;
    }
    toDelegate() {
        return async (menu, item, newIndex) => {
            await super.toDelegate()(menu, item, newIndex);
        };
    }
}
class OnProgressChangedBuilder extends DelegateBuilder {
    add(callback) {
        super.add(callback);
        return this;
    }
    remove(callback) {
        super.remove(callback);
        return this;
    }
    toDelegate() {
        return async (menu, item, newIndex) => {
            await super.toDelegate()(menu, item, newIndex);
        };
    }
}

class OnProgressSelectedBuilder extends DelegateBuilder {
    add(callback) {
        super.add(callback);
        return this;
    }
    remove(callback) {
        super.remove(callback);
        return this;
    }
    toDelegate() {
        return async (menu, item, newIndex) => {
            await super.toDelegate()(menu, item, newIndex);
        };
    }
}

class StatItemProgressChangeBuilder extends DelegateBuilder {
    add(callback) {
        super.add(callback);
        return this;
    }
    remove(callback) {
        super.remove(callback);
        return this;
    }
    toDelegate() {
        return async (menu, item, newIndex) => {
            await super.toDelegate()(menu, item, newIndex);
        };
    }
}

class ColorPanelChangedEventBuilder extends DelegateBuilder {
    add(callback) {
        super.add(callback);
        return this;
    }
    remove(callback) {
        super.remove(callback);
        return this;
    }
    toDelegate() {
        return async (item, panel, newIndex) => {
            await super.toDelegate()(item, panel, newIndex);
        };
    }
}

class VehicleColorPickerSelectEventBuilder extends DelegateBuilder {
    add(callback) {
        super.add(callback);
        return this;
    }
    remove(callback) {
        super.remove(callback);
        return this;
    }
    toDelegate() {
        return async (item, panel, newIndex) => {
            await super.toDelegate()(item, panel, newIndex);
        };
    }
}

class PercentagePanelChangedEventBuilder extends DelegateBuilder {
    add(callback) {
        super.add(callback);
        return this;
    }
    remove(callback) {
        super.remove(callback);
        return this;
    }
    toDelegate() {
        return async (item, panel, newIndex) => {
            await super.toDelegate()(item, panel, newIndex);
        };
    }
}

class GridPanelChangedEventBuilder extends DelegateBuilder {
    add(callback) {
        super.add(callback);
        return this;
    }
    remove(callback) {
        super.remove(callback);
        return this;
    }
    toDelegate() {
        return async (item, panel, newIndex) => {
            await super.toDelegate()(item, panel, newIndex);
        };
    }
}

class MenuOpenedEventBuilder extends DelegateBuilder {
    add(callback) {
        super.add(callback);
        return this;
    }
    remove(callback) {
        super.remove(callback);
        return this;
    }
    toDelegate() {
        return async (menu, data) => {
            await super.toDelegate()(menu, data);
        };
    }
}

class MenuClosedEventBuilder extends DelegateBuilder {
    add(callback) {
        super.add(callback);
        return this;
    }
    remove(callback) {
        super.remove(callback);
        return this;
    }
    toDelegate() {
        return async (menu) => {
            await super.toDelegate()(menu);
        };
    }
}

class InstructionalButtonSelectedEventBuilder extends DelegateBuilder {
    add(callback) {
        super.add(callback);
        return this;
    }
    remove(callback) {
        super.remove(callback);
        return this;
    }
    toDelegate() {
        return async (button) => {
            await super.toDelegate()(button);
        };
    }
}

// src/helpers/loaders.ts
var waitUntilReturns = (dofunc, checker, untilReturns, checkTo) =>
    new Promise(async (res) => {
        await dofunc();
        const untilReturnsArray = Array.isArray(untilReturns) ? untilReturns : [untilReturns];
        const tick = setInterval(async () => {
            const cres = await checker();
            if (untilReturnsArray.includes(cres)) {
                res(cres);
                clearInterval(tick);
                return;
            }
        }, checkTo);
    });
var noop = () => {};
var Delay = (ms) => new Promise((res) => setTimeout(res, ms));

// src/elements/scaleform-label.ts
class ScaleformLabel {
    _label;
    constructor(label) {
        this._label = label;
    }
    get Label() {
        return this._label;
    }
    get SplitLabel() {
        const stringsNeeded = Math.floor((this._label.length - 1) / 99) + 1;
        const outputString = [];
        for (let i = 0; i < stringsNeeded; i++) {
            outputString[i] = this._label.substring(i * 99, Math.min(this._label.length, (i + 1) * 99));
        }
        return outputString;
    }
    equals(obj) {
        if (!(obj instanceof ScaleformLabel)) {
            return false;
        }
        const otherLabel = obj;
        return this.Label === otherLabel.Label;
    }
}

// src/elements/scaleform-literal-string.ts
class ScaleformLiteralString {
    _literalString;
    constructor(literalString) {
        this._literalString = literalString;
    }
    get LiteralString() {
        return this._literalString;
    }
    equals(obj) {
        if (!(obj instanceof ScaleformLiteralString)) {
            return false;
        }
        const otherLiteralString = obj;
        return this.LiteralString === otherLiteralString.LiteralString;
    }
}

// src/scaleforms/scaleform.ts
class Scaleform {
    name;
    handle;
    deleted = false;
    constructor(name, handle) {
        this.name = name;
        this.handle = handle;
    }
    static request(name) {
        return new Scaleform(name, RequestScaleformMovie(name));
    }
    static requestWideScreen(name) {
        return new Scaleform(name, RequestScaleformMovieInstance(name));
    }
    callFunction(funcName, ...args) {
        BeginScaleformMovieMethod(this.handle, funcName);
        this.processScaleformArgs(funcName, args);
        EndScaleformMovieMethod();
    }
    callFunctionReturnInternal(functionName, args) {
        this.processScaleformArgs(functionName, args);
        return EndScaleformMovieMethodReturnValue();
    }
    async callFunctionReturnInt(functionName, ...args) {
        let scaleformHandle = this.callFunctionReturnInternal(functionName, args);
        while (!IsScaleformMovieMethodReturnValueReady(scaleformHandle)) {
            await Delay(0);
        }
        return GetScaleformMovieFunctionReturnInt(scaleformHandle);
    }
    async callFunctionReturnBool(functionName, ...args) {
        let scaleformHandle = this.callFunctionReturnInternal(functionName, args);
        while (!IsScaleformMovieMethodReturnValueReady(scaleformHandle)) {
            await Delay(0);
        }
        return GetScaleformMovieFunctionReturnBool(scaleformHandle);
    }
    async callFunctionReturnString(functionName, ...args) {
        let scaleformHandle = this.callFunctionReturnInternal(functionName, args);
        while (!IsScaleformMovieMethodReturnValueReady(scaleformHandle)) {
            await Delay(0);
        }
        return GetScaleformMovieFunctionReturnString(scaleformHandle);
    }
    render2d() {
        DrawScaleformMovieFullscreen(this.handle, 255, 255, 255, 255, 0);
    }
    render2dNormal(x, y, width, height) {
        DrawScaleformMovie(this.handle, x, y, width, height, 255, 255, 255, 255, 0);
    }
    render2dScreenSpace(localX, localY, sizeX, sizeY) {
        const [w, h] = GetScreenResolution();
        const x = localY / w;
        const y = localX / h;
        const width = sizeX / w;
        const height = sizeY / h;
        DrawScaleformMovie(this.handle, x + width / 2, y + height / 2, width, height, 255, 255, 255, 255, 0);
    }
    render3d(coords, rot, scale) {
        DrawScaleformMovie_3dSolid(this.handle, ...coords.toArr(), ...rot.toArr(), 2, 2, 1, ...scale.toArr(), 2);
    }
    render3dAdditive(coords, rot, scale) {
        DrawScaleformMovie_3d(this.handle, ...coords.toArr(), ...rot.toArr(), 2, 2, 1, ...scale.toArr(), 2);
    }
    dispose() {
        SetScaleformMovieAsNoLongerNeeded(this.handle);
        this.deleted = true;
    }
    destroy() {
        this.dispose();
    }
    get isValid() {
        return !this.deleted;
    }
    get isLoaded() {
        return !HasScaleformMovieLoaded(this.handle);
    }
    processScaleformArgs(fname, args) {
        for (const [argIndex, arg] of args.entries()) {
            if (typeof arg === "boolean") {
                ScaleformMovieMethodAddParamBool(arg);
            } else if (typeof arg === "number") {
                if (Number.isInteger(arg)) {
                    ScaleformMovieMethodAddParamInt(arg);
                } else {
                    ScaleformMovieMethodAddParamFloat(arg);
                }
            } else if (typeof arg === "string") {
                this.addStringArg(arg);
            } else if (arg instanceof ScaleformLiteralString) {
                ScaleformMovieMethodAddParamTextureNameString_2(arg.LiteralString);
            } else if (arg instanceof ScaleformLabel) {
                BeginTextCommandScaleformString(arg.Label);
                EndTextCommandScaleformString();
            } else if (arg instanceof SColor) {
                ScaleformMovieMethodAddParamInt(arg.toArgb());
            } else {
                throw new Error(
                    `Received invalid argument: ${arg} at position #${argIndex} while calling scaleform function: ${fname}`
                );
            }
        }
    }
    addStringArg(arg) {
        if (["b_", "t_"].some((prefix) => arg.startsWith(prefix))) {
            ScaleformMovieMethodAddParamPlayerNameString(arg);
        } else {
            ScaleformMovieMethodAddParamTextureNameString(arg);
        }
    }
}

// src/elements/controls.ts
class Controls {
    static NecessaryControlsKeyboard = [
        201, 195, 196, 187, 188, 189, 190, 202, 217, 242, 241, 239, 240, 237, 238, 31, 30, 21, 22, 23, 75, 71, 72, 59,
        89, 9, 8, 90, 76
    ];
    static NecessaryControlsGamePad = [
        201, 195, 196, 187, 188, 189, 190, 202, 217, 242, 241, 239, 240, 237, 238, 31, 30, 21, 22, 23, 75, 71, 72, 59,
        89, 9, 8, 90, 76, 2, 1, 25, 24, 71, 72, 59, 31, 30, 75
    ];
    static toggleAll(toggle) {
        if (toggle) {
            EnableAllControlActions(0);
            EnableAllControlActions(1);
            EnableAllControlActions(2);
        } else {
            DisableAllControlActions(2);
            (IsUsingKeyboard(2) ? this.NecessaryControlsKeyboard : this.NecessaryControlsGamePad).forEach((ctrl) =>
                EnableControlAction(0, ctrl, true)
            );
        }
    }
}

// src/menus/UIMenu/items/uimenuseparatoritem.ts
class UIMenuSeparatorItem extends UIMenuItem {
    Jumpable;
    constructor(title, jumpable) {
        super(title, "");
        this.Jumpable = jumpable;
        this._itemId = 6;
    }
    SetLeftBadge(badge) {
        throw new Error("UIMenuSeparatorItem cannot have a left badge.");
    }
    SetRightBadge(badge) {
        throw new Error("UIMenuSeparatorItem cannot have a right badge.");
    }
    SetRightLabel(text) {
        throw new Error("UIMenuSeparatorItem cannot have a right label.");
    }
}

// src/menus/UIMenu/items/uimenulistitem.ts
class UIMenuListItem extends UIMenuItem {
    _index = 0;
    _items = [];
    _listChangedEmitter = new ListItemChangeCallbackBuilder();
    _listSelectedEmitter = new ListItemChangeCallbackBuilder();
    set Index(value) {
        if (value < 0) this._index = 0;
        else if (value >= this._items.length) this._index = this.Items.length - 1;
        else this._index = value;
        if (
            this.Parent !== null &&
            this.Parent.Visible &&
            this.Parent.Pagination.IsItemVisible(this.Parent.Items.indexOf(this))
        ) {
            ScaleformUI.Scaleforms._ui.callFunction(
                "SET_ITEM_VALUE",
                this.Parent.Pagination.GetScaleformIndex(this.Parent.Items.indexOf(this)),
                this._index
            );
        }
    }
    get Index() {
        return this._index % this.Items.length;
    }
    set Items(value) {
        this.Index = 0;
        this._items = value;
    }
    get Items() {
        return this._items;
    }
    constructor(text, items, index, description, mainColor, higlightColor, textColor, highlightTextColor) {
        super(text, description, mainColor, higlightColor, textColor, highlightTextColor);
        this._itemId = 1;
        this._items = items;
        this.Index = index;
    }
    ChangeList(list, index) {
        this._items.length = 0;
        this._items = list;
        this._index = index;
        if (
            this.Parent !== null &&
            this.Parent.Visible &&
            this.Parent.Pagination.IsItemVisible(this.Parent.Items.indexOf(this))
        ) {
            ScaleformUI.Scaleforms._ui.callFunction(
                "UPDATE_LISTITEM_LIST",
                this.Parent.Pagination.GetScaleformIndex(this.Parent.Items.indexOf(this)),
                this._items.join(","),
                index
            );
        }
    }
    onListChanged(delegate) {
        this._listChangedEmitter.add(delegate);
    }
    onHighlighted(delegate) {
        this._listSelectedEmitter.add(delegate);
    }
    listChangedEmit() {
        this._listChangedEmitter.toDelegate()(this, this.Index);
    }
    listSelectedEmit() {
        this._listSelectedEmitter.toDelegate()(this, this.Index);
    }
    SetRightBadge(badge) {
        throw new Error("UIMenuListItem cannot have a right badge.");
    }
    SetRightLabel(text) {
        throw new Error("UIMenuListItem cannot have a right label.");
    }
}

// src/menus/UIMenu/items/uimenuslideritem.ts
class UIMenuSliderItem extends UIMenuItem {
    _value = 0;
    _max = 100;
    _multiplier = 5;
    Divider = false;
    sliderColor = SColor.HUD_Freemode;
    _heritage;
    _itemSliderCallback = new SliderItemCallbackBuilder();
    constructor(text, description, max, mult, startVal, sliderColor, heritage) {
        super(text, description);
        this.SliderColor = sliderColor;
        this._itemId = 3;
        this._heritage = heritage;
        this.Maximum = max;
        this.Multiplier = mult;
        this.Value = startVal;
    }
    set SliderColor(value) {
        this.sliderColor = value;
        if (
            this.Parent !== null &&
            this.Parent.Visible &&
            this.Parent.Pagination.IsItemVisible(this.Parent.Items.indexOf(this))
        ) {
            ScaleformUI.Scaleforms._ui.callFunction(
                "UPDATE_COLORS",
                this.Parent.Pagination.GetScaleformIndex(this.Parent.Items.indexOf(this)),
                this.MainColor.toArgb(),
                this.HighlightColor.toArgb(),
                this.TextColor,
                this.HighlightedTextColor,
                value
            );
        }
    }
    get SliderColor() {
        return this.sliderColor;
    }
    set Maximum(value) {
        this._max = value;
        if (this._value > value) this._value = value;
    }
    get Maximum() {
        return this._max;
    }
    set Value(value) {
        if (value > this._max) this._value = this._max;
        else if (value < 0) this._value = 0;
        else this._value = value;
        this.sliderChanged(this._value);
        if (
            this.Parent !== null &&
            this.Parent.Visible &&
            this.Parent.Pagination.IsItemVisible(this.Parent.Items.indexOf(this))
        ) {
            ScaleformUI.Scaleforms._ui.callFunction(
                "SET_ITEM_VALUE",
                this.Parent.Pagination.GetScaleformIndex(this.Parent.Items.indexOf(this)),
                this._value
            );
        }
    }
    get Value() {
        return this._value;
    }
    set Multiplier(value) {
        this._multiplier = value;
    }
    get Multiplier() {
        return this._multiplier;
    }
    onSliderChanged(delegate) {
        this._itemSliderCallback.add(delegate);
    }
    sliderChanged(value) {
        this._itemSliderCallback.toDelegate()(this, value);
    }
    SetRightBadge(badge) {
        throw new Error("UIMenuSliderItem cannot have a right badge.");
    }
    SetRightLabel(text) {
        throw new Error("UIMenuSliderItem cannot have a right label.");
    }
}

// src/elements/uimenugridaudio.ts
class UIMenuGridAudio {
    Slider;
    Library;
    Id;
    constructor(slider, library, id) {
        this.Slider = slider;
        this.Library = library;
        this.Id = id;
    }
}

// src/menus/UIMenu/items/uimenuprogressitem.ts
class UIMenuProgressItem extends UIMenuItem {
    Pressed;
    Audio;
    _value = 0;
    _max = 100;
    _multiplier = 5;
    sliderColor = SColor.HUD_Freemode;
    Divider = false;
    _itemSliderProgressCallback = new ProgressItemCallbackBuilder();
    constructor(text, maxCount, startIndex, description, sliderColor) {
        super(text, description);
        this._max = maxCount;
        this._value = startIndex;
        this.SliderColor = sliderColor;
        this.Audio = new UIMenuGridAudio("CONTINUOUS_SLIDER", "HUD_FRONTEND_DEFAULT_SOUNDSET", 0);
        this._itemId = 4;
        this.Pressed = false;
    }
    set SliderColor(value) {
        this.sliderColor = value;
        if (
            this.Parent !== null &&
            this.Parent.Visible &&
            this.Parent.Pagination.IsItemVisible(this.Parent.Items.indexOf(this))
        ) {
            ScaleformUI.Scaleforms._ui.callFunction(
                "UPDATE_COLORS",
                this.Parent.Pagination.GetScaleformIndex(this.Parent.Items.indexOf(this)),
                this.MainColor.toArgb(),
                this.HighlightColor.toArgb(),
                this.TextColor,
                this.HighlightedTextColor,
                value
            );
        }
    }
    get SliderColor() {
        return this.sliderColor;
    }
    set Value(value) {
        if (value > this._max) this._value = this._max;
        else if (value < 0) this._value = 0;
        else this._value = value;
        this.progressChanged(this._value);
        if (
            this.Parent !== null &&
            this.Parent.Visible &&
            this.Parent.Pagination.IsItemVisible(this.Parent.Items.indexOf(this))
        ) {
            ScaleformUI.Scaleforms._ui.callFunction(
                "SET_ITEM_VALUE",
                this.Parent.Pagination.GetScaleformIndex(this.Parent.Items.indexOf(this)),
                this._value
            );
        }
    }
    get Value() {
        return this._value;
    }
    set Multiplier(value) {
        this._multiplier = value;
    }
    get Multiplier() {
        return this._multiplier;
    }
    onProgressChanged(delegate) {
        this._itemSliderProgressCallback.add(delegate);
    }
    progressChanged(value) {
        this._itemSliderProgressCallback.toDelegate()(this, value);
    }
    SetRightBadge(badge) {
        throw new Error("UIMenuProgressItem cannot have a right badge.");
    }
    SetRightLabel(text) {
        throw new Error("UIMenuProgressItem cannot have a right label.");
    }
}

// src/math/vector2.ts
class Vector2 {
    x;
    y;
    static get zero() {
        return new Vector2(0, 0);
    }
    static create(v1) {
        if (typeof v1 === "number") {
            return new Vector2(v1, v1);
        }
        return new Vector2(v1.x, v1.y);
    }
    static clone(v1) {
        return Vector2.create(v1);
    }
    static add(v1, v2) {
        if (typeof v2 === "number") {
            return new Vector2(v1.x + v2, v1.y + v2);
        }
        return new Vector2(v1.x + v2.x, v1.y + v2.y);
    }
    static subtract(v1, v2) {
        return new Vector2(v1.x - v2.x, v1.y - v2.y);
    }
    static multiply(v1, v2) {
        if (typeof v2 === "number") {
            return new Vector2(v1.x * v2, v1.y * v2);
        }
        return new Vector2(v1.x * v2.x, v1.y * v2.y);
    }
    static divide(v1, v2) {
        if (typeof v2 === "number") {
            return new Vector2(v1.x / v2, v1.y / v2);
        }
        return new Vector2(v1.x / v2.x, v1.y / v2.y);
    }
    static dotProduct(v1, v2) {
        return v1.x * v2.x + v1.y * v2.y;
    }
    static crossProduct(v1, v2) {
        return v1.x * v2.y - v1.y * v2.x;
    }
    static normalize(v) {
        return Vector2.divide(v, v.length);
    }
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static fromInterface(int) {
        return new Vector2(int.x, int.y);
    }
    clone() {
        return new Vector2(this.x, this.y);
    }
    distanceSquared(v) {
        const w = this.subtract(v);
        return Vector2.dotProduct(w, w);
    }
    distance(v) {
        return Math.sqrt(this.distanceSquared(v));
    }
    distanceNoZ(v) {
        const dx = this.x - v.x;
        const dy = this.y - v.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
    get normalize() {
        return Vector2.normalize(this);
    }
    crossProduct(v) {
        return Vector2.crossProduct(this, v);
    }
    dotProduct(v) {
        return Vector2.dotProduct(this, v);
    }
    add(v) {
        return Vector2.add(this, v);
    }
    subtract(v) {
        return Vector2.subtract(this, v);
    }
    multiply(v) {
        return Vector2.multiply(this, v);
    }
    divide(v) {
        return Vector2.divide(this, v);
    }
    replace(v) {
        this.x = v.x;
        this.y = v.y;
    }
    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    static fromArr(arr) {
        return new Vector2(arr[0], arr[1]);
    }
    static fromArrays(arrs) {
        return arrs.map(Vector2.fromArr);
    }
    toJSON() {
        return `[${this.x}, ${this.y}]`;
    }
    toArr() {
        return [this.x, this.y];
    }
    display() {
        return `X: ${this.x}, Y: ${this.y}`;
    }
    toFixed(frac) {
        return new Vector2(parseFloat(this.x.toFixed(frac)), parseFloat(this.y.toFixed(frac)));
    }
    addX(to) {
        return new Vector2(this.x + to, this.y);
    }
    addY(to) {
        return new Vector2(this.x, this.y + to);
    }
    addZ(to) {
        return new Vector2(this.x, this.y);
    }
    toObject() {
        return { x: this.x, y: this.y };
    }
    cloneWith(angle, value) {
        return new Vector2(angle === "x" ? value : this.x, angle === "y" ? value : this.y);
    }
    get magnitude() {
        return Math.sqrt(this.dotProduct(this));
    }
    isInsideSphere(pos, scale) {
        const dist = this.subtract(pos);
        const rad = scale.magnitude / 2;
        return dist.magnitude <= rad;
    }
}

// src/math/vector3.ts
class Vector3 {
    x;
    y;
    z;
    static zero() {
        return new Vector3(0, 0, 0);
    }
    static create(v1) {
        if (typeof v1 === "number") {
            return new Vector3(v1, v1, v1);
        }
        return new Vector3(v1.x, v1.y, v1.z);
    }
    static clone(v1) {
        return Vector3.create(v1);
    }
    static add(v1, v2) {
        if (typeof v2 === "number") {
            return new Vector3(v1.x + v2, v1.y + v2, v1.z + v2);
        }
        return new Vector3(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z);
    }
    static subtract(v1, v2) {
        return new Vector3(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z);
    }
    static multiply(v1, v2) {
        if (typeof v2 === "number") {
            return new Vector3(v1.x * v2, v1.y * v2, v1.z * v2);
        }
        return new Vector3(v1.x * v2.x, v1.y * v2.y, v1.z * v2.z);
    }
    static divide(v1, v2) {
        if (typeof v2 === "number") {
            return new Vector3(v1.x / v2, v1.y / v2, v1.z / v2);
        }
        return new Vector3(v1.x / v2.x, v1.y / v2.y, v1.z / v2.z);
    }
    static dotProduct(v1, v2) {
        return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
    }
    static crossProduct(v1, v2) {
        const x = v1.y * v2.z - v1.z * v2.y;
        const y = v1.z * v2.x - v1.z * v2.z;
        const z = v1.x * v2.y - v1.z * v2.x;
        return new Vector3(x, y, z);
    }
    static normalize(v) {
        return Vector3.divide(v, v.length);
    }
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    static fromInterface(int) {
        return new Vector3(int.x, int.y, int.z);
    }
    clone() {
        return new Vector3(this.x, this.y, this.z);
    }
    distanceSquared(v) {
        const w = this.subtract(v);
        return Vector3.dotProduct(w, w);
    }
    distance(v) {
        return Math.sqrt(this.distanceSquared(v));
    }
    distanceNoZ(v) {
        const dx = this.x - v.x;
        const dy = this.y - v.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
    get normalize() {
        return Vector3.normalize(this);
    }
    crossProduct(v) {
        return Vector3.crossProduct(this, v);
    }
    dotProduct(v) {
        return Vector3.dotProduct(this, v);
    }
    add(v) {
        return Vector3.add(this, v);
    }
    subtract(v) {
        return Vector3.subtract(this, v);
    }
    multiply(v) {
        return Vector3.multiply(this, v);
    }
    divide(v) {
        return Vector3.divide(this, v);
    }
    replace(v) {
        this.x = v.x;
        this.y = v.y;
        this.z = v.z;
    }
    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    static fromArr(arr) {
        return new Vector3(arr[0], arr[1], arr[2]);
    }
    static fromArrays(arrs) {
        return arrs.map(Vector3.fromArr);
    }
    toJSON() {
        return `[${this.x}, ${this.y}, ${this.z}]`;
    }
    toArr() {
        return [this.x, this.y, this.z];
    }
    display() {
        return `X: ${this.x}, Y: ${this.y}, Z: ${this.z}`;
    }
    toFixed(frac) {
        return new Vector3(
            parseFloat(this.x.toFixed(frac)),
            parseFloat(this.y.toFixed(frac)),
            parseFloat(this.z.toFixed(frac))
        );
    }
    addX(to) {
        return new Vector3(this.x + to, this.y, this.z);
    }
    addY(to) {
        return new Vector3(this.x, this.y + to, this.z);
    }
    addZ(to) {
        return new Vector3(this.x, this.y, this.z + to);
    }
    toObject() {
        return { x: this.x, y: this.y, z: this.z };
    }
    cloneWith(angle, value) {
        return new Vector3(
            angle === "x" ? value : this.x,
            angle === "y" ? value : this.y,
            angle === "z" ? value : this.z
        );
    }
    get magnitude() {
        return Math.sqrt(this.dotProduct(this));
    }
    isInsideSphere(pos, scale) {
        const dist = this.subtract(pos);
        const rad = scale.magnitude / 2;
        return dist.magnitude <= rad;
    }
}

// src/math/screen-tools.ts
class ScreenTools {
    static GlobalGameTimer = Date.now();
    static ToBool(input) {
        return input === "true" || input === 1 || input === true;
    }
    static split(inputstr, sep = "\\s+") {
        return inputstr.split(new RegExp(sep));
    }
    static ResolutionMaintainRatio() {
        const [screenw, screenh] = GetActiveScreenResolution();
        const ratio = screenw / screenh;
        return [1080 * ratio, 1080];
    }
    static SafezoneBounds() {
        const t = GetSafeZoneSize();
        let g = MathExtensions.round(t, 2);
        g = g * 100 - 90;
        g = 10 - g;
        const screenw = 720 * GetAspectRatio(false);
        const screenh = 720;
        const ratio = screenw / screenh;
        const wmp = ratio * 5.4;
        return new Vector2(MathExtensions.round(g * wmp), MathExtensions.round(g * 5.4));
    }
    static FormatXWYH(value, value2) {
        const [w, h] = ScreenTools.ResolutionMaintainRatio();
        return [value / w, value2 / h];
    }
    static GetVectorMagnitude(vector) {
        return Math.sqrt(vector.x * vector.x + vector.y * vector.y + vector.z * vector.z);
    }
    static IsVectorInsideSphere(vector, position, scale) {
        const distance = new Vector3(vector.x - position.x, vector.y - position.y, vector.z - position.z);
        const radius = ScreenTools.GetVectorMagnitude(scale) / 2;
        return ScreenTools.GetVectorMagnitude(distance) <= radius;
    }
    static AllTrue(arr) {
        return arr.every((v) => v);
    }
    static AllFalse(arr) {
        return arr.some((v) => v);
    }
    static IsMouseInBounds(x, y, width, height) {
        const [screenw, screenh] = GetActiveScreenResolution();
        const mx = Math.round(GetControlNormal(0, 239) * screenw);
        const my = Math.round(GetControlNormal(0, 240) * screenh);
        return mx >= x && mx <= x + width && my > y && my < y + height;
    }
    static TableHasKey(table, key) {
        const lowercaseKey = key.toLowerCase();
        for (const k in table) {
            if (k.toLowerCase() === lowercaseKey) {
                return true;
            }
        }
        return false;
    }
    static LengthSquared(vector) {
        return vector.x * vector.x + vector.y * vector.y + vector.z * vector.z;
    }
    static Wrap(value, min, max) {
        const range = max - min;
        let normalizedValue = (value - min) % range;
        if (normalizedValue < 0) {
            normalizedValue += range;
        }
        const epsilon = 0.000000000001;
        if (Math.abs(normalizedValue - range) < epsilon) {
            normalizedValue = range;
        }
        return min + normalizedValue;
    }
    static ConvertResolutionCoordsToScaleformCoords(realX, realY) {
        const [x, y] = GetActiveScreenResolution();
        return new Vector2((realX / x) * 1280, (realY / y) * 720);
    }
    static ConvertScaleformCoordsToResolutionCoords(scaleformX, scaleformY) {
        const [x, y] = GetActiveScreenResolution();
        return new Vector2((scaleformX / 1280) * x, (scaleformY / 720) * y);
    }
    static ConvertScreenCoordsToScaleformCoords(scX, scY) {
        return new Vector2(scX * 1280, scY * 720);
    }
    static ConvertScaleformCoordsToScreenCoords(scaleformX, scaleformY) {
        const [w, h] = GetActiveScreenResolution();
        return new Vector2(scaleformX / w, scaleformY / h);
    }
    static ConvertResolutionCoordsToScreenCoords(x, y) {
        const [w, h] = GetActiveScreenResolution();
        const normalizedX = Math.max(0, Math.min(1, x / w));
        const normalizedY = Math.max(0, Math.min(1, y / h));
        return new Vector2(normalizedX, normalizedY);
    }
    static ConvertResolutionSizeToScaleformSize(realWidth, realHeight) {
        const [x, y] = GetActiveScreenResolution();
        return new Vector2((realWidth / x) * 1280, (realHeight / y) * 720);
    }
    static ConvertScaleformSizeToResolutionSize(scaleformWidth, scaleformHeight) {
        const [x, y] = GetActiveScreenResolution();
        return new Vector2((scaleformWidth / 1280) * x, (scaleformHeight / 720) * y);
    }
    static ConvertScreenSizeToScaleformSize(scWidth, scHeight) {
        return new Vector2(scWidth * 1280, scHeight * 720);
    }
    static ConvertScaleformSizeToScreenSize(scaleformWidth, scaleformHeight) {
        const [w, h] = GetActiveScreenResolution();
        return new Vector2(scaleformWidth / w, scaleformHeight / h);
    }
    static ConvertResolutionSizeToScreenSize(width, height) {
        const [w, h] = GetActiveScreenResolution();
        const normalizedWidth = Math.max(0, Math.min(1, width / w));
        const normalizedHeight = Math.max(0, Math.min(1, height / h));
        return new Vector2(normalizedWidth, normalizedHeight);
    }
    static AdjustNormalized16_9ValuesForCurrentAspectRatio(widescreen, x, y, w, h) {
        if (widescreen === 0) {
            if (x > 0.5) {
                widescreen = 2;
            } else if (x < 0.5) {
                widescreen = 1;
            } else {
                widescreen = 3;
            }
        }
        const fPhysicalAspect = GetAspectRatio(false);
        const fScalar = 16 / 9 / fPhysicalAspect;
        const fAdjustPos = 1 - fScalar;
        switch (widescreen) {
            case 1:
                w *= fScalar;
                x *= fScalar;
                break;
            case 2:
                w *= fScalar;
                x = x * fScalar + fAdjustPos;
                break;
            case 3:
                w *= fScalar;
                x = x * fScalar + fAdjustPos * 0.5;
                break;
            case 4:
                w *= fScalar;
                break;
        }
        [x, w] = ScreenTools.AdjustForSuperWidescreen(x, w);
        return [x, y, w, h];
    }
    static AdjustForSuperWidescreen(x, w) {
        if (!ScreenTools.IsSuperWideScreen()) {
            return [x, w];
        }
        const difference = 16 / 9 / GetAspectRatio(false);
        x = 0.5 - (0.5 - x) * difference;
        w *= difference;
        return [x, w];
    }
    static IsSuperWideScreen() {
        const aspRat = GetAspectRatio(false);
        return aspRat > 16 / 9;
    }
    static GetWideScreen() {
        const WIDESCREEN_ASPECT = 1.5;
        const [w, h] = GetActiveScreenResolution();
        const fLogicalAspectRatio = GetAspectRatio(false);
        const fPhysicalAspectRatio = w / h;
        return fPhysicalAspectRatio > WIDESCREEN_ASPECT && fLogicalAspectRatio > WIDESCREEN_ASPECT;
    }
}
class MathExtensions {
    static round(num, decimalPlaces) {
        if (decimalPlaces !== undefined) {
            const multiplier = Math.pow(10, decimalPlaces);
            return Math.floor(num * multiplier + 0.5) / multiplier;
        } else {
            return Math.floor(num + 0.5);
        }
    }
}

// src/menus/UIMenu/items/uimenudynamiclistitem.ts
class UIMenuDynamicListItem extends UIMenuItem {
    callback = new UIMenuDynamicListItemChangeCallbackBuilder();
    currentListItem = "";
    set CurrentListItem(value) {
        this.currentListItem = value;
        if (
            this.Parent !== null &&
            this.Parent.Visible &&
            this.Parent.Pagination.IsItemVisible(this.Parent.Items.indexOf(this))
        ) {
            ScaleformUI.Scaleforms._ui.callFunction(
                "UPDATE_LISTITEM_LIST",
                this.Parent.Pagination.GetScaleformIndex(this.Parent.Items.indexOf(this)),
                this.currentListItem,
                0
            );
        }
    }
    get CurrentListItem() {
        return this.currentListItem;
    }
    constructor(text, description, startingItem, changeCallback) {
        super(text, description);
        this._itemId = 1;
        this.currentListItem = startingItem;
        this.callback.add(changeCallback);
    }
    SetRightBadge(badge) {
        throw new Error("UIMenuDynamicListItem cannot have a right badge.");
    }
    SetRightLabel(text) {
        throw new Error("UIMenuDynamicListItem cannot have a right label.");
    }
}

// src/menus/UIMenu/items/uimenustatsitem.ts
class UIMenuStatsItem extends UIMenuItem {
    _value;
    _type = 0;
    sliderColor;
    _statChanged = new StatsItemCallbackBuilder();
    constructor(text, subtitle, value, color) {
        super(text, subtitle);
        this._itemId = 5;
        this.Type = 0;
        this._value = value;
        this.sliderColor = color;
    }
    set Value(value) {
        this._value = value;
        this.SetValue(this._value);
    }
    get Value() {
        return this._value;
    }
    set Type(_t) {
        this._type = _t;
    }
    get Type() {
        return this._type;
    }
    set SliderColor(value) {
        this.sliderColor = value;
        if (
            this.Parent !== null &&
            this.Parent.Visible &&
            this.Parent.Pagination.IsItemVisible(this.Parent.Items.indexOf(this))
        ) {
            ScaleformUI.Scaleforms._ui.callFunction(
                "UPDATE_COLORS",
                this.Parent.Pagination.GetScaleformIndex(this.Parent.Items.indexOf(this)),
                this.MainColor.toArgb(),
                this.HighlightColor.toArgb(),
                this.TextColor,
                this.HighlightedTextColor,
                value
            );
        }
    }
    get SliderColor() {
        return this.sliderColor;
    }
    SetValue(value) {
        if (this.Parent !== null) {
            ScaleformUI.Scaleforms._ui.callFunction(
                "SET_ITEM_VALUE",
                this.Parent.Pagination.GetScaleformIndex(this.Parent.Items.indexOf(this)),
                value
            );
        }
        this._statChanged.toDelegate()(value);
    }
    onStatChanged(delegate) {
        this._statChanged.add(delegate);
    }
    SetLeftBadge(badge) {
        throw new Error("UIMenuStatsItem cannot have a left badge.");
    }
    SetRightBadge(badge) {
        throw new Error("UIMenuStatsItem cannot have a right badge.");
    }
    SetRightLabel(text) {
        throw new Error("UIMenuStatsItem cannot have a right label.");
    }
}

// src/helpers/collections.ts
var namedClassExtension = (name, ctor) => {
    Object.defineProperty(ctor, "name", {
        get: () => name
    });
    try {
        Object.defineProperty(ctor.prototype, "name", {
            get: () => name
        });
    } catch (err) {}
    return ctor;
};

// src/menus/UIMenu/panels/uimenupanel.ts
class UIMenuPanel {
    Selected = false;
    Enabled = true;
    UpdateParent() {}
    SetParentItem(item) {
        this.ParentItem = item;
    }
    ParentItem;
}

// src/menus/UIMenu/panels/uimenucolorpanel.ts
class UIMenuColorPanel extends UIMenuPanel {
    Title;
    PanelColorType;
    CustomColors;
    _value;
    _ColorPanelChanged = new ColorPanelChangedEventBuilder();
    OnColorPanelChange(delegate) {
        this._ColorPanelChanged.add(delegate);
    }
    get CurrentSelection() {
        return this._value;
    }
    set CurrentSelection(value) {
        this._value = value;
        if (this.CustomColors.length == 0) {
            if (value > 63) this._value -= 63;
            if (value < 0) this._value += 63;
        } else {
            if (value > this.CustomColors.length - 1) this._value -= this.CustomColors.length - 1;
            if (value < 0) this._value += this.CustomColors.length - 1;
        }
        this._setValue(this._value);
    }
    constructor(title, colorType, startIndex, colors) {
        super();
        this.Title = title;
        this.PanelColorType = colorType;
        this.CustomColors = colors;
        this._value = 0;
    }
    PanelChanged() {
        this._ColorPanelChanged.toDelegate()(this.ParentItem, this, this.CurrentSelection);
    }
    _setValue(val) {
        const parentMenu = this.ParentItem.Parent;
        if (!parentMenu) return;
        let it = parentMenu.Pagination.GetScaleformIndex(parentMenu.Items.indexOf(this.ParentItem));
        let van = this.ParentItem.Panels.indexOf(this);
        ScaleformUI.Scaleforms._ui?.callFunction("SET_COLOR_PANEL_VALUE", it, van, val);
    }
}

// src/menus/UIMenu/panels/uimenupercentagepanel.ts
class UIMenuPercentagePanel extends UIMenuPanel {
    Min;
    Max;
    Title;
    _value;
    _PercentagePanelChanged = new PercentagePanelChangedEventBuilder();
    OnPercentagePanelChange(delegate) {
        this._PercentagePanelChanged.add(delegate);
    }
    PercentagePanelChange() {
        this._PercentagePanelChanged.toDelegate()(this.ParentItem, this, this.Percentage);
    }
    constructor(title = "", minText = "0%", maxText = "100%", initialValue = 0) {
        super();
        this.Min = minText;
        this.Max = maxText;
        this.Title = title;
        this._value = initialValue;
    }
    set Percentage(value) {
        this._value = value;
        this._setValue(value);
    }
    get Percentage() {
        return this._value;
    }
    _setValue(val) {
        const parentMenu = this.ParentItem.Parent;
        if (!parentMenu) return;
        let it = parentMenu.Pagination.GetScaleformIndex(parentMenu.Items.indexOf(this.ParentItem));
        let van = this.ParentItem.Panels.indexOf(this);
        ScaleformUI.Scaleforms._ui?.callFunction("SET_PERCENT_PANEL_RETURN_VALUE", it, van, val);
    }
}

// src/menus/UIMenu/panels/uimenugridpanel.ts
class UIMenuGridPanel extends UIMenuPanel {
    TopLabel;
    LeftLabel;
    RightLabel;
    BottomLabel;
    Type = 0 /* Full */;
    _value = new Vector2(0.5, 0.5);
    get CirclePosition() {
        return this._value;
    }
    set CirclePosition(value) {
        this._value = value;
        this._setValue(value);
    }
    _GridPanelChanged = new GridPanelChangedEventBuilder();
    OnGridPanelChanged(delegate) {
        this._GridPanelChanged.add(delegate);
    }
    OnGridChange() {
        this._GridPanelChanged.toDelegate()(this.ParentItem, this, this.CirclePosition);
    }
    constructor(
        topText = "UP",
        leftText = "LEFT",
        rightText = "RIGHT",
        bottomText = "DOWN",
        circlePosition = new Vector2(0.5, 0.5),
        gridType = 0 /* Full */
    ) {
        super();
        this.TopLabel = topText;
        this.RightLabel = rightText;
        this.LeftLabel = leftText;
        this.BottomLabel = bottomText;
        this.CirclePosition = circlePosition;
        this.Type = gridType;
    }
    _setValue(value) {
        const parentMenu = this.ParentItem.Parent;
        if (!parentMenu) return;
        let it = parentMenu.Pagination.GetScaleformIndex(parentMenu.Items.indexOf(this.ParentItem));
        let van = this.ParentItem.Panels.indexOf(this);
        ScaleformUI.Scaleforms._ui?.callFunction("SET_GRID_PANEL_VALUE_RETURN_VALUE", it, van, value.x, value.y);
    }
}

// src/menus/UIMenu/panels/uimenustatisticspanel.ts
class UIMenuStatisticsPanel extends UIMenuPanel {
    Items;
    constructor() {
        super();
        this.Items = [];
    }
    AddStatistic(name, val) {
        let _value = val;
        if (_value > 100) _value = 100;
        if (_value < 0) _value = 0;
        let item = new StatisticsForPanel(name, _value);
        this.Items.push(item);
        if (this.ParentItem != null && this.ParentItem.Parent != null && this.ParentItem.Parent.Visible) {
            let it = this.ParentItem.Parent.Pagination.GetScaleformIndex(
                this.ParentItem.Parent.Items.indexOf(this.ParentItem)
            );
            let van = this.ParentItem.Panels.indexOf(this);
            ScaleformUI.Scaleforms._ui?.callFunction("ADD_STATISTIC_TO_PANEL", it, van, name, _value);
        }
    }
    GetPercentage(ItemId) {
        return this.Items[ItemId].Value;
    }
    UpdateStatistic(itemId, value) {
        this.Items[itemId].Value = value;
        if (this.Items[itemId].Value > 100) this.Items[itemId].Value = 100;
        if (this.Items[itemId].Value < 0) this.Items[itemId].Value = 0;
        const parentMenu = this.ParentItem.Parent;
        if (!parentMenu) return;
        let it = parentMenu.Pagination.GetScaleformIndex(parentMenu.Items.indexOf(this.ParentItem));
        let van = this.ParentItem.Panels.indexOf(this);
        ScaleformUI.Scaleforms._ui?.callFunction(
            "SET_PANEL_STATS_ITEM_VALUE",
            it,
            van,
            itemId,
            this.Items[itemId].Value
        );
    }
}

class StatisticsForPanel {
    Text;
    Value;
    constructor(label, value) {
        this.Text = label;
        this.Value = value;
        if (this.Value > 100) this.Value = 100;
        if (this.Value < 0) this.Value = 0;
    }
}

// src/menus/UIMenu/sidepanels/DetailsPanel/uimissiondetailspanel.ts
class UIMissionDetailsPanel extends UIMenuPanel {
    title = "";
    PanelSide;
    TitleColor;
    TitleType;
    TextureDict;
    TextureName;
    Items;
    set Title(value) {
        this.title = value;
        if (this.ParentItem != null && this.ParentItem.Parent != null && this.ParentItem.Parent.Visible) {
            ScaleformUI.Scaleforms._ui?.callFunction(
                "UPDATE_SIDE_PANEL_TITLE",
                this.ParentItem.Parent.Pagination.GetScaleformIndex(
                    this.ParentItem.Parent.Items.indexOf(this.ParentItem)
                ),
                this.title
            );
        }
    }
    get Title() {
        return this.title;
    }
    UpdatePanelPicture(txd, txn) {
        this.TextureDict = txd;
        this.TextureName = txn;
        if (this.ParentItem != null && this.ParentItem.Parent != null && this.ParentItem.Parent.Visible) {
            let wid = this.ParentItem.Parent.Pagination.GetScaleformIndex(
                this.ParentItem.Parent.Items.indexOf(this.ParentItem)
            );
            ScaleformUI.Scaleforms._ui?.callFunction(
                "UPDATE_MISSION_DETAILS_PANEL_IMG",
                wid,
                this.TextureDict,
                this.TextureName
            );
        }
    }
    AddItem(item) {
        this.Items.push(item);
        if (this.ParentItem != null && this.ParentItem.Parent != null && this.ParentItem.Parent.Visible) {
            let wid = this.ParentItem.Parent.Pagination.GetScaleformIndex(
                this.ParentItem.Parent.Items.indexOf(this.ParentItem)
            );
            ScaleformUI.Scaleforms._ui?.callFunction(
                "ADD_MISSION_DETAILS_DESC_ITEM",
                wid,
                item.Type,
                item.TextLeft,
                item.TextRight,
                item.Icon,
                item.IconColor,
                item.Tick,
                item._labelFont.fontName,
                item._labelFont.fontId,
                item._rightLabelFont.fontName,
                item._rightLabelFont.fontId
            );
        }
    }
    RemoveItem(idx) {
        this.Items.splice(idx, 1);
        if (this.ParentItem != null && this.ParentItem.Parent != null && this.ParentItem.Parent.Visible) {
            let wid = this.ParentItem.Parent.Pagination.GetScaleformIndex(
                this.ParentItem.Parent.Items.indexOf(this.ParentItem)
            );
            ScaleformUI.Scaleforms._ui?.callFunction("REMOVE_MISSION_DETAILS_DESC_ITEM", wid, idx);
        }
    }
    constructor(side, title, color, inside, txd, txn) {
        super();
        let _titleType;
        let _titleColor;
        if (inside == -1) _titleType = 1;
        else if (inside) _titleType = 2;
        else _titleType = 0;
        if (color != SColor.HUD_None) _titleColor = color;
        else _titleColor = SColor.HUD_None;
        this.PanelSide = side;
        this.Title = title;
        this.TitleColor = _titleColor;
        this.TitleType = _titleType;
        this.TextureDict = txd || "";
        this.TextureName = txn || "";
        this.Items = [];
    }
}

// src/menus/UIMenu/sidepanels/uimenusidepanel.ts
class UIMenuSidePanel {
    Selected = false;
    Enabled = true;
    PanelSide;
    UpdateParent() {}
    SetParentItem(item) {
        this.ParentItem = item;
    }
    ParentItem;
}

// src/menus/UIMenu/sidepanels/ColorPicker/uivehiclecolourpickerpanel.ts
class UIVehicleColourPickerPanel extends UIMenuSidePanel {
    title;
    get Title() {
        return this.title;
    }
    set Title(value) {
        this.title = value;
        if (this.ParentItem != null && this.ParentItem.Parent != null && this.ParentItem.Parent.Visible) {
            ScaleformUI.Scaleforms._ui?.callFunction(
                "UPDATE_SIDE_PANEL_TITLE",
                this.ParentItem.Parent.Pagination.GetScaleformIndex(
                    this.ParentItem.Parent.Items.indexOf(this.ParentItem)
                ),
                this.title
            );
        }
    }
    TitleColor;
    _titleType;
    _value;
    get Value() {
        return this._value;
    }
    _VehicleColorPickerSelect = new VehicleColorPickerSelectEventBuilder();
    OnVehicleColorPickerSelect(delegate) {
        this._VehicleColorPickerSelect.add(delegate);
    }
    PickerSelect() {
        this._VehicleColorPickerSelect.toDelegate()(this.ParentItem, this, this._value);
    }
    constructor(side, title, titleColor) {
        super();
        this.PanelSide = side;
        this.title = title;
        this.TitleColor = titleColor;
        this._titleType = titleColor == SColor.HUD_None ? 0 /* Big */ : 1 /* Small */;
        this._value = 0;
    }
}

// src/menus/UIMenu/windows/uimenuwindow.ts
class UIMenuWindow {
    ParentMenu;
    id = 0;
    UpdateParent() {}
    Draw() {}
    SetParentMenu(menu) {
        this.ParentMenu = menu;
    }
}

// src/menus/UIMenu/windows/uimenuheritagewindow.ts
class UIMenuHeritageWindow extends UIMenuWindow {
    Mom;
    Dad;
    constructor(mom, dad) {
        super();
        this.Mom = mom;
        this.Dad = dad;
    }
    async Index(mom, dad) {
        this.Mom = mom;
        this.Dad = dad;
        if (mom > 21) this.Mom = 21;
        if (mom < 0) this.Mom = 0;
        if (dad > 23) this.Dad = 23;
        if (dad < 0) this.Dad = 0;
        let wid = this.ParentMenu.Windows.indexOf(this);
        while (!HasStreamedTextureDictLoaded("char_creator_portraits")) {
            await Delay(0);
            RequestStreamedTextureDict("char_creator_portraits", true);
        }
        ScaleformUI.Scaleforms._ui?.callFunction("UPDATE_HERITAGE_WINDOW", wid, this.Mom, this.Dad);
        SetStreamedTextureDictAsNoLongerNeeded("char_creator_portraits");
    }
}

// src/menus/UIMenu/windows/uimenudetailswindow.ts
class UIDetailImage {
    Txd;
    Txn;
    Pos;
    Size;
    constructor(txd, txn, pos, size) {
        this.Txd = txd;
        this.Txn = txn;
        this.Pos = pos;
        this.Size = size;
    }
}
class UIMenuDetailsWindow extends UIMenuWindow {
    DetailTop;
    DetailMid;
    DetailBottom;
    DetailLeft;
    StatWheelEnabled;
    DetailStats;
    constructor(...args) {
        super();
        this.id = 1;
        this.DetailTop = args[0];
        this.DetailMid = args[1];
        this.DetailBottom = args[2];
        this.StatWheelEnabled = false;
        this.DetailLeft = new UIDetailImage("", "", Vector2.zero, Vector2.zero);
        this.DetailStats = [];
        if (args.length === 3 || args.length === 4) {
            if (args.length === 4) {
                this.DetailLeft = args[3] || this.DetailLeft;
            }
        } else if (args.length === 5) {
            this.StatWheelEnabled = args[3];
            this.DetailStats = args[4];
            this.DetailLeft = this.DetailLeft;
        }
    }
    UpdateLabels(top, mid, bot, leftDetail) {
        this.DetailTop = top;
        this.DetailMid = mid;
        this.DetailBottom = bot;
        this.DetailLeft = leftDetail == undefined ? new UIDetailImage("", "", Vector2.zero, Vector2.zero) : leftDetail;
        if (this.ParentMenu != null && this.ParentMenu.Visible) {
            let wid = this.ParentMenu.Windows.indexOf(this);
            if (!this.StatWheelEnabled)
                ScaleformUI.Scaleforms._ui?.callFunction(
                    "UPDATE_DETAILS_WINDOW_VALUES",
                    wid,
                    this.DetailBottom,
                    this.DetailMid,
                    this.DetailTop,
                    this.DetailLeft.Txd,
                    this.DetailLeft.Txn,
                    this.DetailLeft.Pos.x,
                    this.DetailLeft.Pos.y,
                    this.DetailLeft.Size.x,
                    this.DetailLeft.Size.y
                );
            else
                ScaleformUI.Scaleforms._ui?.callFunction(
                    "UPDATE_DETAILS_WINDOW_VALUES",
                    wid,
                    this.DetailBottom,
                    this.DetailMid,
                    this.DetailTop,
                    "statWheel"
                );
        }
    }
    AddStatsListToWheel(stats) {
        if (this.StatWheelEnabled) {
            this.DetailStats = stats;
            if (this.ParentMenu != null && this.ParentMenu.Visible) {
                let wid = this.ParentMenu.Windows.indexOf(this);
                stats.forEach((value) => {
                    ScaleformUI.Scaleforms._ui?.callFunction(
                        "ADD_STATS_DETAILS_WINDOW_STATWHEEL",
                        wid,
                        value.Percentage,
                        value.HudColor
                    );
                });
            }
        }
    }
    AddStatSingleToWheel(stat) {
        if (this.StatWheelEnabled) {
            this.DetailStats.push(stat);
            if (this.ParentMenu != null && this.ParentMenu.Visible) {
                let wid = this.ParentMenu.Windows.indexOf(this);
                ScaleformUI.Scaleforms._ui?.callFunction(
                    "ADD_STATS_DETAILS_WINDOW_STATWHEEL",
                    wid,
                    stat.Percentage,
                    stat.HudColor
                );
            }
        }
    }
    UpdateStatsToWheel(stats) {
        const statsToApply = stats ?? this.DetailStats;
        if (this.StatWheelEnabled) {
            if (this.DetailStats.length != statsToApply.length) {
                throw new Error("You cannot add items using this function");
            }
            this.DetailStats = statsToApply;
            if (this.ParentMenu != null && this.ParentMenu.Visible) {
                let wid = this.ParentMenu.Windows.indexOf(this);
                statsToApply.forEach((value) => {
                    ScaleformUI.Scaleforms._ui?.callFunction(
                        "UPDATE_STATS_DETAILS_WINDOW_STATWHEEL",
                        wid,
                        this.DetailStats.indexOf(value),
                        value.Percentage,
                        value.HudColor
                    );
                });
            }
        }
    }
    RemoveStatToWheel(statOrIdx) {
        const idx =
            typeof statOrIdx === "number"
                ? statOrIdx
                : this.DetailStats.findIndex(
                      (s) => s.Percentage === statOrIdx.Percentage && s.HudColor === statOrIdx.HudColor
                  );
        if (idx < 0 || idx >= this.DetailStats.length) return;
        this.DetailStats.splice(idx, 1);
        if (this.ParentMenu != null && this.ParentMenu.Visible) {
            let wid = this.ParentMenu.Windows.indexOf(this);
            ScaleformUI.Scaleforms._ui?.callFunction("REMOVE_STATS_DETAILS_WINDOW_STATWHEEL", wid, idx);
        }
    }
}

// src/scaleforms/instructional-buttons/instructionalbutton.ts
class InstructionalButton {
    Text;
    ItemBind;
    GamepadButton;
    KeyboardButton;
    InputGroupButton = -1 /* UNUSED */;
    GamepadButtons = [];
    KeyboardButtons = [];
    PadCheck = 0 /* Any */;
    get IsUsingController() {
        return !IsUsingKeyboard(2);
    }
    _InstructionalButtonSelected = new InstructionalButtonSelectedEventBuilder();
    constructor(text, padcheck, gamepadControls, keyboardControls, inputGroup) {
        this.Text = text;
        (this.GamepadButtons = []),
            (this.GamepadButton = -1),
            (this.KeyboardButtons = []),
            (this.KeyboardButton = -1),
            (this.PadCheck = padcheck);
        if (Array.isArray(gamepadControls)) {
            if (padcheck == 0 || padcheck == -1) {
                this.GamepadButtons = gamepadControls;
            }
        } else {
            if (padcheck == 0 || padcheck == -1) this.GamepadButton = gamepadControls;
            else this.GamepadButton = -1;
        }
        if (Array.isArray(keyboardControls)) {
            if (padcheck == 0 || padcheck == -1) {
                this.KeyboardButtons = keyboardControls;
            }
        } else {
            if (padcheck == 0 || padcheck == -1) this.KeyboardButton = keyboardControls;
            else this.KeyboardButton = -1;
        }
        this.InputGroupButton = inputGroup;
    }
    OnControlSelected(delegate) {
        this._InstructionalButtonSelected.add(delegate);
    }
    BindToItem(item) {
        this.ItemBind = item;
    }
    GetButtonId() {
        if (this.KeyboardButtons.length != 0 || this.GamepadButtons.length != 0) {
            let retVal = "";
            if (this.IsUsingController) {
                for (let i = this.GamepadButtons.length - 1; i > -1; i--) {
                    if (i == 0) retVal += GetControlInstructionalButton(2, this.GamepadButtons[i], true);
                    else retVal += GetControlInstructionalButton(2, this.GamepadButtons[i], true) + "%";
                }
            } else {
                for (let i = this.KeyboardButtons.length - 1; i > -1; i--) {
                    if (i == 0) retVal += GetControlInstructionalButton(2, this.KeyboardButtons[i], true);
                    else retVal += GetControlInstructionalButton(2, this.KeyboardButtons[i], true) + "%";
                }
            }
            return retVal;
        } else if (this.InputGroupButton != -1 /* UNUSED */) return `~${this.InputGroupButton}~`;
        return this.IsUsingController
            ? GetControlInstructionalButton(2, this.GamepadButton, true)
            : GetControlInstructionalButton(0, this.KeyboardButton, true);
    }
    InvokeEvent(control) {
        if (UpdateOnscreenKeyboard() == 0) return;
        this._InstructionalButtonSelected.toDelegate()(control);
    }
}

// src/menus/UIMenu/uimenu.ts
class UIMenu extends BaseMenu {
    _visible = false;
    _justOpened = true;
    _itemsDirty = false;
    Pagination;
    _customTexture;
    canPlayerCloseMenu = true;
    mouseWheelControlEnabled = true;
    menuSound = 0;
    _changed = true;
    keyboard = false;
    _menuGlare;
    isBuilding = false;
    title = "";
    subtitle = "";
    counterColor = SColor.HUD_Freemode;
    static _selectTextLocalized = GetLabelText("HUD_INPUT2");
    static _backTextLocalized = GetLabelText("HUD_INPUT3");
    resolution = ScreenTools.ResolutionMaintainRatio();
    time = 0;
    times = 0;
    delay = 100;
    delayBeforeOverflow = 350;
    timeBeforeOverflow = 0;
    enabled3DAnimations = false;
    leftClickEnabled = false;
    ResetCursorOnOpen = true;
    mouseControlsEnabled = true;
    AlternativeTitle = false;
    canBuild = true;
    isFading = false;
    fadingTime = 0.1;
    itemless = false;
    Windows = [];
    Offset;
    enableAnimation = false;
    animationType = 15 /* BACK_INOUT */;
    buildingAnimation = 3 /* LEFT_RIGHT */;
    descriptionFont = ScaleformFonts.CHALET_LONDON_NINETEENSIXTY;
    MouseWheelControlsEnabled = true;
    Glare;
    AUDIO_LIBRARY = "HUD_FRONTEND_DEFAULT_SOUNDSET";
    AUDIO_UPDOWN = "NAV_UP_DOWN";
    AUDIO_LEFTRIGHT = "NAV_LEFT_RIGHT";
    AUDIO_SELECT = "SELECT";
    AUDIO_BACK = "BACK";
    AUDIO_ERROR = "ERROR";
    Items = [];
    get MenuItems() {
        return this.Items;
    }
    _unfilteredItems = [];
    MouseEdgeEnabled = true;
    ControlDisablingEnabled = true;
    _keyDictionary = new Map();
    set MaxItemsOnScreen(value) {
        this.Pagination.ItemsPerPage = value;
    }
    get MaxItemsOnScreen() {
        return this.Pagination.ItemsPerPage;
    }
    set EnableAnimation(value) {
        this.enableAnimation = value;
        if (this.Visible) {
            ScaleformUI.Scaleforms._ui?.callFunction("ENABLE_SCROLLING_ANIMATION", this.enableAnimation);
        }
    }
    get EnableAnimation() {
        return this.enableAnimation;
    }
    set Enabled3DAnimations(value) {
        this.enabled3DAnimations = value;
        if (this.Visible) {
            ScaleformUI.Scaleforms._ui?.callFunction("ENABLE_3D_ANIMATIONS", this.enabled3DAnimations);
        }
    }
    get Enabled3DAnimations() {
        return this.enabled3DAnimations;
    }
    set AnimationType(value) {
        this.animationType = value;
        if (this.Visible) {
            ScaleformUI.Scaleforms._ui?.callFunction("CHANGE_SCROLLING_ANIMATION_TYPE", this.animationType);
        }
    }
    get AnimationType() {
        return this.animationType;
    }
    set BuildingAnimation(value) {
        this.buildingAnimation = value;
        if (this.Visible) {
            ScaleformUI.Scaleforms._ui?.callFunction("CHANGE_BUILDING_ANIMATION_TYPE", this.buildingAnimation);
        }
    }
    get BuildingAnimation() {
        return this.buildingAnimation;
    }
    set ScrollingType(value) {
        this.Pagination.scrollType = value;
    }
    get ScrollingType() {
        return this.Pagination.scrollType;
    }
    set MouseWheelControlEnabled(value) {
        this.mouseWheelControlEnabled = value;
    }
    get MouseWheelControlEnabled() {
        return this.mouseWheelControlEnabled;
    }
    set DescriptionFont(font) {
        this.descriptionFont = font;
        if (this.Visible) {
            ScaleformUI.Scaleforms._ui?.callFunction(
                "SET_DESC_FONT",
                this.descriptionFont.fontName,
                this.descriptionFont.fontId
            );
        }
    }
    get DescriptionFont() {
        return this.descriptionFont;
    }
    set MouseControlsEnabled(value) {
        this.mouseControlsEnabled = value;
        if (this.Visible) {
            ScaleformUI.Scaleforms._ui?.callFunction("ENABLE_MOUSE", value);
        }
    }
    get MouseControlsEnabled() {
        return this.mouseControlsEnabled;
    }
    _IndexChanged = new IndexChangedEventBuilder();
    _ListChanged = new ListChangedEventBuilder();
    _ListSelected = new ListSelectedEventBuilder();
    _CheckboxChanged = new CheckboxChangeEventBuilder();
    _ItemSelected = new ItemSelectEventBuilder();
    _OnProgressChanged = new OnProgressChangedBuilder();
    _OnProgressSelected = new OnProgressSelectedBuilder();
    _ColorPanelChanged = new ColorPanelChangedEventBuilder();
    _PercentagePanelChanged = new PercentagePanelChangedEventBuilder();
    _GridPanelChanged = new GridPanelChangedEventBuilder();
    _MenuOpened = new MenuOpenedEventBuilder();
    _MenuClosed = new MenuClosedEventBuilder();
    _StatItemProgressChange = new StatItemProgressChangeBuilder();
    _SliderChange = new SliderChangedEventBuilder();
    onIndexChange(delegate) {
        this._IndexChanged.add(delegate);
    }
    onListChange(delegate) {
        this._ListChanged.add(delegate);
    }
    onListSelect(delegate) {
        this._ListSelected.add(delegate);
    }
    onCheckboxChange(delegate) {
        this._CheckboxChanged.add(delegate);
    }
    onItemSelect(delegate) {
        this._ItemSelected.add(delegate);
    }
    onProgressChange(delegate) {
        this._OnProgressChanged.add(delegate);
    }
    onProgressSelect(delegate) {
        this._OnProgressSelected.add(delegate);
    }
    onColorPanelChange(delegate) {
        this._ColorPanelChanged.add(delegate);
    }
    onPercentagePanelChange(delegate) {
        this._PercentagePanelChanged.add(delegate);
    }
    onGridPanelChange(delegate) {
        this._GridPanelChanged.add(delegate);
    }
    onMenuOpen(delegate) {
        this._MenuOpened.add(delegate);
    }
    onMenuClose(delegate) {
        this._MenuClosed.add(delegate);
    }
    onStatsItemChanged(delegate) {
        this._StatItemProgressChange.add(delegate);
    }
    constructor(
        title,
        subtitle,
        offset,
        spriteLibrary,
        spriteName,
        glare = false,
        alternativeTitle = false,
        fadingTime = 0.1,
        longdesc
    ) {
        super();
        this._customTexture = [spriteLibrary, spriteName];
        this.Offset = offset;
        this.Glare = glare;
        this._menuGlare = Scaleform.requestWideScreen("mp_menu_glare");
        this.Title = title;
        this.Subtitle = subtitle;
        this.AlternativeTitle = alternativeTitle;
        this.MouseWheelControlsEnabled = true;
        this.Pagination = new PaginationHandler();
        this.Pagination.ItemsPerPage = 7;
        this.fadingTime = fadingTime;
        this.instructionalButtons = [
            new InstructionalButton(UIMenu._selectTextLocalized, -1, 176, 176, -1),
            new InstructionalButton(UIMenu._backTextLocalized, -1, 177, 177, -1)
        ];
        if (!isNullOrWhiteSpace(longdesc)) {
            AddTextEntry("ScaleformUILongDesc", longdesc);
            this.itemless = true;
        }
    }
    SetKeyControl(control, controlIndex) {
        if (this._keyDictionary.has(control)) {
            this._keyDictionary.get(control).push(controlIndex);
        } else {
            this._keyDictionary.set(control, [controlIndex]);
        }
    }
    SetKey(control) {
        this.SetKeyControl(control, 0);
        this.SetKeyControl(control, 1);
        this.SetKeyControl(control, 2);
    }
    ResetKey(control) {
        if (this._keyDictionary.has(control)) {
            this._keyDictionary.get(control).length = 0;
        }
    }
    HasControlJustBeenPressed(control) {
        let tmpControls = [...this._keyDictionary.get(control)];
        return tmpControls.some((index) => IsControlJustPressed(index, control));
    }
    HasControlJustBeenReleased(control) {
        let tmpControls = [...this._keyDictionary.get(control)];
        return tmpControls.some((index) => IsControlJustReleased(index, control));
    }
    _controlCounter = 0;
    IsControlBeingPressed(control) {
        let tmpControls = [...this._keyDictionary.get(control)];
        if (this.HasControlJustBeenReleased(control)) this._controlCounter = 0;
        return tmpControls.some((index) => IsControlPressed(index, control));
    }
    async fadeInMenu() {
        ScaleformUI.Scaleforms._ui?.callFunction("FADE_IN_MENU");
        do {
            await Delay(0);
            this.isFading = await ScaleformUI.Scaleforms._ui?.callFunctionReturnBool("GET_IS_FADING");
        } while (this.isFading);
    }
    async fadeOutMenu() {
        ScaleformUI.Scaleforms._ui?.callFunction("FADE_OUT_MENU");
        do {
            await Delay(0);
            this.isFading = await ScaleformUI.Scaleforms._ui?.callFunctionReturnBool("GET_IS_FADING");
        } while (this.isFading);
    }
    async fadeOutItems() {
        ScaleformUI.Scaleforms._ui?.callFunction("FADE_OUT_ITEMS");
        do {
            await Delay(0);
            this.isFading = await ScaleformUI.Scaleforms._ui?.callFunctionReturnBool("GET_IS_FADING");
        } while (this.isFading);
    }
    async fadeInItems() {
        ScaleformUI.Scaleforms._ui?.callFunction("FADE_IN_ITEMS");
        do {
            await Delay(0);
            this.isFading = await ScaleformUI.Scaleforms._ui?.callFunctionReturnBool("GET_IS_FADING");
        } while (this.isFading);
    }
    AddInstructionalButton(button) {
        this.instructionalButtons.push(button);
        if (
            this.Visible &&
            !(ScaleformUI.Scaleforms.Warning.IsShowing || ScaleformUI.Scaleforms.Warning.IsShowingWithButtons)
        )
            ScaleformUI.Scaleforms.InstructionalButtons.SetInstructionalButtons(this.instructionalButtons);
    }
    RemoveInstructionalButton(button) {
        this.RemoveInstructionalButtonAt(this.instructionalButtons.indexOf(button));
    }
    RemoveInstructionalButtonAt(index) {
        if (this.instructionalButtons.length >= index) {
            this.instructionalButtons.splice(index, 1);
            if (
                this.Visible &&
                !(ScaleformUI.Scaleforms.Warning.IsShowing || ScaleformUI.Scaleforms.Warning.IsShowingWithButtons)
            )
                ScaleformUI.Scaleforms.InstructionalButtons.SetInstructionalButtons(this.instructionalButtons);
        }
    }
    AddItem(item) {
        if (!this.itemless) {
            let selectedItem = this.CurrentSelection;
            item.Parent = this;
            this.Items.push(item);
            if (this.Visible) {
                this.CurrentSelection = selectedItem;
            }
            this.Pagination.TotalItems = this.Items.length;
        } else {
            throw new Error("ScaleformUI - You cannot add items to an itemless menu, only a long description");
        }
    }
    AddWindow(window) {
        if (!this.itemless) {
            window.ParentMenu = this;
            this.Windows.push(window);
        } else {
            throw new Error("ScaleformUI - You cannot add windows to an itemless menu, only a long description");
        }
    }
    RemoveWindow(window) {
        this.RemoveWindowAt(this.Windows.indexOf(window));
    }
    RemoveWindowAt(index) {
        if (this.Windows.length >= index) {
            this.Windows.splice(index, 1);
        }
    }
    UpdateDescription() {
        BeginScaleformMovieMethod(ScaleformUI.Scaleforms._ui?.handle, "UPDATE_ITEM_DESCRIPTION");
        ScaleformMovieMethodAddParamInt(this.Pagination.GetScaleformIndex(this.CurrentSelection));
        BeginTextCommandScaleformString(`menu_${BreadcrumbsHandler.CurrentDepth}_desc_${this.CurrentSelection}`);
        EndTextCommandScaleformString_2();
        EndScaleformMovieMethod();
    }
    RemoveItemAt(index) {
        let selectedItem = this.CurrentSelection;
        this.Items.splice(index, 1);
        if (this.Visible) {
            ScaleformUI.Scaleforms._ui?.callFunction("REMOVE_ITEM", index);
        }
        this.Pagination.TotalItems = this.Items.length;
        this.CurrentSelection = selectedItem;
    }
    RemoveItem(item) {
        this.RemoveItemAt(this.Items.indexOf(item));
    }
    Clear() {
        ScaleformUI.Scaleforms._ui?.callFunction("CLEAR_ITEMS");
        this.Items.length = 0;
        this.Pagination.Reset();
    }
    async GoBack(playSound = true) {
        if (this.CanPlayerCloseMenu) {
            if (playSound) {
                PlaySoundFrontend(-1, this.AUDIO_BACK, this.AUDIO_LIBRARY, true);
            }
            await this.fadeOutMenu();
            if (BreadcrumbsHandler.CurrentDepth == 0) {
                this.Visible = false;
                BreadcrumbsHandler.Clear();
                ScaleformUI.Scaleforms.InstructionalButtons.ClearButtonList();
            } else {
                BreadcrumbsHandler.SwitchInProgress = true;
                let prevMenu = null;
                if (BreadcrumbsHandler.CurrentDepth > 0) {
                    prevMenu = BreadcrumbsHandler.PreviousMenu;
                    if (prevMenu instanceof UIMenu) {
                        let uimenu = prevMenu;
                        if (uimenu.Items.length == 0) {
                            MenuHandler.CloseAndClearHistory();
                            throw new Error(
                                `UIMenu ${this.Title} previous menu is empty... Closing and clearing history.`
                            );
                        }
                    }
                    BreadcrumbsHandler.Backwards();
                }
                this.Visible = false;
                if (prevMenu != null) prevMenu.Visible = true;
                BreadcrumbsHandler.SwitchInProgress = false;
            }
        }
    }
    async GoUp() {
        if (this.isBuilding) return;
        this.Items[this.CurrentSelection].Selected = false;
        do {
            await Delay(0);
            let overflow = this.CurrentSelection == 0 && this.Pagination.TotalPages > 1;
            if (this.Pagination.GoUp()) {
                if (this.ScrollingType == 3 /* ENDLESS */ || (this.ScrollingType == 1 /* CLASSIC */ && !overflow)) {
                    this._itemCreation(
                        this.Pagination.GetPage(this.CurrentSelection),
                        this.Pagination.CurrentPageIndex,
                        true
                    );
                    ScaleformUI.Scaleforms._ui?.callFunction("SET_INPUT_EVENT", 8, this.delay);
                } else if (
                    this.ScrollingType == 2 /* PAGINATED */ ||
                    (this.ScrollingType == 1 /* CLASSIC */ && overflow)
                ) {
                    this.isBuilding = true;
                    await this.fadeOutItems();
                    this.isFading = true;
                    ScaleformUI.Scaleforms._ui?.callFunction("CLEAR_ITEMS");
                    let max = this.Pagination.ItemsPerPage;
                    for (let i = 0; i < max; i++) {
                        if (!this.Visible) return;
                        this._itemCreation(this.Pagination.CurrentPage, i, false, true);
                    }
                    this.isBuilding = false;
                }
            }
        } while (
            this.Items[this.CurrentSelection] instanceof UIMenuSeparatorItem &&
            this.Items[this.CurrentSelection].Jumpable
        );
        ScaleformUI.Scaleforms._ui?.callFunction("SET_CURRENT_ITEM", this.Pagination.ScaleformIndex);
        ScaleformUI.Scaleforms._ui?.callFunction("SET_COUNTER_QTTY", this.CurrentSelection + 1, this.Items.length);
        this.Items[this.CurrentSelection].Selected = true;
        if (this.isFading) await this.fadeInItems();
        this.IndexChange(this.CurrentSelection);
    }
    async GoDown() {
        if (this.isBuilding) return;
        this.Items[this.CurrentSelection].Selected = false;
        do {
            await Delay(0);
            let overflow = this.CurrentSelection == 0 && this.Pagination.TotalPages > 1;
            if (this.Pagination.GoDown()) {
                if (this.ScrollingType == 3 /* ENDLESS */ || (this.ScrollingType == 1 /* CLASSIC */ && !overflow)) {
                    this._itemCreation(
                        this.Pagination.GetPage(this.CurrentSelection),
                        this.Pagination.CurrentPageIndex,
                        true
                    );
                    ScaleformUI.Scaleforms._ui?.callFunction("SET_INPUT_EVENT", 9, this.delay);
                } else if (
                    this.ScrollingType == 2 /* PAGINATED */ ||
                    (this.ScrollingType == 1 /* CLASSIC */ && overflow)
                ) {
                    this.isBuilding = true;
                    await this.fadeOutItems();
                    this.isFading = true;
                    ScaleformUI.Scaleforms._ui?.callFunction("CLEAR_ITEMS");
                    let max = this.Pagination.ItemsPerPage;
                    for (let i = 0; i < max; i++) {
                        if (!this.Visible) return;
                        this._itemCreation(this.Pagination.CurrentPage, i, false, true);
                    }
                    this.isBuilding = false;
                }
            }
        } while (
            this.Items[this.CurrentSelection] instanceof UIMenuSeparatorItem &&
            this.Items[this.CurrentSelection].Jumpable
        );
        ScaleformUI.Scaleforms._ui?.callFunction("SET_CURRENT_ITEM", this.Pagination.ScaleformIndex);
        ScaleformUI.Scaleforms._ui?.callFunction("SET_COUNTER_QTTY", this.CurrentSelection + 1, this.Items.length);
        this.Items[this.CurrentSelection].Selected = true;
        if (this.isFading) await this.fadeInItems();
        this.IndexChange(this.CurrentSelection);
    }
    async GoLeft() {
        if (!this.CurrentItem.Enabled) {
            PlaySoundFrontend(-1, this.AUDIO_ERROR, this.AUDIO_LIBRARY, true);
            return;
        }
        let res = await ScaleformUI.Scaleforms._ui?.callFunctionReturnInt("SET_INPUT_EVENT", 10);
        switch (true) {
            case this.CurrentItem instanceof UIMenuListItem: {
                let it = this.CurrentItem;
                it.Index = res;
                this.ListChange(it, it.Index);
                it.listChangedEmit();
                break;
            }
            case this.CurrentItem instanceof UIMenuDynamicListItem: {
                let it = this.CurrentItem;
                let newItem = await it.callback.toDelegate()(it, 0 /* Left */);
                it.CurrentListItem = newItem;
                break;
            }
            case this.CurrentItem instanceof UIMenuSliderItem: {
                let it = this.CurrentItem;
                it.Value = res;
                this.SliderChange(it, it.Value);
                break;
            }
            case this.CurrentItem instanceof UIMenuProgressItem: {
                let it = this.CurrentItem;
                it.Value = res;
                this.ProgressChange(it, it.Value);
                break;
            }
            case this.CurrentItem instanceof UIMenuStatsItem: {
                let it = this.CurrentItem;
                it.Value = res;
                this.StatItemChange(it, it.Value);
                break;
            }
        }
    }
    async GoRight() {
        if (!this.CurrentItem.Enabled) {
            PlaySoundFrontend(-1, this.AUDIO_ERROR, this.AUDIO_LIBRARY, true);
            return;
        }
        let res = await ScaleformUI.Scaleforms._ui?.callFunctionReturnInt("SET_INPUT_EVENT", 11);
        switch (true) {
            case this.CurrentItem instanceof UIMenuListItem: {
                let it = this.CurrentItem;
                it.Index = res;
                this.ListChange(it, it.Index);
                it.listChangedEmit();
                break;
            }
            case this.CurrentItem instanceof UIMenuDynamicListItem: {
                let it = this.CurrentItem;
                let newItem = await it.callback.toDelegate()(it, 0 /* Left */);
                it.CurrentListItem = newItem;
                break;
            }
            case this.CurrentItem instanceof UIMenuSliderItem: {
                let it = this.CurrentItem;
                it.Value = res;
                this.SliderChange(it, it.Value);
                break;
            }
            case this.CurrentItem instanceof UIMenuProgressItem: {
                let it = this.CurrentItem;
                it.Value = res;
                this.ProgressChange(it, it.Value);
                break;
            }
            case this.CurrentItem instanceof UIMenuStatsItem: {
                let it = this.CurrentItem;
                it.Value = res;
                this.StatItemChange(it, it.Value);
                break;
            }
        }
    }
    Select(playSound) {
        if (!this.CurrentItem.Enabled) {
            PlaySoundFrontend(-1, this.AUDIO_ERROR, this.AUDIO_LIBRARY, true);
            return;
        }
        if (playSound) PlaySoundFrontend(-1, this.AUDIO_SELECT, this.AUDIO_LIBRARY, true);
        switch (true) {
            case this.CurrentItem instanceof UIMenuCheckboxItem: {
                let it = this.CurrentItem;
                it.Checked = !it.Checked;
                this.CheckboxChange(it, it.Checked);
                it.checkEmit();
                break;
            }
            case this.CurrentItem instanceof UIMenuListItem: {
                let it = this.CurrentItem;
                this.ListSelect(it, it.Index);
                it.listSelectedEmit();
                break;
            }
            default:
                this.ItemSelect(this.CurrentItem, this.CurrentSelection);
                this.CurrentItem.activatedEmit();
                break;
        }
    }
    cursorPressed = false;
    async processMouse() {
        if (
            !this.Visible ||
            this._justOpened ||
            this.Items.length == 0 ||
            !IsUsingKeyboard(2) ||
            !this.MouseControlsEnabled
        ) {
            EnableControlAction(0, 2, true);
            EnableControlAction(0, 1, true);
            EnableControlAction(1, 2, true);
            EnableControlAction(1, 1, true);
            EnableControlAction(2, 2, true);
            EnableControlAction(2, 1, true);
            if (this._itemsDirty) {
                this.Items.forEach((x) => {
                    x.Hovered = false;
                });
            }
            return;
        }
        SetMouseCursorActiveThisFrame();
        SetInputExclusive(2, 239);
        SetInputExclusive(2, 240);
        SetInputExclusive(2, 237);
        SetInputExclusive(2, 238);
        let [success, eventType, itemId, context, unused] = GetScaleformMovieCursorSelection(
            ScaleformUI.Scaleforms._ui?.handle
        );
        if (success && !this.isBuilding) {
            switch (eventType) {
                case 5:
                    switch (context) {
                        case 0:
                            let item = this.Items[itemId];
                            if ((item instanceof UIMenuSeparatorItem && item.Jumpable) || !this.Items[itemId].Enabled) {
                                PlaySoundFrontend(-1, "ERROR", "HUD_FRONTEND_DEFAULT_SOUNDSET", true);
                                return;
                            }
                            if (item.Selected) {
                                switch (item._itemId) {
                                    case 0:
                                    case 2:
                                        this.Select(false);
                                        break;
                                    case 1:
                                    case 3:
                                    case 4:
                                        let value = await ScaleformUI.Scaleforms._ui?.callFunctionReturnInt(
                                            "SELECT_ITEM",
                                            this.Pagination.GetScaleformIndex(this.CurrentSelection)
                                        );
                                        switch (true) {
                                            case this.Items[this.CurrentSelection] instanceof UIMenuListItem: {
                                                let it = this.Items[this.CurrentSelection];
                                                if (it.Index != value) {
                                                    it.Index = value;
                                                    this.ListChange(it, it.Index);
                                                    it.listChangedEmit();
                                                } else {
                                                    it.listSelectedEmit();
                                                    it.activatedEmit();
                                                    this.ListSelect(it, value);
                                                }
                                                break;
                                            }
                                            case this.Items[this.CurrentSelection] instanceof UIMenuSliderItem: {
                                                let it = this.Items[this.CurrentSelection];
                                                if (it.Value != value) {
                                                    it.Value = value;
                                                    it.sliderChanged(it.Value);
                                                    this.SliderChange(it, it.Value);
                                                } else {
                                                    it.activatedEmit();
                                                    this.ItemSelect(it, this.CurrentSelection);
                                                }
                                                break;
                                            }
                                            case this.Items[this.CurrentSelection] instanceof UIMenuProgressItem: {
                                                let it = this.Items[this.CurrentSelection];
                                                if (it.Value != value) {
                                                    it.Value = value;
                                                    it.progressChanged(it.Value);
                                                    this.ProgressChange(it, it.Value);
                                                } else {
                                                    it.activatedEmit();
                                                    this.ItemSelect(it, this.CurrentSelection);
                                                }
                                                break;
                                            }
                                        }
                                        break;
                                }
                            }
                            return;
                    }
                    this.CurrentSelection = itemId;
                    ScaleformUI.Scaleforms._ui?.callFunction(
                        "SET_COUNTER_QTTY",
                        this.CurrentSelection + 1,
                        this.Items.length
                    );
                    PlaySoundFrontend(-1, this.AUDIO_SELECT, this.AUDIO_LIBRARY, true);
                    break;
                case 10:
                    {
                        let res = await ScaleformUI.Scaleforms._ui?.callFunctionReturnString(
                            "SELECT_PANEL",
                            this.Pagination.GetScaleformIndex(this.CurrentSelection)
                        );
                        let split = res?.split(",");
                        let panel = this.Items[this.CurrentSelection].Panels[Number(split[0])];
                        panel._value = Number(split[1]);
                        this.ColorPanelChange(panel.ParentItem, panel, panel.CurrentSelection);
                        panel.PanelChanged();
                    }
                    break;
                case 11:
                    this.cursorPressed = true;
                    break;
                case 12:
                    this.cursorPressed = true;
                    break;
                case 2:
                    {
                        let panel = this.Items[this.CurrentSelection].SidePanel;
                        if (itemId != -1) {
                            panel._value = itemId;
                            panel.PickerSelect();
                            PlaySoundFrontend(-1, this.AUDIO_SELECT, this.AUDIO_LIBRARY, true);
                        }
                    }
                    break;
                case 6:
                    this.cursorPressed = false;
                    break;
                case 7:
                    this.cursorPressed = false;
                    SetMouseCursorSprite(1);
                    break;
                case 8:
                    this.cursorPressed = false;
                    if (context == 0) {
                        this.Items[itemId].Hovered = false;
                    }
                    SetMouseCursorSprite(1);
                    break;
                case 9:
                    if (context == 0) {
                        this.Items[itemId].Hovered = true;
                    }
                    SetMouseCursorSprite(5);
                    break;
                case 0:
                    this.cursorPressed = false;
                    break;
                case 1:
                    this.cursorPressed = true;
                    break;
            }
        }
        if (this.cursorPressed) {
            if (HasSoundFinished(this.menuSound)) {
                this.menuSound = GetSoundId();
                PlaySoundFrontend(this.menuSound, "CONTINUOUS_SLIDER", "HUD_FRONTEND_DEFAULT_SOUNDSET", true);
            }
            let res = await ScaleformUI.Scaleforms._ui?.callFunctionReturnString("SET_INPUT_MOUSE_EVENT_CONTINUE");
            let split = res.split(",");
            let selection = Number(split[0]);
            let panel = this.Items[this.CurrentSelection].Panels[selection];
            switch (true) {
                case panel instanceof UIMenuGridPanel:
                    let grid = panel;
                    grid._value = new Vector2(Number(split[1]), Number(split[2]));
                    this.GridPanelChange(panel.ParentItem, grid, grid.CirclePosition);
                    break;
                case panel instanceof UIMenuPercentagePanel:
                    let perc = panel;
                    perc._value = Number(split[1]);
                    this.PercentagePanelChange(panel.ParentItem, perc, perc.Percentage);
                    perc.PercentagePanelChange();
                    break;
            }
        } else {
            if (!HasSoundFinished(this.menuSound)) {
                await Delay(1);
                StopSound(this.menuSound);
                ReleaseSoundId(this.menuSound);
            }
        }
        if (this.MouseEdgeEnabled) {
            let mouseVariance = GetDisabledControlNormal(2, 239);
            if (ScreenTools.IsMouseInBounds(0, 0, 30, 1080)) {
                if (mouseVariance < 0.05 * 0.75) {
                    let mouseSpeed = 0.05 - (1 - mouseVariance);
                    if (mouseSpeed > 0.05) {
                        mouseSpeed = 0.05;
                    }
                    SetGameplayCamRelativeHeading(GetGameplayCamRelativeHeading() + 70 * mouseSpeed);
                    SetMouseCursorSprite(6);
                }
            } else if (ScreenTools.IsMouseInBounds(1920 - 30, 0, 30, 1080)) {
                if (mouseVariance > 1 - 0.05 * 0.75) {
                    let mouseSpeed = 0.05 - (1 - mouseVariance);
                    if (mouseSpeed > 0.05) {
                        mouseSpeed = 0.05;
                    }
                    SetGameplayCamRelativeHeading(GetGameplayCamRelativeHeading() + 70 * mouseSpeed);
                    SetMouseCursorSprite(7);
                }
            } else {
                SetMouseCursorSprite(1);
            }
        } else {
            SetMouseCursorSprite(1);
        }
    }
    processControl() {
        if (!this._visible) return;
        if (this._justOpened) {
            this._justOpened = false;
            return;
        }
        if (
            UpdateOnscreenKeyboard() == 0 ||
            IsWarningMessageActive() ||
            ScaleformUI.Scaleforms.Warning.isShowing ||
            BreadcrumbsHandler.SwitchInProgress ||
            this.isFading
        ) {
            return;
        }
        if (this.HasControlJustBeenReleased(5 /* Back */)) {
            this.GoBack();
        }
        if (this.isBuilding || this.Items.length == 0) {
            return;
        }
        if (this.HasControlJustBeenPressed(0 /* Up */)) {
            this.GoUp();
            this.timeBeforeOverflow = GetGameTimer();
        } else if (
            this.IsControlBeingPressed(0 /* Up */) &&
            GetGameTimer() - this.timeBeforeOverflow > this.delayBeforeOverflow
        ) {
            if (GetGameTimer() - this.time > this.delay) {
                this.buttonDelay();
                this.GoUp();
            }
        }
        if (this.HasControlJustBeenPressed(1 /* Down */)) {
            this.GoDown();
            this.timeBeforeOverflow = GetGameTimer();
        } else if (
            this.IsControlBeingPressed(1 /* Down */) &&
            GetGameTimer() - this.timeBeforeOverflow > this.delayBeforeOverflow
        ) {
            if (GetGameTimer() - this.time > this.delay) {
                this.buttonDelay();
                this.GoDown();
            }
        }
        if (this.HasControlJustBeenPressed(2 /* Left */)) {
            this.GoLeft();
            this.timeBeforeOverflow = GetGameTimer();
        } else if (
            this.IsControlBeingPressed(2 /* Left */) &&
            GetGameTimer() - this.timeBeforeOverflow > this.delayBeforeOverflow
        ) {
            if (GetGameTimer() - this.time > this.delay) {
                this.buttonDelay();
                this.GoLeft();
            }
        }
        if (this.HasControlJustBeenPressed(3 /* Right */)) {
            this.GoRight();
            this.timeBeforeOverflow = GetGameTimer();
        } else if (
            this.IsControlBeingPressed(3 /* Right */) &&
            GetGameTimer() - this.timeBeforeOverflow > this.delayBeforeOverflow
        ) {
            if (GetGameTimer() - this.time > this.delay) {
                this.buttonDelay();
                this.GoRight();
            }
        }
        if (this.HasControlJustBeenPressed(4 /* Select */)) {
            this.Select(true);
        }
        if (
            this.HasControlJustBeenReleased(0 /* Up */) ||
            this.HasControlJustBeenReleased(1 /* Down */) ||
            this.HasControlJustBeenReleased(2 /* Left */) ||
            this.HasControlJustBeenReleased(3 /* Right */)
        ) {
            this.times = 0;
            this.delay = 100;
        }
    }
    buttonDelay() {
        this.times++;
        if (this.times % 5 == 0) {
            this.delay -= 10;
            if (this.delay < 50) this.delay = 50;
        }
        this.time = GetGameTimer();
    }
    async draw() {
        if (!this.Visible || ScaleformUI.Scaleforms.Warning.IsShowing) return;
        while (!ScaleformUI.Scaleforms._ui?.isLoaded) await Delay(0);
        HideHudComponentThisFrame(19);
        Controls.toggleAll(!this.ControlDisablingEnabled);
        ScaleformUI.Scaleforms._ui?.render2d();
        if (this.Glare) {
            this._menuGlare.callFunction("SET_DATA_SLOT", GetGameplayCamRelativeHeading());
            let x = this.Offset.x / 1280 + 0.4499;
            let y = this.Offset.y / 720 + 0.449;
            DrawScaleformMovie(this._menuGlare.handle, x, y, 1, 1, 255, 255, 255, 255, 0);
        }
        if (!IsUsingKeyboard(2)) {
            if (this.keyboard) {
                this.keyboard = false;
                this._changed = true;
            }
        } else {
            if (!this.keyboard) {
                this.keyboard = true;
                this._changed = true;
            }
        }
        if (this._changed) {
            this.UpdateDescription();
            this._changed = false;
        }
    }
    set Visible(value) {
        this._visible = value;
        this._justOpened = value;
        this._itemsDirty = value;
        if (value) {
            if (!this.itemless && this.Items.length == 0) {
                MenuHandler.CloseAndClearHistory();
                throw new Error(`UIMenu ${this.Title} menu is empty... Closing and clearing history.`);
            }
            ScaleformUI.Scaleforms.InstructionalButtons.SetInstructionalButtons(this.instructionalButtons);
            this.canBuild = true;
            MenuHandler._currentMenu = this;
            MenuHandler.ableToDraw = true;
            this.buildUpMenuAsync();
            this.MenuOpenEv(this, null);
            this.timeBeforeOverflow = GetGameTimer();
            if (BreadcrumbsHandler.Count == 0) BreadcrumbsHandler.Forward(this, null);
        } else {
            ScaleformUI.Scaleforms.InstructionalButtons.ClearButtonList();
            this.canBuild = false;
            this.MenuCloseEv(this);
            MenuHandler.ableToDraw = false;
            MenuHandler._currentMenu = null;
            this._unfilteredItems.length = 0;
            ScaleformUI.Scaleforms._ui?.callFunction("CLEAR_ALL");
        }
        if (!value) return;
        if (!this.ResetCursorOnOpen) return;
        SetCursorLocation(0.5, 0.5);
        SetCursorSprite(1);
    }
    async buildUpMenuAsync(itemsOnly = false) {
        this.isBuilding = true;
        let _animEnabled = this.EnableAnimation;
        if (this.itemless) {
            this.EnableAnimation = false;
            while (!ScaleformUI.Scaleforms._ui?.isLoaded) {
                await Delay(0);
            }
            BeginScaleformMovieMethod(ScaleformUI.Scaleforms._ui?.handle, "CREATE_MENU");
            PushScaleformMovieMethodParameterString(this.Title);
            PushScaleformMovieMethodParameterString(this.Subtitle);
            PushScaleformMovieMethodParameterFloat(this.Offset.x);
            PushScaleformMovieMethodParameterFloat(this.Offset.y);
            PushScaleformMovieMethodParameterBool(this.AlternativeTitle);
            PushScaleformMovieMethodParameterString(this._customTexture[0]);
            PushScaleformMovieMethodParameterString(this._customTexture[1]);
            PushScaleformMovieFunctionParameterInt(this.MaxItemsOnScreen);
            PushScaleformMovieFunctionParameterInt(this.Items.length);
            PushScaleformMovieFunctionParameterBool(this.EnableAnimation);
            PushScaleformMovieFunctionParameterInt(this.AnimationType);
            PushScaleformMovieFunctionParameterInt(this.buildingAnimation);
            PushScaleformMovieFunctionParameterInt(this.counterColor.toArgb());
            PushScaleformMovieMethodParameterString(this.descriptionFont.fontName);
            PushScaleformMovieFunctionParameterInt(this.descriptionFont.fontId);
            PushScaleformMovieMethodParameterFloat(this.fadingTime);
            PushScaleformMovieFunctionParameterBool(true);
            BeginTextCommandScaleformString("ScaleformUILongDesc");
            EndTextCommandScaleformString_2();
            EndScaleformMovieMethod();
            await this.fadeInMenu();
            this.isBuilding = false;
            return;
        }
        if (!itemsOnly) {
            this.EnableAnimation = false;
            while (!ScaleformUI.Scaleforms._ui?.isLoaded) {
                await Delay(0);
            }
            ScaleformUI.Scaleforms._ui?.callFunction(
                "CREATE_MENU",
                this.Title,
                this.Subtitle,
                this.Offset.x,
                this.Offset.y,
                this.AlternativeTitle,
                this._customTexture[0],
                this._customTexture[1],
                this.MaxItemsOnScreen,
                this.Items.length,
                this.EnableAnimation,
                this.AnimationType,
                this.buildingAnimation,
                this.counterColor.toArgb(),
                this.descriptionFont.fontName,
                this.descriptionFont.fontId,
                this.fadingTime,
                false
            );
            if (this.Windows.length > 0) {
                this.Windows.forEach((wind) => {
                    if (wind instanceof UIMenuHeritageWindow) {
                        let her = wind;
                        ScaleformUI.Scaleforms._ui?.callFunction("ADD_WINDOW", her.id, her.Mom, her.Dad);
                    } else if (wind instanceof UIMenuDetailsWindow) {
                        let det = wind;
                        ScaleformUI.Scaleforms._ui?.callFunction(
                            "ADD_WINDOW",
                            det.id,
                            det.DetailBottom,
                            det.DetailMid,
                            det.DetailTop,
                            det.DetailLeft.Txd,
                            det.DetailLeft.Txn,
                            det.DetailLeft.Pos.x,
                            det.DetailLeft.Pos.y,
                            det.DetailLeft.Size.x,
                            det.DetailLeft.Size.y
                        );
                        if (det.StatWheelEnabled) {
                            det.DetailStats.forEach((stat) => {
                                ScaleformUI.Scaleforms._ui?.callFunction(
                                    "ADD_STATS_DETAILS_WINDOW_STATWHEEL",
                                    this.Windows.indexOf(det),
                                    stat.Percentage,
                                    stat.HudColor
                                );
                            });
                        }
                    }
                });
            }
            let timer = GetGameTimer();
            if (this.Items.length == 0) {
                while (this.Items.length == 0) {
                    await Delay(0);
                    if (GetGameTimer() - timer > 150) {
                        ScaleformUI.Scaleforms._ui?.callFunction(
                            "SET_CURRENT_ITEM",
                            this.Pagination.GetPageIndexFromMenuIndex(this.CurrentSelection)
                        );
                    }
                }
            }
        }
        let i = 0;
        let max = this.Pagination.ItemsPerPage;
        if (this.Items.length < max) {
            max = this.Items.length;
        }
        this.Pagination.MinItem = this.Pagination.CurrentPageStartIndex;
        if (this.ScrollingType == 1 /* CLASSIC */ && this.Pagination.TotalPages > 1) {
            let missingItems = this.Pagination.GetMissingItems();
            if (missingItems > 0) {
                this.Pagination.ScaleformIndex =
                    this.Pagination.GetPageIndexFromMenuIndex(this.Pagination.CurrentPageEndIndex) + missingItems;
                this.Pagination.MinItem = this.Pagination.CurrentPageStartIndex - missingItems;
            }
        }
        this.Pagination.MaxItem = this.Pagination.CurrentPageEndIndex;
        while (i < max) {
            await Delay(0);
            if (!this.Visible) return;
            this._itemCreation(this.Pagination.CurrentPage, i, false, true);
            i++;
        }
        this.Pagination.ScaleformIndex = this.Pagination.GetScaleformIndex(this.CurrentSelection);
        this.Items[this.CurrentSelection].Selected = true;
        ScaleformUI.Scaleforms._ui?.callFunction("SET_CURRENT_ITEM", this.Pagination.ScaleformIndex);
        ScaleformUI.Scaleforms._ui?.callFunction("SET_COUNTER_QTTY", this.CurrentSelection + 1, this.Items.length);
        if (this.Items[this.CurrentSelection] instanceof UIMenuSeparatorItem) {
            if (this.Items[this.CurrentSelection].Jumpable) {
                this.GoDown();
            }
        }
        ScaleformUI.Scaleforms._ui?.callFunction("ENABLE_MOUSE", this.MouseControlsEnabled);
        ScaleformUI.Scaleforms._ui?.callFunction("ENABLE_3D_ANIMATIONS", this.enabled3DAnimations);
        this.EnableAnimation = _animEnabled;
        await this.fadeInMenu();
        this.isBuilding = false;
    }
    SetMouse(enableMouseControls, enableEdge, isWheelEnabled, resetCursorOnOpen, leftClickSelect) {
        this.MouseControlsEnabled = enableMouseControls;
        this.MouseEdgeEnabled = enableEdge;
        this.MouseWheelControlEnabled = isWheelEnabled;
        this.ResetCursorOnOpen = resetCursorOnOpen;
        this.leftClickEnabled = leftClickSelect;
        if (leftClickSelect && !this.MouseControlsEnabled) {
            this.SetKeyControl(4 /* Select */, 24);
        } else {
            this.ResetKey(4 /* Select */);
            this.SetKeyControl(4 /* Select */, 201);
        }
    }
    sortMenuItems(compare) {
        if (this.itemless) throw new Error("ScaleformUI - You can't compare or sort an itemless menu");
        this.Items[this.CurrentSelection].Selected = false;
        this._unfilteredItems = [...this.Items];
        this.Clear();
        let list = [...this._unfilteredItems];
        list.sort(compare);
        this.Items = [...list];
        this.Pagination.TotalItems = this.Items.length;
        this.buildUpMenuAsync(true);
    }
    filterMenuItems(predicate) {
        if (this.itemless) throw new Error("ScaleformUI - You can't compare or sort an itemless menu");
        this.Items[this.CurrentSelection].Selected = false;
        this._unfilteredItems = [...this.Items];
        this.Clear();
        this.Items = this._unfilteredItems.filter(predicate);
        this.Pagination.TotalItems = this.Items.length;
        this.buildUpMenuAsync(true);
    }
    resetFilter() {
        if (this.itemless) throw new Error("ScaleformUI - You can't compare or sort an itemless menu");
        this.Items[this.CurrentSelection].Selected = false;
        this.Clear();
        this.Items = [...this._unfilteredItems];
        this.Pagination.TotalItems = this.Items.length;
        this.buildUpMenuAsync(true);
    }
    _itemCreation(page, pageIndex, before, isOverflow = false) {
        if (this.itemless) throw new Error("ScaleformUI - You can't add items to an itemless menu");
        let menuIndex = this.Pagination.GetMenuIndexFromPageIndex(page, pageIndex);
        let missing = false;
        if (!before) {
            if (
                this.Pagination.GetPageItemsCount(page) < this.Pagination.ItemsPerPage &&
                this.Pagination.TotalPages > 1
            ) {
                if (this.ScrollingType == 3 /* ENDLESS */) {
                    if (menuIndex > this.Pagination.TotalItems - 1) {
                        menuIndex -= this.Pagination.TotalItems;
                        this.Pagination.MaxItem = menuIndex;
                        missing = true;
                    }
                } else if (this.ScrollingType == 1 /* CLASSIC */ && isOverflow) {
                    let missingItems = this.Pagination.ItemsPerPage - this.Pagination.GetPageItemsCount(page);
                    menuIndex -= missingItems;
                } else if (this.ScrollingType == 2 /* PAGINATED */) {
                    if (menuIndex >= this.Items.length) return;
                }
            }
        }
        let scaleformIndex = this.Pagination.GetScaleformIndex(menuIndex);
        if (this.ScrollingType == 3 /* ENDLESS */ && missing) {
            scaleformIndex = menuIndex + this.Pagination.GetScaleformIndex(this.Pagination.TotalItems);
        }
        let item = this.Items[menuIndex];
        AddTextEntry(`menu_${BreadcrumbsHandler.CurrentDepth}_desc_${menuIndex}`, item.Description);
        BeginScaleformMovieMethod(ScaleformUI.Scaleforms._ui?.handle, "ADD_ITEM");
        PushScaleformMovieFunctionParameterBool(before);
        PushScaleformMovieFunctionParameterInt(item._itemId);
        PushScaleformMovieFunctionParameterInt(menuIndex);
        PushScaleformMovieMethodParameterString(item._formatLeftLabel);
        BeginTextCommandScaleformString(`menu_${BreadcrumbsHandler.CurrentDepth}_desc_${menuIndex}`);
        EndTextCommandScaleformString_2();
        PushScaleformMovieFunctionParameterBool(item.Enabled);
        PushScaleformMovieFunctionParameterBool(item.BlinkDescription);
        switch (true) {
            case item instanceof UIMenuDynamicListItem:
                let dit = item;
                PushScaleformMovieMethodParameterString(dit.CurrentListItem);
                PushScaleformMovieFunctionParameterInt(0);
                PushScaleformMovieFunctionParameterInt(dit.MainColor.toArgb());
                PushScaleformMovieFunctionParameterInt(dit.HighlightColor.toArgb());
                PushScaleformMovieFunctionParameterInt(dit.TextColor.toArgb());
                PushScaleformMovieFunctionParameterInt(dit.HighlightedTextColor.toArgb());
                EndScaleformMovieMethod();
                break;
            case item instanceof UIMenuListItem:
                let it = item;
                AddTextEntry(`listitem_${menuIndex}_list`, it.Items.join(","));
                BeginTextCommandScaleformString(`listitem_${menuIndex}_list`);
                EndTextCommandScaleformString();
                PushScaleformMovieFunctionParameterInt(it.Index);
                PushScaleformMovieFunctionParameterInt(it.MainColor.toArgb());
                PushScaleformMovieFunctionParameterInt(it.HighlightColor.toArgb());
                PushScaleformMovieFunctionParameterInt(it.TextColor.toArgb());
                PushScaleformMovieFunctionParameterInt(it.HighlightedTextColor.toArgb());
                EndScaleformMovieMethod();
                break;
            case item instanceof UIMenuSliderItem:
                let prItem = item;
                PushScaleformMovieFunctionParameterInt(prItem._max);
                PushScaleformMovieFunctionParameterInt(prItem._multiplier);
                PushScaleformMovieFunctionParameterInt(prItem.Value);
                PushScaleformMovieFunctionParameterInt(prItem.MainColor.toArgb());
                PushScaleformMovieFunctionParameterInt(prItem.HighlightColor.toArgb());
                PushScaleformMovieFunctionParameterInt(prItem.TextColor.toArgb());
                PushScaleformMovieFunctionParameterInt(prItem.HighlightedTextColor.toArgb());
                PushScaleformMovieFunctionParameterInt(prItem.SliderColor.toArgb());
                PushScaleformMovieFunctionParameterBool(prItem._heritage);
                EndScaleformMovieMethod();
                break;
            case item instanceof UIMenuProgressItem:
                let slItem = item;
                PushScaleformMovieFunctionParameterInt(slItem._max);
                PushScaleformMovieFunctionParameterInt(slItem._multiplier);
                PushScaleformMovieFunctionParameterInt(slItem.Value);
                PushScaleformMovieFunctionParameterInt(slItem.MainColor.toArgb());
                PushScaleformMovieFunctionParameterInt(slItem.HighlightColor.toArgb());
                PushScaleformMovieFunctionParameterInt(slItem.TextColor.toArgb());
                PushScaleformMovieFunctionParameterInt(slItem.HighlightedTextColor.toArgb());
                PushScaleformMovieFunctionParameterInt(slItem.SliderColor.toArgb());
                EndScaleformMovieMethod();
                break;
            case item instanceof UIMenuStatsItem:
                let statsItem = item;
                PushScaleformMovieFunctionParameterInt(statsItem.Value);
                PushScaleformMovieFunctionParameterInt(statsItem.Type);
                PushScaleformMovieFunctionParameterInt(statsItem.sliderColor.toArgb());
                PushScaleformMovieFunctionParameterInt(statsItem.MainColor.toArgb());
                PushScaleformMovieFunctionParameterInt(statsItem.HighlightColor.toArgb());
                PushScaleformMovieFunctionParameterInt(statsItem.TextColor.toArgb());
                PushScaleformMovieFunctionParameterInt(statsItem.HighlightedTextColor.toArgb());
                EndScaleformMovieMethod();
                break;
            case item instanceof UIMenuSeparatorItem:
                let separatorItem = item;
                PushScaleformMovieFunctionParameterBool(separatorItem.Jumpable);
                PushScaleformMovieFunctionParameterInt(item.MainColor.toArgb());
                PushScaleformMovieFunctionParameterInt(item.HighlightColor.toArgb());
                PushScaleformMovieFunctionParameterInt(item.TextColor.toArgb());
                PushScaleformMovieFunctionParameterInt(item.HighlightedTextColor.toArgb());
                EndScaleformMovieMethod();
                break;
            default:
                PushScaleformMovieFunctionParameterInt(item.MainColor.toArgb());
                PushScaleformMovieFunctionParameterInt(item.HighlightColor.toArgb());
                PushScaleformMovieFunctionParameterInt(item.TextColor.toArgb());
                PushScaleformMovieFunctionParameterInt(item.HighlightedTextColor.toArgb());
                EndScaleformMovieMethod();
                ScaleformUI.Scaleforms._ui?.callFunction("SET_RIGHT_LABEL", scaleformIndex, item._formatRightLabel);
                if (item.RightBadge != 0 /* NONE */)
                    ScaleformUI.Scaleforms._ui?.callFunction("SET_RIGHT_BADGE", scaleformIndex, item.RightBadge);
                break;
        }
        ScaleformUI.Scaleforms._ui?.callFunction(
            "SET_ITEM_LABEL_FONT",
            scaleformIndex,
            item.labelFont.fontName,
            item.labelFont.fontId
        );
        ScaleformUI.Scaleforms._ui?.callFunction(
            "SET_ITEM_RIGHT_LABEL_FONT",
            scaleformIndex,
            item.rightLabelFont.fontName,
            item.rightLabelFont.fontId
        );
        if (item.LeftBadge != 0 /* NONE */)
            ScaleformUI.Scaleforms._ui?.callFunction("SET_LEFT_BADGE", scaleformIndex, item.LeftBadge);
        if (item.SidePanel != null) {
            switch (true) {
                case item.SidePanel instanceof UIMissionDetailsPanel:
                    let mis = item.SidePanel;
                    ScaleformUI.Scaleforms._ui?.callFunction(
                        "ADD_SIDE_PANEL_TO_ITEM",
                        scaleformIndex,
                        0,
                        mis.PanelSide,
                        mis.TitleType,
                        mis.Title,
                        mis.TitleColor,
                        mis.TextureDict,
                        mis.TextureName
                    );
                    mis.Items.forEach((_it) => {
                        ScaleformUI.Scaleforms._ui?.callFunction(
                            "ADD_MISSION_DETAILS_DESC_ITEM",
                            scaleformIndex,
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
                    });
                    break;
                case item.SidePanel instanceof UIVehicleColourPickerPanel:
                    let cp = item.SidePanel;
                    ScaleformUI.Scaleforms._ui?.callFunction(
                        "ADD_SIDE_PANEL_TO_ITEM",
                        scaleformIndex,
                        1,
                        cp.PanelSide,
                        cp._titleType,
                        cp.Title,
                        cp.TitleColor
                    );
                    break;
            }
        }
        if (item.Panels.length == 0) return;
        item.Panels.forEach((panel) => {
            let pan = item.Panels.indexOf(panel);
            switch (true) {
                case panel instanceof UIMenuColorPanel:
                    let cp = panel;
                    ScaleformUI.Scaleforms._ui?.callFunction(
                        "ADD_PANEL",
                        scaleformIndex,
                        0,
                        cp.Title,
                        cp.PanelColorType,
                        cp.CurrentSelection,
                        cp.CustomColors != null ? cp.CustomColors.map((x) => x.toArgb()).join(",") : ""
                    );
                    break;
                case panel instanceof UIMenuPercentagePanel:
                    let pp = panel;
                    ScaleformUI.Scaleforms._ui?.callFunction(
                        "ADD_PANEL",
                        scaleformIndex,
                        1,
                        pp.Title,
                        pp.Min,
                        pp.Max,
                        pp.Percentage
                    );
                    break;
                case panel instanceof UIMenuGridPanel:
                    let gp = panel;
                    ScaleformUI.Scaleforms._ui?.callFunction(
                        "ADD_PANEL",
                        scaleformIndex,
                        2,
                        gp.TopLabel,
                        gp.RightLabel,
                        gp.LeftLabel,
                        gp.BottomLabel,
                        gp.CirclePosition.x,
                        gp.CirclePosition.y,
                        true,
                        gp.Type
                    );
                    break;
                case panel instanceof UIMenuStatisticsPanel:
                    let sp = panel;
                    ScaleformUI.Scaleforms._ui?.callFunction("ADD_PANEL", scaleformIndex, 3);
                    if (sp.Items.length > 0) {
                        sp.Items.forEach((stat) => {
                            ScaleformUI.Scaleforms._ui?.callFunction(
                                "ADD_STATISTIC_TO_PANEL",
                                scaleformIndex,
                                pan,
                                stat.Text,
                                stat.Value
                            );
                        });
                    }
                    break;
            }
        });
    }
    set CurrentSelection(value) {
        if (value < 0) {
            this.Pagination.CurrentMenuIndex = 0;
        } else if (value >= this.Items.length) {
            this.Pagination.CurrentMenuIndex = this.Items.length - 1;
        }
        this.Items[this.CurrentSelection].Selected = false;
        this.Pagination.CurrentMenuIndex = value;
        this.Pagination.CurrentPage = this.Pagination.GetPage(this.Pagination.CurrentMenuIndex);
        this.Pagination.CurrentPageIndex = value;
        this.Pagination.ScaleformIndex = this.Pagination.GetScaleformIndex(value);
        if (this._visible)
            ScaleformUI.Scaleforms._ui?.callFunction(
                "SET_CURRENT_ITEM",
                this.Pagination.GetScaleformIndex(this.Pagination.CurrentMenuIndex)
            );
        this.Items[this.CurrentSelection].Selected = true;
    }
    get CurrentSelection() {
        return this.Items.length == 0 ? 0 : this.Pagination.CurrentMenuIndex;
    }
    set CurrentItem(item) {
        this.CurrentSelection = this.Items.includes(item) ? this.Items.indexOf(item) : 0;
    }
    get CurrentItem() {
        return this.Items[this.CurrentSelection];
    }
    set Title(value) {
        this.title = value;
        if (this._visible)
            ScaleformUI.Scaleforms._ui?.callFunction(
                "UPDATE_TITLE_SUBTITLE",
                this.title,
                this.subtitle,
                this.AlternativeTitle
            );
    }
    get Title() {
        return this.title;
    }
    set Subtitle(value) {
        this.subtitle = value;
        if (this._visible)
            ScaleformUI.Scaleforms._ui?.callFunction(
                "UPDATE_TITLE_SUBTITLE",
                this.title,
                this.subtitle,
                this.AlternativeTitle
            );
    }
    get Subtitle() {
        return this.subtitle;
    }
    set CounterColor(value) {
        this.counterColor = value;
        if (this._visible) ScaleformUI.Scaleforms._ui?.callFunction("SET_COUNTER_COLOR", this.counterColor);
    }
    get CounterColor() {
        return this.counterColor;
    }
    set CanPlayerCloseMenu(value) {
        this.canPlayerCloseMenu = value;
        if (value) {
            this.instructionalButtons = [
                new InstructionalButton(UIMenu._selectTextLocalized, -1, 176, 176, -1),
                new InstructionalButton(UIMenu._backTextLocalized, -1, 177, 177, -1)
            ];
        } else {
            this.instructionalButtons = [new InstructionalButton(UIMenu._selectTextLocalized, -1, 176, 176, -1)];
        }
        if (this.Visible) {
            ScaleformUI.Scaleforms.InstructionalButtons.SetInstructionalButtons(this.instructionalButtons);
        }
    }
    get CanPlayerCloseMenu() {
        return this.canPlayerCloseMenu;
    }
    IndexChange(newindex) {
        this._IndexChanged.toDelegate()(this, newindex);
    }
    ListChange(sender, newindex) {
        this._ListChanged.toDelegate()(this, sender, newindex);
    }
    ProgressChange(sender, newindex) {
        this._OnProgressChanged.toDelegate()(this, sender, newindex);
    }
    ListSelect(sender, newindex) {
        this._ListSelected.toDelegate()(this, sender, newindex);
    }
    SliderChange(sender, newindex) {
        this._SliderChange.toDelegate()(this, sender, newindex);
    }
    ItemSelect(selecteditem, index) {
        this._ItemSelected.toDelegate()(this, selecteditem, index);
    }
    CheckboxChange(sender, Checked) {
        this._CheckboxChanged.toDelegate()(this, sender, Checked);
    }
    StatItemChange(item, value) {
        this._StatItemProgressChange.toDelegate()(this, item, value);
    }
    MenuOpenEv(menu, data) {
        this._MenuOpened.toDelegate()(menu, data);
    }
    MenuCloseEv(menu) {
        this._MenuClosed.toDelegate()(menu);
    }
    ColorPanelChange(item, panel, index) {
        this._ColorPanelChanged.toDelegate()(item, panel, index);
    }
    PercentagePanelChange(item, panel, index) {
        this._PercentagePanelChanged.toDelegate()(item, panel, index);
    }
    GridPanelChange(item, panel, index) {
        this._GridPanelChanged.toDelegate()(item, panel, index);
    }
}

// src/menus/menu-handler.ts
class MenuHandler {
    static _currentMenu = null;
    static _currentPauseMenu = null;
    static ableToDraw = false;
    static SwitchTo(currentMenu, newMenu, newMenuCurrentSelection, inheritOldMenuParams, data) {
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
            const newUIMenu = newMenu;
            const old = currentMenu;
            if (inheritOldMenuParams == null) {
                inheritOldMenuParams = false;
            }
            if (inheritOldMenuParams) {
                newUIMenu._customTexture = [...old._customTexture];
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
    static get IsAnyMenuOpen() {
        return (this._currentMenu != null && this._currentMenu.Visible) || BreadcrumbsHandler.Count > 0;
    }
    static IsAnyPauseMenuOpen() {
        return this._currentPauseMenu !== null && this._currentPauseMenu.Visible;
    }
}

// src/scaleforms/instructional-buttons/instructionalbuttonshandler.ts
class InstructionalButtonsHandler {
    _sc;
    UseMouseButtons = false;
    _isUsingKeyboard = false;
    _changed = true;
    savingTimer = 0;
    _isSaving = false;
    ControlButtons = [];
    keyboardButtons = [];
    gamepadButtons = [];
    constructor() {
        this.ControlButtons = [];
        this.Load();
    }
    get IsSaving() {
        return this._isSaving;
    }
    async Load() {
        if (this._sc) return;
        this._sc = Scaleform.request("instructional_buttons");
        const start = GetGameTimer();
        const to = 1000;
        await waitUntilReturns(noop, () => this._sc.isLoaded && GetGameTimer() - start < to, true, 0);
        let [w, h] = GetActiveScreenResolution();
        this._sc.callFunction("SET_DISPLAY_CONFIG", 1280, 720, 0.05, 0.95, 0.05, 0.95, true, false, false, w, h);
    }
    SetInstructionalButtons(buttons) {
        this.ControlButtons = buttons;
        this._changed = true;
    }
    AddInstructionalButton(button) {
        this.ControlButtons.push(button);
        this._changed = true;
    }
    RemoveInstructionalButton(buttonOrIdx) {
        if (typeof buttonOrIdx === "number") {
            if (buttonOrIdx >= 0 && buttonOrIdx < this.ControlButtons.length) {
                this.ControlButtons.splice(buttonOrIdx, 1);
            }
        } else if (this.ControlButtons.includes(buttonOrIdx)) {
            this.ControlButtons.splice(this.ControlButtons.indexOf(buttonOrIdx), 1);
        }
        this._changed = true;
    }
    RemoveInstructionalButtons(buttons) {
        buttons.forEach((x) => {
            this.RemoveInstructionalButton(x);
        });
        this._changed = true;
    }
    ClearButtonList() {
        if (this.ControlButtons.length > 0) {
            this.ControlButtons.length = 0;
        }
        this._changed = true;
        this._sc.callFunction("CLEAR_ALL");
        this._sc.callFunction("CLEAR_RENDER");
    }
    async AddSavingText(spinnerType, text, time) {
        this._isSaving = true;
        this._changed = true;
        this.savingTimer = GetGameTimer();
        this.showLoadingPrompt(spinnerType, text);
        if (time != null && time > 0) {
            while (GetGameTimer() - this.savingTimer <= time) await Delay(100);
            RemoveLoadingPrompt();
        }
        this._isSaving = false;
    }
    showLoadingPrompt(spinnerType, text) {
        if (IsLoadingPromptBeingDisplayed()) {
            RemoveLoadingPrompt();
        }
        if (text == undefined) {
            BeginTextCommandBusyString("");
        } else {
            BeginTextCommandBusyString("STRING");
            AddTextComponentSubstringPlayerName(text);
        }
        EndTextCommandBusyString(spinnerType);
    }
    HideSavingText() {
        if (this._isSaving) {
            if (IsLoadingPromptBeingDisplayed()) {
                RemoveLoadingPrompt();
            }
            this._isSaving = false;
        }
    }
    updateButtons() {
        if (!this._changed) return;
        this.keyboardButtons.length = 0;
        this.gamepadButtons.length = 0;
        this._sc.callFunction("SET_DATA_SLOT_EMPTY");
        this._sc.callFunction("TOGGLE_MOUSE_BUTTONS", this.UseMouseButtons);
        let count = 0;
        for (let i = 0; i < this.ControlButtons.length; i++) {
            let button = this.ControlButtons[i];
            if (button.IsUsingController) {
                if (button.PadCheck == 1 /* Keyboard */) {
                    continue;
                }
                this.gamepadButtons.push(button);
                if (ScaleformUI.Scaleforms.Warning.IsShowing || ScaleformUI.Scaleforms.Warning.IsShowingWithButtons)
                    this._sc.callFunction("SET_DATA_SLOT", count, button.GetButtonId(), button.Text, 0, -1);
                else this._sc.callFunction("SET_DATA_SLOT", count, button.GetButtonId(), button.Text);
            } else {
                if (button.PadCheck == 2 /* Controller */) {
                    continue;
                }
                this.keyboardButtons.push(button);
                if (this.UseMouseButtons)
                    this._sc.callFunction(
                        "SET_DATA_SLOT",
                        count,
                        button.GetButtonId(),
                        button.Text,
                        1,
                        button.KeyboardButton
                    );
                else {
                    if (ScaleformUI.Scaleforms.Warning.IsShowing || ScaleformUI.Scaleforms.Warning.IsShowingWithButtons)
                        this._sc.callFunction("SET_DATA_SLOT", count, button.GetButtonId(), button.Text, 0, -1);
                    else this._sc.callFunction("SET_DATA_SLOT", count, button.GetButtonId(), button.Text);
                }
            }
            count++;
        }
        this._sc.callFunction("DRAW_INSTRUCTIONAL_BUTTONS", -1);
        this._changed = false;
    }
    Draw() {
        SetScriptGfxDrawBehindPausemenu(true);
        this._sc.render2d();
    }
    Update() {
        if (this.ControlButtons.length == 0) return;
        if (!this._sc) this.Load();
        if (IsUsingKeyboard(2)) {
            if (!this._isUsingKeyboard) {
                this._isUsingKeyboard = true;
                this._changed = true;
            }
        } else {
            if (this._isUsingKeyboard) {
                this._isUsingKeyboard = false;
                this._changed = true;
            }
        }
        this.updateButtons();
        if (!ScaleformUI.Scaleforms.Warning.IsShowing || ScaleformUI.Scaleforms.Warning.IsShowingWithButtons)
            this.Draw();
        this.keyboardButtons.forEach((button) => {
            if (
                this.IsControlJustPressed(button.KeyboardButton, button.PadCheck) ||
                (button.KeyboardButtons != null &&
                    button.KeyboardButtons.some((x) => this.IsControlJustPressed(x, button.PadCheck)))
            )
                button.InvokeEvent(button);
        });
        this.gamepadButtons.forEach((button) => {
            if (
                this.IsControlJustPressed(button.GamepadButton, button.PadCheck) ||
                (button.GamepadButtons != null &&
                    button.GamepadButtons.some((x) => this.IsControlJustPressed(x, button.PadCheck)))
            )
                button.InvokeEvent(button);
        });
        if (this.UseMouseButtons) ShowCursorThisFrame();
        HideHudComponentThisFrame(6);
        HideHudComponentThisFrame(7);
        HideHudComponentThisFrame(9);
    }
    IsControlJustPressed(control, keyboardOnly) {
        return (
            IsControlJustPressed(2, control) &&
            (keyboardOnly == 1 /* Keyboard */
                ? IsUsingKeyboard(2)
                : keyboardOnly != 2 /* Controller */ || !IsUsingKeyboard(2))
        );
    }
    ForceUpdate() {
        this._changed = true;
    }
}

// src/helpers/singleton.decorator.ts
var iocContainer = new Map();
var Singleton = (target) =>
    namedClassExtension(
        target.name,
        class extends target {
            constructor(...args) {
                if (iocContainer.has(target.name)) {
                    return iocContainer.get(target.name);
                }
                super(...args);
                iocContainer.set(target.name, this);
            }
        }
    );

// src/scaleforms/minimap/minimap.ts
class MinimapOverlays {
    overlay = 0;
    minimaps = [];
    async load() {
        this.overlay = AddMinimapOverlay("files/MINIMAP_LOADER.gfx");
        await waitUntilReturns(noop, () => HasMinimapOverlayLoaded(this.overlay), [1, true], 0);
        SetMinimapOverlayDisplay(this.overlay, 0, 0, 100, 100, 100);
    }
    async addSizedOverlay(
        textureDict,
        textureName,
        x,
        y,
        rotation = 0,
        width = -1,
        height = -1,
        alpha = 100,
        centered = false
    ) {
        if (!HasStreamedTextureDictLoaded(textureDict)) {
            await waitUntilReturns(
                () => RequestStreamedTextureDict(textureDict, false),
                () => HasStreamedTextureDictLoaded(textureDict),
                [1, true],
                0
            );
        }
        CallMinimapScaleformFunction(this.overlay, "ADD_SIZED_OVERLAY");
        ScaleformMovieMethodAddParamTextureNameString(textureDict);
        ScaleformMovieMethodAddParamTextureNameString(textureName);
        ScaleformMovieMethodAddParamFloat(x);
        ScaleformMovieMethodAddParamFloat(y);
        ScaleformMovieMethodAddParamFloat(Math.round(rotation * 100) / 100);
        ScaleformMovieMethodAddParamFloat(Math.round(width * 100) / 100);
        ScaleformMovieMethodAddParamFloat(Math.round(height * 100) / 100);
        ScaleformMovieMethodAddParamInt(alpha);
        ScaleformMovieMethodAddParamBool(centered);
        EndScaleformMovieMethod();
        SetStreamedTextureDictAsNoLongerNeeded(textureDict);
        return this.minimaps.push({ txd: textureDict, txn: textureName }) - 1;
    }
    async addScaledOverlay(
        textureDict,
        textureName,
        x,
        y,
        rotation = 0,
        xScale = 100,
        yScale = 100,
        alpha = 100,
        centered = false
    ) {
        if (!HasStreamedTextureDictLoaded(textureDict)) {
            await waitUntilReturns(
                () => RequestStreamedTextureDict(textureDict, false),
                () => HasStreamedTextureDictLoaded(textureDict),
                [1, true],
                0
            );
        }
        CallMinimapScaleformFunction(this.overlay, "ADD_SCALED_OVERLAY");
        ScaleformMovieMethodAddParamTextureNameString(textureDict);
        ScaleformMovieMethodAddParamTextureNameString(textureName);
        ScaleformMovieMethodAddParamFloat(x);
        ScaleformMovieMethodAddParamFloat(y);
        ScaleformMovieMethodAddParamFloat(Math.round(rotation * 100) / 100);
        ScaleformMovieMethodAddParamFloat(Math.round(xScale * 100) / 100);
        ScaleformMovieMethodAddParamFloat(Math.round(yScale * 100) / 100);
        ScaleformMovieMethodAddParamInt(alpha);
        ScaleformMovieMethodAddParamBool(centered);
        EndScaleformMovieMethod();
        SetStreamedTextureDictAsNoLongerNeeded(textureDict);
        return this.minimaps.push({ txd: textureDict, txn: textureName }) - 1;
    }
    async removeOverlayById(id) {
        if (id == 0) await this.load();
        CallMinimapScaleformFunction(this.overlay, "REM_OVERLAY");
        ScaleformMovieMethodAddParamInt(id);
        EndScaleformMovieMethod();
        delete this.minimaps[id];
    }
}
MinimapOverlays = __legacyDecorateClassTS([Singleton], MinimapOverlays);

// src/scaleforms/pausemenu/pausemenu-handler.ts
class PauseMenuHandler {
    _header;
    _pause;
    _lobby;
    _pauseBG;
    BGEnabled = false;
    Loaded = false;
    _visible = false;
    constructor() {
        this._header = null;
        this._pause = null;
        this._lobby = null;
        this._pauseBG = null;
        this.BGEnabled = false;
        this.Loaded = false;
        this._visible = false;
    }
    set Visible(_v) {
        this._visible = _v;
    }
    get Visible() {
        return this._visible;
    }
    load() {
        if (this._header != null && this._pause != null && this._lobby != null) return;
        this._header = Scaleform.requestWideScreen("pausemenuheader");
        this._pause = Scaleform.requestWideScreen("pausemenu");
        this._lobby = Scaleform.requestWideScreen("lobbymenu");
        this._pauseBG = Scaleform.requestWideScreen("store_background");
        this.Loaded = this._header.isLoaded && this._pause.isLoaded && this._lobby.isLoaded;
    }
    setHeaderTitle(title, subtitle, shiftUpHeader) {
        if (subtitle == null) subtitle = "";
        if (shiftUpHeader == null) shiftUpHeader = false;
        this._header?.callFunction("SET_HEADER_TITLE", title, subtitle, shiftUpHeader);
    }
    setHeaderDetails(topDetail, midDetail, botDetail) {
        this._header?.callFunction("SET_HEADER_DETAILS", topDetail, midDetail, botDetail, false);
    }
    shiftCoronaDescription(shiftDesc, hideTabs) {
        this._header?.callFunction("SHIFT_CORONA_DESC", shiftDesc, hideTabs);
    }
    showHeadingDetails(show) {
        this._header?.callFunction("SHOW_HEADING_DETAILS", show);
    }
    setHeaderCharImg(txd, charTexturePath, show) {
        this._header?.callFunction("SET_HEADER_CHAR_IMG", txd, charTexturePath, show);
    }
    setHeaderSecondaryImg(txd, charTexturePath, show) {
        this._header?.callFunction("SET_HEADER_CREW_IMG", txd, charTexturePath, show);
    }
    headerGoRight() {
        this._header?.callFunction("GO_RIGHT");
    }
    headerGoLeft() {
        this._header?.callFunction("GO_LEFT");
    }
    addPauseMenuTab(title, _type, _tabContentType, color) {
        if (color == null) color = SColor.HUD_Freemode;
        this._header?.callFunction("ADD_HEADER_TAB", title, _type, color);
        this._pause?.callFunction("ADD_TAB", _tabContentType);
    }
    addLobbyMenuTab(title, _type, color) {
        if (color == null) color = SColor.HUD_Freemode;
        this._header?.callFunction("ADD_HEADER_TAB", title, _type, color);
    }
    selectTab(tab) {
        this._header?.callFunction("SET_TAB_INDEX", tab);
        this._pause?.callFunction("SET_TAB_INDEX", tab);
    }
    setFocus(focusLevel) {
        this._pause?.callFunction("SET_FOCUS", focusLevel);
    }
    addLeftItem(tab, _type, title, itemColor, highlightColor, enabled) {
        if (itemColor == null) itemColor = SColor.HUD_Pause_bg;
        if (highlightColor == null) highlightColor = SColor.HUD_White;
        if (itemColor !== SColor.HUD_None && highlightColor !== SColor.HUD_None)
            this._pause?.callFunction("ADD_LEFT_ITEM", tab, _type, title, enabled, itemColor, highlightColor);
        else if (itemColor !== SColor.HUD_None && highlightColor == SColor.HUD_None)
            this._pause?.callFunction("ADD_LEFT_ITEM", tab, _type, title, enabled, itemColor);
        else this._pause?.callFunction("ADD_LEFT_ITEM", tab, _type, title, enabled);
    }
    addRightTitle(tab, leftItemIndex, title) {
        this._pause?.callFunction("ADD_RIGHT_TITLE", tab, leftItemIndex, title);
    }
    addRightListLabel(tab, leftItemIndex, label, fontName, fontId) {
        const pause = this._pause;
        if (!pause) return;
        AddTextEntry("PauseMenu_" + tab + "_" + leftItemIndex, label);
        BeginScaleformMovieMethod(pause.handle, "ADD_RIGHT_LIST_ITEM");
        ScaleformMovieMethodAddParamInt(tab);
        ScaleformMovieMethodAddParamInt(leftItemIndex);
        ScaleformMovieMethodAddParamInt(0);
        BeginTextCommandScaleformString("PauseMenu_" + tab + "_" + leftItemIndex);
        EndTextCommandScaleformString_2();
        ScaleformMovieMethodAddParamPlayerNameString(fontName);
        ScaleformMovieMethodAddParamInt(fontId);
        EndScaleformMovieMethod();
    }
    addRightStatItemLabel(tab, leftItemIndex, label, rightLabel, labelFont, rLabelFont) {
        this._pause?.callFunction(
            "ADD_RIGHT_LIST_ITEM",
            tab,
            leftItemIndex,
            1,
            0,
            label,
            rightLabel,
            -1,
            labelFont.fontName,
            labelFont.fontId,
            rLabelFont.fontName,
            rLabelFont.fontId
        );
    }
    addRightStatItemColorBar(tab, leftItemIndex, label, value, barColor, labelFont) {
        this._pause?.callFunction(
            "ADD_RIGHT_LIST_ITEM",
            tab,
            leftItemIndex,
            1,
            1,
            label,
            value,
            barColor,
            labelFont.fontName,
            labelFont.fontId
        );
    }
    addRightSettingsBaseItem(tab, leftItemIndex, label, rightLabel, enabled) {
        this._pause?.callFunction("ADD_RIGHT_LIST_ITEM", tab, leftItemIndex, 2, 0, label, enabled, rightLabel);
    }
    addRightSettingsListItem(tab, leftItemIndex, label, items, startIndex, enabled) {
        let stringList = items.join(",");
        this._pause?.callFunction(
            "ADD_RIGHT_LIST_ITEM",
            tab,
            leftItemIndex,
            2,
            1,
            label,
            enabled,
            stringList,
            startIndex
        );
    }
    addRightSettingsProgressItem(tab, leftItemIndex, label, max, color, index, enabled) {
        this._pause?.callFunction("ADD_RIGHT_LIST_ITEM", tab, leftItemIndex, 2, 2, label, enabled, max, color, index);
    }
    addRightSettingsProgressItemAlt(tab, leftItemIndex, label, max, color, index, enabled) {
        this._pause?.callFunction("ADD_RIGHT_LIST_ITEM", tab, leftItemIndex, 2, 3, label, enabled, max, color, index);
    }
    addRightSettingsSliderItem(tab, leftItemIndex, label, max, color, index, enabled) {
        this._pause?.callFunction("ADD_RIGHT_LIST_ITEM", tab, leftItemIndex, 2, 5, label, enabled, max, color, index);
    }
    addRightSettingsCheckboxItem(tab, leftItemIndex, label, style, check, enabled) {
        this._pause?.callFunction("ADD_RIGHT_LIST_ITEM", tab, leftItemIndex, 2, 4, label, enabled, style, check);
    }
    addKeymapTitle(tab, leftItemIndex, title, rightLabel_1, rightLabel_2) {
        this._pause?.callFunction("ADD_RIGHT_TITLE", tab, leftItemIndex, title, rightLabel_1, rightLabel_2);
    }
    addKeymapItem(tab, leftItemIndex, label, control1, control2) {
        const pause = this._pause;
        if (!pause) return;
        BeginScaleformMovieMethod(pause.handle, "ADD_RIGHT_LIST_ITEM");
        ScaleformMovieMethodAddParamInt(tab);
        ScaleformMovieMethodAddParamInt(leftItemIndex);
        ScaleformMovieMethodAddParamInt(3);
        ScaleformMovieMethodAddParamTextureNameString(label);
        BeginTextCommandScaleformString("STRING");
        AddTextComponentSubstringKeyboardDisplay(control1);
        EndTextCommandScaleformString_2();
        BeginTextCommandScaleformString("STRING");
        AddTextComponentSubstringKeyboardDisplay(control2);
        EndTextCommandScaleformString_2();
        EndScaleformMovieMethod();
    }
    updateKeymap(tab, leftItemIndex, rightItem, control1, control2) {
        const pause = this._pause;
        if (!pause) return;
        BeginScaleformMovieMethod(pause.handle, "UPDATE_KEYMAP_ITEM");
        ScaleformMovieMethodAddParamInt(tab);
        ScaleformMovieMethodAddParamInt(leftItemIndex);
        ScaleformMovieMethodAddParamInt(rightItem);
        BeginTextCommandScaleformString("string");
        AddTextComponentSubstringKeyboardDisplay(control1);
        EndTextCommandScaleformString_2();
        BeginTextCommandScaleformString("string");
        AddTextComponentSubstringKeyboardDisplay(control2);
        EndTextCommandScaleformString_2();
        EndScaleformMovieMethod();
    }
    setRightSettingsItemBool(tab, leftItemIndex, rightItem, value) {
        this._pause?.callFunction("SET_RIGHT_SETTINGS_ITEM_VALUE", tab, leftItemIndex, rightItem, value);
    }
    setRightSettingsItemIndex(tab, leftItemIndex, rightItem, value) {
        this._pause?.callFunction("SET_RIGHT_SETTINGS_ITEM_VALUE", tab, leftItemIndex, rightItem, value);
    }
    setRightSettingsItemValue(tab, leftItemIndex, rightItem, value) {
        this._pause?.callFunction("SET_RIGHT_SETTINGS_ITEM_VALUE", tab, leftItemIndex, rightItem, value);
    }
    updateItemRightLabel(tab, leftItemIndex, rightItem, label) {
        this._pause?.callFunction("UPDATE_RIGHT_ITEM_RIGHT_LABEL", tab, leftItemIndex, rightItem, label);
    }
    updateStatsItemBasic(tab, leftItemIndex, rightItem, label, rightLabel) {
        this._pause?.callFunction("UPDATE_RIGHT_STATS_ITEM", tab, leftItemIndex, rightItem, label, rightLabel);
    }
    updateStatsItemBar(tab, leftItemIndex, rightItem, label, value, color) {
        this._pause?.callFunction("UPDATE_RIGHT_STATS_ITEM", tab, leftItemIndex, rightItem, label, value, color);
    }
    updateItemColoredBar(tab, leftItemIndex, rightItem, color) {
        if (color == null || color == SColor.HUD_None)
            this._pause?.callFunction("UPDATE_COLORED_BAR_COLOR", tab, leftItemIndex, rightItem, SColor.HUD_Freemode);
        else this._pause?.callFunction("UPDATE_COLORED_BAR_COLOR", tab, leftItemIndex, rightItem, color);
    }
    sendInputEvent(direction) {
        return this._pause?.callFunctionReturnString("SET_INPUT_EVENT", direction);
    }
    sendScrollEvent(direction) {
        this._pause?.callFunction("SET_SCROLL_EVENT", direction);
    }
    sendClickEvent() {
        return this._pause?.callFunctionReturnString("MOUSE_CLICK_EVENT");
    }
    dispose() {
        this._pause?.callFunction("CLEAR_ALL");
        this._header?.callFunction("CLEAR_ALL");
        this._lobby?.callFunction("CLEAR_ALL");
        this._visible = false;
    }
    draw(isLobby) {
        if (isLobby == null) isLobby = false;
        if (this._visible && GetCurrentFrontendMenuVersion() == -2060115030) {
            SetScriptGfxDrawBehindPausemenu(true);
            if (IsUsingKeyboard(2)) SetMouseCursorActiveThisFrame();
            if (this.BGEnabled) this._pauseBG?.render2d();
            this._header?.render2dNormal(0.501, 0.162, 0.6782, 0.145);
            if (isLobby) this._lobby?.render2dNormal(0.6617187, 0.7226667, 1, 1);
            else this._pause?.render2dNormal(0.6617187, 0.7226667, 1, 1);
        }
    }
}

// src/scaleforms/scaleformui/main.ts
class Notifications {}

class Main {
    Scaleforms;
    Notifications;
    constructor() {
        this.Scaleforms = new Scaleforms();
        this.Notifications = new Notifications();
    }
}

class Scaleforms {
    _ui;
    _pauseMenu;
    _radialMenu;
    _radioMenu;
    MidMessageInstance;
    PlayerListScoreboard;
    InstructionalButtons;
    BigMessageInstance;
    Warning;
    JobMissionSelector;
    RankbarHandler;
    SplashText;
    BigFeed;
    MinimapOverlays;
    constructor() {
        this._ui = Scaleform.requestWideScreen("scaleformui");
        this._radialMenu = Scaleform.requestWideScreen("radialmenu");
        this._radioMenu = Scaleform.requestWideScreen("radiomenu");
        this._pauseMenu = new PauseMenuHandler();
        this.InstructionalButtons = new InstructionalButtonsHandler();
        this._pauseMenu.load();
        this.MinimapOverlays = new MinimapOverlays();
        this.MinimapOverlays.load();
    }
}
var ScaleformUI = new Main();
ScaleformUI.Scaleforms = new Scaleforms();
on("onResourceStop", (resName) => {
    if (resName === GetCurrentResourceName()) {
        if (IsPauseMenuActive() && GetCurrentFrontendMenuVersion() == -2060115030) {
            ActivateFrontendMenu(GetHashKey("FE_MENU_VERSION_EMPTY_NO_BACKGROUND"), true, -1);
            AnimpostfxStop("PauseMenuIn");
            AnimpostfxPlay("PauseMenuOut", 800, false);
        }
        ScaleformUI.Scaleforms._pauseMenu?.dispose();
        ScaleformUI.Scaleforms._ui?.callFunction("CLEAR_ALL");
        ScaleformUI.Scaleforms._ui?.dispose();
        ScaleformUI.Scaleforms._radialMenu?.callFunction("CLEAR_ALL");
        ScaleformUI.Scaleforms._radialMenu?.dispose();
        ScaleformUI.Scaleforms._radioMenu?.callFunction("CLEAR_ALL");
        ScaleformUI.Scaleforms._radioMenu?.dispose();
        if (!IsPlayerControlOn(PlayerId())) SetPlayerControl(PlayerId(), true, 0);
    }
});
setTick(() => {
    if (MenuHandler.ableToDraw && !(IsWarningMessageActive() || ScaleformUI.Scaleforms.Warning.IsShowing)) {
        MenuHandler.ProcessMenus();
    }
    ScaleformUI.Scaleforms.InstructionalButtons.Update();
    if (!IsPauseMenuActive()) {
        if (ScaleformUI.Scaleforms._ui == null) ScaleformUI.Scaleforms._ui = Scaleform.requestWideScreen("scaleformui");
        if (ScaleformUI.Scaleforms._radialMenu == null)
            ScaleformUI.Scaleforms._radialMenu = Scaleform.requestWideScreen("radialmenu");
        if (ScaleformUI.Scaleforms._radioMenu == null)
            ScaleformUI.Scaleforms._radioMenu = Scaleform.requestWideScreen("radiomenu");
        if (!ScaleformUI.Scaleforms._pauseMenu?.Loaded) ScaleformUI.Scaleforms._pauseMenu?.load();
    }
});

// src/menus/UIMenu/items/uimenuitem.ts
class MainView {}

class TabView {}

class UIMenuItem {
    Parent = null;
    ParentColumn = null;
    Panels = [];
    SidePanel = null;
    ItemData;
    Hovered = false;
    _selected = false;
    _label = "";
    _rightLabel = "";
    _enabled;
    _leftBadge = 0 /* NONE */;
    _rightBadge = 0 /* NONE */;
    blinkDescription;
    mainColor;
    highlightColor;
    textColor = SColor.HUD_White;
    highlightedTextColor = SColor.HUD_Black;
    description;
    _activatedEmitter = new ItemChangeCallbackBuilder();
    _highlighedEmitter = new ItemChangeCallbackBuilder();
    labelFont = ScaleformFonts.CHALET_LONDON_NINETEENSIXTY;
    rightLabelFont = ScaleformFonts.CHALET_LONDON_NINETEENSIXTY;
    _itemId = 0;
    _formatLeftLabel = "";
    _formatRightLabel = "";
    constructor(text, description, mainColor, highlightColor, textColor, highlightedTextColor) {
        this._enabled = true;
        this.mainColor = mainColor ?? SColor.HUD_Panel_light;
        this.highlightColor = highlightColor ?? SColor.HUD_White;
        this.textColor = textColor ?? SColor.HUD_White;
        this.highlightedTextColor = highlightedTextColor ?? SColor.HUD_Black;
        this.Label = text;
        this.description = description ?? "";
        this.blinkDescription = false;
    }
    onActivated(delegate) {
        this._activatedEmitter.add(delegate);
    }
    onHighlighted(delegate) {
        this._highlighedEmitter.add(delegate);
    }
    activatedEmit() {
        this._activatedEmitter.toDelegate()(this.Parent, this);
    }
    highlighedEmit() {
        this._highlighedEmitter.toDelegate()(this.Parent, this);
    }
    set Label(_label) {
        this._label = _label;
        this._formatLeftLabel = _label.startsWith("~") ? _label : "~s~" + _label;
        if (this._selected) {
            this._formatLeftLabel = this._formatLeftLabel.replace("~w~", "~l~");
            this._formatLeftLabel = this._formatLeftLabel.replace("~s~", "~l~");
        } else {
            this._formatLeftLabel = this._formatLeftLabel.replace("~l~", "~s~");
        }
        if (
            this.Parent !== null &&
            this.Parent.Visible &&
            this.Parent.Pagination.IsItemVisible(this.Parent.Items.indexOf(this))
        ) {
            ScaleformUI.Scaleforms._ui.callFunction(
                "SET_LEFT_LABEL",
                this.Parent.Pagination.GetScaleformIndex(this.Parent.Items.indexOf(this)),
                this._formatLeftLabel
            );
        }
        if (this.ParentColumn != null && this.ParentColumn.Parent.Visible) {
            if (this.ParentColumn.Parent instanceof MainView)
                ScaleformUI.Scaleforms._pauseMenu._lobby?.callFunction(
                    "UPDATE_SETTINGS_ITEM_LABEL",
                    this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this)),
                    this._formatLeftLabel
                );
            else if (this.ParentColumn.Parent instanceof TabView)
                ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
                    "UPDATE_PLAYERS_TAB_SETTINGS_ITEM_LABEL",
                    this.ParentColumn.ParentTab,
                    this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this)),
                    this._formatLeftLabel
                );
        }
    }
    get Label() {
        return this._label;
    }
    set RightLabel(value) {
        this._rightLabel = value;
        this._formatRightLabel = value.startsWith("~") ? value : "~s~" + value;
        if (this._selected) {
            this._formatRightLabel = this._formatRightLabel.replace("~w~", "~l~");
            this._formatRightLabel = this._formatRightLabel.replace("~s~", "~l~");
        } else {
            this._formatRightLabel = this._formatRightLabel.replace("~l~", "~s~");
        }
        if (
            this.Parent != null &&
            this.Parent.Visible &&
            this.Parent.Pagination.IsItemVisible(this.Parent.MenuItems.indexOf(this))
        ) {
            ScaleformUI.Scaleforms._ui.callFunction(
                "SET_RIGHT_LABEL",
                this.Parent.Pagination.GetScaleformIndex(this.Parent.MenuItems.indexOf(this)),
                this._formatRightLabel
            );
        }
        if (this.ParentColumn != null && this.ParentColumn.Parent.Visible) {
            if (this.ParentColumn.Parent instanceof MainView)
                ScaleformUI.Scaleforms._pauseMenu._lobby?.callFunction(
                    "UPDATE_SETTINGS_ITEM_LABEL_RIGHT",
                    this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this)),
                    this._formatRightLabel
                );
            else if (this.ParentColumn.Parent instanceof TabView)
                ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
                    "UPDATE_PLAYERS_TAB_SETTINGS_ITEM_LABEL_RIGHT",
                    this.ParentColumn.ParentTab,
                    this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this)),
                    this._formatRightLabel
                );
        }
    }
    get RightLabel() {
        return this._rightLabel;
    }
    set LeftBadge(value) {
        this._leftBadge = value;
    }
    get LeftBadge() {
        return this._leftBadge;
    }
    set RightBadge(value) {
        this._rightBadge = value;
    }
    get RightBadge() {
        return this._rightBadge;
    }
    set MainColor(value) {
        this.mainColor = value;
        if (
            this.Parent !== null &&
            this.Parent.Visible &&
            this.Parent.Pagination.IsItemVisible(this.Parent.Items.indexOf(this))
        ) {
            ScaleformUI.Scaleforms._ui.callFunction(
                "UPDATE_COLORS",
                this.Parent.Pagination.GetScaleformIndex(this.Parent.Items.indexOf(this)),
                value,
                this.highlightColor,
                this.textColor,
                this.highlightedTextColor
            );
        }
    }
    get MainColor() {
        return this.mainColor;
    }
    set HighlightColor(value) {
        this.highlightColor = value;
        if (
            this.Parent !== null &&
            this.Parent.Visible &&
            this.Parent.Pagination.IsItemVisible(this.Parent.Items.indexOf(this))
        ) {
            ScaleformUI.Scaleforms._ui.callFunction(
                "UPDATE_COLORS",
                this.Parent.Pagination.GetScaleformIndex(this.Parent.Items.indexOf(this)),
                this.mainColor,
                value,
                this.textColor,
                this.highlightedTextColor
            );
        }
    }
    get HighlightColor() {
        return this.highlightColor;
    }
    set TextColor(value) {
        this.textColor = value;
        if (
            this.Parent !== null &&
            this.Parent.Visible &&
            this.Parent.Pagination.IsItemVisible(this.Parent.Items.indexOf(this))
        ) {
            ScaleformUI.Scaleforms._ui.callFunction(
                "UPDATE_COLORS",
                this.Parent.Pagination.GetScaleformIndex(this.Parent.Items.indexOf(this)),
                this.mainColor,
                this.highlightColor,
                value,
                this.highlightedTextColor
            );
        }
    }
    get TextColor() {
        return this.textColor;
    }
    set HighlightedTextColor(value) {
        this.highlightedTextColor = value;
        if (
            this.Parent !== null &&
            this.Parent.Visible &&
            this.Parent.Pagination.IsItemVisible(this.Parent.Items.indexOf(this))
        ) {
            ScaleformUI.Scaleforms._ui.callFunction(
                "UPDATE_COLORS",
                this.Parent.Pagination.GetScaleformIndex(this.Parent.Items.indexOf(this)),
                this.mainColor,
                this.highlightColor,
                this.textColor,
                value
            );
        }
    }
    get HighlightedTextColor() {
        return this.highlightedTextColor;
    }
    set LabelFont(value) {
        this.labelFont = value;
        if (
            this.Parent !== null &&
            this.Parent.Visible &&
            this.Parent.Pagination.IsItemVisible(this.Parent.Items.indexOf(this))
        ) {
            ScaleformUI.Scaleforms._ui.callFunction(
                "SET_ITEM_LABEL_FONT",
                this.Parent.Pagination.GetScaleformIndex(this.Parent.Items.indexOf(this)),
                value.fontName,
                value.fontId
            );
        }
        if (this.ParentColumn != null && this.ParentColumn.Parent.Visible) {
            if (this.ParentColumn.Parent instanceof MainView)
                ScaleformUI.Scaleforms._pauseMenu._lobby?.callFunction(
                    "SET_SETTINGS_ITEM_LABEL_FONT",
                    this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this)),
                    value.fontName,
                    value.fontId
                );
            else if (this.ParentColumn.Parent instanceof TabView)
                ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
                    "SET_PLAYERS_TAB_SETTINGS_ITEM_LABEL_FONT",
                    this.ParentColumn.ParentTab,
                    this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this)),
                    value.fontName,
                    value.fontId
                );
        }
    }
    get LabelFont() {
        return this.labelFont;
    }
    set RightLabelFont(value) {
        this.rightLabelFont = value;
        if (
            this.Parent !== null &&
            this.Parent.Visible &&
            this.Parent.Pagination.IsItemVisible(this.Parent.Items.indexOf(this))
        ) {
            ScaleformUI.Scaleforms._ui.callFunction(
                "SET_ITEM_RIGHT_LABEL_FONT",
                this.Parent.Pagination.GetScaleformIndex(this.Parent.Items.indexOf(this)),
                value.fontName,
                value.fontId
            );
        }
        if (this.ParentColumn != null && this.ParentColumn.Parent.Visible) {
            if (this.ParentColumn.Parent instanceof MainView)
                ScaleformUI.Scaleforms._pauseMenu._lobby?.callFunction(
                    "SET_SETTINGS_ITEM_RIGHT_LABEL_FONT",
                    this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this)),
                    value.fontName,
                    value.fontId
                );
            else if (this.ParentColumn.Parent instanceof TabView)
                ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
                    "SET_PLAYERS_TAB_SETTINGS_ITEM_RIGHT_LABEL_FONT",
                    this.ParentColumn.ParentTab,
                    this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this)),
                    value.fontName,
                    value.fontId
                );
        }
    }
    get RightLabelFont() {
        return this.rightLabelFont;
    }
    set BlinkDescription(value) {
        this.blinkDescription = value;
        if (
            this.Parent !== null &&
            this.Parent.Visible &&
            this.Parent.Pagination.IsItemVisible(this.Parent.Items.indexOf(this))
        ) {
            ScaleformUI.Scaleforms._ui.callFunction(
                "SET_BLINK_DESC",
                this.Parent.Pagination.GetScaleformIndex(this.Parent.Items.indexOf(this)),
                value
            );
        }
        if (this.ParentColumn != null && this.ParentColumn.Parent.Visible) {
            if (this.ParentColumn.Parent instanceof MainView)
                ScaleformUI.Scaleforms._pauseMenu._lobby?.callFunction(
                    "UPDATE_SETTINGS_ITEM_BLINK_DESC",
                    this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this)),
                    value
                );
            else if (this.ParentColumn.Parent instanceof TabView)
                ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
                    "UPDATE_PLAYERS_TAB_SETTINGS_ITEM_BLINK_DESC",
                    this.ParentColumn.ParentTab,
                    this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this)),
                    value
                );
        }
    }
    get BlinkDescription() {
        return this.blinkDescription;
    }
    set Selected(value) {
        this._selected = value;
        if (value) {
            this._formatLeftLabel = this._formatLeftLabel.replace("~w~", "~l~");
            this._formatLeftLabel = this._formatLeftLabel.replace("~s~", "~l~");
            if (!isNullOrWhiteSpace(this._formatRightLabel)) {
                this._formatRightLabel = this._formatRightLabel.replace("~w~", "~l~");
                this._formatRightLabel = this._formatRightLabel.replace("~s~", "~l~");
            }
            this.highlighedEmit();
        } else {
            this._formatLeftLabel = this._formatLeftLabel.replace("~l~", "~s~");
            if (!isNullOrWhiteSpace(this._formatRightLabel)) {
                this._formatRightLabel = this._formatRightLabel.replace("~l~", "~s~");
            }
        }
        if (
            this.Parent !== null &&
            this.Parent.Visible &&
            this.Parent.Pagination.IsItemVisible(this.Parent.Items.indexOf(this))
        ) {
            ScaleformUI.Scaleforms._ui.callFunction(
                "SET_ITEM_LABELS",
                this.Parent.Pagination.GetScaleformIndex(this.Parent.Items.indexOf(this)),
                this._formatLeftLabel,
                this._formatRightLabel
            );
        }
        if (this.ParentColumn != null && this.ParentColumn.Parent.Visible) {
            if (this.ParentColumn.Parent instanceof MainView)
                ScaleformUI.Scaleforms._pauseMenu._lobby?.callFunction(
                    "UPDATE_SETTINGS_ITEM_LABELS",
                    this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this)),
                    this._formatLeftLabel,
                    this._formatRightLabel
                );
            else if (this.ParentColumn.Parent instanceof TabView)
                ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
                    "UPDATE_PLAYERS_TAB_SETTINGS_ITEM_LABELS",
                    this.ParentColumn.ParentTab,
                    this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this)),
                    this._formatLeftLabel,
                    this._formatRightLabel
                );
        }
    }
    get Selected() {
        return this._selected;
    }
    set Description(value) {
        this.description = value;
        if (
            this.Parent !== null &&
            this.Parent.Visible &&
            this.Parent.Pagination.IsItemVisible(this.Parent.Items.indexOf(this))
        ) {
            AddTextEntry(
                `menu_${BreadcrumbsHandler.CurrentDepth}_desc_${this.Parent.Items.indexOf(this)}`,
                this.description
            );
            BeginScaleformMovieMethod(ScaleformUI.Scaleforms._ui.handle, "UPDATE_ITEM_DESCRIPTION");
            ScaleformMovieMethodAddParamInt(this.Parent.Pagination.GetScaleformIndex(this.Parent.Items.indexOf(this)));
            BeginTextCommandScaleformString(
                `menu_${BreadcrumbsHandler.CurrentDepth}_desc_${this.Parent.Items.indexOf(this)}`
            );
            EndTextCommandScaleformString_2();
            EndScaleformMovieMethod();
        }
        if (this.ParentColumn != null && this.ParentColumn.Parent.Visible) {
            if (this.ParentColumn.Parent instanceof MainView) {
                AddTextEntry(
                    `lobbymenu_desc_${this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this))}`,
                    this.description
                );
                const lobby = ScaleformUI.Scaleforms._pauseMenu._lobby;
                if (lobby) {
                    BeginScaleformMovieMethod(lobby.handle, "UPDATE_SETTINGS_ITEM_DESCRIPTION");
                    ScaleformMovieMethodAddParamInt(
                        this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this))
                    );
                    BeginTextCommandScaleformString(
                        `lobbymenu_desc_${this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this))}`
                    );
                    EndTextCommandScaleformString_2();
                    EndScaleformMovieMethod();
                }
            } else if (this.ParentColumn.Parent instanceof TabView) {
                AddTextEntry(
                    `pausemenu_${this.ParentColumn.ParentTab}_desc_${this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this))}`,
                    this.description
                );
                const pause = ScaleformUI.Scaleforms._pauseMenu._pause;
                if (pause) {
                    BeginScaleformMovieMethod(pause.handle, "UPDATE_PLAYERS_TAB_SETTINGS_ITEM_DESCRIPTION");
                    ScaleformMovieMethodAddParamInt(this.ParentColumn.ParentTab);
                    ScaleformMovieMethodAddParamInt(
                        this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this))
                    );
                    BeginTextCommandScaleformString(
                        `pausemenu_${this.ParentColumn.ParentTab}_desc_${this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this))}`
                    );
                    EndTextCommandScaleformString_2();
                    EndScaleformMovieMethod();
                }
            }
        }
    }
    get Description() {
        return this.description;
    }
    set Enabled(value) {
        this._enabled = value;
        if (!value) this._formatLeftLabel = replaceRstarColorsWith(this._formatLeftLabel, "~c~");
        else this.Label = this._label;
        if (
            this.Parent !== null &&
            this.Parent.Visible &&
            this.Parent.Pagination.IsItemVisible(this.Parent.Items.indexOf(this))
        ) {
            ScaleformUI.Scaleforms._ui.callFunction(
                "SET_ITEM_LABELS",
                this.Parent.Pagination.GetScaleformIndex(this.Parent.MenuItems.indexOf(this)),
                this._formatLeftLabel,
                this._formatRightLabel
            );
            ScaleformUI.Scaleforms._ui.callFunction(
                "ENABLE_ITEM",
                this.Parent.Pagination.GetScaleformIndex(this.Parent.MenuItems.indexOf(this)),
                this._enabled
            );
        }
        if (this.ParentColumn != null && this.ParentColumn.Parent.Visible) {
            if (this.ParentColumn.Parent instanceof MainView) {
                ScaleformUI.Scaleforms._pauseMenu._lobby?.callFunction(
                    "UPDATE_SETTINGS_ITEM_LABELS",
                    this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this)),
                    this._formatLeftLabel,
                    this._formatRightLabel
                );
                ScaleformUI.Scaleforms._pauseMenu._lobby?.callFunction(
                    "ENABLE_SETTINGS_ITEM",
                    this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this)),
                    this._enabled
                );
            } else if (this.ParentColumn.Parent instanceof TabView) {
                ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
                    "UPDATE_PLAYERS_TAB_SETTINGS_ITEM_LABELS",
                    this.ParentColumn.ParentTab,
                    this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this)),
                    this._formatLeftLabel,
                    this._formatRightLabel
                );
                ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
                    "ENABLE_PLAYERS_TAB_SETTINGS_ITEM",
                    this.ParentColumn.ParentTab,
                    this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this)),
                    this._enabled
                );
            }
        }
    }
    SetLeftBadge(icon) {
        this.LeftBadge = icon;
        if (
            this.Parent !== null &&
            this.Parent.Visible &&
            this.Parent.Pagination.IsItemVisible(this.Parent.Items.indexOf(this))
        ) {
            ScaleformUI.Scaleforms._ui.callFunction(
                "SET_LEFT_BADGE",
                this.Parent.Pagination.GetScaleformIndex(this.Parent.MenuItems.indexOf(this)),
                icon
            );
        }
        if (this.ParentColumn != null && this.ParentColumn.Parent.Visible) {
            if (this.ParentColumn.Parent instanceof MainView) {
                ScaleformUI.Scaleforms._pauseMenu._lobby?.callFunction(
                    "SET_SETTINGS_ITEM_LEFT_BADGE",
                    this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this)),
                    icon
                );
            } else if (this.ParentColumn.Parent instanceof TabView) {
                ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
                    "SET_PLAYERS_TAB_SETTINGS_ITEM_LEFT_BADGE",
                    this.ParentColumn.ParentTab,
                    this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this)),
                    icon
                );
            }
        }
    }
    SetRightBadge(icon) {
        this.RightBadge = icon;
        if (
            this.Parent !== null &&
            this.Parent.Visible &&
            this.Parent.Pagination.IsItemVisible(this.Parent.Items.indexOf(this))
        ) {
            ScaleformUI.Scaleforms._ui.callFunction(
                "SET_RIGHT_BADGE",
                this.Parent.Pagination.GetScaleformIndex(this.Parent.MenuItems.indexOf(this)),
                icon
            );
        }
        if (this.ParentColumn != null && this.ParentColumn.Parent.Visible) {
            if (this.ParentColumn.Parent instanceof MainView) {
                ScaleformUI.Scaleforms._pauseMenu._lobby?.callFunction(
                    "SET_SETTINGS_ITEM_RIGHT_BADGE",
                    this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this)),
                    icon
                );
            } else if (this.ParentColumn.Parent instanceof TabView) {
                ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
                    "SET_PLAYERS_TAB_SETTINGS_ITEM_RIGHT_BADGE",
                    this.ParentColumn.ParentTab,
                    this.ParentColumn.Pagination.GetScaleformIndex(this.ParentColumn.Items.indexOf(this)),
                    icon
                );
            }
        }
    }
    SetRightLabel(text) {
        this.RightLabel = text;
    }
    AddPanel(panel) {
        panel.SetParentItem(this);
        this.Panels.push(panel);
    }
    RemovePanelAt(index) {
        this.Panels.splice(index, 1);
        if (
            this.Parent !== null &&
            this.Parent.Visible &&
            this.Parent.Pagination.IsItemVisible(this.Parent.Items.indexOf(this))
        ) {
            ScaleformUI.Scaleforms._ui.callFunction(
                "REMOVE_PANEL",
                this.Parent.Pagination.GetScaleformIndex(this.Parent.MenuItems.indexOf(this)),
                index
            );
        }
    }
    AddSidePanel(panel) {
        panel.SetParentItem(this);
        this.SidePanel = panel;
        if (
            this.Parent !== null &&
            this.Parent.Visible &&
            this.Parent.Pagination.IsItemVisible(this.Parent.Items.indexOf(this))
        ) {
            if (panel instanceof UIMissionDetailsPanel) {
                const mis = panel;
                const itemIndex = this.Parent.Pagination.GetScaleformIndex(this.Parent.Items.indexOf(this));
                ScaleformUI.Scaleforms._ui.callFunction(
                    "ADD_SIDE_PANEL_TO_ITEM",
                    itemIndex,
                    0,
                    mis.PanelSide,
                    mis.TitleType,
                    mis.Title,
                    mis.TitleColor,
                    mis.TextureDict,
                    mis.TextureName
                );
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
    RemoveSidePanel() {
        this.SidePanel = null;
        if (
            this.Parent !== null &&
            this.Parent.Visible &&
            this.Parent.Pagination.IsItemVisible(this.Parent.Items.indexOf(this))
        ) {
            ScaleformUI.Scaleforms._ui.callFunction(
                "REMOVE_SIDE_PANEL_TO_ITEM",
                this.Parent.Pagination.GetScaleformIndex(this.Parent.MenuItems.indexOf(this))
            );
        }
    }
}

// src/menus/UIMenu/items/uimenucheckboxitem.ts
class UIMenuCheckboxItem extends UIMenuItem {
    _checked = false;
    Style = 0 /* Cross */;
    _checkedEmitter = new CheckboxItemChangeCallbackBuilder();
    constructor(text, style, check, description, mainColor, highlightColor) {
        super(text, description, mainColor, highlightColor, SColor.HUD_White, SColor.HUD_Black);
        this.Style = style;
        this._checked = check;
        this._itemId = 2;
    }
    onCheckboxEvent(delegate) {
        this._checkedEmitter.add(delegate);
    }
    checkEmit() {
        this._checkedEmitter.toDelegate()(this, this._checked);
    }
    set Checked(value) {
        this._checked = value;
        if (
            this.Parent !== null &&
            this.Parent.Visible &&
            this.Parent.Pagination.IsItemVisible(this.Parent.Items.indexOf(this))
        ) {
            ScaleformUI.Scaleforms._ui.callFunction(
                "SET_INPUT_EVENT",
                16,
                this.Parent.Pagination.GetScaleformIndex(this.Parent.Items.indexOf(this)),
                value
            );
        }
    }
    get Checked() {
        return this._checked;
    }
    SetRightBadge(badge) {
        throw new Error("UIMenuCheckboxItem cannot have a right badge.");
    }
    SetRightLabel(text) {
        throw new Error("UIMenuCheckboxItem cannot have a right label.");
    }
}

// src/menus/pause-menu/elements/items/pause-menu-item.ts
class PauseMenuItem {
    LabelFont = ScaleformFonts.CHALET_LONDON_NINETEENSIXTY;
    _label;
    ParentLeftItem = null;
    ParentTab = null;
    ParentColumn = null;
    _selected = false;
    constructor(label, labelFont) {
        this._label = label;
        if (labelFont) {
            this.LabelFont = labelFont;
        }
    }
    get Label() {
        return this._label;
    }
    set Label(value) {
        this._label = value;
    }
    get Selected() {
        return this._selected;
    }
    set Selected(value) {
        this._selected = value;
    }
}
var pause_menu_item_default = PauseMenuItem;

// src/menus/pause-menu/elements/items/settings-items/settings-item.ts
class SettingsItem extends pause_menu_item_default {
    rightLabel;
    enabled = true;
    Hovered = false;
    ItemType = 0 /* Basic */;
    _itemId = 0;
    Description = "";
    BlinkDescription = false;
    MainColor = SColor.HUD_Panel_light;
    HighlightColor = SColor.HUD_White;
    LeftBadge = 0 /* NONE */;
    RightBadge = 0 /* NONE */;
    customLeftBadge = { Key: "", Value: "" };
    customRightBadge = { Key: "", Value: "" };
    KeepTextColorWhite = false;
    labelFont = ScaleformFonts.CHALET_LONDON_NINETEENSIXTY;
    rightLabelFont = ScaleformFonts.CHALET_LONDON_NINETEENSIXTY;
    ParentColumn = null;
    activatedCallbacks = [];
    constructor(label, rightLabel) {
        super(label);
        this.rightLabel = rightLabel;
    }
    get Enabled() {
        return this.enabled;
    }
    set Enabled(value) {
        this.enabled = value;
        this.updateParentSlot();
    }
    get RightLabel() {
        return this.rightLabel;
    }
    set RightLabel(value) {
        this.rightLabel = value;
        this.updateParentSlot();
    }
    OnActivated(callback) {
        this.activatedCallbacks.push(callback);
    }
    activatedEmit() {
        if (this.ItemType !== 0 /* Basic */) {
            return;
        }
        for (const callback of this.activatedCallbacks) {
            callback(this);
        }
    }
    SetLeftBadge(badge) {
        this.LeftBadge = badge;
        this.updateParentSlot();
    }
    SetRightBadge(badge) {
        this.RightBadge = badge;
        this.updateParentSlot();
    }
    SetRightLabel(label) {
        this.RightLabel = label;
    }
    updateParentSlot() {
        if (!this.ParentColumn?.visible) {
            return;
        }
        const index = this.ParentColumn.Items.indexOf(this);
        if (index >= 0) {
            this.ParentColumn.UpdateSlot?.(index);
        }
    }
}

// src/menus/pause-menu/elements/items/settings-items/settings-checkbox-item.ts
class SettingsCheckboxItem extends SettingsItem {
    isChecked;
    CheckBoxStyle;
    checkboxCallbacks = [];
    constructor(label, style, checked) {
        super(label, "");
        this.ItemType = 3 /* CheckBox */;
        this._itemId = 2;
        this.CheckBoxStyle = style;
        this.isChecked = checked;
    }
    get IsChecked() {
        return this.isChecked;
    }
    set IsChecked(value) {
        this.isChecked = value;
        this.updateParentSlot();
        this.CheckboxChanged();
    }
    get Checked() {
        return this.IsChecked;
    }
    set Checked(value) {
        this.IsChecked = value;
    }
    OnCheckboxChange(callback) {
        this.checkboxCallbacks.push(callback);
    }
    checkEmit() {
        this.CheckboxChanged();
    }
    CheckboxChanged() {
        for (const callback of this.checkboxCallbacks) {
            callback(this, this.isChecked);
        }
    }
}

// src/menus/pause-menu/elements/items/settings-items/settings-list-item.ts
class SettingsListItem extends SettingsItem {
    itemIndex;
    ListItems;
    listChangedCallbacks = [];
    listSelectedCallbacks = [];
    constructor(label, items, startIndex) {
        super(label, "");
        this.ItemType = 1 /* ListItem */;
        this._itemId = 1;
        this.ListItems = items;
        this.itemIndex = 0;
        this.ItemIndex = startIndex;
    }
    get ItemIndex() {
        return this.itemIndex;
    }
    set ItemIndex(value) {
        this.itemIndex = this.normalizeIndex(value);
        this.updateParentSlot();
        this.ListChanged();
    }
    get Index() {
        return this.ItemIndex;
    }
    set Index(value) {
        this.ItemIndex = value;
    }
    get CurrentListItem() {
        return this.CurrentItem();
    }
    set CurrentListItem(value) {
        if (!this.ListItems.length) {
            return;
        }
        const foundIndex = this.ListItems.findIndex((item) => `${item}` === value);
        if (foundIndex >= 0) {
            this.ItemIndex = foundIndex;
        }
    }
    CurrentItem() {
        if (!this.ListItems.length) {
            return "";
        }
        return `${this.ListItems[this.itemIndex]}`;
    }
    OnListItemChanged(callback) {
        this.listChangedCallbacks.push(callback);
    }
    OnListItemSelected(callback) {
        this.listSelectedCallbacks.push(callback);
    }
    listChangedEmit() {
        this.ListChanged();
    }
    listSelectedEmit() {
        this.ListSelected();
    }
    ListSelected() {
        const currentItem = this.CurrentItem();
        for (const callback of this.listSelectedCallbacks) {
            callback(this, this.itemIndex, currentItem);
        }
    }
    ListChanged() {
        const currentItem = this.CurrentItem();
        for (const callback of this.listChangedCallbacks) {
            callback(this, this.itemIndex, currentItem);
        }
    }
    normalizeIndex(value) {
        if (!this.ListItems.length) {
            return 0;
        }
        if (value < 0) {
            return this.ListItems.length - 1;
        }
        if (value >= this.ListItems.length) {
            return 0;
        }
        return value;
    }
}

// src/menus/pause-menu/elements/items/settings-items/settings-progress-item.ts
class SettingsProgressItem extends SettingsItem {
    value;
    coloredBarColor = SColor.HUD_Freemode;
    MaxValue;
    _max;
    _multiplier = 5;
    barChangedCallbacks = [];
    progressSelectedCallbacks = [];
    constructor(label, max, startIndex, masked, barColor) {
        super(label, "");
        this.ItemType = masked ? 4 /* MaskedProgressBar */ : 2 /* ProgressBar */;
        this._itemId = 4;
        this.MaxValue = max;
        this._max = max;
        this.value = startIndex;
        this.ColoredBarColor = barColor;
    }
    get Value() {
        return this.value;
    }
    set Value(value) {
        this.value = value;
        this.updateParentSlot();
        this.ProgressChanged();
    }
    get SliderColor() {
        return this.ColoredBarColor;
    }
    set SliderColor(value) {
        this.ColoredBarColor = value;
    }
    get ColoredBarColor() {
        return this.coloredBarColor;
    }
    set ColoredBarColor(value) {
        this.coloredBarColor = value;
        this.updateParentSlot();
    }
    OnBarChanged(callback) {
        this.barChangedCallbacks.push(callback);
    }
    OnProgressSelected(callback) {
        this.progressSelectedCallbacks.push(callback);
    }
    ProgressSelected() {
        for (const callback of this.progressSelectedCallbacks) {
            callback(this, this.Value);
        }
    }
    ProgressChanged() {
        for (const callback of this.barChangedCallbacks) {
            callback(this, this.Value);
        }
    }
}

// src/menus/pause-menu/elements/items/settings-items/settings-slider-item.ts
class SettingsSliderItem extends SettingsItem {
    value;
    coloredBarColor = SColor.HUD_Freemode;
    MaxValue;
    _max;
    _multiplier = 5;
    _heritage = false;
    barChangedCallbacks = [];
    sliderSelectedCallbacks = [];
    constructor(label, max, startIndex, barColor) {
        super(label, "");
        this.ItemType = 7 /* SliderBar */;
        this._itemId = 3;
        this.MaxValue = max;
        this._max = max;
        this.value = startIndex;
        this.ColoredBarColor = barColor;
    }
    get Value() {
        return this.value;
    }
    set Value(value) {
        this.value = value;
        this.updateParentSlot();
        this.SliderChanged();
    }
    get SliderColor() {
        return this.ColoredBarColor;
    }
    set SliderColor(value) {
        this.ColoredBarColor = value;
    }
    get ColoredBarColor() {
        return this.coloredBarColor;
    }
    set ColoredBarColor(value) {
        this.coloredBarColor = value;
        this.updateParentSlot();
    }
    OnBarChanged(callback) {
        this.barChangedCallbacks.push(callback);
    }
    OnSliderSelected(callback) {
        this.sliderSelectedCallbacks.push(callback);
    }
    SliderChanged() {
        for (const callback of this.barChangedCallbacks) {
            callback(this, this.Value);
        }
    }
    SliderSelected() {
        for (const callback of this.sliderSelectedCallbacks) {
            callback(this, this.Value);
        }
    }
}

// src/menus/pause-menu/elements/columns/pm-column.ts
class PM_Column {
    position;
    index = 0;
    type = -1;
    columnVisible = false;
    Items = [];
    VisibleItems = 0;
    Focused = false;
    CaptionLeft = "";
    CaptionRight = "";
    Label = "";
    Color = SColor.HUD_Freemode;
    Parent = null;
    constructor(position) {
        this.position = typeof position === "number" ? position : position;
    }
    get visible() {
        return this.Parent != null && this.Parent.Visible && this.Parent.Parent != null && this.Parent.Parent.Visible;
    }
    get Index() {
        return this.index;
    }
    set Index(value) {
        if (this.Items.length === 0) {
            this.index = 0;
            return;
        }
        try {
            this.Items[this.index].Selected = false;
        } catch (e) {}
        this.index = value;
        if (this.index < 0) this.index = this.Items.length - 1;
        else if (this.index >= this.Items.length) this.index = 0;
        try {
            this.Items[this.index].Selected = true;
        } catch (e) {}
        if (this.visible && this.Parent && this.Parent.CurrentColumnIndex === this.position)
            ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
                "SET_COLUMN_HIGHLIGHT",
                this.position,
                this.index,
                false,
                false
            );
    }
    get ColumnVisible() {
        return this.columnVisible;
    }
    set ColumnVisible(value) {
        this.columnVisible = value;
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction("SHOW_COLUMN", this.position, this.columnVisible);
    }
    AddItem(item) {
        this.Items.push(item);
    }
    Clear() {
        this.ClearColumn();
    }
    Populate() {}
    SetDataSlot(index) {}
    UpdateSlot(index) {}
    AddSlot(index) {}
    RemoveSlot(idx) {
        if (idx >= this.Items.length) return;
        const selectedItem = this.Index;
        try {
            this.Items[idx].Selected = false;
        } catch (e) {}
        this.Items.splice(idx, 1);
        if (this.visible)
            ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction("REMOVE_SLOT", this.position, idx, false, false);
        if (this.Items.length > 0) {
            if (idx === this.index)
                this.index =
                    idx >= this.Items.length ? this.Items.length - 1 : idx >= 0 && idx < this.Items.length ? idx : 0;
            else {
                if (selectedItem < this.Items.length) this.index = selectedItem;
                else this.index = this.Items.length - 1;
            }
            try {
                this.Items[this.index].Selected = true;
            } catch (e) {}
            if (this.visible && this.Parent && this.Parent.CurrentColumnIndex === this.position)
                ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
                    "SET_COLUMN_HIGHLIGHT",
                    this.position,
                    idx,
                    false,
                    false
                );
        }
    }
    GoUp() {}
    GoDown() {}
    GoLeft() {}
    GoRight() {}
    Select() {}
    GoBack() {}
    MouseScroll(dir) {}
    HighlightColumn(highlighted = false, moveFocus = false, prevHighlight = false) {
        if (this.visible)
            ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
                "SET_COLUMN_FOCUS",
                this.position,
                highlighted,
                moveFocus,
                prevHighlight
            );
    }
    ClearColumn() {
        this.Items = [];
        this.index = 0;
        if (this.visible) ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction("SET_DATA_SLOT_EMPTY", this.position);
    }
    ShowColumn(show = true) {
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction("DISPLAY_DATA_SLOT", this.position);
    }
    InitColumnScroll(visible, columns, scrollType, arrowPosition, overrideFlag = false, xColOffset = 0) {
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
            "INIT_COLUMN_SCROLL",
            this.position,
            visible,
            columns,
            scrollType,
            arrowPosition,
            overrideFlag,
            xColOffset
        );
    }
    SetColumnScroll(currentPosition, maxPosition, maxVisible, caption, forceInvisible = false, captionR = "") {
        if (this.visible)
            ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
                "SET_COLUMN_SCROLL",
                this.position,
                currentPosition,
                maxPosition,
                maxVisible,
                caption ?? "",
                forceInvisible,
                captionR
            );
    }
    SetColumnScroll_Caption(caption, ...args) {
        if (this.visible) {
            const pause = ScaleformUI.Scaleforms._pauseMenu._pause;
            if (!pause) return;
            BeginScaleformMovieMethod(pause.handle, "SET_COLUMN_SCROLL");
            ScaleformMovieMethodAddParamInt(this.position);
            ScaleformMovieMethodAddParamInt(0);
            ScaleformMovieMethodAddParamInt(0);
            ScaleformMovieMethodAddParamInt(0);
            BeginTextCommandScaleformString(caption);
            for (const arg of args) {
                if (typeof arg === "number" && Number.isInteger(arg)) AddTextComponentInteger(arg);
                else if (typeof arg === "string") AddTextComponentSubstringPlayerName(arg);
                else if (typeof arg === "number") AddTextComponentFloat(arg, 2);
            }
            EndTextCommandScaleformString_2();
            EndScaleformMovieMethod();
        }
    }
    SetColumnScroll_CaptionRight(caption, rightC) {
        if (this.visible) {
            const pause = ScaleformUI.Scaleforms._pauseMenu._pause;
            if (!pause) return;
            BeginScaleformMovieMethod(pause.handle, "SET_COLUMN_SCROLL");
            ScaleformMovieMethodAddParamInt(this.position);
            ScaleformMovieMethodAddParamInt(0);
            ScaleformMovieMethodAddParamInt(0);
            ScaleformMovieMethodAddParamInt(0);
            BeginTextCommandScaleformString("CELL_EMAIL_BCON");
            AddTextComponentSubstringPlayerName(caption);
            EndTextCommandScaleformString_2();
            ScaleformMovieMethodAddParamBool(false);
            ScaleformMovieMethodAddParamPlayerNameString(rightC);
            EndScaleformMovieMethod();
        }
    }
}
var pm_column_default = PM_Column;

// src/menus/pause-menu/items/tab-left-item.ts
class TabLeftItem extends pause_menu_item_default {
    internalItem;
    enabled = true;
    mainColor = SColor.HUD_Pause_bg;
    highlightColor = SColor.HUD_White;
    textTitle = "";
    label = "";
    formatLeftLabel = "";
    keymapRightLabel1 = "";
    keymapRightLabel2 = "";
    TextureDict = "";
    TextureName = "";
    LeftItemBGType = 0 /* Full */;
    labelFont = ScaleformFonts.CHALET_LONDON_NINETEENSIXTY;
    rightLabelFont = ScaleformFonts.CHALET_LONDON_NINETEENSIXTY;
    ItemType;
    Hovered = false;
    ItemIndex = 0;
    ItemList = [];
    ParentTab = null;
    activatedHandlers = [];
    constructor(label, type, mainColor = SColor.HUD_Pause_bg, highlightColor = SColor.HUD_White, labelFont) {
        super(label);
        this.Label = label;
        this.ItemType = type;
        this.MainColor = mainColor;
        this.HighlightColor = highlightColor;
        if (labelFont) this.labelFont = labelFont;
        this.internalItem = new UIMenuItem(label, "", SColor.HUD_Pause_bg, SColor.HUD_White);
    }
    get Label() {
        return this.label;
    }
    set Label(value) {
        this.label = value;
        this.formatLeftLabel = value.startsWith("~") ? value : `~s~${value}`;
        if (!this.Enabled) {
            this.formatLeftLabel = replaceRstarColorsWith(this.formatLeftLabel, "~c~");
        } else if (this.Selected) {
            this.formatLeftLabel = this.formatLeftLabel.replace(/~w~|~s~/g, "~l~");
        } else {
            this.formatLeftLabel = this.formatLeftLabel.replace(/~l~/g, "~s~");
        }
    }
    get MainColor() {
        return this.mainColor;
    }
    set MainColor(value) {
        this.mainColor = value;
    }
    get HighlightColor() {
        return this.highlightColor;
    }
    set HighlightColor(value) {
        this.highlightColor = value;
    }
    get Enabled() {
        return this.enabled;
    }
    set Enabled(value) {
        this.enabled = value;
        if (!value) this.formatLeftLabel = replaceRstarColorsWith(this.formatLeftLabel, "~c~");
        else this.Label = this.label;
        this.updateLeftSlot();
    }
    get Selected() {
        return super.Selected;
    }
    set Selected(value) {
        super.Selected = value;
        if (value) this.formatLeftLabel = this.formatLeftLabel.replace(/~w~|~s~/g, "~l~");
        else this.formatLeftLabel = this.formatLeftLabel.replace(/~l~/g, "~s~");
        this.updateLeftSlot();
    }
    get RightTitle() {
        return this.textTitle;
    }
    set RightTitle(value) {
        this.textTitle = value;
        this.updateLeftSlot();
    }
    get KeymapRightLabel_1() {
        return this.keymapRightLabel1;
    }
    set KeymapRightLabel_1(value) {
        this.keymapRightLabel1 = value;
        this.updateLeftSlot();
    }
    get KeymapRightLabel_2() {
        return this.keymapRightLabel2;
    }
    set KeymapRightLabel_2(value) {
        this.keymapRightLabel2 = value;
        this.updateLeftSlot();
    }
    onActivated(handler) {
        this.activatedHandlers.push(handler);
    }
    UpdateBackground(txd, txn, resizeType) {
        this.TextureDict = txd;
        this.TextureName = txn;
        this.LeftItemBGType = resizeType;
        this.updateLeftSlot();
    }
    AddItem(item) {
        item.ParentLeftItem = this;
        item.ParentTab = this.ParentTab;
        this.ItemList.push(item);
    }
    Activated() {
        const index = this.ParentTab?.LeftColumn?.Items.indexOf(this) ?? -1;
        this.activatedHandlers.forEach((handler) => handler(this, index));
    }
    updateLeftSlot() {
        const parentTab = this.ParentTab;
        if (!parentTab || !parentTab.Visible || !parentTab.Parent?.Visible || !parentTab.LeftColumn) return;
        const idx = parentTab.LeftColumn.Items.indexOf(this);
        if (idx >= 0) parentTab.UpdateSlot(0 /* LEFT */, idx);
    }
}

// src/menus/pause-menu/pause-menu-base.ts
class PauseMenuBase {
    visible = false;
    CanPlayerCloseMenu = true;
    InstructionalButtons = [];
    set Visible(state) {
        this.visible = state;
        MenuHandler.ableToDraw = state;
    }
    get Visible() {
        return this.visible;
    }
    ProcessControls() {}
    ProcessMouse() {}
    processControl() {
        this.ProcessControls();
    }
    processMouse() {
        this.ProcessMouse();
    }
    draw() {
        this.Draw();
    }
    Draw() {
        DisableControlAction(0, 199, true);
        DisableControlAction(0, 200, true);
        DisableControlAction(1, 199, true);
        DisableControlAction(1, 200, true);
        DisableControlAction(2, 199, true);
        DisableControlAction(2, 200, true);
    }
}

// src/menus/pause-menu/elements/columns/missions-list-column.ts
class MissionsListColumn extends pm_column_default {
    OnIndexChanged;
    _unfilteredItems = [];
    _unfilteredSelection = 0;
    OnMissionItemActivated;
    constructor(label, maxItems = 16) {
        super(-1);
        this.Label = label;
        this.VisibleItems = maxItems;
        this.type = 2 /* MISSIONS */;
    }
    SetVisibleItems(maxItems) {
        this.VisibleItems = maxItems;
        if (this.visible) {
            this.Populate();
            this.ShowColumn();
        }
    }
    AddItem(item) {
        this.AddMissionItem(item);
    }
    AddMissionItem(item) {
        item.ParentColumn = this;
        this.Items.push(item);
        if (this.visible && this.Items.length <= this.VisibleItems) {
            const idx = this.Items.length - 1;
            this.AddSlot(idx);
            try {
                item.Selected = idx === this.index;
            } catch (e) {}
        }
    }
    SetDataSlot(index) {
        this.SendItemToScaleform(index);
    }
    UpdateSlot(index) {
        if (index >= this.Items.length) return;
        if (this.visible) this.SendItemToScaleform(index, true);
    }
    AddSlot(index) {
        if (index >= this.Items.length) return;
        if (this.visible) this.SendItemToScaleform(index, false, false, true);
    }
    AddItemAt(item, idx) {
        if (idx >= this.Items.length) return;
        this.Items.splice(idx, 0, item);
        if (this.visible) {
            this.SendItemToScaleform(idx, false, true, false);
            item.Selected = idx === this.index;
        }
    }
    RemoveItem(item) {
        const idx = this.Items.indexOf(item);
        if (idx >= 0) this.RemoveSlot(idx);
    }
    RemoveItemAt(index) {
        if (index >= this.Items.length) return;
        this.RemoveSlot(index);
    }
    Populate() {
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction("SET_DATA_SLOT_EMPTY", this.position);
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
            "SET_COLUMN_MAX_ITEMS",
            this.position,
            this.VisibleItems
        );
        for (let i = 0; i < this.Items.length; i++) {
            this.SetDataSlot(i);
        }
    }
    internalSendItemToScaleform(i, update = false, newItem = false, isSlot = false) {
        this.SendItemToScaleform(i, update, newItem, isSlot);
    }
    SendItemToScaleform(i, update = false, newItem = false, isSlot = false) {
        if (i >= this.Items.length) return;
        const item = this.Items[i];
        let str = "SET_DATA_SLOT";
        if (update) str = "UPDATE_SLOT";
        if (newItem) str = "SET_DATA_SLOT_SPLICE";
        if (isSlot) str = "ADD_SLOT";
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
            str,
            this.position,
            i,
            0,
            i,
            item.type,
            0,
            item.Enabled,
            item.Label,
            item.MainColor,
            item.HighlightColor,
            item.LeftIcon,
            item.RightIcon,
            item.LeftIconColor,
            item.RightIconColor,
            item.customLeftBadge?.Key,
            item.customLeftBadge?.Value,
            item.customRightBadge?.Key,
            item.customRightBadge?.Value,
            item.RightIconChecked,
            item.Jumpable
        );
    }
    ShowColumn(show = true) {
        super.ShowColumn(show);
        this.InitColumnScroll(this.Items.length >= this.VisibleItems, 1, 0, 1);
        this.SetColumnScroll(
            this.Index + 1,
            this.Items.length,
            this.VisibleItems,
            this.CaptionLeft,
            this.Items.length < this.VisibleItems
        );
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
            "SET_COLUMN_FOCUS",
            this.position,
            this.Focused,
            false,
            false
        );
        if (this.Items.length >= 0) {
            const it = this.CurrentItem;
            if (it && it.Jumpable) {
                try {
                    this.CurrentItem.Selected = false;
                } catch (e) {}
                this.index++;
                if (this.index >= this.Items.length) this.index = 0;
                try {
                    this.CurrentItem.Selected = true;
                } catch (e) {}
            }
        }
    }
    async GoUp() {
        try {
            try {
                this.CurrentItem.Selected = false;
            } catch (e) {}
            do {
                this.index--;
                if (this.index < 0) this.index = this.Items.length - 1;
                await Delay(0);
            } while (this.CurrentItem && this.CurrentItem.Jumpable);
            ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction("SET_COLUMN_INPUT_EVENT", this.position, 8);
            this.SetColumnScroll(
                this.Index + 1,
                this.Items.length,
                this.VisibleItems,
                this.CaptionLeft,
                this.Items.length < this.VisibleItems
            );
            try {
                this.CurrentItem.Selected = true;
            } catch (e) {}
            this.IndexChangedEvent();
        } catch (e) {
            console.debug(e);
        }
    }
    async GoDown() {
        try {
            try {
                this.CurrentItem.Selected = false;
            } catch (e) {}
            do {
                this.index++;
                if (this.index >= this.Items.length) this.index = 0;
                await Delay(0);
            } while (this.CurrentItem && this.CurrentItem.Jumpable);
            ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction("SET_COLUMN_INPUT_EVENT", this.position, 9);
            this.SetColumnScroll(
                this.Index + 1,
                this.Items.length,
                this.VisibleItems,
                this.CaptionLeft,
                this.Items.length < this.VisibleItems
            );
            try {
                this.CurrentItem.Selected = true;
            } catch (e) {}
            this.IndexChangedEvent();
        } catch (e) {
            console.debug(e);
        }
    }
    Select() {
        try {
            this.CurrentItem.ActivateMission(this.Parent);
        } catch (e) {}
        this.SelectItem();
    }
    GoBack() {
        this.Focused = false;
    }
    async MouseScroll(dir) {
        try {
            try {
                this.CurrentItem.Selected = false;
            } catch (e) {}
            do {
                this.index += dir;
                if (this.index < 0) this.index = this.Items.length - 1;
                if (this.index >= this.Items.length) this.index = 0;
                await Delay(0);
            } while (this.CurrentItem && this.CurrentItem.Jumpable);
            try {
                this.CurrentItem.Selected = true;
            } catch (e) {}
            this.IndexChangedEvent();
        } catch (e) {
            console.debug(e);
        }
    }
    get CurrentItem() {
        return this.Items[this.Index];
    }
    get CurrentSelection() {
        return this.index;
    }
    set CurrentSelection(value) {
        try {
            this.CurrentItem.Selected = false;
        } catch (e) {}
        this.index = value;
        if (this.index < 0) this.index = this.Items.length - 1;
        else if (this.index >= this.Items.length) this.index = 0;
        try {
            this.CurrentItem.Selected = true;
        } catch (e) {}
        if (this.visible)
            ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
                "SET_COLUMN_HIGHLIGHT",
                this.position,
                this.index,
                true,
                true
            );
        this.IndexChangedEvent();
    }
    RemoveItemById(id) {
        this.Items.splice(id, 1);
        if (this.visible) {
        }
    }
    SortMissions(compare) {
        try {
            try {
                this.CurrentItem.Selected = false;
            } catch (e) {}
            this._unfilteredItems = [...this.Items];
            this._unfilteredSelection = this.CurrentSelection;
            this.Clear();
            const list = this._unfilteredItems;
            list.sort(compare);
            this.Items = [...list];
            if (this.visible) {
                this.Populate();
                this.ShowColumn();
            }
        } catch (ex) {
            this.ResetFilter();
            console.debug(ex);
        }
    }
    FilterMissions(predicate) {
        if (!predicate) throw new Error("predicate is null");
        try {
            this._unfilteredItems = [...this.Items];
            this._unfilteredSelection = this.CurrentSelection;
            const filteredItems = this.Items.filter((it) => predicate(it));
            if (!filteredItems.length) {
                console.debug("ScaleformUI - No items were found, resetting the filter");
                this._unfilteredItems = [];
                this._unfilteredSelection = 0;
                return;
            }
            try {
                this.Items[this.CurrentSelection].Selected = false;
            } catch (e) {}
            this.Clear();
            this.Items = [...filteredItems];
            this.CurrentSelection = 0;
            if (this.visible) {
                this.Populate();
                this.ShowColumn();
            }
        } catch (ex) {
            this.ResetFilter();
            console.debug(ex);
            throw ex;
        }
    }
    ResetFilter() {
        try {
            if (this._unfilteredItems && this._unfilteredItems.length > 0) {
                try {
                    this.CurrentItem.Selected = false;
                } catch (e) {}
                this.Clear();
                this.Items = [...this._unfilteredItems];
                this.CurrentSelection = this._unfilteredSelection;
                if (this.visible) {
                    this.Populate();
                    this.ShowColumn();
                }
            }
        } catch (ex) {
            console.debug(ex);
        }
    }
    SelectItem() {
        if (this.OnMissionItemActivated) this.OnMissionItemActivated(this.CurrentItem, this.CurrentSelection);
    }
    IndexChangedEvent() {
        if (this.OnIndexChanged) this.OnIndexChanged(this.CurrentSelection);
    }
}

// src/menus/pause-menu/elements/columns/player-list-column.ts
class PlayerListColumn extends pm_column_default {
    OnIndexChanged;
    _unfilteredItems = [];
    _unfilteredSelection = 0;
    OnPlayerItemActivated;
    constructor(label, maxItems = 16) {
        super(-1);
        this.Label = label;
        this.VisibleItems = maxItems;
        this.type = 1 /* PLAYERS */;
    }
    SetVisibleItems(maxItems) {
        this.VisibleItems = maxItems;
        if (this.visible) {
            this.Populate();
            this.ShowColumn();
        }
    }
    AddItem(item) {
        this.AddPlayer(item);
    }
    AddPlayer(item) {
        item.ParentColumn = this;
        this.Items.push(item);
        if (this.visible) {
            const idx = this.Items.length - 1;
            this.SendItemToScaleform(idx, false, false, this.Items.length <= this.VisibleItems);
            item.Selected = idx === 0;
        }
    }
    SetDataSlot(index) {
        this.SendItemToScaleform(index);
    }
    UpdateSlot(index) {
        this.SendItemToScaleform(index, true);
    }
    AddSlot(index) {
        this.SendItemToScaleform(index, false, false, true);
    }
    RemoveItem(item) {
        const idx = this.Items.indexOf(item);
        if (idx >= 0) this.RemoveSlot(idx);
    }
    RemoveItemAt(index) {
        if (index >= this.Items.length) return;
        this.RemoveSlot(index);
    }
    RemoveSlot(index) {
        if (index >= this.Items.length) return;
        try {
            this.Items[this.Index].Dispose?.();
        } catch (e) {}
        super.RemoveSlot(index);
    }
    SendItemToScaleform(i, update = false, newItem = false, isSlot = false) {
        if (i >= this.Items.length) return;
        const fi = this.Items[i];
        let str = "SET_DATA_SLOT";
        if (update) str = "UPDATE_SLOT";
        if (newItem) str = "SET_DATA_SLOT_SPLICE";
        if (isSlot) str = "ADD_SLOT";
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
            str,
            this.position,
            i,
            0,
            i,
            2,
            fi.Rank,
            true,
            fi.Label,
            fi.ItemColor,
            fi.ColoredTag,
            fi.iconL,
            fi.boolL,
            fi.iconR,
            fi.boolR,
            fi.Status,
            fi.StatusColor,
            fi.CrewTag?.TAG
        );
        if (this.position === 0 && i === this.index) fi.Panel?.UpdatePanel();
    }
    Populate() {
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction("SET_DATA_SLOT_EMPTY", this.position);
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
            "SET_COLUMN_MAX_ITEMS",
            this.position,
            this.VisibleItems
        );
        for (let i = 0; i < this.Items.length; i++) this.SetDataSlot(i);
    }
    ShowColumn(show = true) {
        super.ShowColumn(show);
        this.InitColumnScroll(this.Items.length >= this.VisibleItems, 1, 0, 1);
        this.SetColumnScroll(
            this.Index + 1,
            this.Items.length,
            this.VisibleItems,
            this.CaptionLeft,
            this.Items.length < this.VisibleItems
        );
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
            "SET_COLUMN_FOCUS",
            this.position,
            this.Focused,
            false,
            false
        );
    }
    ClearColumn() {
        super.ClearColumn();
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction("SET_DATA_SLOT_EMPTY", 3);
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction("SET_DATA_SLOT_EMPTY", 4);
    }
    Clear() {
        if (this.visible) this.ClearColumn();
        this.Items = [];
    }
    RemovePlayer(id) {
        this.Items.splice(id, 1);
        if (this.visible) {
        }
    }
    GoUp() {
        try {
            ClearPedInPauseMenu();
            try {
                this.CurrentItem.Selected = false;
            } catch (e) {}
            this.index--;
            if (this.index < 0) this.index = this.Items.length - 1;
            ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction("SET_COLUMN_INPUT_EVENT", this.position, 8);
            try {
                this.CurrentItem.Selected = true;
            } catch (e) {}
            try {
                this.CurrentItem.CreateClonedPed?.();
            } catch (e) {}
            this.IndexChangedEvent();
        } catch (e) {
            console.debug(e);
        }
    }
    GoDown() {
        try {
            ClearPedInPauseMenu();
            try {
                this.CurrentItem.Selected = false;
            } catch (e) {}
            this.index++;
            if (this.index >= this.Items.length) this.index = 0;
            ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction("SET_COLUMN_INPUT_EVENT", this.position, 9);
            try {
                this.CurrentItem.Selected = true;
            } catch (e) {}
            try {
                this.CurrentItem.CreateClonedPed?.();
            } catch (e) {}
            try {
                this.CurrentItem.Panel?.UpdatePanel(true);
            } catch (e) {}
            this.IndexChangedEvent();
        } catch (e) {
            console.debug(e);
        }
    }
    Select() {
        this.SelectItem();
    }
    GoBack() {
        this.Focused = false;
    }
    MouseScroll(dir) {
        try {
            ClearPedInPauseMenu();
            try {
                this.CurrentItem.Selected = false;
            } catch (e) {}
            this.index += dir;
            if (this.index < 0) this.index = this.Items.length - 1;
            if (this.index >= this.Items.length) this.index = 0;
            try {
                this.CurrentItem.Selected = true;
            } catch (e) {}
            try {
                this.CurrentItem.CreateClonedPed?.();
            } catch (e) {}
            this.IndexChangedEvent();
        } catch (e) {
            console.debug(e);
        }
    }
    get CurrentItem() {
        return this.Items[this.CurrentSelection];
    }
    get CurrentSelection() {
        return this.index;
    }
    set CurrentSelection(value) {
        try {
            this.CurrentItem.Selected = false;
        } catch (e) {}
        this.index = value;
        if (this.index < 0) this.index = this.Items.length - 1;
        else if (this.index >= this.Items.length) this.index = 0;
        try {
            this.CurrentItem.Selected = true;
        } catch (e) {}
        try {
            this.CurrentItem.CreateClonedPed?.();
        } catch (e) {}
        try {
            this.CurrentItem.Panel?.UpdatePanel(true);
        } catch (e) {}
        if (this.visible)
            ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
                "SET_COLUMN_HIGHLIGHT",
                this.position,
                this.index,
                true,
                true
            );
        this.IndexChangedEvent();
    }
    SortPlayers(compare) {
        try {
            try {
                this.CurrentItem.Selected = false;
            } catch (e) {}
            this._unfilteredItems = [...this.Items];
            this._unfilteredSelection = this.CurrentSelection;
            this.Clear();
            const list = this._unfilteredItems;
            list.sort(compare);
            this.Items = [...list];
            if (this.visible) {
                this.Populate();
                this.ShowColumn();
            }
        } catch (ex) {
            this.ResetFilter();
            console.debug(ex);
        }
    }
    FilterPlayers(predicate) {
        if (!predicate) throw new Error("predicate is null");
        try {
            this._unfilteredItems = [...this.Items];
            this._unfilteredSelection = this.CurrentSelection;
            const filteredItems = this.Items.filter((it) => predicate(it));
            if (!filteredItems.length) {
                console.debug("ScaleformUI - No items were found, resetting the filter");
                this._unfilteredItems = [];
                this._unfilteredSelection = 0;
                return;
            }
            try {
                this.Items[this.CurrentSelection].Selected = false;
            } catch (e) {}
            this.Clear();
            this.Items = [...filteredItems];
            this.CurrentSelection = 0;
            if (this.visible) {
                this.Populate();
                this.ShowColumn();
            }
        } catch (ex) {
            this.ResetFilter();
            console.debug(ex);
            throw ex;
        }
    }
    ResetFilter() {
        try {
            if (this._unfilteredItems && this._unfilteredItems.length > 0) {
                try {
                    this.CurrentItem.Selected = false;
                } catch (e) {}
                this.Clear();
                this.Items = [...this._unfilteredItems];
                this.CurrentSelection = this._unfilteredSelection;
                if (this.visible) {
                    this.Populate();
                    this.ShowColumn();
                }
            }
        } catch (ex) {
            console.debug(ex);
        }
    }
    SelectItem() {
        if (this.OnPlayerItemActivated) this.OnPlayerItemActivated(this.CurrentItem, this.CurrentSelection);
    }
    IndexChangedEvent() {
        if (this.OnIndexChanged) this.OnIndexChanged(this.CurrentSelection);
    }
}

// src/menus/pause-menu/elements/columns/settings-list-column.ts
class SettingsListColumn extends pm_column_default {
    OnIndexChanged;
    _unfilteredItems = [];
    _unfilteredSelection = 0;
    OnSettingItemActivated;
    constructor(label, maxItems = 16) {
        super(-1);
        this.Label = label;
        this.VisibleItems = maxItems;
        this.type = 0 /* SETTINGS */;
    }
    SetVisibleItems(maxItems) {
        this.VisibleItems = maxItems;
        if (this.visible) {
            this.Populate();
            this.ShowColumn();
        }
    }
    AddItem(item) {
        this.AddSettings(item);
    }
    AddSettings(item) {
        const it = item;
        try {
            if (it.mainColor === SColor.HUD_Panel_light) {
                it.MainColor = SColor.HUD_Pause_bg;
            }
        } catch (e) {}
        item.ParentColumn = this;
        this.Items.push(item);
        if (this.visible && this.Items.length <= this.VisibleItems) {
            const idx = this.Items.length - 1;
            this.AddSlot(idx);
            try {
                item.Selected = idx === this.index;
            } catch (e) {}
        }
    }
    RemoveItem(item) {
        const idx = this.Items.indexOf(item);
        if (idx >= 0) this.RemoveSlot(idx);
    }
    RemoveItemAt(index) {
        if (index >= this.Items.length) return;
        this.RemoveSlot(index);
    }
    RemoveSlot(idx) {
        super.RemoveSlot(idx);
        AddTextEntry("PAUSEMENU_Current_Description", "");
    }
    ShowColumn(show = true) {
        if (!this.visible) return;
        super.ShowColumn(show);
        this.InitColumnScroll(this.Items.length >= this.VisibleItems, 1, 0, 1);
        this.SetColumnScroll(
            this.Index + 1,
            this.Items.length,
            this.VisibleItems,
            this.CaptionLeft,
            this.Items.length < this.VisibleItems
        );
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
            "SET_COLUMN_FOCUS",
            this.position,
            this.Focused,
            false,
            false
        );
        const it = this.Items.length > 0 ? this.CurrentItem : null;
        if (it && it.Jumpable) {
            try {
                this.CurrentItem.Selected = false;
            } catch (e) {}
            this.index++;
            if (this.index >= this.Items.length) this.index = 0;
            try {
                this.CurrentItem.Selected = true;
            } catch (e) {}
        }
    }
    Populate() {
        if (!this.visible) return;
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction("SET_DATA_SLOT_EMPTY", this.position);
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
            "SET_COLUMN_MAX_ITEMS",
            this.position,
            this.VisibleItems
        );
        for (let i = 0; i < this.Items.length; i++) this.SetDataSlot(i);
    }
    SetDataSlot(index) {
        if (index >= this.Items.length) return;
        if (this.visible) this.SendItemToScaleform(index);
    }
    UpdateSlot(index) {
        if (index >= this.Items.length) return;
        if (this.visible) this.SendItemToScaleform(index, true);
    }
    AddSlot(index) {
        if (index >= this.Items.length) return;
        if (this.visible) this.SendItemToScaleform(index, false, false, true);
    }
    AddItemAt(item, idx) {
        if (!this.visible) return;
        if (idx >= this.Items.length) return;
        this.Items.splice(idx, 0, item);
        if (this.visible) {
            this.SendItemToScaleform(idx, false, true, false);
            item.Selected = idx === this.index;
        }
    }
    SendItemToScaleform(i, update = false, newItem = false, isSlot = false) {
        if (i >= this.Items.length) return;
        const item = this.Items[i];
        let str = "SET_DATA_SLOT";
        if (update) str = "UPDATE_SLOT";
        if (newItem) str = "SET_DATA_SLOT_SPLICE";
        if (isSlot) str = "ADD_SLOT";
        const pause = ScaleformUI.Scaleforms._pauseMenu._pause;
        if (!pause) return;
        BeginScaleformMovieMethod(pause.handle, str);
        ScaleformMovieMethodAddParamInt(this.position);
        ScaleformMovieMethodAddParamInt(i);
        ScaleformMovieMethodAddParamInt(0);
        ScaleformMovieMethodAddParamInt(0);
        ScaleformMovieMethodAddParamInt(item._itemId);
        switch (item._itemId) {
            case 1:
                const dit = item;
                AddTextEntry("SCUI_SETTCOL_RLBL", dit.CurrentListItem);
                BeginTextCommandScaleformString("SCUI_SETTCOL_RLBL");
                EndTextCommandScaleformString_2();
                break;
            case 2:
                const check = item;
                ScaleformMovieMethodAddParamBool(check.Checked);
                break;
            case 3:
                const prItem = item;
                ScaleformMovieMethodAddParamInt(prItem.Value);
                break;
            case 4:
                const slItem = item;
                ScaleformMovieMethodAddParamInt(slItem.Value);
                break;
            case 5:
                const statsItem = item;
                ScaleformMovieMethodAddParamInt(statsItem.Value);
                break;
            default:
                ScaleformMovieMethodAddParamInt(0);
                break;
        }
        ScaleformMovieMethodAddParamBool(item.Enabled);
        AddTextEntry("SCUI_SETTCOL_LBL", item.Label);
        BeginTextCommandScaleformString("SCUI_SETTCOL_LBL");
        EndTextCommandScaleformString_2();
        ScaleformMovieMethodAddParamBool(item.BlinkDescription);
        if (item._itemId === 1) {
            ScaleformMovieMethodAddParamInt(item.MainColor?.ArgbValue ?? 0);
            ScaleformMovieMethodAddParamInt(item.HighlightColor?.ArgbValue ?? 0);
            ScaleformMovieMethodAddParamInt(item.LeftBadge ?? 0);
            ScaleformMovieMethodAddParamPlayerNameString(item.customLeftBadge?.Key ?? "");
            ScaleformMovieMethodAddParamPlayerNameString(item.customLeftBadge?.Value ?? "");
            ScaleformMovieMethodAddParamPlayerNameString(item.labelFont?.FontName ?? "");
            ScaleformMovieMethodAddParamPlayerNameString(item.rightLabelFont?.FontName ?? "");
        } else if (item._itemId === 2) {
            ScaleformMovieMethodAddParamInt(item.Style ?? 0);
            ScaleformMovieMethodAddParamInt(item.MainColor?.ArgbValue ?? 0);
            ScaleformMovieMethodAddParamInt(item.HighlightColor?.ArgbValue ?? 0);
            ScaleformMovieMethodAddParamInt(item.LeftBadge ?? 0);
            ScaleformMovieMethodAddParamPlayerNameString(item.customLeftBadge?.Key ?? "");
            ScaleformMovieMethodAddParamPlayerNameString(item.customLeftBadge?.Value ?? "");
            ScaleformMovieMethodAddParamPlayerNameString(item.labelFont?.FontName ?? "");
        } else if (item._itemId === 3) {
            ScaleformMovieMethodAddParamInt(item._max ?? 0);
            ScaleformMovieMethodAddParamInt(item._multiplier ?? 0);
            ScaleformMovieMethodAddParamInt(item.MainColor?.ArgbValue ?? 0);
            ScaleformMovieMethodAddParamInt(item.HighlightColor?.ArgbValue ?? 0);
            ScaleformMovieMethodAddParamInt(item.SliderColor?.ArgbValue ?? 0);
            ScaleformMovieMethodAddParamBool(item._heritage ?? false);
            ScaleformMovieMethodAddParamInt(item.LeftBadge ?? 0);
            ScaleformMovieMethodAddParamPlayerNameString(item.customLeftBadge?.Key ?? "");
            ScaleformMovieMethodAddParamPlayerNameString(item.customLeftBadge?.Value ?? "");
            ScaleformMovieMethodAddParamPlayerNameString(item.labelFont?.FontName ?? "");
        } else if (item._itemId === 4) {
            ScaleformMovieMethodAddParamInt(item._max ?? 0);
            ScaleformMovieMethodAddParamInt(item._multiplier ?? 0);
            ScaleformMovieMethodAddParamInt(item.MainColor?.ArgbValue ?? 0);
            ScaleformMovieMethodAddParamInt(item.HighlightColor?.ArgbValue ?? 0);
            ScaleformMovieMethodAddParamInt(item.SliderColor?.ArgbValue ?? 0);
            ScaleformMovieMethodAddParamInt(item.LeftBadge ?? 0);
            ScaleformMovieMethodAddParamPlayerNameString(item.customLeftBadge?.Key ?? "");
            ScaleformMovieMethodAddParamPlayerNameString(item.customLeftBadge?.Value ?? "");
            ScaleformMovieMethodAddParamPlayerNameString(item.labelFont?.FontName ?? "");
        } else if (item._itemId === 5) {
            ScaleformMovieMethodAddParamInt(item.Type ?? 0);
            ScaleformMovieMethodAddParamInt(item.SliderColor?.ArgbValue ?? 0);
            ScaleformMovieMethodAddParamInt(item.MainColor?.ArgbValue ?? 0);
            ScaleformMovieMethodAddParamInt(item.HighlightColor?.ArgbValue ?? 0);
        } else if (item instanceof Object && item._itemId === 9999) {
            ScaleformMovieMethodAddParamBool(item.Jumpable ?? false);
            ScaleformMovieMethodAddParamInt(item.MainColor?.ArgbValue ?? 0);
            ScaleformMovieMethodAddParamInt(item.HighlightColor?.ArgbValue ?? 0);
            ScaleformMovieMethodAddParamPlayerNameString(item.labelFont?.FontName ?? "");
        } else {
            ScaleformMovieMethodAddParamInt(item.MainColor?.ArgbValue ?? 0);
            ScaleformMovieMethodAddParamInt(item.HighlightColor?.ArgbValue ?? 0);
            BeginTextCommandScaleformString("CELL_EMAIL_BCON");
            AddTextComponentScaleform(item.RightLabel ?? "");
            EndTextCommandScaleformString_2();
            ScaleformMovieMethodAddParamInt(item.LeftBadge ?? 0);
            ScaleformMovieMethodAddParamPlayerNameString(item.customLeftBadge?.Key ?? "");
            ScaleformMovieMethodAddParamPlayerNameString(item.customLeftBadge?.Value ?? "");
            ScaleformMovieMethodAddParamInt(item.RightBadge ?? 0);
            ScaleformMovieMethodAddParamPlayerNameString(item.customRightBadge?.Key ?? "");
            ScaleformMovieMethodAddParamPlayerNameString(item.customRightBadge?.Value ?? "");
            ScaleformMovieMethodAddParamPlayerNameString(item.labelFont?.FontName ?? "");
            ScaleformMovieMethodAddParamPlayerNameString(item.rightLabelFont?.FontName ?? "");
        }
        ScaleformMovieMethodAddParamBool(item.KeepTextColorWhite ?? false);
        EndScaleformMovieMethod();
    }
    UpdateDescription() {
        AddTextEntry("PAUSEMENU_Current_Description", this.CurrentItem?.Description ?? "");
        this.SendItemToScaleform(this.Index, true);
    }
    async GoUp() {
        if (!this.visible) return;
        try {
            try {
                this.CurrentItem.Selected = false;
            } catch (e) {}
            do {
                this.index--;
                if (this.index < 0) this.index = this.Items.length - 1;
                await Delay(0);
            } while (this.CurrentItem && this.CurrentItem.Jumpable);
            ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction("SET_COLUMN_INPUT_EVENT", this.position, 8);
            AddTextEntry("PAUSEMENU_Current_Description", this.CurrentItem?.Description ?? "");
            try {
                this.CurrentItem.Selected = true;
            } catch (e) {}
            this.IndexChangedEvent();
        } catch (e) {
            console.debug(e);
        }
    }
    async GoDown() {
        if (!this.visible) return;
        try {
            try {
                this.CurrentItem.Selected = false;
            } catch (e) {}
            do {
                this.index++;
                if (this.index >= this.Items.length) this.index = 0;
                await Delay(0);
            } while (this.CurrentItem && this.CurrentItem.Jumpable);
            ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction("SET_COLUMN_INPUT_EVENT", this.position, 9);
            AddTextEntry("PAUSEMENU_Current_Description", this.CurrentItem?.Description ?? "");
            try {
                this.CurrentItem.Selected = true;
            } catch (e) {}
            this.IndexChangedEvent();
        } catch (e) {
            console.debug(e);
        }
    }
    async GoLeft() {
        if (!this.visible) return;
        if (!this.CurrentItem.Enabled) {
            PlaySoundFrontend(-1, "ERROR", "HUD_FRONTEND_DEFAULT_SOUNDSET", true);
            return;
        }
        const item = this.CurrentItem;
        if (item._itemId === 2) {
            item.Checked = !item.Checked;
            item.checkEmit?.();
        } else if (item._itemId === 3) {
            item.Value--;
        } else if (item._itemId === 4) {
            item.Value--;
        } else if (item._itemId === 5) {
            item.Value--;
        } else if (typeof item.listChangedEmit === "function") {
            item.Index--;
            item.listChangedEmit();
        } else if (item.callback?.toDelegate) {
            try {
                const newItem = await item.callback.toDelegate()(item, 0 /* Left */);
                if (typeof newItem === "string") item.CurrentListItem = newItem;
            } catch (e) {
                console.debug(e);
            }
        }
        PlaySoundFrontend(-1, "NAV_LEFT_RIGHT", "HUD_FRONTEND_DEFAULT_SOUNDSET", true);
    }
    async GoRight() {
        if (!this.visible) return;
        if (!this.CurrentItem.Enabled) {
            PlaySoundFrontend(-1, "ERROR", "HUD_FRONTEND_DEFAULT_SOUNDSET", true);
            return;
        }
        const item = this.CurrentItem;
        if (item._itemId === 2) {
            item.Checked = !item.Checked;
            item.checkEmit?.();
        } else if (item._itemId === 3) {
            item.Value++;
        } else if (item._itemId === 4) {
            item.Value++;
        } else if (item._itemId === 5) {
            item.Value++;
        } else if (typeof item.listChangedEmit === "function") {
            item.Index++;
            item.listChangedEmit();
        } else if (item.callback?.toDelegate) {
            try {
                const newItem = await item.callback.toDelegate()(item, 1 /* Right */);
                if (typeof newItem === "string") item.CurrentListItem = newItem;
            } catch (e) {
                console.debug(e);
            }
        }
        PlaySoundFrontend(-1, "NAV_LEFT_RIGHT", "HUD_FRONTEND_DEFAULT_SOUNDSET", true);
    }
    Select() {
        if (!this.visible) return;
        const item = this.CurrentItem;
        if (!item.Enabled) {
            PlaySoundFrontend(-1, "ERROR", "HUD_FRONTEND_DEFAULT_SOUNDSET", true);
            return;
        }
        if (item._itemId === 2) {
            item.Checked = !item.Checked;
            item.checkEmit?.();
            this.SelectItem();
            return;
        }
        if (typeof item.listSelectedEmit === "function") {
            item.listSelectedEmit();
            item.activatedEmit?.();
            this.SelectItem();
            return;
        }
        item.activatedEmit?.();
        this.SelectItem();
    }
    async MouseScroll(dir) {
        if (!this.visible) return;
        try {
            try {
                this.CurrentItem._selected = false;
            } catch (e) {}
            do {
                await Delay(0);
                this.index += dir;
                if (this.index < 0) this.index = this.Items.length - 1;
                if (this.index >= this.Items.length) this.index = 0;
            } while (this.CurrentItem && this.CurrentItem.Jumpable);
            AddTextEntry("PAUSEMENU_Current_Description", this.CurrentItem.Description ?? "");
            try {
                this.CurrentItem._selected = true;
            } catch (e) {}
            this.IndexChangedEvent();
        } catch (e) {
            console.debug(e);
        }
    }
    get CurrentItem() {
        return this.Items[this.Index];
    }
    get CurrentSelection() {
        return this.index;
    }
    set CurrentSelection(value) {
        try {
            this.CurrentItem.Selected = false;
        } catch (e) {}
        this.index = value;
        if (this.index < 0) this.index = this.Items.length - 1;
        else if (this.index >= this.Items.length) this.index = 0;
        try {
            this.CurrentItem.Selected = true;
        } catch (e) {}
        if (this.visible && this.Focused)
            ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
                "SET_COLUMN_HIGHLIGHT",
                this.position,
                this.index,
                true,
                true
            );
        this.IndexChangedEvent();
    }
    UpdateItemLabels(index, leftLabel, rightLabel) {
        if (this.visible) {
            if (index >= this.Items.length) return;
            this.Items[index].Label = leftLabel;
            this.Items[index].SetRightLabel?.(rightLabel);
        }
    }
    UpdateItemBlinkDescription(index, blink) {
        if (this.visible) {
            if (index >= this.Items.length) return;
            this.Items[index].BlinkDescription = blink;
        }
    }
    UpdateItemLabel(index, label) {
        if (this.visible) {
            if (index >= this.Items.length) return;
            this.Items[index].Label = label;
        }
    }
    UpdateItemRightLabel(index, label) {
        if (this.visible) {
            if (index >= this.Items.length) return;
            this.Items[index].SetRightLabel?.(label);
        }
    }
    UpdateItemLeftBadge(index, badge) {
        if (this.visible) {
            if (index >= this.Items.length) return;
            this.Items[index].SetLeftBadge?.(badge);
        }
    }
    UpdateItemRightBadge(index, badge) {
        if (this.visible) {
            if (index >= this.Items.length) return;
            this.Items[index].SetRightBadge?.(badge);
        }
    }
    EnableItem(index, enable) {
        if (this.visible) {
            if (index >= this.Items.length) return;
            this.Items[index].Enabled = enable;
        }
    }
    SortSettings(compare) {
        if (!this.visible) return;
        try {
            try {
                this.CurrentItem.Selected = false;
            } catch (e) {}
            this._unfilteredItems = [...this.Items];
            this._unfilteredSelection = this.CurrentSelection;
            this.Clear();
            const list = this._unfilteredItems;
            list.sort(compare);
            this.Items = [...list];
            if (this.visible) {
                this.Populate();
                this.ShowColumn();
            }
        } catch (ex) {
            this.ResetFilter();
            console.debug(ex);
        }
    }
    FilterSettings(predicate) {
        if (!this.visible) return;
        if (!predicate) throw new Error("predicate is null");
        try {
            this._unfilteredItems = [...this.Items];
            this._unfilteredSelection = this.CurrentSelection;
            const filteredItems = this.Items.filter((it) => predicate(it));
            if (!filteredItems.length) {
                console.debug("ScaleformUI - No items were found, resetting the filter");
                this._unfilteredItems = [];
                this._unfilteredSelection = 0;
                return;
            }
            try {
                this.Items[this.CurrentSelection].Selected = false;
            } catch (e) {}
            this.Clear();
            this.Items = [...filteredItems];
            this.CurrentSelection = 0;
            if (this.visible) {
                this.Populate();
                this.ShowColumn();
            }
        } catch (ex) {
            this.ResetFilter();
            console.debug(ex);
            throw ex;
        }
    }
    ResetFilter() {
        if (!this.visible) return;
        try {
            if (this._unfilteredItems != null && this._unfilteredItems.length > 0) {
                try {
                    this.CurrentItem.Selected = false;
                } catch (e) {}
                this.Clear();
                this.Items = [...this._unfilteredItems];
                this.CurrentSelection = this._unfilteredSelection;
                if (this.visible) {
                    this.Populate();
                    this.ShowColumn();
                }
            }
        } catch (ex) {
            console.debug(ex);
        }
    }
    ClearColumn() {
        super.ClearColumn();
        AddTextEntry("PAUSEMENU_Current_Description", "");
    }
    SelectItem() {
        if (this.OnSettingItemActivated) this.OnSettingItemActivated(this.CurrentItem, this.CurrentSelection);
    }
    IndexChangedEvent() {
        if (this.OnIndexChanged) this.OnIndexChanged(this.CurrentSelection);
    }
}

// src/menus/pause-menu/elements/columns/store-list-column.ts
class StoreListColumn extends pm_column_default {
    OnIndexChanged;
    _unfilteredItems = [];
    _unfilteredSelection = 0;
    StoreItemActivated;
    constructor(label) {
        super(-1);
        this.Label = label;
        this.VisibleItems = 4;
        this.type = 3 /* STORE */;
    }
    AddStoreItem(item) {
        item.ParentColumn = this;
        this.Items.push(item);
        if (this.visible && this.Items.length <= this.VisibleItems) {
            const idx = this.Items.length - 1;
            this.AddSlot(idx);
            item.Selected = idx === this.index;
        }
    }
    SetDataSlot(index) {
        this.SendItemToScaleform(index);
    }
    UpdateSlot(index) {
        if (index >= this.Items.length) return;
        if (this.visible) this.SendItemToScaleform(index, true);
    }
    AddSlot(index) {
        if (index >= this.Items.length) return;
        if (this.visible) this.SendItemToScaleform(index, false, false, true);
    }
    RemoveItem(item) {
        const idx = this.Items.indexOf(item);
        if (idx >= 0) this.RemoveSlot(idx);
    }
    RemoveItemAt(index) {
        if (index >= this.Items.length) return;
        this.RemoveSlot(index);
    }
    Populate() {
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction("SET_DATA_SLOT_EMPTY", this.position);
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
            "SET_COLUMN_MAX_ITEMS",
            this.position,
            this.VisibleItems
        );
        for (let i = 0; i < this.Items.length; i++) this.SetDataSlot(i);
    }
    SendItemToScaleform(i, update = false, newItem = false, isSlot = false) {
        if (i >= this.Items.length) return;
        const item = this.Items[i];
        let str = "SET_DATA_SLOT";
        if (update) str = "UPDATE_SLOT";
        if (newItem) str = "ADD_SLOT";
        if (isSlot) str = "SET_SLOT_EMPTY";
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
            str,
            this.position,
            i,
            0,
            0,
            i,
            0,
            item.Enabled,
            item.textureDictionary,
            item.textureName,
            item.Description
        );
    }
    ShowColumn(show = true) {
        super.ShowColumn(show);
        this.InitColumnScroll(true, 1, 0, 1);
        this.SetColumnScroll(
            this.Index + 1,
            this.Items.length,
            this.VisibleItems,
            this.CaptionLeft,
            this.Items.length < this.VisibleItems
        );
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
            "SET_COLUMN_FOCUS",
            this.position,
            this.Focused,
            false,
            false
        );
    }
    Clear() {
        if (this.visible) this.ClearColumn();
        this.Items = [];
    }
    GoUp() {
        try {
            try {
                this.CurrentItem.Selected = false;
            } catch (e) {}
            this.index--;
            if (this.index < 0) this.index = this.Items.length - 1;
            ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction("SET_COLUMN_INPUT_EVENT", this.position, 8);
            try {
                this.CurrentItem.Selected = true;
            } catch (e) {}
            this.IndexChangedEvent();
        } catch (e) {
            console.debug(e);
        }
    }
    GoDown() {
        try {
            try {
                this.CurrentItem.Selected = false;
            } catch (e) {}
            this.index++;
            if (this.index >= this.Items.length) this.index = 0;
            ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction("SET_COLUMN_INPUT_EVENT", this.position, 9);
            try {
                this.CurrentItem.Selected = true;
            } catch (e) {}
            this.IndexChangedEvent();
        } catch (e) {
            console.debug(e);
        }
    }
    Select() {
        this.SelectItem();
    }
    GoBack() {
        this.Focused = false;
    }
    MouseScroll(dir) {
        try {
            try {
                this.CurrentItem.Selected = false;
            } catch (e) {}
            this.index += dir;
            if (this.index < 0) this.index = this.Items.length - 1;
            if (this.index >= this.Items.length) this.index = 0;
            try {
                this.CurrentItem.Selected = true;
            } catch (e) {}
            this.IndexChangedEvent();
        } catch (e) {
            console.debug(e);
        }
    }
    get CurrentItem() {
        return this.Items[this.CurrentSelection];
    }
    get CurrentSelection() {
        return this.index;
    }
    set CurrentSelection(value) {
        try {
            this.CurrentItem.Selected = false;
        } catch (e) {}
        this.index = value;
        if (this.index < 0) this.index = this.Items.length - 1;
        else if (this.index >= this.Items.length) this.index = 0;
        try {
            this.CurrentItem.Selected = true;
        } catch (e) {}
        if (this.visible)
            ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
                "SET_COLUMN_HIGHLIGHT",
                this.position,
                this.index,
                true,
                true
            );
        this.IndexChangedEvent();
    }
    RemoveItemById(id) {
        this.Items.splice(id, 1);
        if (this.visible) {
        }
    }
    SortMissions(compare) {
        try {
            try {
                this.CurrentItem.Selected = false;
            } catch (e) {}
            this._unfilteredItems = [...this.Items];
            this._unfilteredSelection = this.CurrentSelection;
            this.Clear();
            const list = this._unfilteredItems;
            list.sort(compare);
            this.Items = [...list];
            if (this.visible) {
                this.Populate();
                this.ShowColumn();
            }
        } catch (ex) {
            this.ResetFilter();
            console.debug(ex);
        }
    }
    FilterMissions(predicate) {
        if (!predicate) throw new Error("predicate is null");
        try {
            this._unfilteredItems = [...this.Items];
            this._unfilteredSelection = this.CurrentSelection;
            const filteredItems = this.Items.filter((it) => predicate(it));
            if (!filteredItems.length) {
                console.debug("ScaleformUI - No items were found, resetting the filter");
                this._unfilteredItems = [];
                this._unfilteredSelection = 0;
                return;
            }
            try {
                this.Items[this.CurrentSelection].Selected = false;
            } catch (e) {}
            this.Clear();
            this.Items = [...filteredItems];
            this.CurrentSelection = 0;
            if (this.visible) {
                this.Populate();
                this.ShowColumn();
            }
        } catch (ex) {
            this.ResetFilter();
            console.debug(ex);
            throw ex;
        }
    }
    ResetFilter() {
        try {
            if (this._unfilteredItems && this._unfilteredItems.length > 0) {
                try {
                    this.CurrentItem.Selected = false;
                } catch (e) {}
                this.Clear();
                this.Items = [...this._unfilteredItems];
                this.CurrentSelection = this._unfilteredSelection;
                if (this.visible) {
                    this.Populate();
                    this.ShowColumn();
                }
            }
        } catch (ex) {
            console.debug(ex);
        }
    }
    SelectItem() {
        if (this.StoreItemActivated) this.StoreItemActivated(this.CurrentItem, this.CurrentSelection);
    }
    IndexChangedEvent() {
        if (this.OnIndexChanged) this.OnIndexChanged(this.CurrentSelection);
    }
}

// src/menus/pause-menu/elements/items/fake-blip.ts
class FakeBlip {
    Sprite = 0;
    Position = Vector3.zero();
    Scale = 0;
    Color = 0 /* White */;
    constructor(sprite, position) {
        if (typeof sprite === "number") {
            this.Sprite = sprite;
        }
        if (position) {
            this.Position = position;
        }
    }
}
// src/menus/pause-menu/elements/items/lobby-item.ts
class LobbyItem extends pause_menu_item_default {
    _type = 0;
    _enabled = true;
    clonePed = null;
    _clonePed = null;
    _clonePedForPauseMenu = null;
    _clonePedAsleep = true;
    _clonePedLighting = false;
    keepPanelVisible = false;
    Hovered = false;
    ParentColumn = null;
    Panel;
    constructor(label) {
        super(label);
    }
    get Selected() {
        return this._selected;
    }
    set Selected(value) {
        if (this._selected === value) {
            return;
        }
        this._selected = value;
        ClearPedInPauseMenu();
        if (value) {
            this.CreateClonedPed();
        } else {
            this.Dispose();
        }
    }
    get KeepPanelVisible() {
        return this.keepPanelVisible;
    }
    set KeepPanelVisible(value) {
        this.keepPanelVisible = value;
        if (this.ParentColumn?.Parent?.Visible) {
            this.Panel?.UpdatePanel?.();
        }
    }
    get ClonePed() {
        return this.clonePed;
    }
    set ClonePed(value) {
        this.clonePed = value;
        if (this.entityExists(this.clonePed)) {
            this.CreateClonedPed();
        } else {
            ClearPedInPauseMenu();
        }
    }
    get ClonePedAsleep() {
        return this._clonePedAsleep;
    }
    set ClonePedAsleep(value) {
        this._clonePedAsleep = value;
        SetPauseMenuPedSleepState(!this._clonePedAsleep);
    }
    get ClonePedLighting() {
        return this._clonePedLighting;
    }
    set ClonePedLighting(value) {
        this._clonePedLighting = value;
        SetPauseMenuPedLighting(this._clonePedLighting);
    }
    SetOffline() {
        this.ClonePedLighting = false;
        this.ClonePedAsleep = true;
    }
    SetOnline() {
        this.ClonePedLighting = true;
        this.ClonePedAsleep = false;
    }
    CreateClonedPed() {
        if (this.entityExists(this.clonePed)) {
            if (!this.entityExists(this._clonePedForPauseMenu)) {
                this._clonePedForPauseMenu = ClonePed(this.clonePed, false, true, true);
                this.HidePed(this._clonePedForPauseMenu);
            }
        }
        if (this.ParentColumn?.visible) {
            this.Panel?.UpdatePanel?.();
            this.Panel?.ShowColumn?.();
            if (this.Panel) {
                this.Panel.ColumnVisible = true;
            }
            this.UpdateClone();
        }
    }
    Dispose() {
        ClearPedInPauseMenu();
        if (this.entityExists(this._clonePed)) {
            DeletePed(this._clonePed);
        }
        if (this.entityExists(this._clonePedForPauseMenu)) {
            DeletePed(this._clonePedForPauseMenu);
        }
        if (this.Panel) {
            this.Panel.ColumnVisible = false;
        }
    }
    get Enabled() {
        return this._enabled;
    }
    set Enabled(value) {
        this._enabled = value;
    }
    HidePed(pedHandle) {
        if (!this.entityExists(pedHandle)) {
            return;
        }
        SetEntityVisible(pedHandle, true, false);
        SetEntityInvincible(pedHandle, true);
        SetEntityCollision(pedHandle, false, false);
        FreezeEntityPosition(pedHandle, true);
        SetEntityAsMissionEntity(pedHandle, true, false);
        const [x, y, z] = GetEntityCoords(pedHandle, false);
        SetEntityCoordsNoOffset(pedHandle, x, y, z - 50, false, false, false);
    }
    async UpdateClone() {
        if (this.entityExists(this._clonePed)) {
            DeletePed(this._clonePed);
        }
        if (!this.entityExists(this.clonePed)) {
            return;
        }
        this._clonePed = ClonePed(this.clonePed, false, true, true);
        await Delay(1);
        this.HidePed(this._clonePed);
        GivePedToPauseMenu(this._clonePed, 2);
        SetPauseMenuPedSleepState(!this._clonePedAsleep);
        if (this.ParentColumn?.visible) {
            const focusLevel = this.ParentColumn.Parent?.Parent?.FocusLevel ?? 0;
            SetPauseMenuPedLighting(this._clonePedLighting && focusLevel > 0);
        }
    }
    entityExists(entity) {
        return typeof entity === "number" && entity !== 0 && DoesEntityExist(entity);
    }
}
var lobby_item_default = LobbyItem;

// src/menus/pause-menu/elements/items/friend-item.ts
var LobbyBadgeIcon;
((LobbyBadgeIcon2) => {
    LobbyBadgeIcon2[(LobbyBadgeIcon2["NONE"] = 0)] = "NONE";
    LobbyBadgeIcon2[(LobbyBadgeIcon2["ACTIVE_HEADSET"] = 47)] = "ACTIVE_HEADSET";
    LobbyBadgeIcon2[(LobbyBadgeIcon2["INACTIVE_HEADSET"] = 48)] = "INACTIVE_HEADSET";
    LobbyBadgeIcon2[(LobbyBadgeIcon2["MUTED_HEADSET"] = 49)] = "MUTED_HEADSET";
    LobbyBadgeIcon2[(LobbyBadgeIcon2["GTAV"] = 54)] = "GTAV";
    LobbyBadgeIcon2[(LobbyBadgeIcon2["WORLD"] = 63)] = "WORLD";
    LobbyBadgeIcon2[(LobbyBadgeIcon2["KICK"] = 64)] = "KICK";
    LobbyBadgeIcon2[(LobbyBadgeIcon2["RANK_FREEMODE"] = 65)] = "RANK_FREEMODE";
    LobbyBadgeIcon2[(LobbyBadgeIcon2["SPECTATOR"] = 66)] = "SPECTATOR";
    LobbyBadgeIcon2[(LobbyBadgeIcon2["IS_CONSOLE_PLAYER"] = 119)] = "IS_CONSOLE_PLAYER";
    LobbyBadgeIcon2[(LobbyBadgeIcon2["IS_PC_PLAYER"] = 120)] = "IS_PC_PLAYER";
})((LobbyBadgeIcon ||= {}));

class CrewTag {
    TAG;
    constructor(TAG = "") {
        this.TAG = TAG;
    }
}

class FriendItem extends lobby_item_default {
    itemColor;
    rank;
    status;
    statusColor = SColor.FromHudColor(-1 /* NONE */);
    crewTag = new CrewTag();
    iconL;
    iconR;
    boolL = false;
    boolR = false;
    coloredTag;
    constructor(label, itemColor, coloredTag, rank, status = "", crewTag = null) {
        super(label);
        this._type = 1;
        this.itemColor = itemColor;
        this.coloredTag = coloredTag;
        this.rank = rank;
        this.status = status;
        this.CrewTag = crewTag;
        if (this.itemColor.equals(SColor.FromHudColor(-1 /* NONE */))) {
            this.itemColor = SColor.FromHudColor(9 /* HUD_COLOUR_BLUE */);
        }
        if (this.statusColor.equals(SColor.FromHudColor(-1 /* NONE */))) {
            this.statusColor = this.itemColor;
        }
        this.iconL = 0;
        this.iconR = 65;
    }
    get Label() {
        return super.Label;
    }
    set Label(value) {
        super.Label = value;
        this.updateParentSlot();
    }
    get ItemColor() {
        return this.itemColor;
    }
    set ItemColor(value) {
        this.itemColor = value;
        this.updateParentSlot();
    }
    get ColoredTag() {
        return this.coloredTag;
    }
    set ColoredTag(value) {
        this.coloredTag = value;
        this.updateParentSlot();
    }
    get Rank() {
        return this.rank;
    }
    set Rank(value) {
        this.rank = value;
        this.updateParentSlot();
    }
    get Status() {
        return this.status;
    }
    set Status(value) {
        this.status = value;
        this.updateParentSlot();
    }
    get StatusColor() {
        return this.statusColor;
    }
    set StatusColor(value) {
        this.statusColor = value;
        this.updateParentSlot();
    }
    get CrewTag() {
        return this.crewTag;
    }
    set CrewTag(value) {
        this.crewTag = value ?? new CrewTag();
        this.updateParentSlot();
    }
    SetLeftIcon(icon) {
        this.iconL = icon;
        this.boolL = !Object.values(LobbyBadgeIcon).includes(icon);
        this.updateParentSlot();
    }
    SetRightIcon(icon) {
        this.iconR = icon;
        this.boolR = !Object.values(LobbyBadgeIcon).includes(icon);
        this.updateParentSlot();
    }
    get Selected() {
        return super.Selected;
    }
    set Selected(value) {
        super.Selected = value;
        this.updateParentSlot();
    }
    AddPanel(panel) {
        this.Panel = panel;
        if (this.Panel) {
            this.Panel.ParentItem = this;
            this.Panel.UpdatePanel?.();
        }
    }
    updateParentSlot() {
        const column = this.ParentColumn;
        if (!column?.visible || !column.Items) {
            return;
        }
        const index = column.Items.indexOf(this);
        if (index >= 0) {
            column.UpdateSlot?.(index);
        }
    }
}
// src/menus/pause-menu/elements/items/keymap-item.ts
class KeymapItem extends pause_menu_item_default {
    PrimaryKeyboard;
    PrimaryGamepad;
    SecondaryKeyboard;
    SecondaryGamepad;
    constructor(title, primaryKeyboard, secondaryKeyboardOrPrimaryGamepad = "", secondaryKeyboard, secondaryGamepad) {
        super(title);
        this.PrimaryKeyboard = primaryKeyboard;
        if (secondaryKeyboard === undefined && secondaryGamepad === undefined) {
            this.PrimaryGamepad = primaryKeyboard;
            this.SecondaryKeyboard = secondaryKeyboardOrPrimaryGamepad;
            this.SecondaryGamepad = secondaryKeyboardOrPrimaryGamepad;
            return;
        }
        this.PrimaryGamepad = secondaryKeyboardOrPrimaryGamepad;
        this.SecondaryKeyboard = secondaryKeyboard ?? "";
        this.SecondaryGamepad = secondaryGamepad ?? "";
    }
}
// src/menus/pause-menu/elements/items/mission-item.ts
class MissionItem extends pause_menu_item_default {
    enabled = true;
    type = 0;
    customLeftBadge;
    customRightBadge;
    rIcChecked = false;
    Jumpable = false;
    ParentColumn = null;
    MainColor = SColor.FromHudColor(117 /* HUD_COLOUR_PAUSE_BG */);
    HighlightColor = SColor.FromHudColor(1 /* HUD_COLOUR_WHITE */);
    LeftIcon = 0 /* NONE */;
    LeftIconColor = SColor.FromHudColor(1 /* HUD_COLOUR_WHITE */);
    RightIcon = 0 /* NONE */;
    RightIconColor = SColor.FromHudColor(1 /* HUD_COLOUR_WHITE */);
    RightIconChecked = false;
    Hovered = false;
    missionActivatedCallbacks = [];
    constructor(label, mainColor, highlightColor) {
        super(label);
        this.MainColor = mainColor ?? this.MainColor;
        this.HighlightColor = highlightColor ?? this.HighlightColor;
        this.type = 0;
        this.customLeftBadge = { Key: "", Value: "" };
        this.customRightBadge = { Key: "", Value: "" };
    }
    get Enabled() {
        return this.enabled;
    }
    set Enabled(value) {
        this.enabled = value;
    }
    onMissionActivated(callback) {
        this.missionActivatedCallbacks.push(callback);
    }
    ActivateMission(tab) {
        for (const callback of this.missionActivatedCallbacks) {
            callback(tab, this.ParentColumn, this);
        }
    }
    SetLeftIcon(icon, color) {
        this.LeftIcon = icon;
        this.LeftIconColor = color;
        this.updateParentSlot();
    }
    SetRightIcon(icon, color, checked = false) {
        this.RightIcon = icon;
        this.RightIconColor = color;
        this.RightIconChecked = checked;
        this.updateParentSlot();
    }
    SetCustomLeftIcon(txd, txn) {
        this.LeftIcon = -1;
        this.customLeftBadge = { Key: txd, Value: txn };
        this.updateParentSlot();
    }
    SetCustomRightIcon(txd, txn, checked = false) {
        this.RightIcon = -1;
        this.customRightBadge = { Key: txd, Value: txn };
        this.rIcChecked = checked;
        this.updateParentSlot();
    }
    updateParentSlot() {
        if (!this.ParentColumn?.visible) {
            return;
        }
        const index = this.ParentColumn.Items.indexOf(this);
        if (index >= 0) {
            this.ParentColumn.UpdateSlot?.(index);
        }
    }
}
// src/menus/pause-menu/elements/items/stats-tab-item.ts
class StatsTabItem extends pause_menu_item_default {
    rightLabel = "";
    coloredBarColor = SColor.HUD_Freemode;
    value = 0;
    Type;
    labelFont = ScaleformFonts.CHALET_LONDON_NINETEENSIXTY;
    rightLabelFont = ScaleformFonts.CHALET_LONDON_NINETEENSIXTY;
    ParentColumn = null;
    constructor(label, rightLabelOrValue, color) {
        super(label);
        if (typeof rightLabelOrValue === "string") {
            this.Type = 0 /* Basic */;
            this.RightLabel = rightLabelOrValue;
            return;
        }
        this.Type = 1 /* ColoredBar */;
        this.Value = rightLabelOrValue;
        this.ColoredBarColor = color ?? SColor.HUD_Freemode;
    }
    get RightLabel() {
        return this.rightLabel;
    }
    set RightLabel(value) {
        this.rightLabel = value;
        this.updateParentSlot();
    }
    get ColoredBarColor() {
        return this.coloredBarColor;
    }
    set ColoredBarColor(value) {
        this.coloredBarColor = value;
        this.updateParentSlot();
    }
    get Value() {
        return this.value;
    }
    set Value(value) {
        this.value = value;
        this.updateParentSlot();
    }
    updateParentSlot() {
        if (!this.ParentColumn?.visible) {
            return;
        }
        const index = this.ParentColumn.Items.indexOf(this);
        if (index >= 0) {
            this.ParentColumn.UpdateSlot?.(index);
        }
    }
}
// src/menus/pause-menu/elements/items/settings-items/settings-separator-item.ts
class SettingsSeparatorItem extends SettingsItem {
    IsJumpable = false;
    Jumpable = this.IsJumpable;
    constructor(label = "") {
        super(label, "");
        this._itemId = 9999;
        this.ItemType = label.length > 0 ? 6 /* Separator */ : 8 /* Empty */;
    }
    SetLeftBadge(_badge) {
        throw new Error("SettingsSeparatorItem cannot have a left badge.");
    }
    SetRightBadge(_badge) {
        throw new Error("SettingsSeparatorItem cannot have a right badge.");
    }
    SetRightLabel(_label) {
        throw new Error("SettingsSeparatorItem cannot have a right label.");
    }
}
// src/menus/pause-menu/elements/items/minimap-base-item.ts
class MinimapBaseItem {}
var minimap_base_item_default = MinimapBaseItem;
// src/menus/pause-menu/elements/items/minimap-race-checkpoint.ts
class MinimapRaceCheckpoint {
    Position = Vector3.zero();
    BlipSprite = 0;
    Scale = 0;
    Color = 0;
    Number = false;
    constructor(positionOrBlipSprite, blipSpriteOrPosition) {
        if (positionOrBlipSprite instanceof Vector3 && typeof blipSpriteOrPosition === "number") {
            this.Position = positionOrBlipSprite;
            this.BlipSprite = blipSpriteOrPosition;
            return;
        }
        if (typeof positionOrBlipSprite === "number" && blipSpriteOrPosition instanceof Vector3) {
            this.BlipSprite = positionOrBlipSprite;
            this.Position = blipSpriteOrPosition;
        }
    }
}
// src/menus/pause-menu/elements/items/minimap-route.ts
class MinimapRoute extends minimap_base_item_default {
    StartPoint = new MinimapRaceCheckpoint();
    EndPoint = new MinimapRaceCheckpoint();
    CheckPoints = [];
    RadarThickness = 18;
    MapThickness = 30;
    FollowStreet = true;
    RouteColor = 116 /* HUD_COLOUR_FREEMODE */;
    SetupCustomRoute() {
        if (this.StartPoint.Position.x === 0 && this.StartPoint.Position.y === 0 && this.StartPoint.Position.z === 0) {
            return;
        }
        ClearGpsFlags();
        SetGpsFlags(8 /* NO_ROUTE_SHIFT */, 0);
        StartGpsCustomRoute(this.RouteColor, true, true);
        RaceGalleryNextBlipSprite(this.StartPoint.BlipSprite);
        RaceGalleryAddBlip(this.StartPoint.Position.x, this.StartPoint.Position.y, this.StartPoint.Position.z);
        AddPointToGpsCustomRoute(this.StartPoint.Position.x, this.StartPoint.Position.y, this.StartPoint.Position.z);
        for (let i = 0; i < this.CheckPoints.length; i++) {
            const checkPoint = this.CheckPoints[i];
            RaceGalleryNextBlipSprite(checkPoint.BlipSprite);
            const blip = RaceGalleryAddBlip(checkPoint.Position.x, checkPoint.Position.y, checkPoint.Position.z);
            if (checkPoint.Scale > 0) SetBlipScale(blip, checkPoint.Scale);
            if (checkPoint.Number) SetBlipColour(blip, checkPoint.Color);
            else HideNumberOnBlip(blip);
            AddPointToGpsCustomRoute(checkPoint.Position.x, checkPoint.Position.y, checkPoint.Position.z);
        }
        RaceGalleryNextBlipSprite(this.EndPoint.BlipSprite);
        RaceGalleryAddBlip(this.EndPoint.Position.x, this.EndPoint.Position.y, this.EndPoint.Position.z);
        AddPointToGpsCustomRoute(this.EndPoint.Position.x, this.EndPoint.Position.y, this.EndPoint.Position.z);
        SetGpsCustomRouteRender(true, this.RadarThickness, this.MapThickness);
    }
}
// src/menus/pause-menu/elements/panels/minimap-panel.ts
class MinimapPanel {
    Parent = null;
    ParentTab = null;
    HidePedBlip = true;
    internalMapPosition = Vector2.zero;
    internalZoomDistance = 0;
    internalEnabled = false;
    turnedOn = false;
    IsRadarVisible = !IsRadarHidden();
    localCoronaMapStage = -1;
    MinimapRoute;
    MinimapBlips;
    constructor(parentTab = null) {
        this.MinimapBlips = [];
        this.MinimapRoute = new MinimapRoute();
        this.ParentTab = parentTab;
    }
    get Enabled() {
        return this.internalEnabled;
    }
    set Enabled(value) {
        const currentColumn = this.ParentTab?.CurrentColumn;
        if (this.Parent?.Visible && currentColumn?.CurrentItem?.KeepPanelVisible) {
            return;
        }
        this.internalEnabled = value;
        if (this.internalEnabled) {
            if (this.localCoronaMapStage === -1) {
                this.localCoronaMapStage = 0;
            }
        } else {
            this.localCoronaMapStage = -1;
            if (this.turnedOn) {
                this.IsRadarVisible = !IsRadarHidden();
                DisplayRadar(false);
                RaceGalleryFullscreen(false);
                this.turnedOn = false;
            }
        }
        if (this.Parent?.Visible && this.ParentTab?.Visible) {
            if (value) {
                currentColumn?.CurrentItem?.Dispose?.();
            } else {
                currentColumn?.CurrentItem?.CreateClonedPed?.();
            }
            const rightColumn = this.ParentTab.RightColumn;
            if (rightColumn) {
                rightColumn.ColumnVisible = !this.internalEnabled && currentColumn?.type !== 1 /* PLAYERS */;
            }
        }
    }
    InitializeMapSize() {
        let top = Number.NEGATIVE_INFINITY;
        let bottom = Number.POSITIVE_INFINITY;
        let left = Number.POSITIVE_INFINITY;
        let right = Number.NEGATIVE_INFINITY;
        for (const checkPoint of this.MinimapRoute.CheckPoints) {
            top = Math.max(top, checkPoint.Position.y);
            bottom = Math.min(bottom, checkPoint.Position.y);
            left = Math.min(left, checkPoint.Position.x);
            right = Math.max(right, checkPoint.Position.x);
        }
        top = Math.max(top, this.MinimapRoute.StartPoint.Position.y);
        bottom = Math.min(bottom, this.MinimapRoute.StartPoint.Position.y);
        left = Math.min(left, this.MinimapRoute.StartPoint.Position.x);
        right = Math.max(right, this.MinimapRoute.StartPoint.Position.x);
        top = Math.max(top, this.MinimapRoute.EndPoint.Position.y);
        bottom = Math.min(bottom, this.MinimapRoute.EndPoint.Position.y);
        left = Math.min(left, this.MinimapRoute.EndPoint.Position.x);
        right = Math.max(right, this.MinimapRoute.EndPoint.Position.x);
        this.internalMapPosition = new Vector2((left + right) / 2, (top + bottom) / 2);
        const distanceX = Math.abs(left - right);
        const distanceY = Math.abs(top - bottom);
        this.internalZoomDistance = distanceX > distanceY ? distanceX / 1.5 : distanceY / 2;
        this.RefreshMapPosition(this.internalMapPosition);
        LockMinimapAngle(0);
    }
    RefreshMapPosition(position) {
        this.internalMapPosition = Vector2.clone(position);
        if (this.ParentTab?.bigPic) {
            this.internalZoomDistance = 600;
        } else if (this.ParentTab) {
            this.internalZoomDistance = 1200;
        }
    }
    SetupBlips() {
        for (const blip of this.MinimapBlips) {
            RaceGalleryNextBlipSprite(blip.Sprite);
            const handle = RaceGalleryAddBlip(blip.Position.x, blip.Position.y, blip.Position.z);
            if (blip.Scale > 0) {
                SetBlipScale(handle, blip.Scale);
            }
            SetBlipColour(handle, blip.Color);
        }
    }
    MaintainMap() {
        switch (this.localCoronaMapStage) {
            case 0:
                this.InitializeMap();
                break;
            case 1:
                this.ProcessMap();
                break;
        }
    }
    async ProcessMap() {
        if (this.internalEnabled) {
            if (!this.turnedOn) {
                DisplayRadar(this.IsRadarVisible);
                RaceGalleryFullscreen(true);
                this.turnedOn = true;
            }
        } else if (this.turnedOn) {
            this.IsRadarVisible = !IsRadarHidden();
            DisplayRadar(false);
            RaceGalleryFullscreen(false);
            this.turnedOn = false;
            this.Dispose();
        }
        if (this.HidePedBlip) {
            SetPlayerBlipPositionThisFrame(-5000, -5000);
        }
        this.RefreshZoom();
    }
    InitializeMapDisplay() {
        DeleteWaypoint();
        SetWaypointOff();
        ClearGpsCustomRoute();
        ClearGpsMultiRoute();
        SetPoliceRadarBlips(false);
        this.MinimapRoute.SetupCustomRoute();
        this.SetupBlips();
    }
    InitializeMap() {
        this.InitializeMapSize();
        this.InitializeMapDisplay();
        this.RefreshZoom();
        this.localCoronaMapStage = 1;
    }
    RefreshZoom() {
        if (this.internalZoomDistance !== 0) {
            SetRadarZoomToDistance(this.internalZoomDistance);
        }
        LockMinimapPosition(this.internalMapPosition.x, this.internalMapPosition.y);
    }
    Dispose() {
        this.localCoronaMapStage = 0;
        this.internalEnabled = false;
        const setMinimapState = globalThis["N_0x2de6c5e2e996f178"];
        setMinimapState?.(0);
        SetPoliceRadarBlips(true);
        DisplayRadar(this.IsRadarVisible);
        RaceGalleryFullscreen(false);
        ClearRaceGalleryBlips();
        this.internalZoomDistance = 0;
        SetRadarZoom(0);
        SetGpsCustomRouteRender(false, 18, 30);
        SetGpsMultiRouteRender(false);
        UnlockMinimapPosition();
        UnlockMinimapAngle();
        DeleteWaypoint();
        ClearGpsCustomRoute();
        ClearGpsFlags();
        this.MinimapBlips = [];
        this.MinimapRoute = new MinimapRoute();
        SetBigmapActive(false, false);
    }
    ClearMinimap() {
        this.MinimapBlips = [];
        this.MinimapRoute = new MinimapRoute();
        this.localCoronaMapStage = 0;
        this.internalZoomDistance = 0;
        ClearRaceGalleryBlips();
        SetRadarZoom(0);
        SetGpsCustomRouteRender(false, 18, 30);
        DeleteWaypoint();
        ClearGpsCustomRoute();
        ClearGpsFlags();
        SetBigmapActive(false, false);
    }
}

// src/menus/pause-menu/elements/panels/mission-details-panel.ts
class MissionDetailsPanel extends pm_column_default {
    title = "";
    TextureDict = "";
    TextureName = "";
    get Title() {
        return this.title;
    }
    set Title(value) {
        this.title = value;
        if (this.visible) {
            ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction("SET_COLUMN_TITLE", this.position, this.title);
        }
    }
    constructor(label) {
        super(2 /* RIGHT */);
        this.Label = label;
        this.VisibleItems = 10;
        this.type = 4 /* MISSION_DETAILS */;
    }
    ShowColumn(show = true) {
        if (!this.visible) return;
        super.ShowColumn(show);
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
            "SET_COLUMN_TITLE",
            this.position,
            this.title,
            this.TextureDict,
            this.TextureName
        );
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
            "SET_COLUMN_FOCUS",
            this.position,
            this.Focused,
            false,
            false
        );
    }
    SetDataSlot(index) {
        if (!this.visible) return;
        this.SendItemToScaleform(index);
    }
    UpdateSlot(index) {
        if (index >= this.Items.length) return;
        if (this.visible) this.SendItemToScaleform(index, true);
    }
    AddSlot(index) {
        if (index >= this.Items.length) return;
        if (this.visible) this.SendItemToScaleform(index, false, false, true);
    }
    Populate() {
        if (!this.visible) return;
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction("SET_DATA_SLOT_EMPTY", this.position);
        for (let i = 0; i < this.Items.length; i++) {
            this.SetDataSlot(i);
        }
    }
    SendItemToScaleform(i, update = false, newItem = false, isSlot = false) {
        if (!this.visible || i >= this.Items.length) return;
        const pause = ScaleformUI.Scaleforms._pauseMenu._pause;
        if (!pause) return;
        const item = this.Items[i];
        let sfMethod = "SET_DATA_SLOT";
        if (update) sfMethod = "UPDATE_SLOT";
        if (newItem) sfMethod = "SET_DATA_SLOT_SPLICE";
        if (isSlot) sfMethod = "ADD_SLOT";
        BeginScaleformMovieMethod(pause.handle, sfMethod);
        PushScaleformMovieFunctionParameterInt(this.position);
        PushScaleformMovieFunctionParameterInt(i);
        PushScaleformMovieFunctionParameterInt(0);
        PushScaleformMovieFunctionParameterInt(0);
        PushScaleformMovieFunctionParameterInt(item.Type);
        PushScaleformMovieFunctionParameterInt(0);
        PushScaleformMovieFunctionParameterBool(false);
        BeginTextCommandScaleformString("CELL_EMAIL_BCON");
        for (const split of this.getSplitLabel(item.Label)) {
            AddTextComponentScaleform(split);
        }
        EndTextCommandScaleformString_2();
        PushScaleformMovieFunctionParameterString(item.TextRight ?? "");
        switch (item.Type) {
            case 2:
                PushScaleformMovieFunctionParameterInt(item.Icon ?? 0);
                PushScaleformMovieFunctionParameterInt(
                    item.IconColor?.getArgbValue() ?? SColor.HUD_None.getArgbValue()
                );
                PushScaleformMovieFunctionParameterBool(item.Tick ?? false);
                break;
            case 3:
                PushScaleformMovieFunctionParameterString(item.CrewTag?.TAG ?? "");
                PushScaleformMovieFunctionParameterBool(false);
                break;
        }
        PushScaleformMovieFunctionParameterString(
            item.LabelFont?.fontName ?? ScaleformFonts.CHALET_LONDON_NINETEENSIXTY.fontName
        );
        PushScaleformMovieFunctionParameterString(
            item._rightLabelFont?.fontName ?? ScaleformFonts.CHALET_LONDON_NINETEENSIXTY.fontName
        );
        EndScaleformMovieMethod();
    }
    UpdatePanelPicture(txd, txn) {
        const changed = this.TextureDict !== txd || this.TextureName !== txn;
        this.TextureDict = txd;
        this.TextureName = txn;
        if (this.visible && changed) {
            ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
                "SET_COLUMN_TITLE",
                this.position,
                this.title,
                this.TextureDict,
                this.TextureName
            );
        }
    }
    AddItem(item) {
        this.Items.push(item);
        if (this.visible && this.Items.length <= this.VisibleItems) {
            this.AddSlot(this.Items.length - 1);
        }
    }
    RemoveItem(idx) {
        if (idx >= 0 && idx < this.Items.length) {
            this.Items.splice(idx, 1);
        }
    }
    getSplitLabel(label) {
        if (label instanceof ScaleformLabel) {
            return label.SplitLabel;
        }
        return new ScaleformLabel(label ?? "").SplitLabel;
    }
}

// src/menus/pause-menu/tabs/base-tab.ts
class BaseTab {
    _type = 0;
    _identifier = "";
    TabColor;
    Minimap = null;
    LeftColumn = null;
    CenterColumn = null;
    RightColumn = null;
    Visible = false;
    Focused = false;
    Title;
    Active = false;
    Parent = null;
    CurrentColumnIndex = 0;
    constructor(name, color) {
        this.Title = name;
        this.TabColor = color;
    }
    get CurrentColumn() {
        switch (this.CurrentColumnIndex) {
            case 1:
                return this.CenterColumn;
            case 2:
                return this.RightColumn;
            default:
                return this.LeftColumn;
        }
    }
    Populate() {}
    Refresh(_highlightOldIndex) {}
    ShowColumns() {}
    SetDataSlot(_slot, _index) {}
    UpdateSlot(_slot, _index) {}
    AddSlot(_slot, _index) {}
    Focus() {
        this.Focused = true;
    }
    UnFocus() {
        this.Focused = false;
    }
    GoUp() {}
    GoDown() {}
    GoLeft() {}
    GoRight() {}
    Select() {}
    GoBack() {}
    MouseEvent(_eventType, _context, _index) {}
    StateChange(_state) {}
    GetColumnAtPosition(position) {
        const pos = typeof position === "number" ? position : position;
        switch (pos) {
            case 0 /* LEFT */:
                return this.LeftColumn;
            case 1 /* MIDDLE */:
                return this.CenterColumn;
            case 2 /* RIGHT */:
                return this.RightColumn;
            default:
                return null;
        }
    }
}
var base_tab_default = BaseTab;

// src/menus/pause-menu/tabs/player-list-tab.ts
class PlayerListTab extends base_tab_default {
    ForceFirstSelectionOnFocus = false;
    order = [0, 0, 0];
    constructor(name, color) {
        super(name, color);
        this._type = 2;
        this._identifier = "Page_Multi";
        this.Minimap = new MinimapPanel(this);
        this.Minimap.HidePedBlip = true;
    }
    SetupLeftColumn(column) {
        if (column instanceof MissionDetailsPanel)
            throw new Error("You cannot set the mission details column as the left column.");
        column.position = 0 /* LEFT */;
        this.LeftColumn = column;
        this.LeftColumn.Parent = this;
        this.order[0] = column.type;
    }
    SetupCenterColumn(column) {
        if (column instanceof MissionDetailsPanel)
            throw new Error("You cannot set the mission details column as the center column.");
        column.position = 1 /* MIDDLE */;
        this.CenterColumn = column;
        this.CenterColumn.Parent = this;
        this.order[1] = column.type;
    }
    SetupRightColumn(column) {
        column.position = 2 /* RIGHT */;
        this.RightColumn = column;
        this.RightColumn.Parent = this;
        this.order[2] = column.type;
    }
    SwitchColumn(index) {
        this.switchColumnInternal(index);
    }
    switchColumnInternal(index) {
        if (index > 2 /* RIGHT */ || this.order[index] === 4 /* MISSION_DETAILS */) return;
        let canHideShow = true;
        const col = this.GetColumnAtPosition(index);
        if (!col) {
            if (index < 2 /* RIGHT */) {
                this.switchColumnInternal(index + (index < this.CurrentColumnIndex ? -1 : 1));
            }
            return;
        }
        if (this.LeftColumn instanceof PlayerListColumn && this.LeftColumn.CurrentItem?.KeepPanelVisible)
            canHideShow = false;
        else if (this.CenterColumn instanceof PlayerListColumn && this.CenterColumn.CurrentItem?.KeepPanelVisible)
            canHideShow = false;
        if (canHideShow) {
            if (this.Parent?.Visible) {
                if (col instanceof PlayerListColumn) {
                    if (col.CurrentItem?.Panel != null && this.RightColumn) this.RightColumn.ColumnVisible = false;
                } else {
                    let show = true;
                    const beforeCol = this.GetColumnAtPosition(index - 1);
                    const afterCol = this.GetColumnAtPosition(index + 1);
                    if (beforeCol instanceof PlayerListColumn && !beforeCol.CurrentItem?.KeepPanelVisible) {
                        beforeCol.CurrentItem.Dispose?.();
                        show = false;
                    }
                    if (afterCol instanceof PlayerListColumn && !afterCol.CurrentItem?.KeepPanelVisible) {
                        afterCol.CurrentItem.Dispose?.();
                        show = false;
                    }
                    const right = this.GetColumnAtPosition(2 /* RIGHT */);
                    if (right) right.ColumnVisible = !show;
                }
            }
        } else if (this.RightColumn) this.RightColumn.ColumnVisible = false;
        if (index === 2 /* RIGHT */ && !canHideShow) return;
        this.CurrentColumnIndex = index;
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction("SET_MENU_LEVEL", this.CurrentColumnIndex + 1);
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction("MENU_SHIFT_DEPTH", 0, true, true);
        if (this.Parent) this.Parent.focusLevel = this.CurrentColumnIndex + 1;
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
            "SET_COLUMN_HIGHLIGHT",
            col.position,
            col.Index,
            true,
            true
        );
        col.Items[col.Index].Selected = true;
    }
    StateChange(_state) {
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction("MENU_STATE", this.order.join(""));
    }
    GoUp() {
        if (!this.Focused || !this.CurrentColumn) return;
        this.CurrentColumn.GoUp();
        this.CurrentColumn.SetColumnScroll(
            this.CurrentColumn.Index + 1,
            this.CurrentColumn.Items.length,
            this.CurrentColumn.VisibleItems,
            "",
            this.CurrentColumn.Items.length < this.CurrentColumn.VisibleItems
        );
    }
    GoDown() {
        if (!this.Focused || !this.CurrentColumn) return;
        this.CurrentColumn.GoDown();
        this.CurrentColumn.SetColumnScroll(
            this.CurrentColumn.Index + 1,
            this.CurrentColumn.Items.length,
            this.CurrentColumn.VisibleItems,
            "",
            this.CurrentColumn.Items.length < this.CurrentColumn.VisibleItems
        );
    }
    MouseEvent(eventType, context, index) {
        if (!this.Focused) return;
        if (eventType === 10 || eventType === 11) {
            this.GetColumnAtPosition(this.CurrentColumnIndex)?.MouseScroll(eventType === 10 ? -1 : 1);
            return;
        }
        if (eventType !== 5) return;
        if (context > 999) {
            const columnIndex = context - 1000;
            const col = this.GetColumnAtPosition(columnIndex);
            if (!col) return;
            if (index === 0) col.GoLeft();
            if (index === 1) col.GoRight();
            if (index === 2) col.GoUp();
            if (index === 3) col.GoDown();
            return;
        }
        const target =
            this.CurrentColumnIndex === context
                ? this.GetColumnAtPosition(this.CurrentColumnIndex)
                : this.GetColumnAtPosition(context);
        if (this.CurrentColumnIndex !== context) this.switchColumnInternal(context);
        this.applyMouseSelection(target, index);
    }
    GoLeft() {
        if (this.Focused) this.CurrentColumn?.GoLeft();
    }
    GoRight() {
        if (this.Focused) this.CurrentColumn?.GoRight();
    }
    Select() {
        if (this.Focused) this.CurrentColumn?.Select();
    }
    GoBack() {
        if (!this.Focused || this.CurrentColumnIndex <= 0) return;
        let col = this.GetColumnAtPosition(this.CurrentColumnIndex);
        if (col?.Items[col.Index]) col.Items[col.Index].Selected = false;
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
            "SET_COLUMN_FOCUS",
            this.CurrentColumnIndex,
            false,
            false,
            false
        );
        this.switchColumnInternal(this.CurrentColumnIndex - 1);
        col = this.GetColumnAtPosition(this.CurrentColumnIndex);
        if (!col && this.CurrentColumnIndex > 0) return this.GoBack();
        if (col?.Items[col.Index]) col.Items[col.Index].Selected = true;
        if (col instanceof PlayerListColumn && col.CurrentItem?.Panel != null) {
            col.CurrentItem.CreateClonedPed?.();
            this.GetColumnAtPosition(2 /* RIGHT */).ColumnVisible = false;
        } else {
            const right = this.GetColumnAtPosition(2 /* RIGHT */);
            if (right) right.ColumnVisible = true;
        }
    }
    Populate() {
        this.Parent?._pause._pause?.callFunction("SET_MENU_LEVEL", 1);
        this.StateChange(0);
        this.Parent?._pause._pause?.callFunction("SET_MENU_LEVEL", 0);
        this.LeftColumn?.Populate();
        this.CenterColumn?.Populate();
        this.RightColumn?.Populate();
    }
    ShowColumns() {
        this.LeftColumn?.ShowColumn();
        this.CenterColumn?.ShowColumn();
        this.RightColumn?.ShowColumn();
    }
    Focus() {
        super.Focus();
        const col = this.GetColumnAtPosition(this.CurrentColumnIndex);
        if (!col) return;
        if (col instanceof SettingsListColumn) {
            col.Focused = true;
            col.CurrentItem.Selected = true;
            AddTextEntry("PAUSEMENU_Current_Description", col.CurrentItem.Description ?? "");
        } else if (col instanceof PlayerListColumn) {
            ClearPedInPauseMenu();
            col.Focused = true;
            col.CurrentItem.Selected = true;
            col.CurrentItem.CreateClonedPed?.();
            if (col.CurrentItem.Panel != null && this.RightColumn) {
                col.CurrentItem.Panel.UpdatePanel?.();
                this.RightColumn.ColumnVisible = false;
            } else if (this.RightColumn) this.RightColumn.ColumnVisible = true;
        } else if (col instanceof MissionsListColumn || col instanceof StoreListColumn) {
            col.Focused = true;
            col.CurrentItem.Selected = true;
        }
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
            "SET_COLUMN_HIGHLIGHT",
            col.position,
            col.Index,
            true,
            false
        );
    }
    UnFocus() {
        super.UnFocus();
        ClearPedInPauseMenu();
        if (this.LeftColumn) {
            this.LeftColumn.Focused = false;
            this.LeftColumn.Items[this.LeftColumn.Index].Selected = false;
        }
        if (this.CenterColumn) {
            this.CenterColumn.Focused = false;
            this.CenterColumn.Items[this.CenterColumn.Index].Selected = false;
        }
        if (this.RightColumn) {
            this.RightColumn.Focused = false;
            this.RightColumn.Items[this.RightColumn.Index].Selected = false;
            if (!this.RightColumn.ColumnVisible) this.RightColumn.ColumnVisible = true;
        }
        AddTextEntry("PAUSEMENU_Current_Description", "");
    }
    applyMouseSelection(col, index) {
        if (!col) return;
        if (index === col.Index) return col.Select();
        if (col instanceof SettingsListColumn) {
            col.CurrentItem.Selected = false;
            col.CurrentSelection = index;
            col.CurrentItem.Selected = true;
            AddTextEntry("PAUSEMENU_Current_Description", col.CurrentItem.Description ?? "");
            return;
        }
        if (col instanceof PlayerListColumn) {
            ClearPedInPauseMenu();
            col.CurrentItem.Selected = false;
            col.CurrentSelection = index;
            col.CurrentItem.Selected = true;
            col.CurrentItem.CreateClonedPed?.();
            return;
        }
        if (col instanceof MissionsListColumn || col instanceof StoreListColumn) {
            col.CurrentItem.Selected = false;
            col.CurrentSelection = index;
            col.CurrentItem.Selected = true;
        }
    }
}

// src/menus/pause-menu/elements/columns/submenu-central-column.ts
class SubmenuCentralColumn extends pm_column_default {
    currentColumnType = 0 /* Empty */;
    SetDataSlot(index) {
        this.sendItem(index, "SET_DATA_SLOT");
    }
    UpdateSlot(index) {
        this.sendItem(index, "UPDATE_SLOT");
    }
    async GoUp() {
        if (this.currentColumnType !== 3 /* Settings */ || !this.Items.length) return;
        this.Items[this.Index].Selected = false;
        do {
            this.index--;
            if (this.index < 0) this.index = this.Items.length - 1;
            await Delay(0);
        } while (this.isJumpableSetting(this.Items[this.Index]));
        this.Items[this.Index].Selected = true;
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
            "SET_COLUMN_HIGHLIGHT",
            this.position,
            this.index,
            true,
            true
        );
        this.SetColumnScroll(
            this.Index + 1,
            this.Items.length,
            this.VisibleItems,
            "",
            this.Items.length < this.VisibleItems
        );
    }
    async GoDown() {
        if (this.currentColumnType !== 3 /* Settings */ || !this.Items.length) return;
        this.Items[this.Index].Selected = false;
        do {
            this.index++;
            if (this.index >= this.Items.length) this.index = 0;
            await Delay(0);
        } while (this.isJumpableSetting(this.Items[this.Index]));
        this.Items[this.Index].Selected = true;
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
            "SET_COLUMN_HIGHLIGHT",
            this.position,
            this.index,
            true,
            true
        );
        this.SetColumnScroll(
            this.Index + 1,
            this.Items.length,
            this.VisibleItems,
            "",
            this.Items.length < this.VisibleItems
        );
    }
    GoLeft() {
        if (this.currentColumnType !== 3 /* Settings */) return;
        const item = this.Items[this.Index];
        if (item instanceof SettingsListItem) item.ItemIndex--;
        else if (item instanceof SettingsSliderItem) item.Value--;
        else if (item instanceof SettingsProgressItem) item.Value--;
    }
    GoRight() {
        if (this.currentColumnType !== 3 /* Settings */) return;
        const item = this.Items[this.Index];
        if (item instanceof SettingsListItem) item.ItemIndex++;
        else if (item instanceof SettingsSliderItem) item.Value++;
        else if (item instanceof SettingsProgressItem) item.Value++;
    }
    Select() {
        const item = this.Items[this.Index];
        if (item instanceof SettingsItem) {
            if (!item.Enabled) {
                PlaySoundFrontend(-1, "ERROR", "HUD_FRONTEND_DEFAULT_SOUNDSET", true);
                return;
            }
            if (item instanceof SettingsListItem) item.ListSelected();
            else if (item instanceof SettingsCheckboxItem) item.IsChecked = !item.IsChecked;
            else if (item instanceof SettingsProgressItem) item.ProgressSelected();
            else if (item instanceof SettingsSliderItem) item.SliderSelected();
            if (!(item instanceof SettingsCheckboxItem)) item.activatedEmit();
        }
    }
    sendItem(index, method) {
        if (index >= this.Items.length) return;
        const item = this.Items[index];
        const pause = ScaleformUI.Scaleforms._pauseMenu._pause;
        if (!pause) return;
        if (item instanceof StatsTabItem) {
            pause.callFunction(
                method,
                this.position,
                index,
                0,
                index,
                item.Type,
                0,
                true,
                item.Label,
                item.Type === 0 /* Basic */ ? item.RightLabel : item.Value,
                item.Type === 1 /* ColoredBar */ ? item.ColoredBarColor.getArgbValue() : 0
            );
            return;
        }
        if (item instanceof SettingsItem) {
            pause.callFunction(
                method,
                this.position,
                index,
                0,
                index,
                item.ItemType,
                this.getSettingsValue(item),
                true,
                item.Label,
                this.getSettingsExtra(item),
                this.getSettingsExtra2(item)
            );
            this.SetColumnScroll(
                this.Index + 1,
                this.Items.length,
                this.VisibleItems,
                "",
                this.Items.length < this.VisibleItems
            );
            return;
        }
        if (item instanceof KeymapItem) {
            pause.callFunction(
                method,
                this.position,
                index,
                0,
                index,
                0,
                0,
                true,
                item.Label,
                IsUsingKeyboard(2) ? item.PrimaryKeyboard : item.PrimaryGamepad,
                IsUsingKeyboard(2) ? item.SecondaryKeyboard : item.SecondaryGamepad
            );
            return;
        }
        pause.callFunction(method, this.position, index, 0, index, 0, 0, true, item.Label);
    }
    getSettingsValue(item) {
        if (item instanceof SettingsListItem) return item.ItemIndex;
        if (item instanceof SettingsSliderItem) return item.Value;
        if (item instanceof SettingsProgressItem) return item.Value;
        return 0;
    }
    getSettingsExtra(item) {
        if (item instanceof SettingsItem && item.ItemType === 0 /* Basic */) return item.RightLabel;
        if (item instanceof SettingsListItem) return item.ListItems.join(",");
        if (item instanceof SettingsCheckboxItem) return item.CheckBoxStyle;
        if (item instanceof SettingsProgressItem) return item.MaxValue;
        if (item instanceof SettingsSliderItem) return item.MaxValue;
        return "";
    }
    getSettingsExtra2(item) {
        if (item instanceof SettingsCheckboxItem) return item.IsChecked;
        if (item instanceof SettingsProgressItem) return item.ColoredBarColor.getArgbValue();
        if (item instanceof SettingsSliderItem) return item.ColoredBarColor.getArgbValue();
        return;
    }
    isJumpableSetting(item) {
        return item.ItemType === 8 /* Empty */ || item.ItemType === 6 /* Separator */;
    }
}

// src/menus/pause-menu/elements/columns/submenu-left-column.ts
class SubmenuLeftColumn extends pm_column_default {
    constructor(position) {
        super(position);
        this.VisibleItems = 10;
    }
    get currentItemType() {
        const item = this.Items[this.Index];
        return item?.ItemType ?? 0 /* Empty */;
    }
    AddItem(item) {
        this.Items.push(item);
    }
    SetDataSlot(index) {
        this.sendItem(index, "SET_DATA_SLOT");
    }
    UpdateSlot(index) {
        this.sendItem(index, "UPDATE_SLOT");
    }
    GoUp() {
        if (!this.Items.length) return;
        this.Items[this.Index].Selected = false;
        this.index--;
        if (this.index < 0) this.index = this.Items.length - 1;
        this.Items[this.Index].Selected = true;
        this.populateCenterFromSelection();
    }
    GoDown() {
        if (!this.Items.length) return;
        this.Items[this.Index].Selected = false;
        this.index++;
        if (this.index >= this.Items.length) this.index = 0;
        this.Items[this.Index].Selected = true;
        this.populateCenterFromSelection();
    }
    populateCenterFromSelection() {
        const tab = this.Parent;
        const center = tab?.CenterColumn;
        if (!center) return;
        center.Items = [];
        if (this.currentItemType !== 0 /* Empty */) {
            const leftItem = this.Items[this.Index];
            center.Items = [...leftItem.ItemList];
            center.Items.forEach((item) => (item.ParentColumn = center));
        }
        if (tab?.Visible && tab?.Parent?.Visible) {
            ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction("MENU_STATE", this.currentItemType);
        }
    }
    sendItem(index, method) {
        if (index >= this.Items.length) return;
        const item = this.Items[index];
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
            method,
            this.position,
            index,
            0,
            0,
            0,
            0,
            item.Enabled,
            item.Label,
            item.MainColor.getArgbValue(),
            item.HighlightColor.getArgbValue(),
            item.internalItem.RightLabel,
            item.internalItem.LeftBadge,
            "",
            "",
            item.internalItem.RightBadge,
            "",
            "",
            item.labelFont?.fontName ?? "",
            item.rightLabelFont?.fontName ?? ""
        );
    }
}

// src/menus/pause-menu/tabs/submenu-tab.ts
class SubmenuTab extends base_tab_default {
    LeftColumn;
    CenterColumn;
    constructor(name, color) {
        super(name, color);
        this._type = 1;
        this._identifier = "Page_Info";
        this.LeftColumn = new SubmenuLeftColumn(0 /* LEFT */);
        this.LeftColumn.Parent = this;
        this.CenterColumn = new SubmenuCentralColumn(1 /* MIDDLE */);
        this.CenterColumn.Parent = this;
    }
    get currentItemType() {
        return this.LeftColumn.currentItemType;
    }
    SwitchColumn(index) {
        this.switchColumnInternal(index);
    }
    AddLeftItem(item) {
        item.ParentTab = this;
        this.LeftColumn.AddItem(item);
    }
    StateChange(state) {
        this.Parent?._pause._pause?.callFunction("MENU_STATE", this.currentItemType);
        this.CenterColumn.Items = [];
        if (state !== 0) this.CenterColumn.Items = [...this.LeftColumn.Items[this.LeftColumn.Index].ItemList];
        this.CenterColumn.Items.forEach((item) => (item.ParentColumn = this.CenterColumn));
        switch (this.currentItemType) {
            case 2 /* Statistics */:
                this.CenterColumn.VisibleItems = 16;
                this.CenterColumn.InitColumnScroll(true, 2, 1 /* UP_DOWN */, 1 /* CENTER */);
                this.CenterColumn.SetColumnScroll(
                    -1,
                    -1,
                    -1,
                    "",
                    this.CenterColumn.Items.length < this.CenterColumn.VisibleItems
                );
                break;
            case 3 /* Settings */:
                this.CenterColumn.VisibleItems = 16;
                this.CenterColumn.InitColumnScroll(true, 2, 0 /* ALL */, 2 /* RIGHT */);
                this.CenterColumn.SetColumnScroll(
                    this.CenterColumn.Index + 1,
                    this.CenterColumn.Items.length,
                    this.CenterColumn.VisibleItems,
                    "",
                    this.CenterColumn.Items.length < this.CenterColumn.VisibleItems
                );
                break;
            case 1 /* Info */:
                this.CenterColumn.VisibleItems = 10;
                this.CenterColumn.InitColumnScroll(true, 2, 1 /* UP_DOWN */, 1 /* CENTER */);
                this.CenterColumn.SetColumnScroll(
                    -1,
                    -1,
                    -1,
                    "",
                    this.CenterColumn.Items.length < this.CenterColumn.VisibleItems
                );
                break;
            case 4 /* Keymap */:
                this.CenterColumn.VisibleItems = 15;
                this.CenterColumn.InitColumnScroll(true, 2, 1 /* UP_DOWN */, 1 /* CENTER */);
                this.CenterColumn.SetColumnScroll(
                    -1,
                    -1,
                    -1,
                    "",
                    this.CenterColumn.Items.length < this.CenterColumn.VisibleItems
                );
                break;
            default:
                this.CenterColumn.VisibleItems = 0;
                break;
        }
    }
    GoUp() {
        if (!this.Focused) return;
        if (this.CurrentColumnIndex === 0) {
            this.LeftColumn.GoUp();
            this.CenterColumn.currentColumnType = this.currentItemType;
            this.StateChange(this.currentItemType);
            this.Refresh(false);
            this.Parent?._pause._pause?.callFunction("SET_COLUMN_INPUT_EVENT", this.CurrentColumnIndex, 8);
            return;
        }
        if (this.CurrentColumnIndex === 1) {
            this.CenterColumn.GoUp();
            if (this.CenterColumn.currentColumnType === 3 /* Settings */) {
                this.CenterColumn.SetColumnScroll(
                    this.CenterColumn.Index + 1,
                    this.CenterColumn.Items.length,
                    this.CenterColumn.VisibleItems,
                    "",
                    this.CenterColumn.Items.length < this.CenterColumn.VisibleItems
                );
            }
        }
    }
    GoDown() {
        if (!this.Focused) return;
        if (this.CurrentColumnIndex === 0) {
            this.LeftColumn.GoDown();
            this.CenterColumn.currentColumnType = this.currentItemType;
            this.StateChange(this.currentItemType);
            this.Refresh(false);
            this.Parent?._pause._pause?.callFunction("SET_COLUMN_INPUT_EVENT", this.CurrentColumnIndex, 9);
            return;
        }
        if (this.CurrentColumnIndex === 1) {
            this.CenterColumn.GoDown();
            if (this.CenterColumn.currentColumnType === 3 /* Settings */) {
                this.CenterColumn.SetColumnScroll(
                    this.CenterColumn.Index + 1,
                    this.CenterColumn.Items.length,
                    this.CenterColumn.VisibleItems,
                    "",
                    this.CenterColumn.Items.length < this.CenterColumn.VisibleItems
                );
            }
        }
    }
    async MouseEvent(eventType, context, index) {
        if (!this.Focused) return;
        if (eventType === 10 || eventType === 11) return this.MouseScroll(eventType === 10 ? -1 : 1);
        if (eventType !== 5) return;
        if (this.CurrentColumnIndex === context) {
            if (this.CurrentColumn?.Index !== index) {
                if (this.CurrentColumnIndex === 0) {
                    this.LeftColumn.Items[this.LeftColumn.Index].Selected = false;
                    this.LeftColumn.Index = index;
                    this.LeftColumn.Items[this.LeftColumn.Index].Selected = true;
                    this.StateChange(this.currentItemType);
                    this.Refresh(false);
                } else {
                    this.CenterColumn.Items[this.CenterColumn.Index].Selected = false;
                    this.CenterColumn.Index = index;
                    this.CenterColumn.Items[this.CenterColumn.Index].Selected = true;
                }
                return;
            }
            if (this.CurrentColumnIndex === 0 && this.currentItemType === 3 /* Settings */) {
                const leftItem = this.LeftColumn.Items[this.LeftColumn.Index];
                if (!leftItem.Enabled) {
                    PlaySoundFrontend(-1, "ERROR", "HUD_FRONTEND_DEFAULT_SOUNDSET", true);
                    return;
                }
                this.CurrentColumnIndex++;
                if (!leftItem.ItemList.every((x) => !x.Enabled)) {
                    while (!this.CenterColumn.Items[this.CenterColumn.Index].Enabled) {
                        await Delay(0);
                        this.CenterColumn.Index++;
                    }
                }
                if (this.Parent) {
                    this.Parent.FocusLevel++;
                    this.Parent.SendColumnItemSelect(this.LeftColumn);
                }
                return;
            }
            if (this.CurrentColumnIndex === 1) {
                this.CenterColumn.Select();
                this.Parent?.SendColumnItemSelect(this.CenterColumn);
            }
            return;
        }
        if (context > this.CurrentColumnIndex) {
            this.Parent && this.Parent.FocusLevel++;
            this.CurrentColumnIndex++;
        } else if (context < this.CurrentColumnIndex) {
            this.Parent && this.Parent.FocusLevel--;
            this.CurrentColumnIndex--;
        }
        if (this.CurrentColumnIndex === 0) {
            this.LeftColumn.Items[this.LeftColumn.Index].Selected = false;
            this.LeftColumn.Index = index;
            this.LeftColumn.Items[this.LeftColumn.Index].Selected = true;
            this.StateChange(this.currentItemType);
            this.Refresh(false);
        } else {
            this.CenterColumn.Items[this.CenterColumn.Index].Selected = false;
            this.CenterColumn.Index = index;
            this.CenterColumn.Items[this.CenterColumn.Index].Selected = true;
        }
    }
    MouseScroll(dir) {
        const hoveredColumn = this.Parent?.hoveredColumn ?? 0;
        if (this.CurrentColumnIndex === 0) {
            if (
                hoveredColumn === 1 &&
                (this.currentItemType === 1 /* Info */ || this.currentItemType === 2) /* Statistics */
            ) {
                PlaySoundFrontend(-1, "NAV_UP_DOWN", "HUD_FRONTEND_DEFAULT_SOUNDSET", true);
                return;
            }
            if (dir === -1) this.LeftColumn.GoUp();
            else this.LeftColumn.GoDown();
            this.CenterColumn.currentColumnType = this.currentItemType;
            this.StateChange(this.currentItemType);
            this.Refresh(false);
            return;
        }
        if (this.CurrentColumnIndex === 1) {
            if (this.currentItemType === 3 /* Settings */) {
                if (dir === -1) this.CenterColumn.GoUp();
                else this.CenterColumn.GoDown();
            }
            if (this.CenterColumn.currentColumnType === 3 /* Settings */) {
                this.CenterColumn.SetColumnScroll(
                    this.CenterColumn.Index + 1,
                    this.CenterColumn.Items.length,
                    this.CenterColumn.VisibleItems,
                    "",
                    this.CenterColumn.Items.length < this.CenterColumn.VisibleItems
                );
            }
            PlaySoundFrontend(-1, "NAV_UP_DOWN", "HUD_FRONTEND_DEFAULT_SOUNDSET", true);
        }
    }
    GoLeft() {
        if (!this.Focused) return;
        this.Parent?._pause._pause?.callFunction("SET_COLUMN_INPUT_EVENT", this.CurrentColumnIndex, 10);
        if (this.CurrentColumnIndex === 1) this.CenterColumn.GoLeft();
    }
    GoRight() {
        if (!this.Focused) return;
        this.Parent?._pause._pause?.callFunction("SET_COLUMN_INPUT_EVENT", this.CurrentColumnIndex, 11);
        if (this.CurrentColumnIndex === 1) this.CenterColumn.GoRight();
    }
    async Select() {
        if (!this.Focused) return;
        if (this.CurrentColumnIndex === 0) {
            if (this.currentItemType !== 3 /* Settings */) return;
            const leftItem = this.LeftColumn.Items[this.LeftColumn.Index];
            if (!leftItem.Enabled) {
                PlaySoundFrontend(-1, "ERROR", "HUD_FRONTEND_DEFAULT_SOUNDSET", true);
                return;
            }
            this.CurrentColumnIndex++;
            if (!leftItem.ItemList.every((x) => !x.Enabled)) {
                while (!this.CenterColumn.Items[this.CenterColumn.Index].Enabled) {
                    await Delay(0);
                    this.CenterColumn.Index++;
                }
            }
            if (this.Parent) {
                this.Parent.FocusLevel++;
                this.Parent.SendColumnItemSelect(this.LeftColumn);
            }
            return;
        }
        if (this.CurrentColumnIndex === 1) {
            this.CenterColumn.Select();
            this.Parent?.SendColumnItemSelect(this.CenterColumn);
        }
    }
    GoBack() {
        if (!this.Focused) return;
        if (this.CurrentColumnIndex === 1) {
            this.CurrentColumnIndex--;
            if (this.Parent) this.Parent.FocusLevel--;
        }
    }
    Focus() {
        super.Focus();
        this.LeftColumn.Index = this.LeftColumn.index;
        this.LeftColumn.HighlightColumn(true, false, true);
        this.LeftColumn.Items[this.LeftColumn.Index].Selected = true;
        this.Refresh(true);
    }
    UnFocus() {
        super.UnFocus();
        this.LeftColumn.Items[this.LeftColumn.Index].Selected = false;
    }
    Refresh(highlightOldIndex) {
        this.Parent?._pause._pause?.callFunction("ALLOW_CLICK_FROM_COLUMN", 0, true);
        this.Parent?._pause._pause?.callFunction("SET_DATA_SLOT_EMPTY", 1);
        for (let i = 0; i < this.CenterColumn.Items.length; i++) this.SetDataSlot(this.CenterColumn.position, i);
        if (this.currentItemType === 4 /* Keymap */) {
            const selected = this.LeftColumn.Items[this.LeftColumn.Index];
            this.Parent?._pause._pause?.callFunction(
                "SET_COLUMN_TITLE",
                1,
                selected.RightTitle,
                selected.KeymapRightLabel_1,
                selected.KeymapRightLabel_2
            );
            this.Parent?._pause._pause?.callFunction("SET_COLUMN_FOCUS", 1, false, false, false);
        } else if (this.currentItemType === 3 /* Settings */ && highlightOldIndex) {
            this.Parent?._pause._pause?.callFunction("SET_COLUMN_HIGHLIGHT", 1, this.CenterColumn.Index, true, true);
        }
        this.CenterColumn.ShowColumn();
    }
    Populate() {
        const item = this.LeftColumn.Items[this.LeftColumn.Index];
        item.Selected = true;
        this.CenterColumn.Items = [];
        if (this.currentItemType !== 0 /* Empty */) {
            this.CenterColumn.Items = [...item.ItemList];
            this.CenterColumn.Items.forEach((it) => (it.ParentColumn = this.CenterColumn));
        }
        this.Parent?._pause._pause?.callFunction("SET_MENU_LEVEL", 1);
        this.Parent?._pause._pause?.callFunction("MENU_STATE", this.currentItemType);
        this.Parent?._pause._pause?.callFunction("SET_MENU_LEVEL", 0);
        for (let i = 0; i < this.LeftColumn.Items.length; i++) this.SetDataSlot(this.LeftColumn.position, i);
        for (let i = 0; i < this.CenterColumn.Items.length; i++) this.SetDataSlot(this.CenterColumn.position, i);
    }
    ShowColumns() {
        this.LeftColumn.ShowColumn();
        this.CenterColumn.ShowColumn();
        if (this.currentItemType === 3 /* Settings */) this.Parent?._pause._pause?.callFunction("SET_COLUMN_STATE", 0);
        this.Parent?._pause._pause?.callFunction("SET_COLUMN_FOCUS", 0, false, false, false);
        this.LeftColumn.InitColumnScroll(true, 1, 1 /* UP_DOWN */, 2 /* RIGHT */);
        this.LeftColumn.SetColumnScroll(
            this.LeftColumn.Index,
            this.LeftColumn.Items.length,
            16,
            "",
            this.LeftColumn.Items.length < 16
        );
    }
    SetDataSlot(slot, index) {
        if (slot === 0 /* LEFT */) this.LeftColumn.SetDataSlot(index);
        else if (slot === 1 /* MIDDLE */) this.CenterColumn.SetDataSlot(index);
    }
    UpdateSlot(slot, index) {
        if (slot === 0 /* LEFT */) this.LeftColumn.UpdateSlot(index);
        else if (slot === 1 /* MIDDLE */) this.CenterColumn.UpdateSlot(index);
    }
    switchColumnInternal(index) {
        const col = this.GetColumnAtPosition(index);
        if (!col) return;
        this.CurrentColumnIndex = index;
        if (this.Parent?.Visible) {
            this.Parent._pause._pause?.callFunction("SET_MENU_LEVEL", this.CurrentColumnIndex + 1);
            this.Parent._pause._pause?.callFunction("MENU_SHIFT_DEPTH", 0, true, true);
            this.Parent.focusLevel = this.CurrentColumnIndex + 1;
            this.Parent._pause._pause?.callFunction("SET_COLUMN_HIGHLIGHT", col.position, col.Index, true, true);
            col.Items[col.Index].Selected = true;
        }
    }
}

// src/menus/pause-menu/elements/columns/text-column.ts
class TextColumn extends pm_column_default {
    constructor(position) {
        super(position);
        this.VisibleItems = 16;
    }
    SetDataSlot(index) {
        this.sendItem(index, "SET_DATA_SLOT");
    }
    UpdateSlot(index) {
        this.sendItem(index, "UPDATE_SLOT");
    }
    sendItem(index, method) {
        if (index >= this.Items.length) return;
        const item = this.Items[index];
        ScaleformUI.Scaleforms._pauseMenu._pause?.callFunction(
            method,
            this.position,
            index,
            0,
            index,
            0,
            0,
            true,
            item.Label
        );
    }
}

// src/menus/pause-menu/tabs/text-tab.ts
class TextTab extends base_tab_default {
    TextTitle;
    WordWrap = 0;
    BGTextureDict = "";
    BGTextureName = "";
    RightTextureDict = "";
    RightTextureName = "";
    LeftColumn;
    constructor(name, title, color) {
        super(name, color);
        this.TextTitle = title;
        this.LeftColumn = new TextColumn(0);
        this._identifier = "Page_Simple";
        this._type = 0;
    }
    AddItem(item) {
        this.LeftColumn.AddItem(item);
    }
    Populate() {
        for (let i = 0; i < this.LeftColumn.Items.length; i++) {
            this.SetDataSlot(this.LeftColumn.position, i);
        }
        if (this.BGTextureDict.trim()) {
            this.Parent?._pause._pause?.callFunction(
                "CALL_CUSTOM_COLUMN_FUNCTION",
                this.LeftColumn.position,
                "SET_BACKGROUND",
                this.BGTextureDict,
                this.BGTextureName
            );
        }
        if (this.RightTextureDict.trim()) {
            this.Parent?._pause._pause?.callFunction(
                "CALL_CUSTOM_COLUMN_FUNCTION",
                this.LeftColumn.position,
                "SET_RIGHT_PICTURE",
                this.RightTextureDict,
                this.RightTextureName
            );
        }
    }
    ShowColumns() {
        this.LeftColumn.ShowColumn();
        this.LeftColumn.InitColumnScroll(true, 3, 1 /* UP_DOWN */, 1 /* CENTER */);
        this.LeftColumn.SetColumnScroll(-1, -1, -1, "", this.LeftColumn.Items.length < this.LeftColumn.VisibleItems);
        this.LeftColumn.HighlightColumn(true, false, true);
    }
    Focus() {
        super.Focus();
        this.LeftColumn.HighlightColumn(true, false, true);
    }
    SetDataSlot(_slot, index) {
        this.LeftColumn.SetDataSlot(index);
    }
    UpdateBackground(txd, txn) {
        this.BGTextureDict = txd;
        this.BGTextureName = txn;
        if (this.Parent?.Visible) {
            this.Parent._pause._pause?.callFunction(
                "CALL_CUSTOM_COLUMN_FUNCTION",
                this.LeftColumn.position,
                "SET_BACKGROUND",
                txd,
                txn
            );
        }
    }
    AddPicture(txd, txn) {
        this.RightTextureDict = txd;
        this.RightTextureName = txn;
        if (this.Parent?.Visible) {
            this.Parent._pause._pause?.callFunction(
                "CALL_CUSTOM_COLUMN_FUNCTION",
                this.LeftColumn.position,
                "SET_RIGHT_PICTURE",
                txd,
                txn
            );
        }
    }
}

// src/menus/pause-menu/tab-view.ts
class TabView2 extends PauseMenuBase {
    static AUDIO_LIBRARY = "HUD_FRONTEND_DEFAULT_SOUNDSET";
    static AUDIO_UPDOWN = "NAV_UP_DOWN";
    static AUDIO_BACK = "BACK";
    Title;
    SubTitle;
    SideStringTop;
    SideStringMiddle;
    SideStringBottom;
    ShowStoreBackground = false;
    StoreBackgroundAnimationSpeed = 240;
    TabsColor = 117;
    ShowBlur = true;
    SetHeaderDynamicWidth = false;
    Tabs = [];
    TemporarilyHidden = false;
    HideTabs = false;
    DisplayHeader = true;
    IsCorona = false;
    hoveredColumn = 0;
    focusLevel = 0;
    coronaTab;
    _pause;
    _loaded = false;
    index = 0;
    isBuilding = false;
    controller = false;
    changed = false;
    tabArrowsHovered = false;
    headerPicture = ["CHAR_DEFAULT", "CHAR_DEFAULT"];
    crewPicture = null;
    openHandlers = [];
    closeHandlers = [];
    tabChangedHandlers = [];
    focusChangedHandlers = [];
    columnChangeHandlers = [];
    columnSelectHandlers = [];
    constructor(title, subtitle = "", sideTop = "", sideMid = "", sideBot = "") {
        super();
        this.Title = title;
        this.SubTitle = subtitle;
        this.SideStringTop = sideTop;
        this.SideStringMiddle = sideMid;
        this.SideStringBottom = sideBot;
        this.InstructionalButtons = [
            new InstructionalButton(UIMenu._selectTextLocalized, -1, 176, 176, -1 /* UNUSED */),
            new InstructionalButton(UIMenu._backTextLocalized, -1, 177, 177, -1 /* UNUSED */),
            new InstructionalButton(GetLabelText("HUD_INPUT1C"), -1, -1, -1, 14 /* INPUTGROUP_FRONTEND_BUMPERS */)
        ];
        this._pause = ScaleformUI.Scaleforms._pauseMenu;
    }
    get HeaderPicture() {
        return this.headerPicture;
    }
    set HeaderPicture(value) {
        this.headerPicture = value;
        if (this.Visible) this._pause.setHeaderCharImg(value[0], value[1], true);
    }
    get CrewPicture() {
        return this.crewPicture;
    }
    set CrewPicture(value) {
        this.crewPicture = value;
    }
    get FocusLevel() {
        return this.focusLevel;
    }
    set FocusLevel(value) {
        const dir = value === this.focusLevel ? 0 : value < this.focusLevel ? -1 : 1;
        this.focusLevel += dir;
        this._pause?.setFocus(dir);
        if (dir > 0 && this.Tabs.length > 0 && this.focusLevel === 1) this.Tabs[this.Index].Focus();
        else if (dir < 0 && this.focusLevel === 0) this.Tabs[this.Index].UnFocus();
        this.SendPauseMenuFocusChange();
    }
    get Index() {
        return this.index;
    }
    set Index(value) {
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
    get CurrentTab() {
        return this.Tabs[this.Index];
    }
    set Visible(value) {
        super.Visible = value;
        this._pause.Visible = value;
        SetPauseMenuActive(false);
        if (value) {
            ActivateFrontendMenu(GetHashKey("FE_MENU_VERSION_CORONA"), true, -1);
            if (this.ShowBlur) {
                AnimpostfxStop("PauseMenuOut");
                AnimpostfxPlay("PauseMenuIn", 0, true);
            }
            ScaleformUI.Scaleforms.InstructionalButtons.SetInstructionalButtons(this.InstructionalButtons);
            SetPlayerControl(PlayerId(), false, 0);
            this.isBuilding = true;
            if (this.Tabs[0]) this.Tabs[0].Visible = true;
            MenuHandler._currentPauseMenu = this;
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
    get Visible() {
        return super.Visible;
    }
    AddTab(tab) {
        if (tab.Minimap) tab.Minimap.Parent = this;
        tab.Parent = this;
        this.Tabs.push(tab);
    }
    ShowHeader() {
        if (!this.SubTitle.trim()) this._pause.setHeaderTitle(this.Title, "", false);
        else {
            this._pause.shiftCoronaDescription(true, false);
            this._pause.setHeaderTitle(
                this.Title,
                `${this.SubTitle}










`,
                false
            );
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
    BuildPauseMenu() {
        this.isBuilding = true;
        if (!HasStreamedTextureDictLoaded("commonmenu")) RequestStreamedTextureDict("commonmenu", true);
        const tab = this.Tabs[this.Index];
        this._pause._pause?.callFunction("LOAD_CHILD_PAGE", tab._identifier);
        tab.Populate();
        tab.ShowColumns();
        this.isBuilding = false;
    }
    Draw() {
        if (!this.Visible || this.TemporarilyHidden || this.isBuilding) return;
        this.Tabs[this.Index]?.Minimap?.MaintainMap();
        super.Draw();
        this._pause.draw(this.IsCorona);
        if (!this.IsCorona) this._pause._header?.callFunction("SHOW_ARROWS");
        this.UpdateKeymapItems();
        this.GetHoveredColumn();
    }
    ProcessMouse() {
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
    ProcessControls() {
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
                (this.CurrentTab.currentItemType === 1 /* Info */ ||
                    this.CurrentTab.currentItemType === 2) /* Statistics */
            ) {
                PlaySoundFrontend(-1, TabView2.AUDIO_UPDOWN, TabView2.AUDIO_LIBRARY, true);
                this._pause._pause?.callFunction("SET_COLUMN_INPUT_EVENT", 1, 8);
            }
        } else if (IsDisabledControlJustPressed(2, 242)) {
            if (this.CurrentTab instanceof TextTab) {
                this.CurrentTab.MouseEvent(11, 0, -1);
                this._pause._pause?.callFunction("SET_COLUMN_INPUT_EVENT", 0, 9);
            } else if (
                this.CurrentTab instanceof SubmenuTab &&
                (this.CurrentTab.currentItemType === 1 /* Info */ ||
                    this.CurrentTab.currentItemType === 2) /* Statistics */
            ) {
                PlaySoundFrontend(-1, TabView2.AUDIO_UPDOWN, TabView2.AUDIO_LIBRARY, true);
                this._pause._pause?.callFunction("SET_COLUMN_INPUT_EVENT", 1, 9);
            }
        }
    }
    GoBack() {
        PlaySoundFrontend(-1, TabView2.AUDIO_BACK, TabView2.AUDIO_LIBRARY, true);
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
    onPauseMenuOpen(handler) {
        this.openHandlers.push(handler);
    }
    onPauseMenuClose(handler) {
        this.closeHandlers.push(handler);
    }
    onPauseMenuTabChanged(handler) {
        this.tabChangedHandlers.push(handler);
    }
    onPauseMenuFocusChanged(handler) {
        this.focusChangedHandlers.push(handler);
    }
    onColumnItemChange(handler) {
        this.columnChangeHandlers.push(handler);
    }
    onColumnItemSelect(handler) {
        this.columnSelectHandlers.push(handler);
    }
    SendPauseMenuOpen() {
        this.openHandlers.forEach((h) => h(this));
    }
    SendPauseMenuClose() {
        this.closeHandlers.forEach((h) => h(this));
    }
    SendPauseMenuTabChange() {
        this.tabChangedHandlers.forEach((h) => h(this, this.Tabs[this.Index], this.Index));
    }
    SendPauseMenuFocusChange() {
        this.focusChangedHandlers.forEach((h) => h(this, this.Tabs[this.Index], this.FocusLevel));
    }
    SendColumnItemSelect(col) {
        this.columnSelectHandlers.forEach((h) => h(this, this.CurrentTab, col.position, col.Index));
    }
    SendColumnItemChange(col) {
        this.columnChangeHandlers.forEach((h) => h(this, this.CurrentTab, col.position, col.Index));
    }
    UpdateKeymapItems() {
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
            const smTab = this.Tabs[this.Index];
            if (smTab.currentItemType === 4 /* Keymap */) {
                for (let i = 0; i < smTab.CenterColumn.Items.length; i++) smTab.CenterColumn.UpdateSlot(i);
            }
            this.changed = false;
        }
    }
    async GetHoveredColumn() {
        this.hoveredColumn = await (ScaleformUI.Scaleforms._pauseMenu._pause?.callFunctionReturnInt(
            "GET_HOVERED_COLUMN"
        ) ?? Promise.resolve(0));
    }
}

// src/examples/pause-menu-command-example.ts
var EXAMPLE_COMMAND = "scui_pause";
var pauseMenuExample = null;
function buildPauseMenuExample() {
    const menu = new TabView2("ScaleformUI V8", "Pause Menu Example", "Type", `/${EXAMPLE_COMMAND}`, "to open/close");
    const mainTab = new SubmenuTab("Example", SColor.HUD_Freemode);
    const settingsCategory = new TabLeftItem("Settings", 3 /* Settings */);
    const checkbox = new SettingsCheckboxItem("Show markers", 1 /* Tick */, true);
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
function getPauseMenuExample() {
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
