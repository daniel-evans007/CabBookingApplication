import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverprofdetailsComponent } from './driverprofdetails.component';

describe('DriverprofdetailsComponent', () => {
  let component: DriverprofdetailsComponent;
  let fixture: ComponentFixture<DriverprofdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverprofdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverprofdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
