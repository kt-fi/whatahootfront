import { Injectable } from '@angular/core';
import io from 'socket.io-client';
import { Observable, Subject } from 'rxjs';
import {environment} from '../environments/environment.prod'


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  rooms:any = new Subject();
  socket: any;
  uri: string = 'https://pure-wave-61675.herokuapp.com/';


  constructor() { 
    this.socket = io(this.uri);
  }

  
  
      
  listen(eventName:string){
    return new Observable((subscriber)=>{
      this.socket.on(eventName, (data:any)=>{
        console.log(data)
        subscriber.next(data)
      })
    })
  }

  emit(eventName:string, data:any){
    this.socket.emit(eventName, data);
    
  }

}
