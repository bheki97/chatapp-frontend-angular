import {Component, OnDestroy, OnInit} from '@angular/core';
import {GeekRoomService} from "../../../service/room-service/geek-room.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit,OnDestroy{

  activeRoomId = -2
  activeRoomChangerListener?:Subscription
  activeNewRoomChangerListener?:Subscription

  constructor(private roomService:GeekRoomService) {

  }

  ngOnInit(): void {
    this.activeRoomChangerListener = this.roomService.activeRoomChanger.subscribe(()=>{
      this.activeRoomId = this.roomService.activeRoomIndex
      console.log('new room: '+this.activeRoomId )

    })

    this.activeNewRoomChangerListener =  this.roomService.selectGeekChanger.subscribe(()=>this.activeRoomId=this.roomService.activeRoomIndex)
  }

  ngOnDestroy(): void {
    if(this.activeRoomChangerListener){
      this.activeRoomChangerListener.unsubscribe()
    }
  }




}
