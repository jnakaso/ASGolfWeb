import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ASPlayer } from '../../golf/asplayer';
import { PlayersService } from '../../golf/players.service';

@Component({
  selector: 'as-player-history',
  templateUrl: './player-history.component.html',
  styleUrls: ['./player-history.component.css']
})
export class PlayerHistoryComponent implements OnInit, OnChanges {

  @Input()
  player: ASPlayer;

  seasons = [];

  constructor(private playersService: PlayersService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.player) {
      this.playersService.get(this.player.id)
        .subscribe(p => {
          this.seasons = p.seasonSummaries
            .sort((s2, s1) => s1.seasonId - s2.seasonId)
            .slice(0, 20);
        });

    }
  }
}
