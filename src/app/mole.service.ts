import { Injectable } from '@angular/core';
import { TimerService } from './timer.service';
import { Game } from './game';

@Injectable({
  providedIn: 'root',
})
export class MoleService {
  lastSelectedHole!: boolean; //
  timer!: Game;
  holes: Game[] = [
    { moleup: false },
    { moleup: false },
    { moleup: false },
    { moleup: false },
    { moleup: false },
    { moleup: false },
    { moleup: false },
    { moleup: false },
    { moleup: false },
    { moleup: false },
    { moleup: false },
    { moleup: false },
    { moleup: false },
    { moleup: false },
    { moleup: false },
    { moleup: false },
    { moleup: false },
    { moleup: false },
    { moleup: false },
    { moleup: false },
    { moleup: false },
    { moleup: false },
    { moleup: false },
    { moleup: false },
    { moleup: false },
  ];
  endTime:Game = {endTime:0} 
  startTime:Game = {startTime:0};
  ArrayOfReactionTime:number[] = [];
  fastestReactionTime:number;

  constructor(private __timerService: TimerService) {
    this.timer = this.__timerService.timer;
  }

  //Method that will return a random time after we insert parameters
  randomTime(min: number, max: number): number {
    return Math.round(Math.random() * (max - min) + min);
  }

  //Method that will choose a randomHole,
  //if the hole have a mole visablr, we just call the function again.
  randomHole(holes) {
    const i = Math.floor(Math.random() * this.holes.length);
    let hole = this.holes[i];
    if (hole.moleup == true) {
      console.log('oops, alrady taken!');
      return this.randomHole(holes);
    }
    return hole;
  }

  //Method that removes all visable moles when time runs out
  removeAllMoles() {
    this.holes.forEach(function (value) {
      value.moleup = false;
    });
  }

  //Method that counts the reactiontime from when the mole appears and when the user click the mole.
  reactionTime(endTime:number, startTime:number){
  const elapsed = endTime - startTime;
  this.ArrayOfReactionTime.push(elapsed);
  }

  //Method that will sort the array of number with the smalest first and save the first number and in a variable.
  getFastestReactiontime(Array:number[]){
   const sortedArray = Array.sort(this.compareNumerically) // sort the array with reatctiontime
    this.fastestReactionTime = sortedArray[0];
  }

  //Method to use with .sort(), and it will sort an array of numbers, smallest first. 
  compareNumerically(a, b) { return a - b }

  //Method that makes a mole appear with random intervals in a random hole
  //and disappear adter 4 seconds.
  moleUpDown() {
    let randomTimeMole = setInterval(() => {       // Shows the Mole in a random time
      const hole = this.randomHole(this.holes);
      hole.moleup = true;
      this.startTime.startTime = Date.now();
       setTimeout(() => {
        // Removes the Mole after 4 seconds
        hole.moleup = false;
      }, 4000);
      this.moleUpDown;
      if (this.timer.timer === 0) {
        this.removeAllMoles();
        clearInterval(randomTimeMole); // Stops mole from displaying.
        this.getFastestReactiontime(this.ArrayOfReactionTime);
      }
    }, this.randomTime(800, 1200));    
  }
}
