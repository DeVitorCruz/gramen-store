import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecBoxCollectComponent } from './sec-box-collect.component';

describe('SecBoxCollectComponent', () => {
  let component: SecBoxCollectComponent;
  let fixture: ComponentFixture<SecBoxCollectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecBoxCollectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecBoxCollectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
