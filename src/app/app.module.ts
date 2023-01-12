import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GameBoardComponent } from './game-board/game-board.component';
import { MoleService } from './mole.service';
import { GameDetailsComponent } from './game-details/game-details.component';
import { TimerService } from './timer.service';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    GameDetailsComponent,
    LeaderboardComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    MoleService,
    TimerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
