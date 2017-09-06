import { Pipe, PipeTransform } from '@angular/core';
import { ASCourse} from './ascourse';
@Pipe({
  name: 'ASName'
})
export class ASNamePipe implements PipeTransform {
  transform(course: ASCourse): string {
    return course ? course.name : null;
  }
}
