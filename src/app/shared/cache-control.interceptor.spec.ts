import { TestBed } from '@angular/core/testing';

import { CacheControlInterceptor } from './cache-control.interceptor';

describe('CacheControlInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CacheControlInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CacheControlInterceptor = TestBed.inject(CacheControlInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
