import { Component, input, Type } from '@angular/core';
import { SecBoxInfo } from './sec-box-info';
import { NgComponentOutlet, NgFor, CommonModule } from '@angular/common';

@Component({
  selector: 'app-sec-box-collect',
  imports: [
    NgFor,
    NgComponentOutlet,
    CommonModule
  ],
  templateUrl: './sec-box-collect.component.html',
  styleUrl: './sec-box-collect.component.scss'
})
export class SecBoxCollectComponent {
  
  public readonly SEC_BOX_INFO = input.required<SecBoxInfo>();
  public readonly ITEM_COMPONENT = input.required<Type<any>>();
}
