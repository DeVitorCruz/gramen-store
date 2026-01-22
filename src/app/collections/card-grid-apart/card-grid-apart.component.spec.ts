import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGridApartComponent } from './card-grid-apart.component';

describe('CardGridApartComponent', () => {
  let component: CardGridApartComponent;
  let fixture: ComponentFixture<CardGridApartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardGridApartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardGridApartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
