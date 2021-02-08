import { Action, Player } from './app.enum';
import { TestBed } from '@angular/core/testing';

import { GameService } from './game.service';

describe('GameService', () => {
  let service: GameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be winner is player 1', () => {
    const actionPlayer1 = Action.Ciseau;
    const actionPlayer2 = Action.Papier;
    
    const result = service.calculateWinner(actionPlayer1, actionPlayer2);

    expect(result).toEqual(Player.Player1);
  })

  it('should be winner is player 2', () => {
    const actionPlayer1 = Action.Pierre;
    const actionPlayer2 = Action.Papier;

    const result = service.calculateWinner(actionPlayer1, actionPlayer2);

    expect(result).toEqual(Player.Player2);
  })
});
