import {Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class MoleService {
  lastSelectedHole!: number; // doesnt really know why but VSC put in ! so it worked. 
  timeUp:boolean = false; // to useto continue methods ex molesUpDown 

  constructor() {}

  //Method that will return a random time after we insert the parameters
  randomTime(min: number, max: number): number {
    return Math.round(Math.random() * (max - min) + min);
  }

  //method that will choose a random cell, and checks if it was the last cell to be chosen,
  //if so it will look for another one, and put it into the variable "lastHole"
  randomCell(cell:any) {
    const i = Math.floor(Math.random() * cell.length);
    const hole = cell[i];
    if (hole === this.lastSelectedHole) {
      console.log('same hole as last one');
      return this.randomCell(cell);
    }
    this.lastSelectedHole = hole;
    return hole;
  }

  //method that take a random cell and add to its element class so the mole will be visable for 4 seconds. 
  moleUpDown() {
      let mole = document.querySelectorAll('.mole');
      const hole = this.randomCell(mole);
      console.log(hole);
      hole.classList.add('moleup');
      setTimeout(() => {
        hole.classList.remove('moleup');
        if (!this.timeUp) this.moleUpDown();
      }, 2000);  
  }
}