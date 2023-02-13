import { TestBed } from '@angular/core/testing';

import { GetAllServicesService } from './get-all-services.service';

describe('GetAllServicesService', () => {
  let service: GetAllServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
