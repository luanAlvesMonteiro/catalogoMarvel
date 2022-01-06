import { TestBed } from '@angular/core/testing';

import { ListaPersonagensService } from './lista-personagens.service';

describe('ListaPersonagensService', () => {
  let service: ListaPersonagensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaPersonagensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
