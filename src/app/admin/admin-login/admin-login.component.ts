import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RoomsService } from 'src/app/socket/rooms.service';
import { WebsocketService } from 'src/app/websocket.service';



@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit, OnDestroy {

  subscription?: Subscription;

  gameName: string = "";

  constructor(private webSocketsService: WebsocketService, private activeRoute:ActivatedRoute, private route: Router) { }
  rooms:any;
  ngOnInit(): void {
    
    this.subscription = this.webSocketsService.listen('getRooms').subscribe((data)=>{
      this.rooms = data;
    })
  }



  submit(formRef: NgForm){
    let gameName = formRef.value.gameName;
    
    this.gameName = gameName; 
    this.webSocketsService.emit("newRoom", {roomName: gameName, students: []});
    this.webSocketsService.emit("Join Room", {roomName: gameName, student: "admin", playerTag: "admin"})
    this.route.navigate(["adminPortal/" + gameName])

  }

  ngOnDestroy(): void {
      this.subscription?.unsubscribe();
  }

}
