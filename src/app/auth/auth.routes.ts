import { Routes } from "@angular/router";
import { BannerBindRouteItem } from "../collections/banner-bind-route/banner-bind-route-item";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";

export const AUTH_ROUTES: Routes = [
    { 
        path: 'register', 
        component: RegisterComponent,
        data: {
            bannerBindItem: {
                title: 'Create Account',
                text: 'HOME/CREATE ACCOUNT',
                imgUrl: 'assets/banner/banner-bind-route/breadcrumb-bg-furniture.jpg',
                seoTitle: 'Create on store - gramen',
                seoDescription: 'find the area to create at the gramen',
            } as BannerBindRouteItem,
            breadcrumb: 'register'
        },
    },
    { 
        path: 'login', 
        component: LoginComponent,
        data: {
            bannerBindItem: {
                title: "Customer's Login",
                text: "HOME/CUSTOMER'S LOGIN",
                imgUrl: 'assets/banner/banner-bind-route/breadcrumb-bg-furniture.jpg',
                seoTitle: 'Login on store - gramen',
                seoDescription: 'find the area to login at the gramen',
            } as BannerBindRouteItem,
            breadcrumb: 'login'
        },
    },
];