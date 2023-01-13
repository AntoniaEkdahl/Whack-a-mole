import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GameBoardComponent } from './game-board/game-board.component';
import { MoleService } from './mole.service';
import { GameDetailsComponent } from './game-details/game-details.component';
import { TimerService } from './timer.service';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LeaderboardService } from './leaderboard.service';
import { environment } from 'src/environment/environment';

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
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    NgbModule
  ],
  providers: [
    MoleService,
    TimerService,
    LeaderboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
