import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ASPlayer } from '../golf/asplayer';
import { ASBalance } from '../golf/asbalance';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

const ASGOLF_ASSET_ROOT = environment.dataRoot;

@Injectable()
export class PlayersService {

  constructor(private http: HttpClient) {

  }

  getPlayers(): Observable<ASPlayer[]> {
    return this.http.get<ASPlayer[]>(ASGOLF_ASSET_ROOT + `/data/players.js`);
  }

  getPlayerWithRounds(id: number): Observable<ASPlayer> {
    return this.http.get<ASPlayer>(ASGOLF_ASSET_ROOT + `/data/players/${id}.js`);
  }

  getBalances(season: number) : Observable<ASBalance> {
    return this.http.get<ASBalance>(ASGOLF_ASSET_ROOT + `/data/${season}/as-balance.js`);
  }

}
