import { MenuItem } from "../../../collections/menu-item";

export const WRAPP_MENU_ELEMENTS: MenuItem[] = [
    { 
        id: 0,
        title: 'home',
        subItems: [
            {
                id: 0,
                title: 'pharmacy store',
            },
            {
                id: 1,
                title: 'furniture store',
            },
            {
                id: 2,
                title: 'grocery store',
            },
        ]
    },
    {
        id: 1,
        title: 'about'
    },
    {
        id: 2,
        title: 'shop',
        subItems: [
            {
                id: 0,
                title: 'product',
            },
            {
                id: 1,
                title: 'product details',
            },
            {
                id: 2,
                title: 'wishlist',
            },
            {
                id: 3,
                title: 'cart',
            },
            {
                id: 4,
                title: 'checkout',
            },
        ]
    },
    {
        id: 3,
        title: 'pages',
        subItems: [
            {
                id: 0,
                title: 'about us',
            },
            {
                id: 1,
                title: 'find a store',
            },
            {
                id: 2,
                title: 'portfolio',
            },
            {
                id: 3,
                title: 'portfolio details',
            },
            {
                id: 4,
                title: 'faq',
            },
            {
                id: 5,
                title: 'coming soon',
            },
            {
                id: 6,
                title: '404',
            },
        ]
    },
    {
        id: 4,
        title: 'blog',
        subItems: [
            {
                id: 0,
                title: 'blog default',
            },
            {
                id: 1,
                title: 'blog grid',
            },
            {
                id: 2,
                title: 'blog details',
            },
        ]
    },
    {
        id: 5,
        title: 'contact'
    },
];