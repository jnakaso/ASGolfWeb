import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { parseString } from 'xml2js';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';
const ASGOLF_ASSET_ROOT = environment.dataRoot;

@Injectable()
export class PhotosService {

  constructor(private http: Http) {
  }

  getPhotos(): Observable<any[]> {
    return this.http.get(ASGOLF_ASSET_ROOT + '/data/photos.js')
      .map(r => r.json());
  }
}
