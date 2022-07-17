import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { WebsocketService } from 'src/app/websocket.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  roomName:any;
  
  seconds:any = 0;
  mins:any = 2;
  countdown?: any;
  timerActive: any;



  @Input()
  timerStart?: Observable<void>

  constructor(private webSocketService: WebsocketService, private activeRoute:ActivatedRoute) { }


  ngOnInit(): void {

    this.timerStart?.subscribe(()=>{
      this.webSocketService.emit("Start Timer", this.roomName)
    })

    this.roomName = this.activeRoute.snapshot.paramMap.get("roomName");

    this.webSocketService.listen("Start Timer").subscribe((data)=>{
      console.log("data")
      this.timer()
    })

    this.webSocketService.listen("Reset Timer").subscribe(()=>{
      this.resetTimer()
    })

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

 resetTimer(){
  this.seconds = 0;
  this.mins = 2;
}




}
