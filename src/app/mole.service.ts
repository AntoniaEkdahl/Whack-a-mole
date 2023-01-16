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
  lastHole:Game = {moleup:false}

  constructor(private __timerService: TimerService) {
    this.timer = this.__timerService.timer
  }

  //Method that will return a random time after we insert parameters
  randomTime(min: number, max: number): number {
    return Math.round(Math.random() * (max - min) + min);
  }

  //Method that removes all visable moles when time runs out
  removeAllMoles(){
    this.holes.forEach(function (value) { 
      value.moleup = false;
    });
  }

  //Method that will choose a randomHole,
  //if the hole is the same as the last one picked, we just call the function again. 
  //we store the most recent hole chosen in the lastHole variable.
  randomHole(holes){ 
    const i = Math.floor(Math.random() * this.holes.length);
    let hole = this.holes[i];
    if(hole === this.lastHole){
      console.log('oops got the last one, duplicate')
      return this.randomHole(holes)
    }
    this.lastHole = hole;
    return hole;
  }

  //Method that makes a mole appear with random intervals in a random hole 
  //and disappear adter 4 seconds.
  moleUpDown() {
    let randomTimeMole = setInterval(() => {     // Shows the Mole in a random time
     const hole = this.randomHole(this.holes);
      hole.moleup = true;
      setTimeout(() => {                        // Removes the Mole after 4 seconds
        hole.moleup = false;
      }, 4000);
      this.moleUpDown;
      if (this.timer.timer === 0) { 
        clearInterval(randomTimeMole);          // Stops mole from displaying.
        this.removeAllMoles();
      }
    }, this.randomTime(800, 2000));
  }
}
