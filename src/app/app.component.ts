import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { SidenavService } from './shared/sidenav/sidenav.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { SocialMediaSectionComponent } from './collections/social-media-section/social-media-section.component';
import { ListItemsComponent } from './collections/list-items/list-items.component';
import { WRAPP_MENU_ELEMENTS } from './themes/furniture-store/navigate-bar-features/WRAPP_MENU_ELEMENTS';
import { MenuItem } from './collections/menu-item';

@Component({
  selector: 'app-root',
  imports: [
    MatSidenavModule,
    RouterOutlet,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    SocialMediaSectionComponent,
    ListItemsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  public title: string = 'gramen-store';

  public readonly WRAPP_MENU_ELEMENTS: MenuItem[] = WRAPP_MENU_ELEMENTS;
  
  @ViewChild('drawer') public sidenav!: MatSidenav;

  public sidenavService = inject(SidenavService);

  public ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }

  public closeSidenav(): void {
    this.sidenavService.close();
  }
}
