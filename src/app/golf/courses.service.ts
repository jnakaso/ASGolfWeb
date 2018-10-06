import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ASCourse } from '../golf/ascourse';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CoursesService {
  static ASSET_ROOT = environment.dataRoot;

  constructor(private http: Http) { }

  getCourses(): Observable<ASCourse[]> {
    return this.http.get(CoursesService.ASSET_ROOT + '/data/courses.js')
      .pipe(map(r => r.json()));
  }
}
