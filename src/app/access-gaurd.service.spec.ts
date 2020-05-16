import { TestBed } from '@angular/core/testing';

import { AccessGaurdService } from './access-gaurd.service';

describe('AccessGaurdService', () => {
  let service: AccessGaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessGaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
