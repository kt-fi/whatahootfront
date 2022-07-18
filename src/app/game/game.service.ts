import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GameService {

  question? = new BehaviorSubject(null)

  constructor() { }

  getQuestion(word:any){
    this.question?.next(word)
  }

}
