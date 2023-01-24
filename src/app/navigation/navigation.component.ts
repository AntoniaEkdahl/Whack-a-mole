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
        border-radius: 0;
        width: 170px;
        position: relative;
        transition: 0.5s;
        transition: all 0.5s;
        box-shadow: 0 10px 20px -8px rgb(207, 181, 59);
      }

      .btn:active {
        background-color: rgba(98, 243, 129, 0.8);
        color: rgb(207, 181, 59);
      }

      button[disabled] {
        background-color: rgba(160, 246, 179, 0.8);
      }

      .btn:after {
        content: '»';
        position: absolute;
        opacity: 0;
        top: 5px;
        right: -5px;
        transition: 0.5s;
      }

      .btn:hover {
        padding-right: 24px;
        padding-left: 8px;
      }

      .btn:hover:after {
        opacity: 1;
        right: 1px;
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
