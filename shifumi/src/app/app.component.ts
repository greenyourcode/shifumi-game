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

  calculateWinner(actionPlayer1, actionPlayer2) {
    if (actionPlayer1 === Action.Ciseau && actionPlayer2 === Action.Papier) {
      return Player.Player1;
    } else if (actionPlayer1 === Action.Pierre && actionPlayer2 === Action.Papier) {
      return Player.Player2;
    } else if (actionPlayer1 === Action.Papier && actionPlayer2 === Action.Ciseau) {
      return Player.Player2;
    } else if (actionPlayer1 === Action.Papier && actionPlayer2 === Action.Pierre) {
      return Player.Player1;
    } else if (actionPlayer1 === Action.Ciseau && actionPlayer2 === Action.Pierre) {
      return Player.Player2;
    } else if (actionPlayer1 === Action.Pierre && actionPlayer2 === Action.Ciseau) {
      return Player.Player1;
    }
  }

  onNewGame() {
    this.player1Value = this.action[Math.floor(Math.random() * 3)];
    this.player2Value = this.action[Math.floor(Math.random() * 3)];
    this.winner = this.calculateWinner(this.player1Value, this.player2Value);
  }
}
