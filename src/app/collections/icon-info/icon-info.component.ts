import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRotateLeft, faCreditCard, faShieldHalved, faTruck } from '@fortawesome/free-solid-svg-icons';
import { iconsItem } from '../icons-item';

@Component({
  selector: 'app-icon-info',
  imports: [
    FontAwesomeModule,
    CommonModule
  ],
  templateUrl: './icon-info.component.html',
  styleUrl: './icon-info.component.scss'
})
export class IconInfoComponent {
  public readonly DATA = input.required<iconsItem>();

  constructor(public library: FaIconLibrary) {
    this.library.addIcons(faTruck, faCreditCard, faArrowRotateLeft, faShieldHalved);
  }
}
