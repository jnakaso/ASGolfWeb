import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { ASTwoDay } from './astwo-day';
import { ASTournament } from './astournament';

@Injectable()
export class TournamentsService {

  constructor(private http: HttpClient) {
  }

  getTwoDay(season: number): Observable<ASTwoDay> {
    return this.http.get<ASTwoDay>(`/asgolf-assets/data/${season}/twoday.js`);
  }

  getTournament(season: number, id: number): Observable<ASTournament> {
    return this.http.get<ASTournament>(`/asgolf-assets/data/${season}/${id}.js`);
  }

  getTournaments(season: number): Observable<ASTournament[]> {
    return this.http.get<ASTournament[]>(`/asgolf-assets/data/${season}/tournaments.js`);
  }

}
