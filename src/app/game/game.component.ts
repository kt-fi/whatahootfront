import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebsocketService } from '../websocket.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {


  playerName:any;
  roomName:any;
  playerType:any = "Admin"
  constructor(private activeRoute:ActivatedRoute, private webSocketService: WebsocketService) { }

  ngOnInit(): void {
    this.playerName = this.activeRoute.snapshot.paramMap.get("player");
    this.roomName = this.activeRoute.snapshot.paramMap.get("roomName");
    
    this.webSocketService.emit("Get Player Type", ({roomName: this.roomName, playerName: this.playerName}))
    this.webSocketService.listen("Get Player Type").subscribe((data)=> {
     this.playerType = data;
    })
  }

}
