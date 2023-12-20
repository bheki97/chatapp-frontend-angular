import {Component, Input, OnInit} from '@angular/core';
import {ProfileColors} from "../../../../../assets/colors/profile-colors";
import {GeekRoomService} from "../../../../service/room-service/geek-room.service";
import {GeekRoomModel} from "../../../../model/room/geek-room.model";

@Component({
  selector: 'app-chat-select',
  templateUrl: './chat-select-item.component.html',
  styleUrls: ['./chat-select-item.component.css']
})
export class ChatSelectItemComponent implements OnInit{

  profileColor = '#'+ProfileColors.at(Math.floor(Math.random() * ProfileColors.length))

  @Input('room') roomIndex:number = -1
  receiverName:string ='bheki97'
  lastMsg:string = 'hello bheki'
  lastMsgSender:string = 'You'
  username = 'bheki'


  constructor(private roomService:GeekRoomService) {

  }

  returnInitial():string{

    return this.receiverName.charAt(0).toUpperCase()
  }




  ngOnInit(): void {
    if(this.roomIndex>=0){
      let room:GeekRoomModel = this.roomService.geekRooms.at(this.roomIndex) as GeekRoomModel
      // console.log(this.roomIndex)
      if (room.receiver){
        this.receiverName = room.receiver.username||'unknown'
        const messages = room.messages
        this.lastMsg = messages.at(messages.length-1)?.message||'no msg'
        this.lastMsgSender = messages.at(messages.length-1)?.senderId||'unknown'
        this.lastMsgSender = this.lastMsgSender===this.username?'You':this.lastMsgSender
      }

    }
  }

}
