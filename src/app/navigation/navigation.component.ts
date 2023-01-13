import { Component } from '@angular/core';
import { Game } from '../game';
import { TimerService } from '../timer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  template: `
    <div>
      <button [disabled]="btn.btndisabled" (click)="goToLeaderboard()">
        Leaderboard
      </button>
    </div>
  `,
  styles: [
    `
      button {
        text-decoration: none;
        color: rgb(207, 181, 59);
        font-size: 2em;
        background-color: rgb(8, 131, 35);
      }
      button[disabled] {
        background-color: rgba(160, 246, 179, 0.8);
      }
    `,
  ],
})
export class NavigationComponent {
  btn!: Game;
  constructor(private __timerService: TimerService, private __Router: Router) {
    this.btn = this.__timerService.btn;
  }
  goToLeaderboard() {
    this.__Router.navigate(['/leaderboard']);
  }
}
