import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { LeaderboardService } from '../leaderboard.service';
import { User } from '../user';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css'],
})
export class LeaderboardComponent implements OnInit {
  highscore!: any;
  reactionTime!: any;

  constructor(private __leaderboardService: LeaderboardService) {
    (this.highscore = this.__leaderboardService.highscore),
      (this.reactionTime = this.__leaderboardService.reactionTime);
  }

  getHighScore() {
    this.highscore = this.__leaderboardService.getHighScoreUsers().pipe(
      map((action) => {
        return action.map((a) => {
          const data = a.payload.doc.data() as User; // Extract the User - the content of the Document
          const id = a.payload.doc.id; // Extract id for this document
          return { id, data };
        });
      })
    );
  }

  getReactionTime() {
    this.reactionTime = this.__leaderboardService.getReactionTime().pipe(
      map((action) => {
        return action.map((a) => {
          const data = a.payload.doc.data() as User; // Extract the User - the content of the Document
          const id = a.payload.doc.id; // Extract id for this document
          return { id, data };
        });
      })
    );
  }

  ngOnInit() {
    this.getHighScore();
    this.getReactionTime();
  }
}
