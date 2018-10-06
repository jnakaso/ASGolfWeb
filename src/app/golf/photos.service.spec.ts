import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModuledule } from '@angular/http';

import { PhotosService } from './photos.service';

describe('PhotosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModuledule],
      providers: [PhotosService]
    });
  });

  it('should be created', inject([PhotosService], (service: PhotosService) => {
    expect(service).toBeTruthy();
  }));
});
