import { Injectable } from '@angular/core';
import { ASCourse } from '../golf/ascourse';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const ASGOLF_ASSET_ROOT = environment.dataRoot;

@Injectable()
export class CoursesService {

  constructor(private http: HttpClient) { }

  getCourses(): Observable<ASCourse[]> {
    return this.http.get<ASCourse[]>(ASGOLF_ASSET_ROOT + '/data/courses.js');
  }
}
