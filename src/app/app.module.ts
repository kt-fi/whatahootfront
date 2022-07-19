import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { StudentLoginComponent } from './student/student-login/student-login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RoomPortalComponent } from './student/room-portal/room-portal.component';
import { RouterModule } from '@angular/router';
import { AdminGameControlComponent } from './admin/admin-game-control/admin-game-control.component';
import { GameComponent } from './game/game.component';
import { DropdownDirective } from 'shared/dropdown.directive';
import { ErrorComponent } from './error/error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimerComponent } from './game/components/timer/timer.component';
import { CurrentwordComponent } from './game/components/currentword/currentword.component';
import { CurrentwordContestantComponent } from './game/components/currentword-contestant/currentword-contestant.component';
import { EmojiDirectiveDirective } from './emoji-directive.directive';


@NgModule({
  
  declarations: [
    AppComponent,
    AdminLoginComponent,
    StudentLoginComponent,
    RoomPortalComponent,
    AdminGameControlComponent,
    GameComponent,
    DropdownDirective,
    ErrorComponent,
    TimerComponent,
    CurrentwordComponent,
    CurrentwordContestantComponent,
    EmojiDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
