import { Injectable } from '@angular/core';
import { parseString } from 'xml2js';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ASAnnouncement } from './asannouncement';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InformationService {

    constructor(
        private httpClient: HttpClient) {
    }

    getMinutes(): Observable<string[]> {
        return this.httpClient.get<string[]>(`/asgolf-assets/minutes/minutes.js`)
            .pipe(map(paths => paths.map(p => `/asgolf-assets/minutes/${p}`)));
    }

    getMdAnnouncements(): Observable<string[]> {
        return this.httpClient.get<string[]>(`/asgolf-assets/announcements/announcements.js`)
            .pipe(map(r => r.map(p => `/asgolf-assets/announcements/${p}`)));
    }

    getMdText(path: string): Observable<string> {
        return this.httpClient.get(path, { responseType: 'text' });
    }

    getAnnouncements(): Observable<ASAnnouncement[]> {
        return this.httpClient.get(`/asgolf-assets/data/Announcements.xml`, { responseType: 'text' })
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
        return this.httpClient.get(`/asgolf-assets/data/officers.xml`, { responseType: 'text' })
            .pipe(map(r => {
                let officers = {};
                parseString(r, (err, result) => {
                    officers = result.Officers.Season;
                })
                return officers;
            }));
    }

}
