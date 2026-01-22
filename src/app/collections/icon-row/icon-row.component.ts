import { Component, input, Type } from '@angular/core';
import { faTruck, faCreditCard, faArrowRotateLeft, faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { ICONS_ITEMS } from '../split-list/ICONS_ITEMS'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon-row',
  imports: [
    FontAwesomeModule,
    CommonModule
],
  templateUrl: './icon-row.component.html',
  styleUrl: './icon-row.component.scss'
})
export class IconRowComponent {
  public readonly ICONS_ITEMS = input<any>(ICONS_ITEMS);
  public readonly COLUMN_DEFINITION = input<string>();
  public readonly INPUT_COMPONENT = input.required<Type<any>>();
  public readonly ICON_ROW_INPUTS = input<Record<string, any>>();

  constructor(public library: FaIconLibrary) {
    this.library.addIcons(faTruck, faCreditCard, faArrowRotateLeft, faShieldHalved);
  }

  public mergedInputs(iconRowInputs: Record<string, any>): Record<string, any> {
    return {...iconRowInputs, ...this.ICON_ROW_INPUTS(),};
  }
}
