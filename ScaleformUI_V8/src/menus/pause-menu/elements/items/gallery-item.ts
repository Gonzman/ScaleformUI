import { PauseMenuItem } from "./pause-menu-item";
import { FakeBlip } from "./fake-blip";
import TabView from "menus/pause-menu/tab-view";

// GalleryItem - Transpiled from C# GalleryItem.cs
export type GalleryItemSelected = (tab: TabView, item: GalleryItem, totalIndex: number, gridIndex: number) => void;

//Tabview is a guess for any
export class GalleryItem extends PauseMenuItem {
    public TextureDictionary: string;
    public TextureName: string;
    public Label1: string = "";
    public Label2: string = "";
    public Label3: string = "";
    public Label4: string = "";
    public RightPanelDescription: string = "";

    public Blip: FakeBlip | null = null;

    private activatedCallbacks: GalleryItemSelected[] = [];

    constructor(textureDictionary: string, textureName: string) {
        super("");
        this.TextureDictionary = textureDictionary;
        this.TextureName = textureName;
    }

    public SetLabels(label1: string, label2: string, label3: string, label4: string): void {
        this.Label1 = label1;
        this.Label2 = label2;
        this.Label3 = label3;
        this.Label4 = label4;
        // if (Parent != null && Parent.visible) {
        //     int gridPosition = Parent.GridIndexFromItemIndex(Parent.GalleryItems.IndexOf(this));
        //     Parent.Parent._pause._pause.CallFunction(
        //         "UPDATE_GALLERY_ITEM",
        //         gridPosition,
        //         gridPosition,
        //         33,
        //         4,
        //         0,
        //         1,
        //         Label1,
        //         Label2,
        //         TextureDictionary,
        //         TextureName,
        //         1,
        //         false,
        //         Label3,
        //         Label4
        //     );
        // }
    }

    public SetRightDescription(description: string): void {
        this.RightPanelDescription = description;
        if (this.Blip != null) return;
        // if (Parent != null && Parent.Visible && Parent.IsItemVisible(Parent.GalleryItems.IndexOf(this))) {
        //     AddTextEntry("gallerytab_desc", RightPanelDescription);
        //     Parent.Parent._pause._pause.CallFunction("SET_GALLERY_PANEL_HIDDEN", false);
        //     BeginScaleformMovieMethod(Parent.Parent._pause._pause.Handle, "SET_GALLERY_PANEL_DESCRIPTION");
        //     BeginTextCommandScaleformString("gallerytab_desc");
        //     EndTextCommandScaleformString_2();
        //     EndScaleformMovieMethod();
        // }
    }

    public OnActivated(callback: GalleryItemSelected): void {
        this.activatedCallbacks.push(callback);
    }

    public ItemSelected(tab: TabView, item: GalleryItem, totalIndex: number, gridIndex: number): void {
        for (const callback of this.activatedCallbacks) {
            callback(tab, item, totalIndex, gridIndex);
        }
    }
}

export default GalleryItem;
