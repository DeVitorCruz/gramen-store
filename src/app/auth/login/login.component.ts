import { Component, inject } from '@angular/core';
import { FlexFormComponent } from '../../collections/flex-form/flex-form.component';
import { LOGIN_CONFIG } from './LOGIN_CONFIG'; 
import { CommonModule } from '@angular/common';
import { InfoBoxComponent } from '../../collections/info-box/info-box.component';
import { LOGIN_REGISTER_SEC } from './LOGIN_REGISTER_SEC';
import { AuthService } from '../auth-tools/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    FlexFormComponent,
    InfoBoxComponent,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public readonly LOGIN_CONFIG = LOGIN_CONFIG;
  public readonly LOGIN_REGISTER_SEC = LOGIN_REGISTER_SEC;
  public readonly AUTH_SERVICE = inject(AuthService);
  public readonly ROUTER = inject(Router);

  public onSubmit(data: any): void {
    console.log('Login data submitted:', data);

    if (data) {
      this.AUTH_SERVICE.login(data).subscribe({
        next: res => {
          console.log('Logged in!', res);
          this.ROUTER.navigate(['/']);
        },
        error: err => {
          console.log('Login failed', err);
        }
      });
    }
  }
}
