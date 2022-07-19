import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WebsocketService } from 'src/app/websocket.service';
import { HandleErrorService } from '../handle-error.service';


@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
  animations: [
    trigger('openClose', [
      state('closed', style({
      top: '-80px'
    })),
      state('open', style({
      top: '0',
    }))
    ,
    transition('open => closed', [
      animate
      ('0.5s')
    ]),
    transition('closed => open', [
      animate
      ('0.5s')
  ])
  ])
  ]
})
export class ErrorComponent implements OnInit, OnDestroy {

  subscription?:Subscription;
  subscriptionTwo?:Subscription;

  @Input()
  error:string | any = "";
  isOpen:boolean = false
  constructor(private webSocketService: WebsocketService, private handleError:HandleErrorService) { }

  ngOnInit(): void {

   this.subscription = this.webSocketService.listen('error').subscribe((data)=>{
      this.error = data;
      this.isOpen = true;
      setTimeout(()=>{
        this.isOpen = false;
      }, 8000)
    })
    this.subscriptionTwo = this.handleError.error.subscribe((error:any) => this.error = error)
  }

  ngOnDestroy(): void {
      this.subscription?.unsubscribe();
      this.subscriptionTwo?.unsubscribe();
  }
}
