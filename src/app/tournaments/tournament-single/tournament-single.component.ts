import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'as-tournament-single',
  templateUrl: './tournament-single.component.html',
  styleUrls: ['./tournament-single.component.css']
})
export class TournamentSingleComponent implements OnInit {

  season: number;
  tournamentId: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let sub = this.route.params.subscribe(params => {
      this.season = +params['season']; // (+) converts string 'id' to a number
      this.tournamentId = +params['id']; // (+) converts string 'id' to a number

      console.log(this.season, this.tournamentId);

      // In a real app: dispatch action to load the details here.
    });
  }
}
