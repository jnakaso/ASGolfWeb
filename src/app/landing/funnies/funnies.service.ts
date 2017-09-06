import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';

const ASGOLF_ASSET_ROOT = environment.dataRoot;


@Injectable()
export class FunniesService {


  constructor(private http: Http) {

  }

  getFunnies(): Observable<any> {
    return this.http.get(ASGOLF_ASSET_ROOT + '/data/funnies.js')
      .map(r => r.json());
  }

  getFunnyText(funny: string): Observable<any> {
    return this.http.get(ASGOLF_ASSET_ROOT + '/funnies/' + funny)
      .map(r => r.text());
  }
}
