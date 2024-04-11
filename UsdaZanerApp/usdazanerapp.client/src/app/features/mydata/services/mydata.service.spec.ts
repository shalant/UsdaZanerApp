import { TestBed } from '@angular/core/testing';

import { MydataServicesService } from './mydata.service';

describe('MydataServicesService', () => {
  let service: MydataServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MydataServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
