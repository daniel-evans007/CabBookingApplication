import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivertripsComponent } from './drivertrips.component';

describe('DrivertripsComponent', () => {
  let component: DrivertripsComponent;
  let fixture: ComponentFixture<DrivertripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrivertripsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrivertripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
