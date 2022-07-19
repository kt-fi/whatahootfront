import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandleErrorService {

  error:any = new BehaviorSubject(null);

  constructor() { }

  handleError(error:any){
    this.error.next(error)
  }

}
