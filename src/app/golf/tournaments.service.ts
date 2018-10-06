import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { ASTwoDay } from './astwo-day';
import { ASTournament } from './astournament';
const ASGOLF_ASSET_ROOT = environment.dataRoot;

@Injectable()
export class TournamentsService {

  constructor(private http: HttpClient) {
  }

  getTwoDay(season: number): Observable<ASTwoDay> {
    return this.http.get<ASTwoDay>(ASGOLF_ASSET_ROOT + `/data/${season}/twoday.js`);
  }

  getTournament(season: number, id: number): Observable<ASTournament> {
    return this.http.get<ASTournament>(ASGOLF_ASSET_ROOT + `/data/${season}/${id}.js`);
  }

  getTournaments(season: number): Observable<ASTournament[]> {
    return this.http.get<ASTournament[]>(ASGOLF_ASSET_ROOT + `/data/${season}/tournaments.js`);
  }

}
