import { Pipe, PipeTransform } from '@angular/core';
import { ASCourse} from './ascourse';
@Pipe({
  name: 'ASCourseName'
})
export class ASCourseNamePipe implements PipeTransform {
  transform(course: ASCourse): string {
    return course ? course.name : null;
  }
}
