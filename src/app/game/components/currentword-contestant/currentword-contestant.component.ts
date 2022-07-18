import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebsocketService } from 'src/app/websocket.service';
import { GameService } from '../../game.service';

@Component({
  selector: 'app-currentword-contestant',
  templateUrl: './currentword-contestant.component.html',
  styleUrls: ['./currentword-contestant.component.scss']
})
export class CurrentwordContestantComponent implements OnInit {

  player: any = ""

  question?:any;
  
  
  newWord:any;
  playerName:any;
  roomName:any;
  constructor(private gameService: GameService, private webSocketService: WebsocketService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.roomName = this.activeRoute.snapshot.paramMap.get("roomName");
    this.playerName = this.activeRoute.snapshot.paramMap.get("player");

    this.webSocketService.emit("Get Player Type", ({roomName: this.roomName, playerName: this.playerName}));

  // this.gameService.question?.subscribe((data)=> {
  //   this.question = data;
  //  })
   
  this.webSocketService.listen("Get Question").subscribe((data) => {
    this.question = data;
  })
   this.webSocketService.listen("Get Player Type").subscribe((data:any)=> {
    if(data.playerTag!= null){
      this.player = data;
    } else{
      this.player.playerTag = "admin"
    }
    })
  }

  selectAnswer(givenAnswer:any, id:any){
    let answer = this.question.correct;
    if(this.question.answers[answer] === givenAnswer){
      this.webSocketService.emit("Answered Question", {answer: "Correct", room: this.roomName, id:id})
    }else{
      this.webSocketService.emit("Answered Question", {answer: "Incorrect", room: this.roomName, id:id})
    }
}

}
