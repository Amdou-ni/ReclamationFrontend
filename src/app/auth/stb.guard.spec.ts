import { TestBed } from '@angular/core/testing';

import { StbGuard } from './stb.guard';

describe('StbGuard', () => {
  let guard: StbGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StbGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
