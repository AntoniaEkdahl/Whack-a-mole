import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameBoardComponent } from './game-board/game-board.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { RegisterUserComponent } from './register-user/register-user.component';

const routes: Routes = [
  {path:'', component:GameBoardComponent},
  {path:'leaderboard', component:LeaderboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
