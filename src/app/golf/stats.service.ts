import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
const ASGOLF_ASSET_ROOT = environment.dataRoot;

@Injectable()
export class StatsService {

  constructor(private http: Http) {
  }

  getStats(season: number): Observable<any> {
    return this.http.get(ASGOLF_ASSET_ROOT + `/data/${season}/stats.js`)
      .map(r => r.json());
  }

  getRecords(): Observable<any> {
    return this.http.get(ASGOLF_ASSET_ROOT + `/data/records.js`)
      .map(r => r.json());
  }

}
