import { Component, input } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';
import { RatingElement } from './rating-element';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-rating-dot',
  imports: [
    FontAwesomeModule,
    MatIconModule,
    NgFor,
    NgClass
  ],
  templateUrl: './rating-dot.component.html',
  styleUrl: './rating-dot.component.scss'
})
export class RatingDotComponent {
  
  public readonly RATING_ELEMENTS = input<RatingElement[]>();
  
  constructor(public library: FaIconLibrary) {
    this.library.addIcons(faCircle);
  }
}
