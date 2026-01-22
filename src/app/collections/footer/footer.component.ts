import { Component } from '@angular/core';
import { SocialMediaSectionComponent } from '../social-media-section/social-media-section.component';
import { MenuItem } from '../menu-item';
import { FOOTER_LIST_ITEMS } from './FOOTER_LIST_ITEMS';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { MatIconModule } from '@angular/material/icon';
import { SplitListComponent } from '../split-list/split-list.component';

@Component({
  selector: 'app-footer',
  imports: [
    SocialMediaSectionComponent,
    MatIconModule,
    FontAwesomeModule,
    SplitListComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  public readonly FOOTER_LIST_ITEMS: MenuItem[] = FOOTER_LIST_ITEMS;

  constructor(public library: FaIconLibrary) {
    this.library.addIcons(faPhone, faLocationDot);
  }
}
