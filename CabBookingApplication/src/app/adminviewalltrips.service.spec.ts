import { TestBed } from '@angular/core/testing';

import { AdminviewalltripsService } from './adminviewalltrips.service';

describe('AdminviewalltripsService', () => {
  let service: AdminviewalltripsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminviewalltripsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
