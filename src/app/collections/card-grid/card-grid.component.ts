import { AfterViewInit, Component, input } from '@angular/core';
import { CardGridRules } from './card-grid-rules';
import { MatTabsModule } from '@angular/material/tabs';
import { NgFor } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { CardElement } from '../card-element';

@Component({
  selector: 'app-card-grid',
  imports: [
    MatTabsModule,
    CardComponent,
    NgFor
  ],
  templateUrl: './card-grid.component.html',
  styleUrl: './card-grid.component.scss'
})
export class CardGridComponent implements AfterViewInit  {
  public readonly CARD_GRID_RULES = input.required<CardGridRules>();

  public readonly GRID_CARD_ELEMENTS = input<CardElement[]>();

  public activeLink: string = '';

  public ngAfterViewInit(): void {
    this.setActiveLink();
  }

  public setActiveLink(): void {
    this.activeLink = this.CARD_GRID_RULES().rules[0];
  }
}
