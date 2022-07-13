import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { RoomPortalComponent } from './student/room-portal/room-portal.component';
import { StudentLoginComponent } from './student/student-login/student-login.component';

const routes: Routes = [
  { path: "admin", component: AdminLoginComponent },
  { path: "student", component: StudentLoginComponent },
  { path: "roomPortal/:roomName", component: RoomPortalComponent },
  { path: "**", component: StudentLoginComponent, pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
