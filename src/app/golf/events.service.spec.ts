import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, Http, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { EventsService } from './events.service';

describe('EventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        EventsService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    });
  });

  it('should be created', inject([EventsService], (service: EventsService) => {
    expect(service).toBeTruthy();
  }));

  describe('getEvents()', () => {
    it('should get the data and transform it', inject(
      [EventsService, XHRBackend], (service, backend) => {

        const mockResponse = `<Events>
        <Event id="1">
          <name>Brookdale Golf Club</name>
          <date>Mar. 26</date>
          <time>10:00 am</time>
          <url>http://www.brookdalegolf.com/</url>
          <greenFees>$34.00</greenFees>
          <slopeRating>67.1/111</slopeRating>
          <comments></comments>
          <isSaturday>false</isSaturday>
        </Event>
        </Events>`;

        backend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: mockResponse
          })));
        });

        service.getEvents(2017).subscribe(evts => {
          expect(evts.length).toEqual(1)
          expect(evts[0].name).toEqual(['Brookdale Golf Club'])
          expect(evts[0].date).toEqual(['Mar. 26'])
        })
      })
    );
  });
});
