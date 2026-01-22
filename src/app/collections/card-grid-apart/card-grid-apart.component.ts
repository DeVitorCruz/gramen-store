import { Component, input } from '@angular/core';
import { GridApartPage } from './grid-apart-page';
import { NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card-grid-apart',
  imports: [
    NgFor,
    MatIconModule
  ],
  templateUrl: './card-grid-apart.component.html',
  styleUrl: './card-grid-apart.component.scss'
})
export class CardGridApartComponent {
  public readonly GRID_APART_PAGE = input.required<GridApartPage>();
}
