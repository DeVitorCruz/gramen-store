import { InfoBoxItem } from "../info-box-item";

export interface Banner {
    id: number;
    imageUrl: string;
    crossImageUrl?: string;
    infoBoxItem: InfoBoxItem;
}
