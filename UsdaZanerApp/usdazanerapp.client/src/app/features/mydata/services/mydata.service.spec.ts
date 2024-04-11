import { TestBed } from '@angular/core/testing';

import { MyDataService } from './mydata.service';

describe('MydataServicesService', () => {
  let service: MyDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
