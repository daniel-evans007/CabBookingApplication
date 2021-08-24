import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewalltripsComponent } from './adminviewalltrips.component';

describe('AdminviewalltripsComponent', () => {
  let component: AdminviewalltripsComponent;
  let fixture: ComponentFixture<AdminviewalltripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminviewalltripsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminviewalltripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
