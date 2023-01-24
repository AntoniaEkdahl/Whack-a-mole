import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class LeaderboardService {
  highscore: any;
  highscoreList!: AngularFirestoreCollection<User>; // A local pointer to the collection
  reactionTime: any;
  reactionTimeList!: AngularFirestoreCollection<User>;
  private userSubject = new BehaviorSubject<string>('');

  constructor(private __afs: AngularFirestore) { }

  getUsername() { 
    return this.userSubject.asObservable(); //Make it and observable to be able to listen to changes. 
  }

  usernameChanged(username: string) { 
    this.userSubject.next(username); // Gets a copy of the username
  }

  // Add user to firestore database. 
  addUser(user: User) {
    return this.__afs.collection('highscore').add(user);
  }

  // Get higscore from firestore and order it by points and descending. 
  getHighScoreUsers() {
    this.highscoreList = this.__afs.collection('/highscore', (ref) =>
      ref.orderBy('points', 'desc')
    );
    return this.highscoreList.snapshotChanges();
  }

   // Get reactiontime from firestore and order it by reaction and ascending. 
  getReactionTime() {
    this.reactionTimeList = this.__afs.collection('/highscore', (ref) =>
      ref.orderBy('reaction', 'asc')
    );
    return this.reactionTimeList.snapshotChanges();
  }
}
