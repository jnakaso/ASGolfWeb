import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
const ASGOLF_ASSET_ROOT = environment.dataRoot;

@Injectable()
export class PhotosService {

  constructor(private http: Http) {
  }

  getPhotos(): Observable<any[]> {
    return this.http.get(ASGOLF_ASSET_ROOT + '/data/photos.js')
      .pipe(map(r => r.json()));
  }
}
