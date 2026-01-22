import { Component, input } from '@angular/core';
import { InfoBoxComponent } from '../info-box/info-box.component';
import { InfoBoxItem } from '../info-box-item';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-offer-box',
  imports: [
    InfoBoxComponent,
    NgFor
  ],
  templateUrl: './offer-box.component.html',
  styleUrl: './offer-box.component.scss'
})
export class OfferBoxComponent {
  public readonly INFO_BOX_ITEMS = input<InfoBoxItem[]>();
}
