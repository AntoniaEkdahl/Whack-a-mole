import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LeaderboardService } from '../leaderboard.service';
import { Game } from '../game';
import { TimerService } from '../timer.service';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit{
  User:User = {name:'', points:0};
  id:string; 
  registerUser!:Boolean;
  btn!: Game;

  constructor(
    private __leaderboardService:LeaderboardService,
    private __timerService:TimerService,
    private __afs:AngularFirestore
  ){
    this.registerUser = this.__leaderboardService.registerUser,
    this.btn = this.__timerService.btn
  }

   onSubmit() { 
    this.__leaderboardService.addUser(this.User);
    this.btn.btndisabled = false; // start & leaderboard btn will be able to click.
  }

  ngOnInit(): void {
  }
  }
