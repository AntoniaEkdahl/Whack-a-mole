import { Component } from '@angular/core';
import { State } from '../state';
import { TimerService } from '../timer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  template: `
    <div>
      <button
        class="btn btn-primary"
        [disabled]="btn.btndisabled"
        (click)="goToLeaderboard()"
      >
        Leaderboard
      </button>
    </div>
  `,
  styles: [
    `
      .btn {
        font-size: 1.5em;
        text-decoration: none;
        color: rgb(207, 181, 59);
        background-color: rgb(8, 131, 35);
        border: none;
        margin: 30px 0 0 90px;
      }

      button[disabled] {
        background-color: rgba(160, 246, 179, 0.8);
      }
    `,
  ],
})
export class NavigationComponent {
  btn!: State;
  constructor(private __timerService: TimerService, private __Router: Router) {
    this.btn = this.__timerService.btn;
  }
  //When press button will navigate to leaderboard component. 
  goToLeaderboard() {
    this.__Router.navigate(['/leaderboard']);
  }
}
