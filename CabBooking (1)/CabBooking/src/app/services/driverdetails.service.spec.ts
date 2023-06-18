import { TestBed } from '@angular/core/testing';

import { DriverdetailsService } from './driverdetails.service';

describe('DriverdetailsService', () => {
  let service: DriverdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DriverdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
