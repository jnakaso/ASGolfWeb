import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { PhotosService } from './photos.service';

describe('PhotosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [PhotosService]
    });
  });

  it('should be created', inject([PhotosService], (service: PhotosService) => {
    expect(service).toBeTruthy();
  }));
});
