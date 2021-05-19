import { TestBed } from '@angular/core/testing';

import { ListaCobradoresService } from './lista-cobradores.service';

describe('ListaCobradoresService', () => {
  let service: ListaCobradoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaCobradoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
