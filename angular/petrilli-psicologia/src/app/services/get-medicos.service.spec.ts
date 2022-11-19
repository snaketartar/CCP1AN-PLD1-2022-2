import { TestBed } from '@angular/core/testing';

import { GetMedicosService } from './get-medicos.service';

describe('GetMedicosService', () => {
  let service: GetMedicosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMedicosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
