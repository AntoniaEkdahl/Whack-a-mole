import { Injectable } from '@angular/core';
import { Timer } from './timer';
import { TimeUp } from './time-up';
import { Btn } from './btnDisabled';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  timer: Timer = { seconds: 7 };
  timeUp: TimeUp = { timeUp: false }; // to useto continue methods ex molesUpDown
  btn: Btn = { disabled: false };

  constructor() {}

  // Method that will decrease time with -1 util it reaches 0.
  timerDecreaseByOne() {
    if (this.timer.seconds > 0) {
    }
  }

  //Method that will countdown time,
  //when the timer reaches 0 the "start game"-btn will be activ again,
  //and end the interval and stop the mole from showing.
  startTimer() {
    this.timer.seconds = 7; // reset countdown to correct game time when the game starts
    let countdown = setInterval(() => {
      this.timer.seconds--;
      if (this.timer.seconds === 0) {
        this.timeUp.timeUp = true;
        this.btn.disabled = false;
        clearInterval(countdown);
      }
      this.timerDecreaseByOne();
    }, 1000);
  }
}
