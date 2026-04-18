import PauseMenuItem from "./pause-menu-item";

export class KeymapItem extends PauseMenuItem {
    public PrimaryKeyboard: string;
    public PrimaryGamepad: string;
    public SecondaryKeyboard: string;
    public SecondaryGamepad: string;

    constructor(title: string, primaryKeyboard: string);
    constructor(title: string, primaryKeyboard: string, secondaryKeyboard: string);
    constructor(
        title: string,
        primaryKeyboard: string,
        primaryGamepad: string,
        secondaryKeyboard: string,
        secondaryGamepad: string
    );
    constructor(
        title: string,
        primaryKeyboard: string,
        secondaryKeyboardOrPrimaryGamepad: string = "",
        secondaryKeyboard?: string,
        secondaryGamepad?: string
    ) {
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

export default KeymapItem;
