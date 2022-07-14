import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WebsocketService } from 'src/app/websocket.service';

@Component({
  selector: 'app-room-portal',
  templateUrl: './room-portal.component.html',
  styleUrls: ['./room-portal.component.scss']
})
export class RoomPortalComponent implements OnInit {

  constructor(private route: Router, private activeRoute: ActivatedRoute, private webSocketService: WebsocketService) { }
  roomName?:any;
  player?:any;
  roomMembers:any = []
  playerTag:any;


  ngOnInit(): void {
    this.roomName = this.activeRoute.snapshot.paramMap.get('roomName');
    this.player = this.activeRoute.snapshot.paramMap.get('userId');
    this.webSocketService.emit("Get Room Members", this.roomName);
    this.webSocketService.listen("Update Room Members").subscribe(data => this.roomMembers = data)
    this.webSocketService.listen("Start Game").subscribe(()=>{
      



      this.route.navigate([`game/${this.roomName}/${this.player}`])
    })

  }

}
