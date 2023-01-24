import { Component } from '@angular/core';
import { MoleService } from '../mole.service';
import { State } from '../state';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css'],
})
export class GameBoardComponent {
  points: State = { points: 0 };
  holes!: State[];


  constructor(
    private __moleService: MoleService,
    public __timerService: TimerService
  ) {
    this.holes = this.__moleService.holes,
    this.points = this.__timerService.points
  }

  // When user click the mole it will take the hole that it is in as a parameter
  // and  ads +1 to score and the mole disappears, the timeout will stop in case so its not in the background and disturbs,
  // and the reaction time is calculated.
  onMoleClick(hole: State) {
    if (hole.moleup) {
      this.points.points++;
      hole.moleup = false;
      clearTimeout(hole.moleTimeout);
      const startReactionTime = hole.startReactionTime;
      const endReactionTime = Date.now();
      //run the method that counts reaction time.
      this.__timerService.reactionTime(endReactionTime, startReactionTime);
    }
  }
}
