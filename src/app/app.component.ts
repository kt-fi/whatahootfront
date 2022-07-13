import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'schoolgame';


  constructor(private webSocketsService: WebsocketService){}

  ngOnInit(){
  
    this.webSocketsService.emit('test event', "hello")
    this.webSocketsService.listen('getRooms').subscribe((data)=>{

    })
  }

}
