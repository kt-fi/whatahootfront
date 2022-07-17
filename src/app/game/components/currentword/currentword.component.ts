import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/websocket.service';

@Component({
  selector: 'app-currentword',
  templateUrl: './currentword.component.html',
  styleUrls: ['./currentword.component.scss']
})
export class CurrentwordComponent implements OnInit {

  question: any;

  constructor(private webSocketService: WebsocketService) { }

  ngOnInit(): void {

    this.webSocketService.listen("Get Question").subscribe((data) => {
      console.log("got question")
      this.question = data;
    })

  }

}
