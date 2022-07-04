import { Component, OnInit } from '@angular/core';
import { GolfService } from '../../golf/golf.service';
import { TournamentsService } from '../../golf/tournaments.service';
import { ASTournament } from '../../golf/astournament';
import { ASTwoDay } from '../../golf/astwo-day';

@Component({
  selector: 'as-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.css']
})
export class TournamentsComponent implements OnInit {
  sections: any[] = [];
  season: any;
  tournaments: ASTournament[] = [];
  twoDay: ASTwoDay;
  showTwoDay = false;
  seasons = [];
  constructor(
    private golfService: GolfService,
    private tournamentsService: TournamentsService) { }

  ngOnInit() {
    this.seasons = this.golfService.getSeasons()
      .map(s => { return { value: s, label: s } });
    this.golfService.getInitValues()
      .subscribe(ini => {
        this.season = this.seasons.find(s => s.value == ini.currentSeason);
        this.loadData(this.season);
      });
  }

  seasonChange(newSeason) {
    this.loadData(newSeason);
  }

  loadData(newSeason) {
    if (newSeason != undefined) {
      this.season = newSeason;
      this.tournamentsService.getTournaments(this.season.value)
        .subscribe(tours => {
          this.tournaments = tours;
          this.loadSections(tours);
        });

      this.tournamentsService.getTwoDay(this.season.value)
        .subscribe(tt => {
          this.twoDay = tt;
          this.showTwoDay = tt.scores.length > 0
        });
    }
  }

  loadSections(tours) {
    this.sections = ['Summary', 'TwoDay'].concat(tours.map(t => 't_' + t.id));
  }


}
