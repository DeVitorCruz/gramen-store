import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerBindRouteComponent } from './banner-bind-route.component';

describe('BannerBindRouteComponent', () => {
  let component: BannerBindRouteComponent;
  let fixture: ComponentFixture<BannerBindRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerBindRouteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerBindRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
