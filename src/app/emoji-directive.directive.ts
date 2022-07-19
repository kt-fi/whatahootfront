import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[emoji]'
})
export class EmojiDirectiveDirective implements OnInit {

  constructor(private el: ElementRef) { }

  @Input('emoji') emoji?:string;



  ngOnInit(){
    this.el.nativeElement.textContent += this.emoji;
  }
}
