import { Component } from '@angular/core';
import { MoleService } from '../mole.service';
import { PointsCounter } from '../points-Counter';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css'],
})
export class GameBoardComponent {
  points:PointsCounter={points:0};
  
  constructor(
    private __moleService:MoleService
  ) { this.points.points = this.__moleService.points.points}

    // When user click the mole that shows and ads +1 to score.
  // and the mole disappears
  onMoleClick(event: any) {
    this.points.points++;
    event.target.classList.remove('moleup');
  }
}
