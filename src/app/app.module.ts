import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GameBoardComponent } from './game-board/game-board.component';
import { MoleComponent } from './mole/mole.component';
import { StartGameComponent } from './start-game/start-game.component';
import { MoleService } from './mole.service';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    MoleComponent,
    StartGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [MoleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
