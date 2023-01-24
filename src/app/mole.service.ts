import { Injectable } from '@angular/core';
import { TimerService } from './timer.service';
import { State } from './state';

@Injectable({
  providedIn: 'root',
})
export class MoleService {
  timer!: State;
  //Every hole has its own mole, moleTimeout for Timeout and a startReactionTime.
  holes: State[] = [
    { moleup: false, moleTimeout: 0, startReactionTime: 0 },
    { moleup: false, moleTimeout: 0, startReactionTime: 0 },
    { moleup: false, moleTimeout: 0, startReactionTime: 0 },
    { moleup: false, moleTimeout: 0, startReactionTime: 0 },
    { moleup: false, moleTimeout: 0, startReactionTime: 0 },
    { moleup: false, moleTimeout: 0, startReactionTime: 0 },
    { moleup: false, moleTimeout: 0, startReactionTime: 0 },
    { moleup: false, moleTimeout: 0, startReactionTime: 0 },
    { moleup: false, moleTimeout: 0, startReactionTime: 0 },
    { moleup: false, moleTimeout: 0, startReactionTime: 0 },
    { moleup: false, moleTimeout: 0, startReactionTime: 0 },
    { moleup: false, moleTimeout: 0, startReactionTime: 0 },
    { moleup: false, moleTimeout: 0, startReactionTime: 0 },
    { moleup: false, moleTimeout: 0, startReactionTime: 0 },
    { moleup: false, moleTimeout: 0, startReactionTime: 0 },
    { moleup: false, moleTimeout: 0, startReactionTime: 0 },
    { moleup: false, moleTimeout: 0, startReactionTime: 0 },
    { moleup: false, moleTimeout: 0, startReactionTime: 0 },
    { moleup: false, moleTimeout: 0, startReactionTime: 0 },
    { moleup: false, moleTimeout: 0, startReactionTime: 0 },
    { moleup: false, moleTimeout: 0, startReactionTime: 0 },
    { moleup: false, moleTimeout: 0, startReactionTime: 0 },
    { moleup: false, moleTimeout: 0, startReactionTime: 0 },
    { moleup: false, moleTimeout: 0, startReactionTime: 0 },
    { moleup: false, moleTimeout: 0, startReactionTime: 0 },
  ];

  constructor(private __timerService: TimerService) {
    this.timer = this.__timerService.timer;
  }

  //Method that will return a random time after we insert parameters
  randomTime(min: number, max: number): number {
    return Math.round(Math.random() * (max - min) + min);
  }

  //Method that will choose a randomHole and return it
  //if whole is occupied return false
  randomHole(holes: State[]) {
    const i = Math.floor(Math.random() * this.holes.length);
    let hole = holes[i];
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

  //Method that will loop through the holes and checks for number of moles shown to the user
  // if its more than or equal to 3 it will return true.
  calculateNumberOfMoles(holes: State[]): boolean {
    let numMole: number = 0;
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
  //and disappear after 4 seconds.
  moleUpDown() {
    // Shows the Mole in a random time
    let randomTimeMole = setInterval(() => {
      const shouldNotPopUp = this.calculateNumberOfMoles(this.holes);
      // if shouldNotPopUp === true, it means we have 3 visable moles already.
      if (shouldNotPopUp) {
        console.log('oops, already 3 moles');
        return;
      }
      const hole = this.randomHole(this.holes);
      // if hole === false, that means that the hole was occupied by a mole already
      if (!hole) {
        console.log('oops, alrady taken!');
        return;
      }
      hole.moleup = true;
      hole.startReactionTime = Date.now();
      // Removes the Mole after 4 seconds
      hole.moleTimeout = setTimeout(() => {
        hole.moleup = false;
      }, 4000);
      if (this.timer.timer === 0) {
        this.removeAllMoles();
        // Stops mole from displaying.
        clearInterval(randomTimeMole);
      }
    }, this.randomTime(300, 700));
  }
}
