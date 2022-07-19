import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { WebsocketService } from '../websocket.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {


  // STATIC QWUESTION

  words:string[] = ["happy", "sad", "tired", "energentic"]

  playerName:any;
  roomName:any;
  player:any = "";

  roomMembers: any;


  timerSubject:Subject<void> = new Subject()
  wordSubject:Subject<void> = new Subject();

  seconds:any = 0;
  mins:any = 2;
  countdown?: any;
  timerActive: any;

  question: any;

  constructor(private activeRoute:ActivatedRoute, private webSocketService: WebsocketService) { }

  ngOnInit(): void {
    
    this.playerName = this.activeRoute.snapshot.paramMap.get("player");
    this.roomName = this.activeRoute.snapshot.paramMap.get("roomName");
    
    this.webSocketService.emit("Get Player Type", ({roomName: this.roomName, playerName: this.playerName}))
    this.webSocketService.listen("Get Player Type").subscribe((data:any)=> {
    if(data.playerTag!= null){
      this.player = data;
    } else{
      null
    }
    })

      this.webSocketService.emit("Get Room Members", this.roomName)
      this.webSocketService.listen("Update Room Members").subscribe((data:any)=>{
        if(this.roomName == data.roomName){
          this.roomMembers = data.roomMembers;
        }else{
          return;
        }
        
      })

      this.webSocketService.listen("Get Question").subscribe((data:any) => {
        if(this.roomName == data.roomName){
          this.question = data.question;
        }else{
          return
        }
      })

      this.webSocketService.listen("Update Scores").subscribe((data:any)=> {
        if(this.roomName == data.roomName){
          this.roomMembers = data.students;
        }else{
          return
        }
        
      })
  }

  startTimer(){
    this.timerSubject.next();
  }

nextQuestion(){
  this.wordSubject.next();
}


}
