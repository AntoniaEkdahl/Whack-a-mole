import { Injectable } from '@angular/core';
import { LeaderboardService } from './leaderboard.service';
import { State } from './state';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  timer: State = { timer: 60 };
  btn: State = { btndisabled: false };
  points: State = { points: 0 };
  user: User = { name: '', points: 0, reaction: 0 }; // Variable that we want to send to firebase
  ArrayOfReactionTime: number[] = [];
  fastestReactionTime: number;

  constructor(private __leaderboardService: LeaderboardService) {
    this.__leaderboardService.getUsername().subscribe((data) => { // Listen to when the username has changed and send to user.name variable. 
      this.user.name = data;
    });
  }

  //Method that counts the reactiontime from when the mole appears and when the user click the mole.
  reactionTime(endReactionTime: number, startReactionTime: number) {
    const difference = endReactionTime - startReactionTime;
    this.ArrayOfReactionTime.push(difference);
  }

  //Method that will sort the array of number with the smalest first and save the first number and in a variable.
  getFastestReactiontime(Array: number[]) {
    const sortedArray = Array.sort(this.compareNumerically); // sort the array with reatctiontime
    this.fastestReactionTime = sortedArray[0];
  }

  //Method to use with .sort(), and it will sort an array of numbers, smallest first.
  compareNumerically(a: number, b: number) {
    return a - b;
  }

  //Method that will countdown time,
  //when the timer reaches 0 the "start game"-btn will be activ again,
  //and end the interval and stop the mole from showing.
  // and user data sends to firestore database. 
  startTimer() {
    this.timer.timer = 30; // reset countdown to correct game time when the game starts
    this.points.points = 0;
    let countdown = setInterval(() => {
      this.timer.timer--;
      if (this.timer.timer === 0) {
        this.btn.btndisabled = false;
        clearInterval(countdown);
        this.user.points = this.points.points;
        this.getFastestReactiontime(this.ArrayOfReactionTime);
        this.user.reaction = this.fastestReactionTime;
        this.__leaderboardService.addUser(this.user); //user data sends to firestore database. 
      }
    }, 1000);
  }
}
