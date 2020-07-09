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

  players: ASPlayer[] = [];
  courseTees: any[] = [];
  selectedCourseTee: any;

  activeOnly: boolean = true;

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
      .subscribe(c =>{
        this.courseTees = 
           c.sort((a,b) => a.name.localeCompare(b.name))
            .map(course => this.mapCourse(course));
        this.selectedCourseTee = this.courseTees[0];
      } );
  }

  mapCourse(course: ASCourse) {
    var tee = course.tees.find((t: ASCourseTee) => t.name == 'white');
    if (!tee) {
      tee = course.tees[0];
    }
    return {
      course: course,
      tee: tee
    }
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
    return this.getHandicap(o1) - this.getHandicap(o2);
  }

  getHandicap(p: ASPlayer) {
    return this.playersService.getHandicap(p);
  }
}
