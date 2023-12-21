import {Component, OnDestroy, OnInit} from '@angular/core';
import {ModalEventService} from "../../service/modal-service/modal-event.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit,OnDestroy{

  modal=-1
  modalSubscribtion?:Subscription



  constructor(private modalService:ModalEventService) {

  }

  ngOnDestroy(): void {
    if(this.modalSubscribtion){
      this.modalSubscribtion.unsubscribe()
    }
  }

  ngOnInit(): void {
    this.modalSubscribtion = this.modalService.firePopUp.subscribe(n =>{this.modal=n})
  }

}
