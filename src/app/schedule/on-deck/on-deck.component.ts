import { Component, OnInit, Input, Output } from '@angular/core';
import { PlayersService } from '../../golf/players.service';
import { CoursesService } from '../../golf/courses.service';
import { ASCourse, ASCourseTee } from '../../golf/ascourse';
import { ASPlayer } from '../../golf/asplayer';

@Component({
  selector: 'as-on-deck',
  templateUrl: './on-deck.component.html',
  styleUrls: ['./on-deck.component.css']
})
export class OnDeckComponent implements OnInit {

  static DEFAULT_TEE_NAME: string = 'white';
  static DEFAULT_SLOPE: number = 113;
  static DEFAULT_RATING: number = 72.0;

  @Input() nextCourseId: number;
  @Output() players: ASPlayer[] = [];
  @Output() courses: ASCourse[] = [];

  course: ASCourse;
  @Output() courseTees: ASCourseTee[] = [];

  constructor(
    private coursesService: CoursesService,
    private playersService: PlayersService) {
  }

  ngOnInit() {
    this.playersService.getPlayers()
      .subscribe(l => { this.players = l.sort((p1, p2) => this.cmpHdcp(p1, p2)); });
    this.coursesService.getCourses()
      .subscribe(c => this.changedCourses(c));
  }

  cmpHdcp(p1: ASPlayer, p2: ASPlayer) {
    return this.getHandicap(p1) - this.getHandicap(p2);
  }

  ngOnChanges(changes: any) {
    this.nextCourseId = changes.nextCourseId ? changes.nextCourseId.currentValue : null;
  }

  findTee(course: ASCourse): ASCourseTee {
    return this.course ? this.course.tees.find(t => t.name == OnDeckComponent.DEFAULT_TEE_NAME) : null;
  }

  findSlope(tee: ASCourseTee) {
    return tee ? tee.slope : OnDeckComponent.DEFAULT_SLOPE;
  }

  findRating(tee: ASCourseTee) {
    return tee ? tee.rating : OnDeckComponent.DEFAULT_RATING;
  }

  getHandicap(p: ASPlayer) {
    return this.playersService.getHandicap(p);
  }

  changedCourses(nCourses) {
    this.courses = nCourses.sort((c1, c2) => c1.name.localeCompare(c2.name));
    this.changeCourse(this.courses.find(t => t.id == this.nextCourseId));
  }

  changeCourse(nCourse) {
    this.course = nCourse;
    this.courseTees = nCourse.tees;
  }

}
