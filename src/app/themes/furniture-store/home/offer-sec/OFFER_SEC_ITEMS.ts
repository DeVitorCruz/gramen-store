import { InfoBoxItem } from "../../../../collections/info-box-item";
import { COUNT_DOWN_FEAT } from "./COUNT_DOWN_FEAT";

export const OFFER_SEC_ITEMS: InfoBoxItem[] = [
    {
        id: 0,
        upTitle: 'HOT DEAL FURNITURE',
        title: 'Furniture Limit Offer 30% Off',
        btnNames: [
            {
                id: 0,
                label: 'BUY NOW'
            }
        ],
        imageUrl: 'assets/offer-sec-images/ad-discount.png'
    },
    {
        id: 1,
        upTitle: 'HOT DEAL FURNITURE',
        title: 'Deals Of The Week',
        btnNames: [
            {
                id: 0,
                label: 'BUY NOW'
            }
        ],
        imageUrl: 'assets/offer-sec-images/ad-timer.png',
        hasCountDown: true,
        countDownFeature: COUNT_DOWN_FEAT
    },
];