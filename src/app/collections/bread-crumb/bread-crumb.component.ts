import { Component, inject, OnDestroy, signal } from '@angular/core';
import { BreadCrumb } from './bread-crumb';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bread-crumb',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './bread-crumb.component.html',
  styleUrl: './bread-crumb.component.scss'
})
export class BreadCrumbComponent implements OnDestroy {
  private readonly ROUTER = inject(Router);
  private readonly ROUTE = inject(ActivatedRoute);
  public readonly BREAD_CRUMBS = signal<BreadCrumb[]>([]);
  public sub!: Subscription;

  constructor() {
    this.sub = this.ROUTER.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => {

      const CRUMBS: BreadCrumb[] = [];
      CRUMBS.push({ label: 'home', url: '/' });

      let currentRoute = this.ROUTE.root;
      let url: string = ''; 

      while (currentRoute.firstChild) { 
        currentRoute = currentRoute.firstChild;
        
        if (currentRoute.snapshot.url.length > 0) {
          const PATH_SEGMENT = currentRoute.snapshot.url.map(u => u.path).join('/');
        
          url += `/${PATH_SEGMENT}`;
  
          let label = currentRoute.snapshot.data['breadcrumb'];
          
          if (!label) {
            label = PATH_SEGMENT;
          }
  
          if (currentRoute.snapshot.paramMap.keys.length > 0) {
            currentRoute.snapshot.paramMap.keys.forEach(key => {
              const PARAM_VALUE = currentRoute.snapshot.paramMap.get(key);
  
              if (PARAM_VALUE) {
                label = this.mapDynamicParam(key, PARAM_VALUE);
              }
            });
          } 

          CRUMBS.push({ label, url });
        }
      }
      
      this.BREAD_CRUMBS.set(CRUMBS);
    });
  }

  private mapDynamicParam(key: string, value: string): string {
    if (key === 'id') {
      const PRODUCT_NAMES: Record<string, string> = {
        '1': 'iPhone 15',
        '2': 'Samsung Galaxy S24',
        '3': 'Pixel 9',
      };
      return PRODUCT_NAMES[value] || `Item ${value}`;
    }
  
    return value;
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
