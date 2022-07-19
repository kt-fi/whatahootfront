import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HandleErrorService } from 'src/app/error/handle-error.service';
import { WebsocketService } from 'src/app/websocket.service';

@Component({
  selector: 'app-admin-game-control',
  templateUrl: './admin-game-control.component.html',
  styleUrls: ['./admin-game-control.component.scss']
})
export class AdminGameControlComponent implements OnInit, OnDestroy {

  subscriptions?:Subscription[] = [];

  roomName?:any;
  roomMembers?:any = []
  id:string = ""
  tag:string = ""
  
  constructor(private activeRoute: ActivatedRoute,
      private route: Router,
      private webSocketService: WebsocketService,
      ) { }

  ngOnInit(): void {
    
    this.roomName = this.activeRoute.snapshot.paramMap.get('roomName')
    this.webSocketService.emit("Get Room Members", this.roomName)
    
    this.subscriptions?.push(
      this.webSocketService.listen("Update Room Members").subscribe((data:any)=>{

        if(this.roomName == data.roomName){
          this.roomMembers = data.roomMembers;
        }else{
          return;
        }
    }),
      this.webSocketService.listen("Start Game").subscribe((data)=>{
      this.route.navigate([`game/${this.roomName}/admin`])
    })
    )
  }

  sendTag(){
    this.webSocketService.emit("Add Player Tag", {room: this.roomName, id: this.id, playerTag: this.tag})
  }

  startGame(){
    this.webSocketService.emit("Start Game", this.roomName)
  }

  setPlayer(id:any, tag:any){
    this.id = id;
    this.tag = tag;
    this.sendTag()
  }

  ngOnDestroy(): void {
    this.subscriptions?.forEach((subscription:Subscription)=>{
      subscription.unsubscribe()
    })
}
}
