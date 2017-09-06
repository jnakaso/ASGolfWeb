import { Component, OnInit, Input, Output } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ASPlayer } from '../../golf/asplayer';
import { ASCourse, ASCourseTee } from '../../golf/ascourse';
import { CoursesService } from '../../golf/courses.service';
import { PlayersService } from '../../golf/players.service';

@Component({
  selector: 'as-handicaps',
  templateUrl: './handicaps.component.html',
  styleUrls: ['./handicaps.component.css']
})
export class HandicapsComponent implements OnInit {

  @Output() players: ASPlayer[] = [];
  @Output() courses: ASCourse[] = [];
  @Input() courseId: number;
  @Output() courseSlope: number = 113;
  @Output() @Output() activeOnly: boolean = true;

  selectedPlayer: ASPlayer;
  sortFunction: Function = this.cmpPlayer;
  asc: boolean = true;

  constructor(
    private modalService: NgbModal,
    private playersService: PlayersService,
    private coursesService: CoursesService) {
  }

  ngOnInit() {
    this.playersService.getPlayers()
      .subscribe(l => this.players = l);
    this.coursesService.getCourses()
      .subscribe(l => this.courses = l);
  }


  open(content, player: ASPlayer) {
    let ctrl = this;
    this.playersService.getPlayerWithRounds(player.id)
      .subscribe(p => {
        this.selectedPlayer = p;
        this.modalService.open(
          content,
          { size: 'lg' }
        )
          .result.then((result) => {
            console.log(result);
          }, (reason) => {
            console.log(reason);
          })
      });
  }

  onChanges(event: any) {
    this.courseId = parseInt(event);
    let course = this.courses.find((c: ASCourse) => c.id == this.courseId);
    if (course) {
      let tee = course.tees.find((t: ASCourseTee) => t.name == 'white')
      if (tee) {
        this.courseSlope = tee.slope;
      }
    }
  }

  changeSort(sort: string) {
    this.asc = !this.asc;
    this.sortFunction = sort == 'ply' ? this.cmpPlayer : this.cmpHdcp;
  }

  getPlayers() {
    return this.players.filter(p => this.activeOnly ? p.active == this.activeOnly : true)
      .sort((p1, p2) => this.sortFunction(p1, p2));
  }

  cmpPlayer(p1: ASPlayer, p2: ASPlayer) {
    let o1 = this.asc ? p1 : p2;
    let o2 = this.asc ? p2 : p1;
    return o1.lastName.localeCompare(o2.lastName);
  }

  cmpHdcp(p1: ASPlayer, p2: ASPlayer) {
    let o1 = this.asc ? p1 : p2;
    let o2 = this.asc ? p2 : p1;
    return o1.handicap - o2.handicap;
  }
}
