import { Component } from '@angular/core';
import { PlayersService } from '../../golf/players.service';

@Component({
  selector: 'as-players-chart',
  templateUrl: './players-chart.component.html',
  styleUrls: ['./players-chart.component.css']
})
export class PlayersChartComponent {

  multi: any[] = [];
  activeEntries: any[] = [];

  view: any[] = [0.90 * window.innerWidth, 800];

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
    this.playersService.getPlayerHistories()
      .subscribe(data => this.mapPlayers(data.handicapHistory));
  }

  mapPlayers(players: any[]): void {
    this.multi = players
      .map(p => {
        return {
          name: p.playerName,
          series: p.indexes
            .map(r => {
              return {
                name: new Date(r.playDate),
                value: r.index
              }
            })
        }
      });

      this.activeEntries = this.multi[0];
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    // console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    // console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
  onResize(event) {
    this.view = [0.90 * event.target.innerWidth, 800];
  }
}
