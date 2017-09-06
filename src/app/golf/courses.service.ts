import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ASCourse } from '../golf/ascourse';
import { environment } from '../../environments/environment';

const ASGOLF_ASSET_ROOT = environment.dataRoot;

@Injectable()
export class CoursesService {


  constructor(private http: Http) {

  }

  getCourses(): Observable<ASCourse[]> {
    return this.http.get(ASGOLF_ASSET_ROOT + '/data/courses.js')
      .map(r => r.json());
  }
}
