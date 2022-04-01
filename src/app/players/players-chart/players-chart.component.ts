import { Component, OnInit } from '@angular/core';
import { ASPlayer } from '../../golf/asplayer';
import { PlayersService } from '../../golf/players.service';

@Component({
  selector: 'as-players-chart',
  templateUrl: './players-chart.component.html',
  styleUrls: ['./players-chart.component.css']
})
export class PlayersChartComponent {

  multi: any[] = [];

  view: any[] = [800, 800];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;
  constructor(
    private playersService: PlayersService) {
  }


  ngOnInit() {
    this.playersService.getPlayers()
      .subscribe(l => this.mapPlayers(l));
  }

  mapPlayers(players: any[]): void {
    this.multi = players.filter(p => p.active)
      .map(p => {
        return {
          name: p.firstName + ' ' + p.lastName,
          series: p.rounds.slice(0, 10)
            .reverse()
            .map(r => {
              return {
                name: r.courseName,
                value: r.handicap
              }
            })
        }
      });
    console.log(players, this.multi);
  }

  onSelect(data): void {
    // console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    // console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    // console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
