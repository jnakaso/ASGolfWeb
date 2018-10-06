import { TestBed, inject } from '@angular/core/testing';

import { TestService } from './test.service';

describe('TestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestService]
    });
  });

  it('should be created', inject([TestService], (service: TestService) => {
    expect(service).toBeTruthy();
  }));

  it('should be do some promises and catch', inject([TestService], (service: TestService) => {
    spyOn(service, 'single').and.throwError('splat');

    try {
      service.all(['a1', 'a2'])
      fail("Should throw");
    } catch (err) {
      console.log('caught', err)
    }
  }));

  it('should be do some promises and reject', inject([TestService], (service: TestService) => {
    spyOn(service, 'single').and.returnValue(Promise.reject('ggg'));
    try {
      service.all(['a1', 'a2'])
    } catch (err) {
      console.log('caught', err)
    }
  }));


  it('should be do some promises', inject([TestService], (service: TestService) => {
    try {
      service.all(['a1', 'a2'])
      console.log('success');
    } catch (err) {
      console.log('caught', err)
    }
  }));
});
