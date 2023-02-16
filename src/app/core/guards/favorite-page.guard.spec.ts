import { TestBed } from '@angular/core/testing';

import { FavoritePageGuard } from './favorite-page.guard';

describe('FavoritePageGuard', () => {
  let guard: FavoritePageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FavoritePageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
