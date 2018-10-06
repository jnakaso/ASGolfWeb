import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, Http, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { GolfService } from './golf.service';
import { ASInit } from './asinit';

describe('GolfServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        GolfService,
        { provide: XHRBackend, useClass: MockBackend }]
    });
  });

  // it('should be created',
  //   inject([GolfService, XHRBackend], (service, backend) => {

  //     const mockResponse = {
  //       currentEvent: 11,
  //       currentSeason: 2017,
  //       lastTournamentId: 5,
  //       lastTournamentSeason: 2016,
  //       nextCourseId: 54,
  //       powerRank: 2016,
  //       showTwoDay: true
  //     };

  //     backend.connections.subscribe((connection) => {
  //       connection.mockRespond(new Response(new ResponseOptions({
  //         body: JSON.stringify(mockResponse)
  //       })));
  //     });

  //     expect(service).toBeTruthy();
  //     expect(service.getSeasons()[0]).toBe(new Date().getFullYear());
  //   }));

  describe('getInitValues()', () => {
    it('should get the data and transform it',
      inject([GolfService, XHRBackend], (service, backend) => {

        const mockResponse = {
          currentEvent: 11,
          currentSeason: 2017,
          lastTournamentId: 5,
          lastTournamentSeason: 2016,
          nextCourseId: 54,
          powerRank: 2016,
          showTwoDay: true
        };

        backend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });

        service.getInitValues().subscribe((vals: ASInit) => {
          expect(vals.currentEvent).toEqual(11);
          expect(vals.currentSeason).toEqual(2017);
          expect(vals.showTwoDay).toEqual(true);
        })

      })
    )
  });

});
