import { EventCollect } from "./event-collect"; 

export interface MenuItem {
    id: number;
    title: string;
    isExpanded?: boolean;
    subItems?: MenuItem[];
    event?: EventCollect;
}

