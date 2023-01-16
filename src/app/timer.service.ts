import { Injectable } from '@angular/core';
import { Game } from './game';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  timer: Game = { timer: 60 };
  btn: Game = { btndisabled: false };
  points:Game = { points:0}

  constructor() {}

  //Method that will countdown time,
  //when the timer reaches 0 the "start game"-btn will be activ again,
  //and end the interval and stop the mole from showing.
  startTimer() {
    this.timer.timer = 60; // reset countdown to correct game time when the game starts
    this.points.points =0; 
    let countdown = setInterval(() => {
      this.timer.timer--;
      if (this.timer.timer === 0) {
        this.btn.btndisabled = false;
        clearInterval(countdown);
      }
    }, 1000);
  }
  
}
