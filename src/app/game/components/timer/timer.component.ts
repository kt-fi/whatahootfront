import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/websocket.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  
  seconds:any = 0;
  mins:any = 2;
  countdown?: any;
  timerActive: any;

  constructor(private webSocketService: WebsocketService) { }

  ngOnInit(): void {

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
