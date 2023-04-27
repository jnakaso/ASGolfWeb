import { Component, OnInit, Input, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'; 
import { StatsService } from '../../golf/stats.service';
import { TournamentsService } from '../../golf/tournaments.service';
import { ASTournament } from '../../golf/astournament';
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'as-tournaments-summary',
  templateUrl: './tournaments-summary.component.html',
  styleUrls: ['./tournaments-summary.component.css']
})
export class TournamentsSummaryComponent implements OnInit {

  @Input() season: number;
  tournaments: ASTournament[] = [];
  standings: any;
  active = 1;

  constructor(
    @Inject(DOCUMENT) document: Document,
    private tournamentsService: TournamentsService,
    private statsService: StatsService) {
  }

  ngOnInit() {
    this.loadData(this.season);
  }

  ngOnChanges(changes: any) {
    if (changes.season) {
      this.loadData(changes.season.currentValue);
    }
  }
  public beforeChange($event: NgbNavChangeEvent) {
    if ($event.nextId === 'ngb-nav-0') {
      this.standings = this.standings.sort((s1, s2) => s2.points - s1.points);
    } else if ($event.nextId === 'ngb-nav-1') {
      this.standings = this.standings.sort((s1, s2) => s2.earnings - s1.earnings);
    } else if ($event.nextId === 'ngb-nav-2') {
      this.standings = this.standings.sort((s1, s2) => s2.kps - s1.kps);
    }
  }

  loadData(season: number) {
    if (season) {
      this.tournamentsService.getTournaments(season)
        .subscribe((tt: ASTournament[]) => this.tournaments = tt.reverse());
      this.statsService.getStats(season)
        .subscribe(ss => this.standings = ss.standings);
    }
  }

  scroll(tournament: ASTournament) {
    let el = document.getElementById('tour_' + tournament.id + '-header');
    const y = el.getBoundingClientRect().top + window.pageYOffset - 70;
    window.scrollTo({top: y, behavior: 'smooth'});
  }
 
}
