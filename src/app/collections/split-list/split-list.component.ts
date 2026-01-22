import { Component, input } from '@angular/core';
import { MenuItem } from '../menu-item';
import { NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-split-list',
  imports: [
    NgFor,
    MatIconModule
  ],
  templateUrl: './split-list.component.html',
  styleUrl: './split-list.component.scss'
})
export class SplitListComponent {
  public readonly LISTE_ITEMS = input<MenuItem[]>();
}
