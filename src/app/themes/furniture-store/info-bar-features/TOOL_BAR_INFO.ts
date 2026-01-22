import { InfoBarInfo } from "../../../collections/menu-bars/info-bar/info-bar.info";

export const TOOL_BAR_INFO: InfoBarInfo = {
    telephoneNumber: '+380961382876',
    beforeOffer: 'take care of your helth',
    offer: '25% off',
    afterOffer: 'use node “ dofix03 ”',
    menuItems: [
        { 
            id: 0,
            title: 'Language',
            subItems: [
                {
                    id: 0,
                    title: 'spanish',
                },
                {
                    id: 1,
                    title: 'russian',
                },
                {
                    id: 2,
                    title: 'portuguese',
                },
            ]
        },
        {
            id: 1,
            title: 'Coins',
            subItems: [
                {
                    id: 0,
                    title: 'eur',
                },
                {
                    id: 1,
                    title: 'chr',
                },
                {
                    id: 2,
                    title: 'gbp',
                },
                {
                    id: 3,
                    title: 'kwd',
                },
            ]
        },
        {
            id: 2,
            title: 'Settings',
            subItems: [
                {
                    id: 0,
                    title: 'my profile',
                },
                {
                    id: 1,
                    title: 'wishlist',
                },
                {
                    id: 2,
                    title: 'cart',
                },
                {
                    id: 3,
                    title: 'logout',
                    event: {
                        clickEvent: true
                    }
                },
            ]
        },
    ]
};