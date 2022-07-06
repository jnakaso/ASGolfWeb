import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ASTournament } from '../../golf/astournament';
import { TournamentsService } from '../../golf/tournaments.service';

@Component({
  selector: 'as-tournament-single',
  templateUrl: './tournament-single.component.html',
  styleUrls: ['./tournament-single.component.css']
})
export class TournamentSingleComponent implements OnInit {

  season: number;
  tournamentId: number;
  tournament;

  constructor(private route: ActivatedRoute,
    private tournamentsService: TournamentsService) { }

  ngOnInit() {
    let sub = this.route.params.subscribe(params => {
      this.season = +params['season']; // (+) converts string 'id' to a number
      this.tournamentId = +params['id']; // (+) converts string 'id' to a number
      this.loadData();

      // In a real app: dispatch action to load the details here.
    });
  }

  loadData() {
    this.tournamentsService
      .getTournament(this.season, this.tournamentId)
      .subscribe(tt =>{
        this.tournament = tt;
        console.log(tt)
      } );
  }

}
