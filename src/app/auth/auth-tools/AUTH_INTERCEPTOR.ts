import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { AuthService } from "./auth.service";
import { catchError, throwError } from "rxjs";
import { Router } from "@angular/router";

export const AUTH_INTERCEPTOR: HttpInterceptorFn = (req,  next) =>{
    const AUTH_SERVICE = inject(AuthService);
    const ROUTER = inject(Router);
    const AUTH_TOKEN = AUTH_SERVICE.getAuthToken();

    if (AUTH_TOKEN) {
        const CLONED_REQUEST = req.clone({
            setHeaders: {
                Authorization: `Bearer ${AUTH_TOKEN}`
            }
        });

        return next(CLONED_REQUEST).pipe(
            catchError(err => {
                if (err.status === 401) {
                    AUTH_SERVICE.removeLocalItem('auth_token');
                    ROUTER.navigate(['/login']);
                }
                return throwError(() => err);
            })
        );
    }

    return next(req);
};