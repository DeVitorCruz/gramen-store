import { Component, input } from '@angular/core';
import { CardElement } from '../card-element';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-card',
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    NgFor
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  public readonly CARD_ELEMENT = input.required<CardElement>();
}
