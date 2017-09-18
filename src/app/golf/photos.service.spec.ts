import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { PhotosService } from './photos.service';

describe('PhotosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [PhotosService]
    });
  });

  it('should be created', inject([PhotosService], (service: PhotosService) => {
    expect(service).toBeTruthy();
  }));
});
