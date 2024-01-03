import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {GeekRoomService} from "../../../../service/room-service/geek-room.service";
import {GeekRoomModel} from "../../../../model/room/geek-room.model";
import {Subscription} from "rxjs";
import {ProfileColors} from "../../../../../assets/colors/profile-colors";

@Component({
  selector: 'app-window-header',
  templateUrl: './window-header.component.html',
  styleUrls: ['./window-header.component.css']
})
export class WindowHeaderComponent implements OnInit,OnDestroy{

  activeChatGeek:string =''
  activeChatSubscription? :Subscription
  activeNewChatSubscription? :Subscription
  profileColor = ''


  constructor(private roomService:GeekRoomService) {
    const room = roomService.geekRooms.at(roomService.activeRoomIndex)
    this.activeChatGeek = room?.receiver.username||''
    this.profileColor = room?.color || ''
  }

  ngOnInit(): void {
    this.activeChatSubscription = this.roomService.activeRoomChanger.subscribe(() =>{
      const room = this.roomService.geekRooms.at(this.roomService.activeRoomIndex)
      this.activeChatGeek = room?.receiver.username||''
      this.profileColor = room?.color || ''
      console.log(this.profileColor)
    })

    this.activeNewChatSubscription = this.roomService.selectGeekChanger.subscribe(geek=>{
      this.activeChatGeek = geek.geekName
      this.profileColor = geek.profileColor
    })


  }

  returnInitial():string{

    return this.activeChatGeek.charAt(0).toUpperCase()
  }


  ngOnDestroy(): void {
    if(this.activeChatSubscription){
      this.activeChatSubscription.unsubscribe()
    }

  }




}
