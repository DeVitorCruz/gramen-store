import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginPayload } from './login-payload';
import { RegisterPayload } from './register-payload';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthResponse } from './auth-response';
import { User } from './user';


@Injectable({ 
  providedIn: 'root'
})
export class AuthService {
  private readonly HTTP = inject(HttpClient);
  private readonly API_URL = 'http://localhost:8000/api';
  private readonly _USER = signal<User | null>(null);

  public readonly IS_AUTHENTICATED = signal<boolean>(false);
  public readonly CURRENT_USER = signal<AuthResponse['user'] | null>(null);
  public readonly USER = this._USER.asReadonly();

  constructor() {
    
    if (this.getAuthToken() && this.getUser()){
      this.IS_AUTHENTICATED.set(true);
      this.CURRENT_USER.set(JSON.parse(this.getUser()));
    }
  }

  public login(playload: LoginPayload): Observable<AuthResponse> {
    return this.HTTP.post<AuthResponse>(`${this.API_URL}/login`, playload).pipe(
      tap(res => this.handleAuthSuccess(res))
    );
  }

  public register(playload: RegisterPayload): Observable<AuthResponse> {
    return this.HTTP.post<AuthResponse>(`${this.API_URL}/register`, playload).pipe(
      tap(res => this.handleAuthSuccess(res))
    ); 
  }

  public logout() {
    const TOKEN = this.getAuthToken();
    if (!TOKEN) return;

    return this.HTTP.post(`${this.API_URL}/logout`, {}).pipe(
      tap(() => {
          this.removeLocalItem('auth_token');
          this.removeLocalItem('auth_user');
      
          this.IS_AUTHENTICATED.set(false);
          this.CURRENT_USER.set(null);
          this._USER.set(null);
        }
      )
    );
  }

  private handleAuthSuccess(res: AuthResponse): void {
    localStorage.setItem('auth_token', res.token);
    localStorage.setItem('auth_user', JSON.stringify(res.user));

    this.IS_AUTHENTICATED.set(true);
    this.CURRENT_USER.set(res.user);
    this._USER.set(res.user);
  }

  public getAuthHeaders() {
    return {
      Authorization: `Bearer ${this.getAuthToken()}`,
    };
  }

  public getAuthToken(): string | null {
    const TOKEN = localStorage.getItem('auth_token');

    return TOKEN;
  }

  public getUser(): string {
    const USER = localStorage.getItem('auth_user');
    if (USER) {
      return USER;
    }
    return '';
  }

  public isAuthenticated(): boolean {
    return this._USER() !== null;
  }

  public removeLocalItem(item: string): void {
    localStorage.removeItem(item);
  }
}
