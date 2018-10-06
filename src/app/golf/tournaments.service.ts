import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

import { ASTwoDay } from './astwo-day';
import { ASTournament } from './astournament';
const ASGOLF_ASSET_ROOT = environment.dataRoot;

@Injectable()
export class TournamentsService {

  constructor(private http: Http) {
  }

  getTwoDay(season: number): Observable<ASTwoDay> {
    return this.http.get(ASGOLF_ASSET_ROOT + `/data/${season}/twoday.js`)
      .pipe(map(r => r.json()));
  }

  getTournament(season: number, id: number): Observable<ASTournament> {
    return this.http.get(ASGOLF_ASSET_ROOT + `/data/${season}/${id}.js`)
    .pipe(map(r => r.json()));
  }

  getTournaments(season: number): Observable<ASTournament[]> {
    return this.http.get(ASGOLF_ASSET_ROOT + `/data/${season}/tournaments.js`)
    .pipe(map(r => r.json()));
  }

}
