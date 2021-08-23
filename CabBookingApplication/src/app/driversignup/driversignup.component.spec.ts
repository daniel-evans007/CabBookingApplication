import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversignupComponent } from './driversignup.component';

describe('DriversignupComponent', () => {
  let component: DriversignupComponent;
  let fixture: ComponentFixture<DriversignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriversignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriversignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
