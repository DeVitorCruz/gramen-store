import { MenuItem } from "../../menu-item";

export interface InfoBarInfo {
    telephoneNumber: string;
    beforeOffer: string;
    offer: string;
    afterOffer: string;
    menuItems?: MenuItem[];
}