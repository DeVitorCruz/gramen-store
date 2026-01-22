import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureStore } from './furniture-store.component';

describe('FurnitureStore', () => {
  let component: FurnitureStore;
  let fixture: ComponentFixture<FurnitureStore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FurnitureStore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FurnitureStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
