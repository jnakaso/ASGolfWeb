import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ASCourse } from '../golf/ascourse';
import { environment } from '../../environments/environment';


@Injectable()
export class CoursesService {
  static ASSET_ROOT = environment.dataRoot;

  constructor(private http: Http) { }

  getCourses(): Observable<ASCourse[]> {
    return this.http.get(CoursesService.ASSET_ROOT + '/data/courses.js')
      .map(r => r.json());
  }
}
