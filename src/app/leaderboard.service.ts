import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {
  registerUser:boolean = true;
  highscore: any; 
  highscoreList!: AngularFirestoreCollection<User>;    // A local pointer to the collection
  reactionTime:any;
  reactionTimeList!: AngularFirestoreCollection<User>;    // A local pointer to the collection
  user:User = {name: ''}
  id:string;

  constructor(private __afs: AngularFirestore) { }

  addUser(user:User){
   // user.id = this.__afs.createId();
    return this.__afs.collection('highscore').add(user)
  }

   getHighScoreUsers(){
    this.highscoreList = this.__afs.collection('/highscore', ref => ref.orderBy('points', 'desc'))
    return this.highscoreList.snapshotChanges();
   }

   getReactionTime(){
    this.reactionTimeList = this.__afs.collection('/highscore', ref => ref.orderBy('reaction', 'asc'));
    return this.reactionTimeList.snapshotChanges();
   }

   updateUser(user:User){
    this.__afs.doc('highscore/'+user).update(this.user)
   }

   getID(User:User){
   }
   

}
