import { Component, inject } from '@angular/core';
import { FlexFormComponent } from '../../collections/flex-form/flex-form.component';
import { REGISTER_CONFIG } from './REGISTER_CONFIG';
import { AuthService } from '../auth-tools/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [
    FlexFormComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  public readonly REGISTER_CONFIG = REGISTER_CONFIG;
  public readonly AUTH_SERVICE = inject(AuthService);
  public readonly ROUTER = inject(Router);

  public onRegister(data: any): void {
    console.log('Register data submitted:', data);

    if (data) {
      this.AUTH_SERVICE.register(data).subscribe({
        next: res => {
          console.log('Registered!', res);
          this.ROUTER.navigate(['/']);
        },
        error: err => {
          console.log('Register failed', err);
        }
      });
    }
  }
}
