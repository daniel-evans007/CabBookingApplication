import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustprofdetailsComponent } from './custprofdetails.component';

describe('CustprofdetailsComponent', () => {
  let component: CustprofdetailsComponent;
  let fixture: ComponentFixture<CustprofdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustprofdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustprofdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
