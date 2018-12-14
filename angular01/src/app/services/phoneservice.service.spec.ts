import { TestBed } from '@angular/core/testing';

import { PhoneserviceService } from './phoneservice.service';

describe('PhoneserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhoneserviceService = TestBed.get(PhoneserviceService);
    expect(service).toBeTruthy();
  });
});
