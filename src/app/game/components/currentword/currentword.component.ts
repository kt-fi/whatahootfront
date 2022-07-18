import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { WebsocketService } from 'src/app/websocket.service';
import { GameService } from '../../game.service';

@Component({
  selector: 'app-currentword',
  templateUrl: './currentword.component.html',
  styleUrls: ['./currentword.component.scss']
})
export class CurrentwordComponent implements OnInit {

  @Input()
  newWord?:Observable<void>;

  roomName:any;
  question: any;

  constructor(private webSocketService: WebsocketService, private gameService:GameService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.roomName = this.activeRoute.snapshot.paramMap.get("roomName")

    this.newWord?.subscribe(()=>{
       this.webSocketService.emit("Reset Timer", this.roomName)
       this.webSocketService.emit("Get Question", this.roomName)
    })

    this.webSocketService.listen("Get Question").subscribe((data) => {
      this.question = data;
      this.gameService.getQuestion(data)
    })

  }

}
