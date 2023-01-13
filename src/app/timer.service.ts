import { Injectable } from '@angular/core';
import { Game } from './game';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  timer: Game = { timer: 7 };
  timeUp: Game = { timeUp: false }; // to useto continue methods ex molesUpDown
  btn: Game = { btndisabled: false };

  constructor() {}

  //Method that will countdown time,
  //when the timer reaches 0 the "start game"-btn will be activ again,
  //and end the interval and stop the mole from showing.
  startTimer() {
    this.timer.timer = 7; // reset countdown to correct game time when the game starts
    let countdown = setInterval(() => {
      this.timer.timer--;
      if (this.timer.timer === 0) {
        this.timeUp.timeUp = true;
        this.btn.btndisabled = false;
        clearInterval(countdown);
      }
    }, 1000);
  }
}
