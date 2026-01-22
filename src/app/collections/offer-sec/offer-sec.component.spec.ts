import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferSecComponent } from './offer-sec.component';

describe('OfferSecComponent', () => {
  let component: OfferSecComponent;
  let fixture: ComponentFixture<OfferSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferSecComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
