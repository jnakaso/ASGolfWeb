import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class FunniesService {

  constructor(private http: HttpClient) {
  }

  getFunnies(): Observable<any> {
    return this.http.get('/asgolf-assets/data/funnies.js');
  }

  getFunnyText(funny: string): Observable<any> {
    return this.http.get('/asgolf-assets/funnies/' + funny, {responseType: 'text'});
  }
}
