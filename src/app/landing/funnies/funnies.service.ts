import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const ASGOLF_ASSET_ROOT = environment.dataRoot;


@Injectable()
export class FunniesService {


  constructor(private http: Http) {

  }

  getFunnies(): Observable<any> {
    return this.http.get(ASGOLF_ASSET_ROOT + '/data/funnies.js')
      .pipe(map(r => r.json()));
  }

  getFunnyText(funny: string): Observable<any> {
    return this.http.get(ASGOLF_ASSET_ROOT + '/funnies/' + funny)
    .pipe(map(r => r.text()));
  }
}
