import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { InformationService } from './information.service';

describe('InformationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [InformationService]
    });
  });

  it('should be created', inject([InformationService], (service: InformationService) => {
    expect(service).toBeTruthy();
  }));
});
