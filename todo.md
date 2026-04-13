# ScaleformUI TS Port TODO

## Goal

Port the C# ScaleformUI main project into the TypeScript V8 codebase.

## C# features and TS port status

### Core element support

- [x] `Elements/Colors.cs` => `src/elements/notification/colors.ts`
- [x] `Elements/Controls.cs` => `src/elements/controls.ts`
- [x] `Elements/SColor.cs` => `src/elements/scolor.ts`
- [x] `Elements/ScaleformFonts.cs` => `src/elements/scaleform-fonts.ts`
- [x] `Elements/ScaleformLabel.cs` => `src/elements/scaleform-label.ts`
- [x] `Elements/ScaleformLiteralString.cs` => `src/elements/scaleform-literal-string.ts`
- [x] `Elements/ScreenTools.cs` => `src/math/screen-tools.ts`
- [x] `Elements/PointExtensions.cs` => `src/elements/PointExtensions.ts`
- [x] `Elements/VehicleColors.cs` => `src/elements/vehicle-colors.ts`
- [ ] `Elements/Sprite.cs` Nur vom Timerbar genutzt
- [ ] `Elements/UIResRectangle.cs` Nur vom Timerbar genutzt
- [ ] `Elements/UIResText.cs`

### HUD and notification systems

- [x] `Hud/Markers/Marker.cs` => `src/hud/marker.ts`
- [ ] `Hud/Markers/MarkersHandler.cs`
- [ ] `Hud/Notifications/NotificationChars.cs`
- [x] `Hud/Notifications/Notifications.cs` => `src/hud/notifications.ts`

### Menu framework and navigation

- [x] `Menus/BreadcrumbsHandler.cs` => `src/menus/breadcrumbs-handler.ts`
- [x] `Menus/MenuBase.cs` => `src/menus/menu.base.ts`
- [x] `Menus/MenuHandler.cs` => `src/menus/menu-handler.ts`
- [ ] `Menus/Pause Menus/PauseMenuBase.cs`
- [ ] `Menus/Pause Menus/Elements/Columns/Column.cs`
- [ ] `Menus/Pause Menus/Elements/Columns/MissionsListColumn.cs`
- [ ] `Menus/Pause Menus/Elements/Columns/PlayerListColumn.cs`
- [ ] `Menus/Pause Menus/Elements/Columns/SettingsListColumn.cs`
- [ ] `Menus/Pause Menus/Elements/Columns/StoreListColumn.cs`
- [ ] `Menus/Pause Menus/Elements/CrewTag.cs`
- [ ] `Menus/Pause Menus/Elements/Items/FakeBlip.cs`
- [ ] `Menus/Pause Menus/Elements/Items/FriendItem.cs`
- [ ] `Menus/Pause Menus/Elements/Items/LobbyItem.cs`
- [ ] `Menus/Pause Menus/Elements/Items/MMPLayerItem.cs`
- [ ] `Menus/Pause Menus/Elements/Items/MinimapBaseItem.cs`
- [ ] `Menus/Pause Menus/Elements/Items/MinimapRaceCheckpoint.cs`
- [ ] `Menus/Pause Menus/Elements/Items/MinimapRoute.cs`
- [ ] `Menus/Pause Menus/Elements/Items/MissionItem.cs`
- [ ] `Menus/Pause Menus/Elements/Items/StoreItem.cs`
- [ ] `Menus/Pause Menus/Elements/Panels/MinimapPanel.cs`
- [ ] `Menus/Pause Menus/Elements/Panels/MissionDetailsPanel.cs`
- [ ] `Menus/Pause Menus/Elements/Panels/PlayerStatsPanel.cs`
- [ ] `Menus/Pause Menus/LobbyMenu/MainView.cs`
- [ ] `Menus/Pause Menus/PauseMenu/Items/BasicTabItem.cs`
- [ ] `Menus/Pause Menus/PauseMenu/Items/KeymapItem.cs`
- [ ] `Menus/Pause Menus/PauseMenu/Items/SettingsItems/SettingsCheckboxItem.cs`
- [ ] `Menus/Pause Menus/PauseMenu/Items/SettingsItems/SettingsItem.cs`
- [ ] `Menus/Pause Menus/PauseMenu/Items/SettingsItems/SettingsListItem.cs`
- [ ] `Menus/Pause Menus/PauseMenu/Items/SettingsItems/SettingsProgressItem.cs`
- [ ] `Menus/Pause Menus/PauseMenu/Items/SettingsItems/SettingsSliderItem.cs`
- [ ] `Menus/Pause Menus/PauseMenu/Items/StatsTabItem.cs`
- [ ] `Menus/Pause Menus/PauseMenu/TabView.cs`
- [ ] `Menus/Pause Menus/PauseMenu/Tabs/BaseTab.cs`
- [ ] `Menus/Pause Menus/PauseMenu/Tabs/PlayerListTab.cs`
- [ ] `Menus/Pause Menus/PauseMenu/Tabs/SubmenuTab.cs`
- [ ] `Menus/Pause Menus/PauseMenu/Tabs/TabLeftItem.cs`
- [ ] `Menus/Pause Menus/PauseMenu/Tabs/TextTab.cs`

