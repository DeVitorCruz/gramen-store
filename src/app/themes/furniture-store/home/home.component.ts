import { Component } from '@angular/core';
import { BannerCarouselComponent } from '../../../collections/banner-carousel/banner-carousel.component';
import { BANNER_SLIDES } from './banner-slides/BANNER_SLIDES';
import { IconRowComponent } from '../../../collections/icon-row/icon-row.component';
import { OfferBoxComponent } from '../../../collections/offer-box/offer-box.component';
import { OFFER_BOX_ITEMS } from './offer-items/OFFER_BOX_ITEMS';
import { HorizontalCarouselComponent } from '../../../collections/horizontal-carousel/horizontal-carousel.component';
import { PRODUCT_FEATURES } from './product-featured/PRODUCT_FEATURED';
import { CallingActionComponent } from '../../../collections/calling-action/calling-action.component';
import { CALLING_ACT_INFO } from './calling-actions/CALLING_ACT_INFO';
import { RATING_ITEMS } from './calling-actions/RATING_ITEMS';
import { CardGridComponent } from '../../../collections/card-grid/card-grid.component';
import { PRODUCT_GRID_RULES } from './product-featured/product-grid/PRODUCT_GRID_RULES';
import { OfferSecComponent } from '../../../collections/offer-sec/offer-sec.component';
import { OFFER_SEC_ITEMS } from './offer-sec/OFFER_SEC_ITEMS';
import { COUNT_DOWN_FEAT } from './offer-sec/COUNT_DOWN_FEAT';
import { ClientFeedbackComponent } from '../../../collections/client-feedback/client-feedback.component';
import { PAGE_FEED_BACK_INFO } from './client-feedback/PAGE_FEED_BACK_INFO';
import { CardGridApartComponent } from '../../../collections/card-grid-apart/card-grid-apart.component';
import { PRODUCT_BEST_PAGE } from './product-featured/product-best/PRODUCT_BEST_PAGE';
import { SecBoxCollectComponent } from '../../../collections/sec-box-collect/sec-box-collect.component';
import { RECENT_BLOG } from './blog-sec/RECENT_BLOG';
import { CardAdjustableComponent } from '../../../collections/card-adjustable/card-adjustable.component';
import { InfoBoxComponent } from '../../../collections/info-box/info-box.component';
import { EXCLUSIVE_OFFERS } from './exclusive-offers/EXCLUSIVE_OFFERS';
import { IconInfoComponent } from '../../../collections/icon-info/icon-info.component';
import { ThumbItemComponent } from '../../../collections/thumb-item/thumb-item.component';
import { BRAND_LIST } from './brand-area/BRAND_LIST';

@Component({
  selector: 'app-home',
  imports: [
    BannerCarouselComponent,
    IconRowComponent,
    OfferBoxComponent,
    HorizontalCarouselComponent,
    CallingActionComponent,
    CardGridComponent,
    OfferSecComponent,
    ClientFeedbackComponent,
    CardGridApartComponent,
    SecBoxCollectComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
  public cardAdjustable = CardAdjustableComponent; 
  public infoBoxComponent = InfoBoxComponent;
  public iconInfoComponent = IconInfoComponent;
  public thumbItemComponent = ThumbItemComponent;

  public readonly BRAND_LIST = BRAND_LIST;
  public readonly EXCLUSIVE_OFFERS = EXCLUSIVE_OFFERS; 
  public readonly RECENT_BLOG = RECENT_BLOG;
  public readonly PRODUCT_BEST_PAGE = PRODUCT_BEST_PAGE;
  public readonly PAGE_FEED_BACK_INFO = PAGE_FEED_BACK_INFO;
  public readonly COUNT_DOWN_FEAT = COUNT_DOWN_FEAT;
  public readonly OFFER_SEC_ITEMS = OFFER_SEC_ITEMS;
  public readonly PRODUCT_GRID_RULES = PRODUCT_GRID_RULES;
  public readonly RATING_ITEMS = RATING_ITEMS;
  public readonly CALLING_ACT_INFO = CALLING_ACT_INFO;
  public readonly PRODUCT_FEATURES = PRODUCT_FEATURES; 
  public readonly OFFER_BOX_ITEMS = OFFER_BOX_ITEMS;
  public readonly BANNER_SLIDES = BANNER_SLIDES;

}
