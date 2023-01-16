import { Component, Input } from '@angular/core';

import { TimerService } from '../timer.service';
import { Game } from '../game';
import { MoleService } from '../mole.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css'],
})
export class GameDetailsComponent {
  timer!: Game;
  @Input() scoreboard = 0; 
  btn!: Game;

constructor(
  private __timerService: TimerService,
  private __moleService:MoleService) {
    this.timer = this.__timerService.timer,
    this.btn = this.__timerService.btn
   }

  //When the game starts the "start game"-btn will not function,
  //reset points to 0,
  //start the countdown timer,
  //activate the moles to pop up.
  startGame() {
    this.btn.btndisabled = true; // start btn will not be able to click.
    this.scoreboard = 0; // reset scorecount to 0.
    this.__timerService.startTimer();
    this.__moleService.moleUpDown();
  }
}
