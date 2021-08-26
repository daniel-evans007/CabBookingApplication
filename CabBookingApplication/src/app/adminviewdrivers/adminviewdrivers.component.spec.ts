import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewdriversComponent } from './adminviewdrivers.component';

describe('AdminviewdriversComponent', () => {
  let component: AdminviewdriversComponent;
  let fixture: ComponentFixture<AdminviewdriversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminviewdriversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminviewdriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
