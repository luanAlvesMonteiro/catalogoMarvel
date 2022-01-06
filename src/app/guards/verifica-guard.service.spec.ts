import { TestBed } from '@angular/core/testing';

import { VerificaGuardService } from './verifica-guard.service';

describe('VerificaGuardService', () => {
  let service: VerificaGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerificaGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
