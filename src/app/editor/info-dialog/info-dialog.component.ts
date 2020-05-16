import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ASTournament } from '../../golf/astournament';
import { ASCourse } from '../../golf/ascourse';
import { CoursesService } from '../../golf/courses.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'as-info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.css']
})
export class InfoDialogComponent implements OnInit {

  info: ASTournament;
  playDate: string;
  selected: ASCourse
  courses = [];
  constructor(
    public modal: NgbActiveModal,
    private coursesService: CoursesService,
    @Inject(LOCALE_ID) private locale: string) { }

  ngOnInit() {
    this.playDate = formatDate(this.info.date, 'yyyy-MM-dd', this.locale);
    this.coursesService.getCourses()
      .subscribe(cc => this.courses = cc.sort((c1, c2) => c1.name.localeCompare(c2.name)));
  }

  changeCourse(event) {
    const course: ASCourse = this.courses.find(cc => cc.name === event);
    this.info.courseName = course.name;
    this.info.rating = Math.trunc(course.tees[0].rating);
    this.info.slope = course.tees[0].slope;
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
