import { Component, Input } from '@angular/core';

import { TimerService } from '../timer.service';
import { Timer } from '../timer';
import { Btn } from '../btnDisabled';
import { MoleService } from '../mole.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css'],
})
export class GameDetailsComponent {
  timer!: Timer;
  @Input() points:number=0; 
  btn: Btn = {disabled:false};

constructor(
  private __timerService: TimerService,
  private __moleService:MoleService) {
    this.timer = this.__timerService.timer;
   }

  //When the game starts the "start game"-btn will not function,
  //reset points to 0,
  //start the countdown timer,
  //activate the moles to pop up.
  startGame() {
    this.btn.disabled = true; // start btn will not be able to click.
    this.points = 0; // reset scorecount to 0.
    this.__timerService.startTimer();
    this.__timerService.timeUp.timeUp = false;
    this.__moleService.moleUpDown();
  }
}
