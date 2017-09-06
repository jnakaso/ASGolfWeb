import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { parseString } from 'xml2js';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ASAnnouncement } from './asannouncement';

import { environment } from '../../environments/environment';
const ASGOLF_ASSET_ROOT = environment.dataRoot;

@Injectable()
export class InformationService {
 
  constructor(
    private http: Http) {
  }

  getMinutes(): Observable<any[]> {
    return this.http.get(ASGOLF_ASSET_ROOT + `/data/Minutes.xml`)
      .map(r => {
        let minutes = [];
        parseString(r.text(), (err, result) => minutes = result.MinutesAndInformation.Minutes)
        return minutes;
      });
  }

  getAnnouncements(): Observable<ASAnnouncement[]> {
    return this.http.get(ASGOLF_ASSET_ROOT + `/data/Announcements.xml`)
      .map(r => {
        let announcements = [];
        parseString(r.text(), (err, result) => {
          announcements = result.Announcements.Announcement;
          announcements.forEach(obj => obj.date = obj['$'].date);
        })
        return announcements;
      });
  }

  getOfficers(): Observable<any> {
    return this.http.get(ASGOLF_ASSET_ROOT + `/data/officers.xml`)
      .map(r => {
        let officers = {};
        parseString(r.text(), (err, result) => {
          officers = result.Officers.Season;
        })
        return officers;
      });
  }

}
