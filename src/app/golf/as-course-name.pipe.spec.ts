import { ASCourseNamePipe } from './as-course-name.pipe';
import { ASCourse } from './ascourse';

describe('ASCourseNamePipe', () => {
  it('return the name of a course', () => {
    const pipe = new ASCourseNamePipe();
    const course = new ASCourse();
    course.name = 'Pebble';
    expect(pipe.transform(course)).toEqual('Pebble');
  });
});
