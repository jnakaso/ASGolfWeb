import { TestBed, inject } from '@angular/core/testing';
import { Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { HttpClientModule } from '@angular/common/http';

import { CoursesService } from './courses.service';

describe('CoursesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        CoursesService,
        { provide: XHRBackend, useClass: MockBackend }]
    });
  });

  it('should be created', inject([CoursesService], (service: CoursesService) => {
    expect(service).toBeTruthy();
  }));

  describe('getCourses()', () => {
    it('should get the data and transform it', inject(
      [CoursesService, XHRBackend], (service, backend) => {
        const mockResponse = [
          {
            id: 3,
            name: 'Auburn',
            tees: [
              {
                name: 'white',
                rating: 68.0,
                slope: 115
              }
            ]
          }
        ];
        backend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });

        service.getCourses().subscribe(ccs => {
          expect(ccs.length).toEqual(1)
        })
      })
    );
  });
});
