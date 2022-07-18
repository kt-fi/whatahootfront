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
      this.player.playerTag = "admin"
    }
    })

      

      this.webSocketService.emit("Get Room Members", this.roomName)
      this.webSocketService.listen("Update Room Members").subscribe((data)=>{

        this.roomMembers = data;
      })

      this.webSocketService.listen("Get Question").subscribe((data) => {
        console.log("got question")
        this.question = data;
      })

  
      this.webSocketService.listen("Update Scores").subscribe((data)=> {
        this.roomMembers = data;
      })

  }

  // startTimer(){
  //   this.webSocketService.emit("Start Timer", this.roomName)
  // }

  startTimer(){
    this.timerSubject.next();
  }

  

nextQuestion(){
  this.webSocketService.emit("Reset Timer", this.roomName)
  this.webSocketService.emit("Get Question", this.roomName)
}


selectAnswer(givenAnswer:any, id:any){
  let answer = this.question.correct;
  if(this.question.answers[answer] === givenAnswer){
    this.webSocketService.emit("Answered Question", {answer: "Correct", room: this.roomName, id:id})
  }else{
    this.webSocketService.emit("Answered Question", {answer: "Incorrect", room: this.roomName, id:id})
  }
}

updateScores(){

}
 


}
