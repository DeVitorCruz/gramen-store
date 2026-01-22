import { Component, input } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFacebookF, faTwitter, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { SOCIAL_ITEMS } from './SOCIAL_ITEMS';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-social-media-section',
  imports: [
    FontAwesomeModule,
    NgFor,
    NgClass
  ],
  templateUrl: './social-media-section.component.html',
  styleUrl: './social-media-section.component.scss'
})
export class SocialMediaSectionComponent {

  public readonly MAIN_STYLE = input<string>();

  public readonly SOCIAL_ITEMS = SOCIAL_ITEMS;
  
  constructor(public library: FaIconLibrary) {
    this.library.addIcons(faFacebookF, faTwitter, faYoutube, faLinkedinIn);
  }
}
