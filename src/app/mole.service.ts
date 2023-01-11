import { HostListener, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoleService {
  lastHole!: number;
  timeUp:boolean = false;

  constructor() {}

  randomTime(min: number, max: number): number {
    return Math.round(Math.random() * (max - min) + min);
  }

  randomCell(cell:any) {
    const i = Math.floor(Math.random() * cell.length);
    const hole = cell[i];
    if (hole === this.lastHole) {
      console.log('same hole as last one');
      return this.randomCell(cell);
    }
    this.lastHole = hole;
    return hole;
  }

  moleUpDown() {
      let mole = document.querySelectorAll('.mole');
      const hole = this.randomCell(mole);
      hole.classList.add('moleup');
      setTimeout(() => {
        hole.classList.remove('moleup');
        if (!this.timeUp) this.moleUpDown();
      }, 1000);  
  }

}
