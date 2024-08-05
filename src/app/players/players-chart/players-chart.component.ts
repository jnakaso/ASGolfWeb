import { Component, ElementRef, ViewChild } from '@angular/core';
import { PlayersService } from '../../golf/players.service';

@Component({
  selector: 'as-players-chart',
  templateUrl: './players-chart.component.html',
  styleUrls: ['./players-chart.component.css']
})
export class PlayersChartComponent {

  @ViewChild('historycontainer') container: ElementRef;

  filter: string = '';
  histories: any[] = [];
  multi: any[] = [];
  activeEntries: any[] = [];

  view: any[] = [window.innerWidth, 800];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Handicap';
  timeline: boolean = false;

  constructor(
    private playersService: PlayersService) {
  }

  ngAfterViewInit() {
    let width = this.container.nativeElement.offsetWidth;
    this.view = [width, 800];
  }

  ngOnInit() {
    this.playersService.getPlayerHistories()
      .subscribe(data => {
        this.histories = data.handicapHistory;
        this.refresh('');
      });
  }

  refresh(value): void {
    const filtered = [];
    this.histories.forEach(hist => {
      const clone = Object.assign({}, hist);
      clone.indexes = value === '' ? hist.indexes : hist.indexes.filter(idx => idx.playDate.startsWith(value));
      filtered.push(clone);
    })
    this.mapPlayers(filtered);
    this.filter = value;
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

    this.activeEntries = this.multi;
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
    let width = this.container.nativeElement.offsetWidth;
    this.view = [width, 800];
  }
}
