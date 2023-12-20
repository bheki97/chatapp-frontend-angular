import {Component, OnDestroy, OnInit} from '@angular/core';
import {GeekRoomService} from "../../../../service/room-service/geek-room.service";
import {GeekRoomModel} from "../../../../model/room/geek-room.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-window-header',
  templateUrl: './window-header.component.html',
  styleUrls: ['./window-header.component.css']
})
export class WindowHeaderComponent implements OnInit,OnDestroy{

  activeChatGeek:string =''
  activeChatSubscription? :Subscription


  constructor(private roomService:GeekRoomService) {
    this.activeChatGeek = roomService.geekRooms.at(roomService.activeRoomId)?.receiver.username||''

  }

  ngOnInit(): void {
    this.activeChatSubscription = this.roomService.activeRoomChanger.subscribe(() =>{
      this.activeChatGeek = this.roomService.geekRooms.at(this.roomService.activeRoomId)?.receiver.username||''
    })


  }

  ngOnDestroy(): void {
    if(this.activeChatSubscription){
      this.activeChatSubscription.unsubscribe()
    }

  }




}
