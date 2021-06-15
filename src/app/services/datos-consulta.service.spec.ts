import { TestBed } from '@angular/core/testing';

import { DatosConsultaService } from './datos-consulta.service';

describe('DatosConsultaService', () => {
  let service: DatosConsultaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosConsultaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
