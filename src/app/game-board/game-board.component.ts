import { Component } from '@angular/core';
import { MoleService } from '../mole.service';
import { Game } from '../game';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css'],
})
export class GameBoardComponent {
  points: Game = { points: 0 };
  holes!: Game[];
  timer!: Game;

  constructor(
    private __moleService: MoleService,
    public __timerService: TimerService
  ) {
    this.holes = this.__moleService.holes,
    this.timer = this.__timerService.timer,
    this.points = this.__timerService.points;
  }

  // When user click the mole that shows and ads +1 to score.
  // and the mole disappears
  onMoleClick(hole: Game) {
    if (hole.moleup) {
      this.points.points++;
      hole.moleup = false;
    }
  }
}
