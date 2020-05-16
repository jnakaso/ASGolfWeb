import { Injectable } from '@angular/core';
import { parseString } from 'xml2js';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ASEvent } from './asevent';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EventsService {

  constructor(
    private http: HttpClient) {
  }

  getEvents(year: number): Observable<ASEvent[]> {
    return this.http.get(`/asgolf-assets/data/${year}/events.xml`, {responseType: 'text'})
      .pipe(map(r => {
        let obs = [];
        parseString(r, (err, result) => {
          obs = result.Events.Event;
          obs.forEach(evt => evt.id = evt['$'].id);
        });
        return obs;
      }));
  }
}
