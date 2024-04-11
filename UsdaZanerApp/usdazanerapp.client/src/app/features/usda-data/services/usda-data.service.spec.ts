import { TestBed } from '@angular/core/testing';

import { UsdaDataService } from './usda-data.service';

describe('UsdaDataService', () => {
  let service: UsdaDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsdaDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
