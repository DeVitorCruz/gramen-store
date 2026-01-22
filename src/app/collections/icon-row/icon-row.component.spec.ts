import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconRowComponent } from './icon-row.component';

describe('IconRowComponent', () => {
  let component: IconRowComponent;
  let fixture: ComponentFixture<IconRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
