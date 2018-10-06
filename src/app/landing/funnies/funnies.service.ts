import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

const ASGOLF_ASSET_ROOT = environment.dataRoot;

@Injectable()
export class FunniesService {

  constructor(private http: HttpClient) {
  }

  getFunnies(): Observable<any> {
    return this.http.get(ASGOLF_ASSET_ROOT + '/data/funnies.js');
  }

  getFunnyText(funny: string): Observable<any> {
    return this.http.get(ASGOLF_ASSET_ROOT + '/funnies/' + funny, {responseType: 'text'});
  }
}
