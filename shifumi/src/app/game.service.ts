import { Injectable } from '@angular/core';
import { Action, Player } from './app.enum';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  calculateWinner(actionPlayer1: string, actionPlayer2: string) {
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
}
