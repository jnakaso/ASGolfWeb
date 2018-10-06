import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
const ASGOLF_ASSET_ROOT = environment.dataRoot;

@Injectable()
export class StatsService {

  constructor(private http: Http) {
  }

  getStats(season: number): Observable<any> {
    return this.http.get(ASGOLF_ASSET_ROOT + `/data/${season}/stats.js`)
      .pipe(map(r => r.json()));
  }

  getRecords(): Observable<any> {
    return this.http.get(ASGOLF_ASSET_ROOT + `/data/records.js`)
      .pipe(map(r => r.json()));
  }

}
