import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';
import { NavbarItem } from '../shared/navbar-item';
import { ASInit } from './asinit';

export const FLIGHTS = ['A', 'B'];

@Injectable()
export class GolfService {

  private sponsor = new NavbarItem("http://www.ppcc.com", "Power PC Consulting");
  private sections = [
    new NavbarItem('schedule', 'Schedule'),
    new NavbarItem('tournaments', 'Tournaments'),
    new NavbarItem('players', 'Players'),
    new NavbarItem('stats', 'Statistics'),
    new NavbarItem('records', 'Record Book'),
    new NavbarItem('photos', 'Photos'),
    new NavbarItem('information', 'Information')
  ];
  private seasons: number[] = [];

  constructor(private http: Http) {
    this.getInitValues().subscribe((ini: ASInit) => {
      for (let y = environment.startYear; y <= ini.currentSeason; y++) {
        this.seasons.push(y);
      }
    });
  }

  getSeasons(): number[] {
    return this.seasons;
  }

  getInitValues(): Observable<ASInit> {
    return this.http.get(environment.dataRoot + "/data/ini.js")
      .map((res: Response) => res.json() as ASInit);
  }

  getBrand() {
    return new NavbarItem("landing", "AS Golf");
  }

  getSponsor() {
    return this.sponsor;
  }

  getSections() {
    return this.sections;
  }

}
