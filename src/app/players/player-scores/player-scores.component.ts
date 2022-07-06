import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ASPlayer } from '../../golf/asplayer';
import { PlayersService } from '../../golf/players.service';

@Component({
  selector: 'as-player-scores',
  templateUrl: './player-scores.component.html',
  styleUrls: ['./player-scores.component.css']
})
export class PlayerScoresComponent implements OnInit, OnChanges {

  @Input()
  player: ASPlayer;

  rounds = [];

  constructor(private playersService: PlayersService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.player) {
      this.playersService.getPlayerWithRounds(this.player.id)
        .subscribe(p => this.rounds = p.rounds);
    }
  }
}
