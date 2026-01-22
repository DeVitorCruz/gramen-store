import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAdjustableComponent } from './card-adjustable.component';

describe('CardAdjustableComponent', () => {
  let component: CardAdjustableComponent;
  let fixture: ComponentFixture<CardAdjustableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAdjustableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAdjustableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
