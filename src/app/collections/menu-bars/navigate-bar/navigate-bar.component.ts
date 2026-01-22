import { NgFor } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavService } from '../../../shared/sidenav/sidenav.service';
import { MenuItem } from '../../menu-item';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-navigate-bar',
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    NgFor,
    MatBadgeModule
  ],
  templateUrl: './navigate-bar.component.html',
  styleUrl: './navigate-bar.component.scss'
})
export class NavigateBarComponent {
  
  public readonly WRAPP_MENU_ELEMENTS = input<MenuItem[]>();

  public sidenavService = inject(SidenavService);

  public hidden: boolean = false;

  public toggleMenu(): void {
    this.sidenavService.toggle();
  }
}
