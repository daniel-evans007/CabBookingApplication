import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestdriversComponent } from './bestdrivers.component';

describe('BestdriversComponent', () => {
  let component: BestdriversComponent;
  let fixture: ComponentFixture<BestdriversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestdriversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestdriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
