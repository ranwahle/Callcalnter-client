import { TestBed, inject } from '@angular/core/testing';

import { QueueManagementService } from './queue-management.service';

describe('QueueManagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QueueManagementService]
    });
  });

  it('should ...', inject([QueueManagementService], (service: QueueManagementService) => {
    expect(service).toBeTruthy();
  }));
});
