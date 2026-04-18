import LobbyItem from "./lobby-item";

export enum PlayerCardType {
    VEHICLE_ITEM = 0,
    PLAYER_BET_ITEM = 1,
    PLAYER_ITEM = 2
}

export enum PlayerCardTeam {
    GENERIC = 0,
    FRIEND = 1,
    FOE = 2
}

export class MMPLayerItem extends LobbyItem {
    constructor(label: string, type: PlayerCardType, team: PlayerCardTeam) {
        super(label);
        void type;
        void team;
    }
}

export default MMPLayerItem;
