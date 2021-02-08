import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../app.enum';

@Component({
  selector: 'app-player-board',
  templateUrl: './player-board.component.html',
  styleUrls: ['./player-board.component.scss']
})
export class PlayerBoardComponent implements OnInit {
  @Input() playerName;
  @Input() playerValue: Player;

  constructor() { }

  ngOnInit(): void {
  }

}
