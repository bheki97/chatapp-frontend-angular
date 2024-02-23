import {Component, OnDestroy, OnInit} from '@angular/core';
import { format } from 'date-fns';
import {MsgModel} from "../../../../model/msg.model";
import {GeekRoomService} from "../../../../service/room-service/geek-room.service";
import {GeekRoomModel} from "../../../../model/room/geek-room.model";
import {Subscription} from "rxjs";
import {MsgStatusModel} from "../../../../model/msg-status.model";

@Component({
  selector: 'app-window-list-message',
  templateUrl: './window-list-message.component.html',
  styleUrls: ['./window-list-message.component.css']
})
export class WindowListMessageComponent implements OnInit,OnDestroy{

    messages:MsgModel[] = []
    activeChatGeekId:number = -1
    activeChatSubscription? :Subscription
    activeNewChatSubscription? :Subscription


  constructor(private roomService:GeekRoomService) {



  }

   formatTime(date: Date|undefined): string {

    return date?format(date,'h:mm a'):'unknown'
  }

  ngOnDestroy(): void {
      if(this.roomService.activeRoomIndex>0){
        const room = this.roomService.geekRooms.at(this.roomService.activeRoomIndex) as GeekRoomModel;
        if(room.receiver.username)this.activeChatGeekId =room.receiver.geekId ||-1

        this.messages = room.messages
      }


    if(this.activeChatSubscription){
      this.activeChatSubscription.unsubscribe()
    }
  }

  ngOnInit(): void {

      this.activeNewChatSubscription = this.roomService.selectGeekChanger.subscribe(geek=>{
        this.messages = []
      })

    this.activeChatSubscription = this.roomService.activeRoomChanger.subscribe(() =>{
      const room = this.roomService.geekRooms.at(this.roomService.activeRoomIndex) as GeekRoomModel;
      if(room?.receiver?.username) this.activeChatGeekId =room.receiver.geekId ||-1

      this.messages = room?.messages||[]


    })


  }

    getStatus(status: MsgStatusModel | undefined):number {

        if(status && status.receiveDate){
            if(status.readDate){
                return 3
            }
            return 2

        }


        return 1
    }
}
