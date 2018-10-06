import { Injectable } from '@angular/core';
import { parseString } from 'xml2js';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ASAnnouncement } from './asannouncement';

import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
const ASGOLF_ASSET_ROOT = environment.dataRoot;

@Injectable()
export class InformationService {

    constructor(
        private httpClient: HttpClient) {
    }

    getMinutes(): Observable<string[]> {
        return this.httpClient.get<string[]>(ASGOLF_ASSET_ROOT + `/minutes/minutes.js`)
            .pipe(map(paths => {
                return paths.map(p => `${ASGOLF_ASSET_ROOT}/minutes/${p}`);
            }));
    }

    getMdAnnouncements(): Observable<string[]> {
        return this.httpClient.get<string[]>(`${ASGOLF_ASSET_ROOT}/announcements/announcements.js`)
            .pipe(map(r => {
                 return r.map(p => `${ASGOLF_ASSET_ROOT}/announcements/${p}`);
            }));
    }

    getMdText(path: string): Observable<string> {
        return this.httpClient.get(path, {responseType: 'text'});
    }

    getAnnouncements(): Observable<ASAnnouncement[]> {
        return this.httpClient.get(ASGOLF_ASSET_ROOT + `/data/Announcements.xml`, {responseType: 'text'})
            .pipe(map(r => {
                let announcements = [];
                parseString(r, (err, result) => {
                    announcements = result.Announcements.Announcement;
                    announcements.forEach(obj => obj.date = obj['$'].date);
                })
                return announcements;
            }));
    }

    getOfficers(): Observable<any> {
        return this.httpClient.get(ASGOLF_ASSET_ROOT + `/data/officers.xml`, {responseType: 'text'})
            .pipe(map(r => {
                let officers = {};
                parseString(r, (err, result) => {
                    officers = result.Officers.Season;
                })
                return officers;
            }));
    }

}