### Radial menu

- [ ] `Menus/RadialMenu/RadialMenu.cs`
- [ ] `Menus/RadialMenu/RadialSegment.cs`
- [ ] `Menus/RadialMenu/SegmentItem.cs`

### Radio menu

- [ ] `Menus/UIRadioMenu/RadioItem.cs`
- [ ] `Menus/UIRadioMenu/UIRadioMenu.cs`

### Scaleform wrappers / UI overlays

- [x] `Scaleforms/BigFeed/BigFeedHandler.cs` => `src/scaleforms/bigfeed/bigfeedhandler.ts`
- [x] `Scaleforms/BigMessage/BigMessage.cs` => `src/scaleforms/bigmessage/bigmessage-instance.ts`
- [x] `Scaleforms/Countdown/CountdownHandler.cs` => `src/scaleforms/countdown/countdown.ts`
- [x] `Scaleforms/Instructional_Buttons/InstructionalButtons.cs` => `src/scaleforms/instructional-buttons/instructionalbutton.ts`
- [x] `Scaleforms/Instructional_Buttons/InstructionalButtons.cs` => `src/scaleforms/instructional-buttons/instructionalbuttonshandler.ts`
- [ ] `Scaleforms/MediumMessage/MediumMessage.cs`
- [x] `Scaleforms/Minimap/MinimapOverlays.cs` => `src/scaleforms/minimap/minimap.ts`
- [ ] `Scaleforms/MissionSelector/MissionSelectorHandler.cs`
- [ ] `Scaleforms/MultiplayerChat/MultiplayerChatHandler.cs`
- [x] `Scaleforms/PauseMenu/PauseMenuScaleform.cs` => `src/scaleforms/pausemenu/pausemenu-handler.ts`
- [ ] `Scaleforms/PopupWarning/PopupWarning.cs`
- [ ] `Scaleforms/RankBar/RankBarHandler.cs`
- [ ] `Scaleforms/Scoreboard/PlayerListHandler.cs`
- [ ] `Scaleforms/ScaleformExtensions.cs` (verify if unique extension helpers are still needed beyond `src/scaleforms/scaleform.ts`)

### Timer bars

- [ ] `TimerBars/Bars/ProgressTimerBar.cs`
- [ ] `TimerBars/Bars/TextTimerBar.cs`
- [ ] `TimerBars/Bars/TimerBarBase.cs`
- [ ] `TimerBars/TimerBarPool.cs`

### Project metadata

- [ ] `Properties/AssemblyInfo.cs` (C# project metadata)
- [ ] `ScaleformUI.csproj` (C# project file)
- [ ] `packages.config` (C# package metadata)

## Notes

- `Elements/ScaleformFonts.cs`, `Elements/ScaleformLabel.cs`, `Elements/ScaleformLiteralString.cs`, `Elements/ScreenTools.cs`, `Elements/PointExtensions.cs`, `Elements/VehicleColors.cs`, `Hud/Markers/Marker.cs`, `Hud/Notifications/Notifications.cs`, `Menus/BreadcrumbsHandler.cs`, `Menus/MenuBase.cs`, `Menus/MenuHandler.cs`, `Menus/UIMenu/PaginationHandler.cs`, `Menus/UIMenu/UIMenu.cs`, `Scaleforms/BigFeed/BigFeedHandler.cs`, `Scaleforms/BigMessage/BigMessage.cs`, `Scaleforms/Countdown/CountdownHandler.cs`, `Scaleforms/Instructional_Buttons/InstructionalButtons.cs`, `Scaleforms/Minimap/MinimapOverlays.cs`, `Scaleforms/PauseMenu/PauseMenuScaleform.cs`, and `Scaleforms/ScaleformUI/Main.cs` already have TypeScript equivalents in `ScaleformUI_V8/src`.
- `ScaleformUI_V8/src` currently includes placeholder support in `scaleforms/scaleformui/main.ts` for `JobMissionSelector` and `RankbarHandler`, so those wrappers are still incomplete.

### Diff audit

- `ScaleformUI_V8/diff.txt` contains repository housekeeping changes and sample app updates only.
- `.idea` metadata and GitHub workflow changes are environment/project config, not TypeScript port progress.
- `MenuExample.cs` changes are C# sample updates; they do not imply completed TS source ports.
- Keep the existing port checklist unchanged unless actual `ScaleformUI_V8/src` TypeScript files are added for the corresponding C# features.
