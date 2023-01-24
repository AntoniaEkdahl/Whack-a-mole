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
 @Output() theUsername:EventEmitter<string> = new EventEmitter();
 public username: string = '';
  btn!: State;
  @Input() registerUser:boolean;

  constructor(
    private __timerService: TimerService,
    private __leaderboardService: LeaderboardService) {
    this.btn = this.__timerService.btn;
  }

  onSubmit() {
    this.theUsername.emit(this.username);
    this.__leaderboardService.usernameChanged(this.username);
    this.btn.btndisabled = false;
    this.registerUser = false;
  }
}
