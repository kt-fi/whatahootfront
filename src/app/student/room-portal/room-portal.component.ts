import { ThrowStmt } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { WebsocketService } from 'src/app/websocket.service';

@Component({
  selector: 'app-room-portal',
  templateUrl: './room-portal.component.html',
  styleUrls: ['./room-portal.component.scss']
})
export class RoomPortalComponent implements OnInit, OnDestroy {

subscription?:Subscription;
subscriptionTwo?:Subscription;

  constructor(private route: Router, private activeRoute: ActivatedRoute, private webSocketService: WebsocketService) { }
  roomName?:any;
  player?:any;
  roomMembers:any = []
  playerTag:any;


  ngOnInit(): void {
    this.roomName = this.activeRoute.snapshot.paramMap.get('roomName');
    this.player = this.activeRoute.snapshot.paramMap.get('userId');
    this.webSocketService.emit("Get Room Members", this.roomName);

 
     this.subscription = this.webSocketService.listen("Update Room Members").subscribe((data:any) => {
      if(this.roomName == data.roomName){
        this.roomMembers = data.roomMembers;
      }else{
        return;
      }
      
    }
      )
    this.subscriptionTwo = this.webSocketService.listen("Start Game").subscribe(()=>{
      this.route.navigate([`game/${this.roomName}/${this.player}`])
    })
    
   

  }

ngOnDestroy(): void {
    this.subscription?.unsubscribe()
    this.subscriptionTwo?.unsubscribe()
}
  
}
