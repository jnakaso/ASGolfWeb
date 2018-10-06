import { TestBed, inject } from '@angular/core/testing';

import { InformationService } from './information.service';
import { HttpClientModule } from '@angular/common/http';

describe('InformationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [InformationService]
    });
  });

  it('should be created', inject([InformationService], (service: InformationService) => {
    expect(service).toBeTruthy();
  }));
});
