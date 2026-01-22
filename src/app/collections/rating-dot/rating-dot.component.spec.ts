import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingDotComponent } from './rating-dot.component';

describe('RatingDotComponent', () => {
  let component: RatingDotComponent;
  let fixture: ComponentFixture<RatingDotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingDotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingDotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
