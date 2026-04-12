import { UIMenu } from "../uimenu";

export class UIMenuWindow{
    public ParentMenu!: UIMenu;
    id:number = 0;
    public UpdateParent(){}
    public Draw(){}
    public SetParentMenu(menu:UIMenu){
        this.ParentMenu = menu;
    }
}