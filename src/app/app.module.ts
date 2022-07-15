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



@NgModule({
  
  declarations: [
    AppComponent,
    AdminLoginComponent,
    StudentLoginComponent,
    RoomPortalComponent,
    AdminGameControlComponent,
    GameComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
