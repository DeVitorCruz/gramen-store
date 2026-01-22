import { AfterViewInit, Component, input } from '@angular/core';
import { Swiper } from 'swiper';
import { InfoSecItem } from '../info-sec-item';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from '../card/card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-horizontal-carousel',
  imports: [
    MatIconModule,
    MatButtonModule,
    CardComponent,
    NgFor
  ],
  templateUrl: './horizontal-carousel.component.html',
  styleUrl: './horizontal-carousel.component.scss'
})
export class HorizontalCarouselComponent implements AfterViewInit {
  
  public readonly INFO_SEC_ITEM = input.required<InfoSecItem>();

  public swiperInstance?: Swiper;

  public ngAfterViewInit(): void {
    this.initSwiper();
  }
  
  public initSwiper(): void {
    this.swiperInstance = new Swiper('.horizontal-swiper-carousel', {
      slidesPerView: 1,
      spaceBetween: 15,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      pagination: false,
      navigation: {
        nextEl: '.swiper-h-btn-next',
        prevEl: '.swiper-h-btn-prev',
      },
      breakpoints: {
        575: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 3
        },
        1280: {
          slidesPerView: 4
        }
      }
    });
  }
}