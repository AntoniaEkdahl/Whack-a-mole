import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { User } from '../user';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  newUser:User = {name:'', points:0, reaction:0};
  id:string; 

  constructor(
    private __activatedRoute: ActivatedRoute,
    private __afs: AngularFirestore, 
  ){}


  onSubmit(){
      this.__afs.collection('higscore').add(this.newUser);
  }

  ngOnInit(): void {
    this.__activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });
      // .doc -> FirestoreDocument
      // .valueChanges() -> Observable, datan nu och data efterhand som den ändras
      // .subscribe() - prenumerera på observable
      let doc: AngularFirestoreDocument<User> = this.__afs.doc('higscore/'+this.id);
      doc.valueChanges().subscribe((user) => {
        this.newUser = user;
      });
    }
  }
