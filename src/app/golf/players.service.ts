import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
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
      .map(r => r.json());
  }

  getPlayerWithRounds(id: number): Observable<ASPlayer> {
    return this.http.get(ASGOLF_ASSET_ROOT + `/data/players/${id}.js`)
      .map(r => r.json());
  }

  getBalances(season: number) : Observable<ASBalance> {
    return this.http.get(ASGOLF_ASSET_ROOT + `/balance-data.asp?year=${season}`)
      .map(r => r.json());
  }

}
