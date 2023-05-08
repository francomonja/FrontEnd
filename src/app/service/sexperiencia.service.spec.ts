import { TestBed } from '@angular/core/testing';

import { SExperienciaService } from './sexperiencia.service';

describe('SExperienciaService', () => {
  let service: SExperienciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SExperienciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
