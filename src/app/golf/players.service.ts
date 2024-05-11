import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ASPlayer } from '../golf/asplayer';
import { ASBalance } from '../golf/asbalance';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PlayersService {

  constructor(private http: HttpClient) {

  }

  getHandicap(p: ASPlayer) {
    return isNaN(p.handicap) ? 18 : p.handicap;
  }

  getPlayers(): Observable<ASPlayer[]> {
    return this.http.get<ASPlayer[]>(`/asgolf-assets/data/players.js`);
  }

  get(id: number): Observable<ASPlayer> {
    return this.http.get<ASPlayer>(`/asgolf-assets/data/players/${id}.js`);
  }

  getBalances(season: number): Observable<ASBalance> {
    return this.http.get<ASBalance>(`/asgolf-assets/data/${season}/as-balance.js`);
  }

  getPlayerHistories(): Observable<any> {
    return this.http.get(`/asgolf-assets/data/player-histories.js`);
  }

}
