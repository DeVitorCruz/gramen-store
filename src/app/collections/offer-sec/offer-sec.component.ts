import { NgClass, NgFor, CommonModule, NgComponentOutlet } from '@angular/common';
import { Component, input, Type } from '@angular/core';
import { InfoBoxItem } from '../info-box-item';

@Component({
  selector: 'app-offer-sec',
  imports: [
    NgFor,
    NgClass,
    CommonModule,
    NgComponentOutlet
  ],
  templateUrl: './offer-sec.component.html',
  styleUrl: './offer-sec.component.scss'
})
export class OfferSecComponent {

  public readonly EXTRA_CLASSES = input<string>('');
  public readonly COLUMN_DEFINITION = input<string>('xl:grid xl:grid-cols-2');
  public readonly SEC_BLOCK_ITEMS = input.required<InfoBoxItem[]>();
  public readonly ITEM_COMPONENT = input.required<Type<any>>();
  public readonly OFFER_ITEM_INPUTS = input<Record<string, any>>();

  public mergedInputs(sec_input: Record<string, any>): Record<string, any> {
    return { ...sec_input, ...this.OFFER_ITEM_INPUTS(), };
  }
}
