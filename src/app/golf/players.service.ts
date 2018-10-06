import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ASPlayer } from '../golf/asplayer';
import { ASBalance } from '../golf/asbalance';
import { environment } from '../../environments/environment';

const ASGOLF_ASSET_ROOT = environment.dataRoot;

@Injectable()
export class PlayersService {

  constructor(private http: Http) {

  }

  getPlayers(): Observable<ASPlayer[]> {
    return this.http.get(ASGOLF_ASSET_ROOT + `/data/players.js`)
      .pipe(map(r => r.json()));
  }

  getPlayerWithRounds(id: number): Observable<ASPlayer> {
    return this.http.get(ASGOLF_ASSET_ROOT + `/data/players/${id}.js`)
      .pipe(map(r => r.json()));
  }

  getBalances(season: number) : Observable<ASBalance> {
    return this.http.get(ASGOLF_ASSET_ROOT + `/data/${season}/as-balance.js`)
      .pipe(map(r => r.json()));
  }

}
