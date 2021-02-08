import { GameService } from './game.service';
import { Component } from '@angular/core';
import { Action, Player } from './app.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  winner: Player;
  player1Value: string;
  player2Value: string;
  Player = Player;
  action = [Action.Pierre, Action.Papier, Action.Ciseau];

  constructor(private service: GameService) {}

  onNewGame() {
    this.player1Value = this.action[Math.floor(Math.random() * 3)];
    this.player2Value = this.action[Math.floor(Math.random() * 3)];
    this.winner = this.service.calculateWinner(this.player1Value, this.player2Value);
  }
}
