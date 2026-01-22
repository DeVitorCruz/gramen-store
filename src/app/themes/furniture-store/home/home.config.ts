import { Banner } from "../../../collections/banner-carousel/banner";
import { InfoBarInfo } from "../../../collections/menu-bars/info-bar/info-bar.info";
import { MenuItem } from "../../../collections/menu-item";

export interface HomeConfig {
    infoBarInfo?: InfoBarInfo;
    wrappMenuElements?: MenuItem[];
    banners?: Banner[];
}
