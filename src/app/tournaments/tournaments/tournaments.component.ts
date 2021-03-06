import { Component, OnInit } from '@angular/core';
import { GolfService } from '../../golf/golf.service';
import { TournamentsService } from '../../golf/tournaments.service';
import { ASTournament } from '../../golf/astournament';

@Component({
  selector: 'as-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.css']
})
export class TournamentsComponent implements OnInit {
  sections: any[] = [];
  season: number;
  tournaments: ASTournament[] = [];

  constructor(
    private golfService: GolfService,
    private tournamentsService: TournamentsService) { }

  ngOnInit() {
    this.golfService.getInitValues()
      .subscribe(ini => {
        this.season = ini.currentSeason;
        this.loadData(this.season);
      });
  }

  seasonChange(newSeason: number) {
    this.loadData(newSeason);
  }

  loadData(newSeason: number) {
    if (newSeason != undefined) {
      this.season = newSeason;
      this.tournamentsService.getTournaments(this.season)
        .subscribe(tours => {
          this.tournaments = tours;
          this.loadSections();
        });
    }
  }

  loadSections() {
    this.sections = [];
    this.sections.push({ href: "#Summary", label: "Season Summary" });
    this.sections.push({ href: "#TwoDay", label: "Two Day Tournament Results" });
    this.tournaments.forEach(t => {
      this.sections.push({ href: "#tour_" + t.id, label: t.courseName });
    });
  }
}
