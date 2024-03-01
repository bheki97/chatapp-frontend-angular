import {Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges} from "@angular/core";
import {MsgStatusModel} from "../model/msg-status.model";


@Directive({
  selector: '[appSentMessageStatus]'
})export class SentMessageStatusDirective implements OnChanges{

  @Input('appSentMessageStatus')  status?:MsgStatusModel

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {

    if(this.status){
      if (this.status.readDate) {
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-image', 'url("assets/read-icon.svg")');

      }else if (this.status.receiveDate) {
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-image', 'url("assets/received-icon.svg")');

      }else{
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-image', 'url("assets/sent-icon.svg")');
      }



    }
  }




}
