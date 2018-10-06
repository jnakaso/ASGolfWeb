import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
const ASGOLF_ASSET_ROOT = environment.dataRoot;

@Injectable()
export class PhotosService {

  constructor(private http: HttpClient) {
  }

  getPhotos(): Observable<any[]> {
    return this.http.get<any[]>(ASGOLF_ASSET_ROOT + '/data/photos.js');
  }
}
