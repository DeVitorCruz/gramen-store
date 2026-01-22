import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallingActionComponent } from './calling-action.component';

describe('CallingActionComponent', () => {
  let component: CallingActionComponent;
  let fixture: ComponentFixture<CallingActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallingActionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallingActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
