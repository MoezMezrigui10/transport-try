import { TestBed } from '@angular/core/testing';

import { TransporterServiceService } from './transporter-service.service';

describe('TransporterServiceService', () => {
  let service: TransporterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransporterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
