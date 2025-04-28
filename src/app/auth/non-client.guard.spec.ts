import { TestBed } from '@angular/core/testing';

import { NonClientGuard } from './non-client.guard';

describe('NonClientGuard', () => {
  let guard: NonClientGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NonClientGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
