import { Injectable } from '@angular/core';
import { ASCourse } from '../golf/ascourse';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CoursesService {

  constructor(private http: HttpClient) { }

  getCourses(): Observable<ASCourse[]> {
    return this.http.get<ASCourse[]>('/asgolf-assets/data/courses.js');
  }
}
