import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
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

  constructor(private __afs: AngularFirestore) {}

  getUsername() {
    return this.userSubject.asObservable();
  }

  usernameChanged(username: string) {
    this.userSubject.next(username); // Send a copy of the state
  }

  addUser(user: User) {
    return this.__afs.collection('highscore').add(user);
  }

  getHighScoreUsers() {
    this.highscoreList = this.__afs.collection('/highscore', (ref) =>
      ref.orderBy('points', 'desc')
    );
    return this.highscoreList.snapshotChanges();
  }

  getReactionTime() {
    this.reactionTimeList = this.__afs.collection('/highscore', (ref) =>
      ref.orderBy('reaction', 'asc')
    );
    return this.reactionTimeList.snapshotChanges();
  }
}
