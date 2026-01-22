import { Component, input } from '@angular/core';
import { CardAdjustableItem } from './card-adjustable-item';
import { NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card-adjustable',
  imports: [
    NgFor,
    NgIf,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './card-adjustable.component.html',
  styleUrl: './card-adjustable.component.scss'
})
export class CardAdjustableComponent {
  public readonly DATA = input.required<CardAdjustableItem>();
}

