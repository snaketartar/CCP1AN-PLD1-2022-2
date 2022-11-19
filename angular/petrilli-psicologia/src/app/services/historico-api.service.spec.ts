import { TestBed } from '@angular/core/testing';

import { HistoricoApiService } from './historico-api.service';

describe('HistoricoApiService', () => {
  let service: HistoricoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoricoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
