import { Component, input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faGooglePlus } from '@fortawesome/free-brands-svg-icons'; 
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { MatListModule } from '@angular/material/list';
import { MenuItem } from '../menu-item';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-list-items',
  imports: [
    FontAwesomeModule,
    MatListModule,
    MatButtonModule,
    NgFor,
    NgIf
  ],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.scss'
})
export class ListItemsComponent {

  public readonly MENU_ITEMS = input<MenuItem[]>();

  public faPlus = faPlus;

  constructor(public library: FaIconLibrary) {
    this.library.addIcons(faGooglePlus, faPlus);
  }

  public toggleExpansion(menuBar: MenuItem): void {
    menuBar.isExpanded = !menuBar.isExpanded;
  }
}
