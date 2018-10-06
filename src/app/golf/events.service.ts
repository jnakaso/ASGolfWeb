import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { parseString } from 'xml2js';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ASEvent } from './asevent';

import { environment } from '../../environments/environment';
const ASGOLF_ASSET_ROOT = environment.dataRoot;

@Injectable()
export class EventsService {

  constructor(
    private http: Http) {
  }

  getEvents(year: number): Observable<ASEvent[]> {
    return this.http.get(ASGOLF_ASSET_ROOT + `/data/${year}/events.xml`)
      .pipe(map(r => {
        let obs = [];
        parseString(r.text(), (err, result) => {
          obs = result.Events.Event;
          obs.forEach(evt => evt.id = evt['$'].id);
        });
        return obs;
      }));
  }
}
