import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LeaderboardService } from '../leaderboard.service';
import { State } from '../state';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
})
export class RegisterUserComponent {
 @Output() theUsername:EventEmitter<string> = new EventEmitter(); //To send the username to game-details component. 
 public username: string = '';
  btn!: State;
  timer!:State;

  constructor(
    private __timerService: TimerService,
    private __leaderboardService: LeaderboardService) {
    this.btn = this.__timerService.btn;
    this.timer = this.__timerService.timer;
  }

  onSubmit() {
    this.theUsername.emit(this.username); //  Send username data to game-details component (connected with its HTML)
    this.__leaderboardService.usernameChanged(this.username);
    this.btn.btndisabled = false; 
 }
   
}
