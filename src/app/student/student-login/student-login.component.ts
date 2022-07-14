import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { WebsocketService } from 'src/app/websocket.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.scss']
})
export class StudentLoginComponent implements OnInit, OnDestroy {

  constructor(private webSocketsService : WebsocketService, private route: Router, private activeRoute: ActivatedRoute) {

   }

  name?:any;
  rooms:any;
  subscription?:Subscription;
  ngOnInit(): void {
    this.subscription = this.webSocketsService.listen('getRooms').subscribe((data)=>{
      this.rooms = data;
    })
  
  }


  roomSelected(room:string){
    console.log(room)
    this.webSocketsService.emit("Join Room", {roomName:room, student:this.name, userType: "student"});
    // let currentRoute = this.activeRoute.snapshot.routeConfig?.path;
    this.route.navigate(["roomPortal/" + room + "/" + this.name])
  }

ngOnDestroy(): void {
    this.subscription?.unsubscribe
}

}
