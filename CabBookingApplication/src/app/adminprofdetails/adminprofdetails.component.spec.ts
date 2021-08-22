import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminprofdetailsComponent } from './adminprofdetails.component';

describe('AdminprofdetailsComponent', () => {
  let component: AdminprofdetailsComponent;
  let fixture: ComponentFixture<AdminprofdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminprofdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminprofdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
