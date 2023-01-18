import { Injectable } from '@angular/core';
import { Game } from './game';
import { LeaderboardService } from './leaderboard.service';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  timer: Game = { timer: 10 };
  btn: Game = { btndisabled: false };
  points:Game = { points:0};
  totalScore:number; 


  constructor() {}

  //Method that will countdown time,
  //when the timer reaches 0 the "start game"-btn will be activ again,
  //and end the interval and stop the mole from showing.
  startTimer() {
    this.timer.timer = 10; // reset countdown to correct game time when the game starts
    this.points.points =0; 
    let countdown = setInterval(() => {
      this.timer.timer--;
      if (this.timer.timer === 0) {
        this.btn.btndisabled = false;
        clearInterval(countdown);
       this.totalScore = this.points.points  ;
      }
    }, 1000);
  }
  
}
