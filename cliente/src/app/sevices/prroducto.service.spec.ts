import { TestBed } from '@angular/core/testing';

import { PrroductoService } from './prroducto.service';

describe('PrroductoService', () => {
  let service: PrroductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrroductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
