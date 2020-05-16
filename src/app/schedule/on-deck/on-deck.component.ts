import { Component, OnInit, Input, Output } from '@angular/core';
import { PlayersService } from '../../golf/players.service';
import { CoursesService } from '../../golf/courses.service';
import { ASCourse } from '../../golf/ascourse';
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
  @Output() course: ASCourse;
  @Output() players: ASPlayer[] = [];
  @Output() courseName: string;
  @Output() courseSlope: number = OnDeckComponent.DEFAULT_SLOPE;
  @Output() courseRating: number = OnDeckComponent.DEFAULT_RATING;

  constructor(
    private coursesService: CoursesService,
    private playersService: PlayersService) {
  }

  ngOnInit() {
    this.playersService.getPlayers()
      .subscribe(l => { this.players = l.sort((p1, p2) => this.cmpHdcp(p1, p2)); });
  }

  cmpHdcp(p1: ASPlayer, p2: ASPlayer) {
    return this.getHandicap(p1) - this.getHandicap(p2);
  }

  ngOnChanges(changes: any) {
    let cmp = this;
    this.nextCourseId = changes.nextCourseId ? changes.nextCourseId.currentValue : null;
    if (this.nextCourseId) {
      this.coursesService.getCourses()
        .subscribe(e => {
          this.course = e.find(t => t.id == cmp.nextCourseId);
          this.courseSlope = this.findSlope(this.course);
          this.courseRating = this.findRating(this.course);
        });
    }
  }

  findSlope(course: ASCourse) {
    let tee = this.course ? this.course.tees.find(t => t.name == OnDeckComponent.DEFAULT_TEE_NAME) : null;
    return tee ? tee.slope : OnDeckComponent.DEFAULT_SLOPE;
  }

  findRating(course: ASCourse) {
    let tee = this.course ? this.course.tees.find(t => t.name == OnDeckComponent.DEFAULT_TEE_NAME) : null;
    return tee ? tee.rating : OnDeckComponent.DEFAULT_RATING;
  }

  getHandicap(p: ASPlayer) {
    return this.playersService.getHandicap(p);
  }
}
