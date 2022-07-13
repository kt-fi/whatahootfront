import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebsocketService } from 'src/app/websocket.service';

@Component({
  selector: 'app-room-portal',
  templateUrl: './room-portal.component.html',
  styleUrls: ['./room-portal.component.scss']
})
export class RoomPortalComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private webSocketService: WebsocketService) { }
  roomName?:any;
  roomMembers:any = []
  playerTag:any;

  id:string = ""
  tag:string = ""
  ngOnInit(): void {
    this.roomName = this.activeRoute.snapshot.paramMap.get('roomName');
    this.webSocketService.emit("Get Room Members", this.roomName);
    this.webSocketService.listen("Update Room Members").subscribe(data => this.roomMembers = data)
    this.webSocketService.listen("Player Tag").subscribe(data => this.playerTag = data)
  }

  sendTag(){
    this.webSocketService.emit("Add Player Tag", {room: this.roomName, id: this.id, playerTag: this.tag})
  }
}
