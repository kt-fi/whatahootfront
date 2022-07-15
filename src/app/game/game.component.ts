import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  playerType:any = "Admin";

  seconds:any = 0;
  mins:any = 2;
  countdown?: any;

  constructor(private activeRoute:ActivatedRoute, private webSocketService: WebsocketService) { }

  ngOnInit(): void {
    this.playerName = this.activeRoute.snapshot.paramMap.get("player");
    this.roomName = this.activeRoute.snapshot.paramMap.get("roomName");
    
    this.webSocketService.emit("Get Player Type", ({roomName: this.roomName, playerName: this.playerName}))
    this.webSocketService.listen("Get Player Type").subscribe((data)=> {
     this.playerType = data;
    })

    
      this.webSocketService.listen("Start Timer").subscribe((data)=>{
        console.log("data")
        this.timer()
      })

  }

  startTimer(){
    this.webSocketService.emit("Start Timer", this.roomName)
  }

  
 timer(){

    if(this.mins >= 0){
        this.countdown =  setTimeout(()=>{
                        if(this.seconds < 10 && this.seconds > 0){
                    
                            this.seconds--;  
                        }else if(this.seconds >=10 && this.seconds < 61){
                        
                            this.seconds--;  
                        }else if(this.seconds <= 0){
                            this.mins--;
                            this.seconds = 59;      
                        }
         
      
       this.timer()
     }, 1000)
    }else{
      this.mins = "TIME"
      this.seconds = "UP"
    }
     
 }

  startGame(){
    
  }

}
