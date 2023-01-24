import { Component, Input } from '@angular/core';
import { TimerService } from '../timer.service';
import { State } from '../state';
import { MoleService } from '../mole.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css'],
})
export class GameDetailsComponent {
  timer!: State;
  @Input() scoreboard = 0;
  btn!: State;
  username: string;
  registerUser: boolean = false;

  constructor(
    private __timerService: TimerService,
    private __moleService: MoleService
  ) {
    this.timer = this.__timerService.timer,
    this.btn = this.__timerService.btn
  }

  //When the game starts the "start game"-btn will not function,
  //reset points to 0,
  //start the countdown timer,
  //activate the moles to pop up.
  startGame() {
    if (this.username === undefined) {
      this.registerUser = true;
      this.btn.btndisabled = true; // start btn will not be able to click.
    }
    if (this.username !== undefined) {
      this.registerUser = false;
      this.btn.btndisabled = true; // start btn will not be able to click.
      this.scoreboard = 0; // reset scorecount to 0.
      this.__timerService.ArrayOfReactionTime = []; // Empty/reset the array of reaction time.
      this.__timerService.startTimer();
      this.__moleService.moleUpDown();
    }
  }

  getUsername(data) {
    this.username = data;
  }
}
