import { Component, Input, OnInit } from '@angular/core';
import { ASCourse } from '../../golf/ascourse';
import { GolfService } from '../../golf/golf.service';
import { CoursesService } from '../../golf/courses.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'as-where-we-played',
  templateUrl: './where-we-played.component.html',
  styleUrls: ['./where-we-played.component.css']
})
export class WhereWePlayedComponent implements OnInit {

  @Input() data: any;
  courses: ASCourse[] = [];

  lastYear: number;
  firstYear: number = environment.startYear;
  columns = 9;
  start: number;
  end: number;
  seasonRange: number[] = [];

  constructor(
    private golfService: GolfService,
    private coursesService: CoursesService) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.golfService.getInitValues()
      .subscribe(ini => {
        this.lastYear = ini.currentSeason;
        this.start = this.lastYear;
        this.coursesService.getCourses().subscribe(cc => {
          this.courses = cc;
          this.loadPaging();
        });
      });
  }

  getTitle() {
    return "Where We've Played";
  }

  getCount(course: ASCourse) {
    return this.data.filter(dd => dd.course == course.name).length;
  }

  seasonsChange(changes: any) {
    this.seasonRange = changes;
  }

  hasPlayed(course: ASCourse, season: number) {
    return this.data.find(e => e.course == course.name && e.date.indexOf('' + season) > -1);
  }

  // Paging

  loadPaging() {
    this.end = Math.max(this.start - this.columns, this.firstYear);

    let left = this.start;
    let right = this.end;
    this.seasonRange = [];
    for (let i = left; i >= right; i--) {
      this.seasonRange.push(i);
    }
  }

  showLeft() {
    return this.start < this.lastYear;
  }

  showRight() {
    return this.end > this.firstYear;
  }

  goLeft() {
    this.start = Math.min(this.lastYear, this.start + 1);
    this.loadPaging();
  }

  goRight() {
    this.start = this.start - 1;
    this.loadPaging();
  }

}
