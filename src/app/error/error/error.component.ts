import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/websocket.service';


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
export class ErrorComponent implements OnInit {

  error:string | any = "";
  isOpen:boolean = false
  constructor(private webSocketService: WebsocketService) { }

  ngOnInit(): void {
    this.webSocketService.listen('error').subscribe((data)=>{
      this.error = data;
      this.isOpen = true;
      setTimeout(()=>{
        this.isOpen = false;
      }, 8000)
    })
  }

}
