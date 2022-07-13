import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RoomsService } from 'src/app/socket/rooms.service';
import { WebsocketService } from 'src/app/websocket.service';



@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  gameName: string = "";

  constructor(private webSocketsService: WebsocketService) { }
  rooms:any;
  ngOnInit(): void {
    this.webSocketsService.listen('getRooms').subscribe((data)=>{
      this.rooms = data;
    })
  }



  submit(formRef: NgForm){
    let gameName = formRef.value.gameName;
    
    this.gameName = gameName; 
    this.webSocketsService.emit("newRoom", {roomName: gameName, students: []});
  }

}
