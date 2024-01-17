import {Component, OnDestroy, OnInit} from '@angular/core';
import {ModalEventService} from "../../service/modal-service/modal-event.service";
import {Subscription} from "rxjs";
import {WebSocketService} from "../../service/web-socket-service/web-socket.service";
import {GeekAuthService} from "../../service/auth-service/geek-auth.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit,OnDestroy{

  modal=-1
  modalSubscribtion?:Subscription
  subscription?: Subscription



  constructor(private modalService:ModalEventService,private webSocketService:WebSocketService,private authService:GeekAuthService) {

  }

  ngOnDestroy(): void {
    if(this.modalSubscribtion){
      this.modalSubscribtion.unsubscribe()

    }

    if(this.subscription){
      this.subscription.unsubscribe()

    }

    this.webSocketService.disconnect()

  }

  ngOnInit(): void {
    this.modalSubscribtion = this.modalService.firePopUp.subscribe(n =>{
      this.modal=n
    })

    this.webSocketService.connect(`/topic/messages/${this.authService.authGeek?.geek?.geekId}`, (msg =>{

      console.log(msg)
    }))

  }

}
