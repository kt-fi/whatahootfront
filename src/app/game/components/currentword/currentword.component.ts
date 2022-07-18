import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { WebsocketService } from 'src/app/websocket.service';
import { GameService } from '../../game.service';

@Component({
  selector: 'app-currentword',
  templateUrl: './currentword.component.html',
  styleUrls: ['./currentword.component.scss']
})
export class CurrentwordComponent implements OnInit, OnDestroy {


  subscription?:Subscription;
  subscriptionTwo?:Subscription;
  @Input()
  newWord?:Observable<void>;

  roomName:any;
  question: any;

  constructor(private webSocketService: WebsocketService, private gameService:GameService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.roomName = this.activeRoute.snapshot.paramMap.get("roomName")

    this.subscription = this.newWord?.subscribe(()=>{
       this.webSocketService.emit("Reset Timer", this.roomName)
       this.webSocketService.emit("Get Question", this.roomName)
    })

    this.subscriptionTwo = this.webSocketService.listen("Get Question").subscribe((data:any) => {
      this.question = data;
      // this.gameService.getQuestion(data)
    })
  }

  ngOnDestroy(): void {
      this.subscription?.unsubscribe()
      this.subscriptionTwo?.unsubscribe();
  }

}
