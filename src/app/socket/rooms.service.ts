import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment }  from '../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private http: HttpClient) { }

  createRoom(roomName:string):any {
    console.log(roomName)
    return this.http.post('https://pure-wave-61675.herokuapp.com/', {"room": roomName})
  }

}
