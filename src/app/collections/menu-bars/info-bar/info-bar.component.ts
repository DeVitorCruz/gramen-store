import { CommonModule, NgFor } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { InfoBarInfo } from './info-bar.info';
import { AuthService } from '../../../auth/auth-tools/auth.service';
import { RouterLink } from '@angular/router';
import { AuthResponse } from '../../../auth/auth-tools/auth-response';

@Component({
  selector: 'app-info-bar',
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    NgFor,
    CommonModule,
    RouterLink
  ],
  templateUrl: './info-bar.component.html',
  styleUrl: './info-bar.component.scss'
})
export class InfoBarComponent {
  public readonly INFO_BAR_FEATURES = input.required<InfoBarInfo>();
  public readonly AUTH_SERVICE = inject(AuthService);

  public logout(): void {
    this.AUTH_SERVICE.logout()?.subscribe({
      next: () => console.log('Logged out successfully'), 
      error: (err) => console.error('Logout failed', err),
    });
  }
}
