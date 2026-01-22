import { AfterViewInit, Component, input } from '@angular/core';
import { FeedbackPage } from './feedback-page';
import { Swiper } from 'swiper';
import { NgFor } from '@angular/common';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faQuoteRightAlt } from '@fortawesome/free-solid-svg-icons';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-client-feedback',
  imports: [
    MatIconModule,
    FontAwesomeModule,
    NgFor,
    MatButtonModule
  ],
  templateUrl: './client-feedback.component.html',
  styleUrl: './client-feedback.component.scss'
})
export class ClientFeedbackComponent implements AfterViewInit {
  public readonly FEEDBACK_PAGE = input.required<FeedbackPage>();
  
  public swiperInstance?: Swiper;

  constructor(public library: FaIconLibrary) {
    this.library.addIcons(faQuoteRightAlt);
  }

  public ngAfterViewInit(): void {
    this.initSwiper();
  }

  public initSwiper(): void {
    this.swiperInstance = new Swiper('.client-feedback-swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      pagination: false,
      navigation: {
        nextEl: '.btn-client-feet-next',
        prevEl: '.btn-client-feet-prev',
      },
      breakpoints: {
        775: {
          slidesPerView: 2
        },
        1187: {
          slidesPerView: 3
        },
      }
    });
  }
}
