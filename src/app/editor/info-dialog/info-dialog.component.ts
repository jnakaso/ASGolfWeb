import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ASTournament } from '../../golf/astournament';
import { ASCourse, ASCourseTee } from '../../golf/ascourse';
import { CoursesService } from '../../golf/courses.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'as-info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.css']
})
export class InfoDialogComponent implements OnInit {

  courses: ASCourse[] = [];
  courseTees: ASCourseTee[] = [];
  info: ASTournament;
  playDate: string;
  selected: ASCourse;
  selectedTees: ASCourseTee;

  constructor(
    public modal: NgbActiveModal,
    private coursesService: CoursesService,
    @Inject(LOCALE_ID) private locale: string) { }

  ngOnInit() {
    this.playDate = formatDate(this.info.date, 'yyyy-MM-dd', this.locale);
    this.coursesService.getCourses()
      .subscribe(cc => {
        this.courses = cc.sort((c1, c2) => c1.name.localeCompare(c2.name));
        const found = this.courses.find(c => c.id === this.info.courseId);
        this.changeSelectedCourse(found ? found : cc[0]);
      });
  }

  changeCourse(event) {
    this.changeSelectedCourse(this.courses.find(c => c.id === Number(event)));
  }

  changeSelectedCourse(aCourse: ASCourse) {
    this.selected = aCourse;
    if (this.selected) {
      this.courseTees = this.selected.tees;
      this.info.courseId = this.selected.id;
      this.info.courseName = this.selected.name;
      this.info.tees = this.selected.tees;
      this.changeSelectedCourseTees(this.selected.tees[0]);
    }
  }

  changeCourseTee(event) {
    this.changeSelectedCourseTees(this.courseTees.find(t => t.name === event));
  }

  changeSelectedCourseTees(tees) {
    this.selectedTees = tees;
    if (this.selectedTees) {
      this.info.rating = Math.trunc(tees.rating);
      this.info.slope = tees.slope;
      this.info.tees = tees;
    }
  }

  findTee(course) {
    const tee = course.tees.find(tt => tt.name === 'white');
    return tee ? tee : course.tees[0];
  }

  cancel() {
    this.modal.dismiss();
  }

  ok() {
    this.info.date = new Date(this.playDate);
    this.modal.close(this.info);
  }

}
