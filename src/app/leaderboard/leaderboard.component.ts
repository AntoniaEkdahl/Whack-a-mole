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

  //Get the highscore and put in varable to render in HTML
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

  //Get the reactiontime and put in varable to render in HTML
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

  //When this component shows it will start to run.
  ngOnInit() {
    this.getHighScore();
    this.getReactionTime();
  }
}
