import { CountDownFeatures } from "../shared/countdown/countdown-features";
import { IconBoxItem } from "./icon-box-item";
import { BtnFeatures } from "./btn-features";

export interface InfoBoxItem {
    id: number;
    upTitle?: string;
    title: string;
    text?: string;
    btnNames?: BtnFeatures[];
    imageUrl?: string;
    hasCountDown?: boolean;
    countDownFeature?: CountDownFeatures;
    itemContent?: IconBoxItem[];
    bgColor?: string;
}