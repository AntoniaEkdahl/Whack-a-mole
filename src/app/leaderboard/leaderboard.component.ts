import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { User } from '../user';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  highscoreList!: AngularFirestoreCollection<User>;    // A local pointer to the collection
  highscore: any; 

  constructor(    private __afs: AngularFirestore, 
    ) {
    
  }
  ngOnInit(){
    this.highscoreList = this.__afs.collection('highscore');
    this.highscore = this.highscoreList.snapshotChanges().pipe(
      map(action => {
        return action.map( a => {
          const data = a.payload.doc.data() as User; // Extract the Dog - the content of the Document
          const id = a.payload.doc.id;  // Extract id for this document
          return { id, data };
        })
      })
    );
  }
}
