import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

import { ASTwoDay } from './astwo-day';
import { ASTournament } from './astournament';
const ASGOLF_ASSET_ROOT = environment.dataRoot;

@Injectable()
export class TournamentsService {

  constructor(private http: Http) {
  }

  getTwoDay(season: number): Observable<ASTwoDay> {
    return this.http.get(ASGOLF_ASSET_ROOT + `/data/${season}/twoday.js`)
      .map(r => r.json() as ASTwoDay);
  }

  getTournament(season: number, id: number): Observable<ASTournament> {
    return this.http.get(ASGOLF_ASSET_ROOT + `/data/${season}/${id}.js`)
      .map(r => r.json() as ASTournament);
  }

  getTournaments(season: number): Observable<ASTournament[]> {
    return this.http.get(ASGOLF_ASSET_ROOT + `/data/${season}/tournaments.js`)
      .map(r => r.json() as ASTournament[]);
  }

}
