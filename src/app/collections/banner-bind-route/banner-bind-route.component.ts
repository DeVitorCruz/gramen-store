import { Component, inject, OnDestroy, signal } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { BannerBindRouteItem } from './banner-bind-route-item';
import { Title, Meta } from '@angular/platform-browser';
import { NgIf } from '@angular/common';
import { Subscription } from 'rxjs';
import { BreadCrumbComponent } from '../bread-crumb/bread-crumb.component';

@Component({
  selector: 'app-banner-bind-route',
  imports: [
    RouterOutlet, 
    NgIf,
    BreadCrumbComponent,
  ],
  templateUrl: './banner-bind-route.component.html',
  styleUrl: './banner-bind-route.component.scss'
})
export class BannerBindRouteComponent implements OnDestroy {
  private readonly ROUTE = inject(ActivatedRoute);
  private readonly TITLE = inject(Title);
  private readonly META = inject(Meta);
  private sub?: Subscription;

  public readonly BANNER_BIND = signal<BannerBindRouteItem | null>(null);

  constructor() {
    this.sub = this.ROUTE.data.subscribe(() => {
      let route: ActivatedRoute = this.ROUTE;

      while (route.firstChild) {
        route = route.firstChild;
      }
      
      route.data.subscribe((data) => {
        const BANNER_DATA = data['bannerBindItem'] as BannerBindRouteItem;
        this.updateBannerData(BANNER_DATA);
      });
    });
  }

  private updateBannerData(item?: BannerBindRouteItem) {
    if (!item) return;
    
    this.BANNER_BIND.set(item);
    this.TITLE.setTitle(item.seoTitle ?? item.title);
    this.META.updateTag({
      name: 'description',
      content: item.seoDescription ?? item.text ?? '',
    });
  }

  public ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
