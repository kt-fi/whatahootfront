import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGameControlComponent } from './admin/admin-game-control/admin-game-control.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { GameComponent } from './game/game.component';
import { RoomPortalComponent } from './student/room-portal/room-portal.component';
import { StudentLoginComponent } from './student/student-login/student-login.component';

const routes: Routes = [
  { path: "admin", component: AdminLoginComponent },
  { path: "student", component: StudentLoginComponent },
  { path: "roomPortal/:roomName/:userId", component: RoomPortalComponent },
  { path: "adminPortal/:roomName", component: AdminGameControlComponent},
  { path: "game/:roomName/:player", component: GameComponent },
  { path: "**", component: StudentLoginComponent, pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
