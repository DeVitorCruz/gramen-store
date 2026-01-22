import { Component, input } from '@angular/core';
import { IconBoxItem } from '../icon-box-item';

@Component({
  selector: 'app-thumb-item',
  imports: [],
  templateUrl: './thumb-item.component.html',
  styleUrl: './thumb-item.component.scss'
})
export class ThumbItemComponent {
  public readonly DATA = input.required<IconBoxItem>();
}
