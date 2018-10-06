import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
const ASGOLF_ASSET_ROOT = environment.dataRoot;

@Injectable()
export class StatsService {

  constructor(private http: HttpClient) {
  }

  getStats(season: number): Observable<any> {
    return this.http.get<any>(ASGOLF_ASSET_ROOT + `/data/${season}/stats.js`);
  }

  getRecords(): Observable<any> {
    return this.http.get(ASGOLF_ASSET_ROOT + `/data/records.js`);
  }

}
