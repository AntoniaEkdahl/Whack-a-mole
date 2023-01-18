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
    { moleup: false, moleTimer: 0, startTime: 0 },
    { moleup: false, moleTimer: 0, startTime: 0 },
    { moleup: false, moleTimer: 0, startTime: 0 },
    { moleup: false, moleTimer: 0, startTime: 0 },
    { moleup: false, moleTimer: 0, startTime: 0 },
    { moleup: false, moleTimer: 0, startTime: 0 },
    { moleup: false, moleTimer: 0, startTime: 0 },
    { moleup: false, moleTimer: 0, startTime: 0 },
    { moleup: false, moleTimer: 0, startTime: 0 },
    { moleup: false, moleTimer: 0, startTime: 0 },
    { moleup: false, moleTimer: 0, startTime: 0 },
    { moleup: false, moleTimer: 0, startTime: 0 },
    { moleup: false, moleTimer: 0, startTime: 0 },
    { moleup: false, moleTimer: 0, startTime: 0 },
    { moleup: false, moleTimer: 0, startTime: 0 },
    { moleup: false, moleTimer: 0, startTime: 0 },
    { moleup: false, moleTimer: 0, startTime: 0 },
    { moleup: false, moleTimer: 0, startTime: 0 },
    { moleup: false, moleTimer: 0, startTime: 0 },
    { moleup: false, moleTimer: 0, startTime: 0 },
    { moleup: false, moleTimer: 0, startTime: 0 },
    { moleup: false, moleTimer: 0, startTime: 0 },
    { moleup: false, moleTimer: 0, startTime: 0 },
    { moleup: false, moleTimer: 0, startTime: 0 },
    { moleup: false, moleTimer: 0, startTime: 0 },
  ];
  endTime: Game = { endTime: 0 };
  startTime: Game = { startTime: 0 };
  ArrayOfReactionTime: number[] = [];
  fastestReactionTime: number;
  moleTimer: Game = { moleTimer: 0 };

  constructor(private __timerService: TimerService) {
    this.timer = this.__timerService.timer;
  }

  //Method that will return a random time after we insert parameters
  randomTime(min: number, max: number): number {
    return Math.round(Math.random() * (max - min) + min);
  }

  //Method that will choose a randomHole,
  // if whole is occupied return false
  randomHole(holes: Game[]) {
    const i = Math.floor(Math.random() * this.holes.length);
    let hole = this.holes[i];
    if (hole.moleup === true) {
      return false;
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
  reactionTime(endTime: number, startTime: number) {
    const difference = endTime - startTime;
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

  calculateNumberOfMoles(holes: Game[]): boolean {
    let numMole: number = 0;
    // checks for number of moles shown to the user
    for (let i = 0; i < holes.length; i++) {
      if (holes[i].moleup === true) {
        numMole++;
      }
      // if number of moles is 3 we could break the loop early
      if (numMole >= 3) {
        break;
      }
    }
    return numMole >= 3;
  }

  //Method that makes a mole appear with random intervals in a random hole
  //and disappear adter 4 seconds.
  moleUpDown() {
    // Shows the Mole in a random time
    let randomTimeMole = setInterval(() => {
      const shouldNotPopUp = this.calculateNumberOfMoles(this.holes);

      if (shouldNotPopUp) {
        console.log('nopop');
        return;
      }

      const hole = this.randomHole(this.holes);
      // if hole === false, that means that the hole was occupied by a mole al ready
      if (!hole) {
        console.log('oops, alrady taken!');
        return;
      }
      hole.moleup = true;
      hole.startTime = Date.now();
      // Removes the Mole after 4 seconds
      hole.moleTimer = setTimeout(() => {
        hole.moleup = false;
      }, 4000);

      if (this.timer.timer === 0) {
        this.removeAllMoles();
        clearInterval(randomTimeMole); // Stops mole from displaying.
        this.getFastestReactiontime(this.ArrayOfReactionTime);
        console.log('Fastest reaction time: ' + this.fastestReactionTime  + '. Array: ' + this.ArrayOfReactionTime );
      }
    }, this.randomTime(400, 900));
  }
}
