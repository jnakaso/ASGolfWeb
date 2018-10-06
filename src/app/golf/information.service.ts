import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { parseString } from 'xml2js';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ASAnnouncement } from './asannouncement';

import { environment } from '../../environments/environment';
const ASGOLF_ASSET_ROOT = environment.dataRoot;

@Injectable()
export class InformationService {

    constructor(
        private http: Http) {
    }

    getMinutes(): Observable<string[]> {
        return this.http.get(ASGOLF_ASSET_ROOT + `/minutes/minutes.js`)
            .pipe(map(r => {
                let paths = r.json();
                return paths.map(p => `${ASGOLF_ASSET_ROOT}/minutes/${p}`);
            }));
    }

    getMdAnnouncements(): Observable<string[]> {
        return this.http.get(`${ASGOLF_ASSET_ROOT}/announcements/announcements.js`)
            .pipe(map(r => {
                let paths = r.json();
                return paths.map(p => `${ASGOLF_ASSET_ROOT}/announcements/${p}`);
            }));
    }

    getMdText(path: string): Observable<string> {
        return this.http.get(path)
            .pipe(map(r => r.text()));
    }

    getAnnouncements(): Observable<ASAnnouncement[]> {
        return this.http.get(ASGOLF_ASSET_ROOT + `/data/Announcements.xml`)
            .pipe(map(r => {
                let announcements = [];
                parseString(r.text(), (err, result) => {
                    announcements = result.Announcements.Announcement;
                    announcements.forEach(obj => obj.date = obj['$'].date);
                })
                return announcements;
            }));
    }

    getOfficers(): Observable<any> {
        return this.http.get(ASGOLF_ASSET_ROOT + `/data/officers.xml`)
            .pipe(map(r => {
                let officers = {};
                parseString(r.text(), (err, result) => {
                    officers = result.Officers.Season;
                })
                return officers;
            }));
    }

}
