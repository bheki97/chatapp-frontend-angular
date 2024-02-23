import {Component, OnDestroy, OnInit} from '@angular/core';
import {GeekRoomService} from "../../../../service/room-service/geek-room.service";
import {Subscription} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MessageSenderService} from "../../../../service/message-sender-service/message-sender.service";

@Component({
  selector: 'app-window-base',
  templateUrl: './window-base.component.html',
  styleUrls: ['./window-base.component.css']
})
export class WindowBaseComponent implements OnInit,OnDestroy{

  activeChatSubscription?:Subscription
  activeRoomIndex:number
  roomId?:number
  geekId:number

  sendMessageForm:FormGroup

  autoResize(event: any): void {
    const textarea = event.target;
    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight) + 'px';
  }

  constructor(private roomService:GeekRoomService,private MsgSenderService:MessageSenderService) {
    this.sendMessageForm = new FormGroup({
      'message' :new FormControl(null,Validators.required)
    })

    this.activeRoomIndex = roomService.activeRoomIndex
    if(this.activeRoomIndex>-1){
      this.roomId = this.roomService.geekRooms.at(this.activeRoomIndex)?.roomId
    }

    this.geekId = this.roomService.geekRooms.at(this.activeRoomIndex)?.receiver?.geekId || roomService.selectedGeekData?.geekId ||-1
    console.log('from chat base: '+this.activeRoomIndex)
  }

  ngOnInit(): void {
      this.activeChatSubscription = this.roomService.activeRoomChanger.subscribe(()=>{
        this.activeRoomIndex = this.roomService.activeRoomIndex
      })


  }

  ngOnDestroy(): void {
    if(this.activeChatSubscription){
      this.activeChatSubscription.unsubscribe()
    }
  }


  sendMessage() {

    if(this.sendMessageForm.valid && this.activeRoomIndex>-1){
      const msg = this.sendMessageForm.get('message')?.value
      console.log(
        `Room id: ${this.activeRoomIndex}, message${msg}`)


      this.MsgSenderService.sendMessage(msg,this.activeRoomIndex)
      this.activeRoomIndex=0
    }

  }
}
