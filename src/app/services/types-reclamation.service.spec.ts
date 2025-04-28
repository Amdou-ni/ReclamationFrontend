import { TestBed } from '@angular/core/testing';

import { TypesReclamationService } from './types-reclamation.service';

describe('TypesReclamationService', () => {
  let service: TypesReclamationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypesReclamationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
