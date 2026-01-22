import { Component, input } from '@angular/core';
import { InfoBoxComponent } from '../info-box/info-box.component';
import { InfoBoxItem } from '../info-box-item';
import { RatingDotComponent } from '../rating-dot/rating-dot.component';
import { RatingElement } from '../rating-dot/rating-element';

@Component({
  selector: 'app-calling-action',
  imports: [
    InfoBoxComponent,
    RatingDotComponent
  ],
  templateUrl: './calling-action.component.html',
  styleUrl: './calling-action.component.scss'
})
export class CallingActionComponent {
  public readonly CALLING_ACTION_INFO = input.required<InfoBoxItem>();
  public readonly RATING_ELEMENT = input<RatingElement[]>();
}
