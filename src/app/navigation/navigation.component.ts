import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: 
  `
  <div>
  <a routerLink="leaderboard">Leaderboard</a>
  </div>
  `,
  styles: [`
  a{
    text-decoration:none;
    color:white;
    font-size: 2em;
  }
  
  a:hover{
    color: rgb(207,181,59);
  }
  `]
})
export class NavigationComponent {

}
