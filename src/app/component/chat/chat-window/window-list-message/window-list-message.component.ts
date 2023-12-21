import {Component, OnDestroy, OnInit} from '@angular/core';
import { format } from 'date-fns';
import {MsgModel} from "../../../../model/msg.model";
import {GeekRoomService} from "../../../../service/room-service/geek-room.service";
import {GeekRoomModel} from "../../../../model/room/geek-room.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-window-list-message',
  templateUrl: './window-list-message.component.html',
  styleUrls: ['./window-list-message.component.css']
})
export class WindowListMessageComponent implements OnInit,OnDestroy{

    messages:MsgModel[] = []
    activeChatGeek = ''
    activeChatSubscription? :Subscription

  constructor(private roomService:GeekRoomService) {
    const room = roomService.geekRooms.at(roomService.activeRoomIndex) as GeekRoomModel;
    this.activeChatGeek = room.receiver.username;
    this.messages = room.messages


  }

   formatTime(date: Date): string {
    return format(date,'h:mm a')
  }

  ngOnDestroy(): void {
    if(this.activeChatSubscription){
      this.activeChatSubscription.unsubscribe()
    }
  }

  ngOnInit(): void {

    this.activeChatSubscription = this.roomService.activeRoomChanger.subscribe(() =>{
      const room = this.roomService.geekRooms.at(this.roomService.activeRoomIndex) as GeekRoomModel;
      this.activeChatGeek = room.receiver.username;
      this.messages = room.messages
    })

  }

}
