import { Component } from '@angular/core';
import { MoleService } from '../mole.service';

@Component({
  selector: 'app-mole',
  templateUrl: './mole.component.html',
  styleUrls: ['./mole.component.css']
})
export class MoleComponent {

  constructor(
    private __moleService:MoleService
  ) { }



}


