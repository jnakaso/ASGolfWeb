import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PhotosService {

  constructor(private http: HttpClient) {
  }

  getPhotos(): Observable<any[]> {
    return this.http.get<any[]>('/asgolf-assets/data/photos.js');
  }
}
