import { InfoBoxItem } from "../../../../collections/info-box-item";

export const EXCLUSIVE_OFFERS: InfoBoxItem[] = [
    {
        id: 0,
        title: 'Exclusive offers for you',
        text: 'Get weekly deals, valuable health information and more.',
        btnNames: [
            {
                id: 0,
                label : 'SING UP'
            }
        ],
        hasCountDown: false,
        bgColor: 'rgb(217, 243, 251)',
    },
    {
        id: 1,
        title: 'Join Our Community',
        text: 'Get weekly deals, valuable health information and more.',
        btnNames: [
            {
                id: 0,
                label : 'JOIN FREE NOW'
            }
        ],
        hasCountDown: false,
        bgColor: 'rgb(249, 255, 224)',
    },
    {
        id: 2,
        title: 'Get our FREE app Now!',
        text: 'Get weekly deals, valuable health information and more.',
        hasCountDown: false,
        itemContent: [
            {
                img: 'assets/icon-img/play-store.png',
                alt: 'Image not found',
            },
            {
                img: 'assets/icon-img/apple-store.png',
                alt: 'Image not found',
            },
        ],
        bgColor: 'rgb(255, 226, 229)',
    },
];