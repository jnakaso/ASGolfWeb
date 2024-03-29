import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class StatsService {

  constructor(private http: HttpClient) {
  }

  getStats(season: number): Observable<any> {
    return this.http.get<any>(`/asgolf-assets/data/${season}/stats.js`);
  }

  getRecords(): Observable<any> {
    return this.http.get(`/asgolf-assets/data/records.js`);
  }

}
