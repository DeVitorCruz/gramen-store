import { IconsItemMatElement } from "../icons-item-mat-element";

export interface CardAdjustableItem {
    upTitle: string;
    description: string[];
    title: string;
    defaultBtn?: boolean;
    customBtn?: IconsItemMatElement[]
    imgUr: string;
    alt: string;
};