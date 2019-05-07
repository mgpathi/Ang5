import { TestBed, inject } from '@angular/core/testing';

import { EmployeeAddService } from './employee-add.service';

describe('EmployeeAddService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeAddService]
    });
  });

  it('should be created', inject([EmployeeAddService], (service: EmployeeAddService) => {
    expect(service).toBeTruthy();
  }));
});
