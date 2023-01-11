import { Component, Output, EventEmitter } from '@angular/core';
import { MoleService } from '../mole.service';



@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css'],
})
export class GameBoardComponent{
//@Output() onClick = new EventEmitter<string>();


  timer: number = 7;
  scoreCounter: number = 0;
  lastHole: number = 0;
  btnDisabled: boolean = false;
  moleVisable: boolean = false;
  moleup: boolean = false;
  parentNode: any;


  constructor(
    private __moleService:MoleService
  ){
  }

  // Method that will decrease time with -1 util it reaches 0.
  timerDecreaseByOne() {
    if (this.timer > 0) {
      this.timer--;
    }
  }

  //Method that will countdown time, 
  //when the timer reaches 0 the "start game"-btn will be activ again, 
  //and end the interval and stop the mole from showing.  
  startTimer(){
    this.timer = 7; // reset countdown to correct game time when the game starts 
    let timer = setInterval(() => {
      if (this.timer === 0) {
        this.btnDisabled = false;
        clearInterval(timer);
        this.__moleService.timeUp=true;
      }
      this.timerDecreaseByOne();
    }, 1000);
  }

    // When user click the mole that shows and ads +1 to score. 
    // and the mole disappears
    onMoleClick(event:any) {
      this.scoreCounter++;
      event.target.classList.remove('moleup');    
    }
    

  //When the game starts the "start game"-btn will not function,
  //reset points to 0,
  //start the countdown timer,
  //activate the moles to pop up. 
  startGame() {
    this.btnDisabled = true; // start btn will not be able to click.
    this.scoreCounter = 0; // reset scorecount to 0.
    this.startTimer()
    this.__moleService.timeUp=false;
    this.__moleService.moleUpDown();
    this.__moleService.moleUpDown();
    this.__moleService.moleUpDown();
  }
}

