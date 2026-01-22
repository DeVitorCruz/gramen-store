import { Component, input, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Banner } from './banner';
import { MatButtonModule } from '@angular/material/button';
import { Swiper } from 'swiper';
import { NgFor } from '@angular/common';
import { InfoBoxComponent } from '../info-box/info-box.component';

@Component({
  selector: 'app-banner-carousel',
  imports: [
    MatButtonModule,
    NgFor,
    InfoBoxComponent,
  ],
  templateUrl: './banner-carousel.component.html',
  styleUrl: './banner-carousel.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class BannerCarouselComponent implements OnInit, AfterViewInit {
  public readonly BANNERS = input.required<Banner[]>();

  public bgPicuture: string = 'assets/banner/bg-banner/furniture.png';

  public colorLayer: string = 'rgb(245, 241, 230)';

  private swiperInstance?: Swiper;

  public ngOnInit(): void {}

  public ngAfterViewInit(): void {
    this.initSwiper();
  }
 
  public initSwiper(): void {
    this.swiperInstance = new Swiper('.banner-swiper-container', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      effect: 'fade',
      navigation: false,
      fadeEffect: {
        crossFade: true
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.banner-swiper-pagination',
        clickable: true
      }
    });
  }

  public updateSwiper(): void {
    if (this.swiperInstance) {
      this.swiperInstance.update();
    }
  }
}
