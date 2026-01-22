import { BannerBindRouteComponent } from "../../../collections/banner-bind-route/banner-bind-route.component";
import { Routes } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { AboutComponent } from "./about/about.component";
import { BannerBindRouteItem } from "../../../collections/banner-bind-route/banner-bind-route-item";

export const PAGES_ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    {
        path: '',
        component: BannerBindRouteComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('../../../auth/auth.routes')
                    .then((m) => m.AUTH_ROUTES)
            },
            {
                path: 'about',
                component: AboutComponent,
                data: {
                    bannerBindItem: {
                        title: 'About us',
                        text: 'HOME/ABOUT US',
                        imgUrl: 'assets/banner/banner-bind-route/breadcrumb-bg-furniture.jpg',
                        seoTitle: 'About us - gramen',
                        seoDescription: 'find the area about us at the gramen',
                    } as BannerBindRouteItem,
                    breadcrumb: 'about'
                },
            }
        ]
    },
];