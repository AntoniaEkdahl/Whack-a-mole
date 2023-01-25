import { Component, Input } from '@angular/core';
import { TimerService } from '../timer.service';
import { State } from '../state';
import { MoleService } from '../mole.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css'],
})
export class GameDetailsComponent {
  timer!: State;
  @Input() scoreboard = 0; //We use input to get the data from gamebard component, connected in its HTML. 
  btn!: State;
  username: string;
  registerUser: boolean = false;
  gameBtn:string = 'Start Game'

  constructor(
    private __timerService: TimerService,
    private __moleService: MoleService
  ) {
    this.timer = this.__timerService.timer,
    this.btn = this.__timerService.btn
  }


  //When user press start game btn and "username-varable" from register-user component is undefied an input will show to enter username.  
  //When username is enterd the variable is not undefined anymore and start game btn will be able to press and now the game will start. 
   startGame() {
    if (this.timer.timer === 0) {
      this.username = undefined
      this.timer.timer = 60;
    }
     if (this.username === undefined) {
       this.registerUser = true; // show username input (with ngIF in HTML)
       this.btn.btndisabled = true; // start&leaderboard btn will not be able to click.
       this.scoreboard = 0; // reset scorecount to 0.
       this.__timerService.ArrayOfReactionTime = []; // Empty/reset the array of reaction time.
       this.gameBtn = `Let's play!`
     }
     if (this.username !== undefined) {
       this.registerUser = false; //remove username input (with ngIF in HTML)
       this.btn.btndisabled = true; // start&leaderboard btn will not be able to click.
       this.__timerService.startTimer();
      this.__moleService.moleUpDown();
     }
   
  }

  //Get the eventemitter from register-user component to use in if-statment to enter username. Connected in this HTML. 
  getUsername(data) {
    this.username = data;
  }
}
