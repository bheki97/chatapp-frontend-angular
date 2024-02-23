import {Component, Input, OnInit} from '@angular/core';
import {ProfileColors} from "../../../../../assets/colors/profile-colors";
import {GeekRoomService} from "../../../../service/room-service/geek-room.service";
import {GeekRoomModel} from "../../../../model/room/geek-room.model";
import {GeekAuthService} from "../../../../service/auth-service/geek-auth.service";
import {format} from "date-fns";

@Component({
  selector: 'app-chat-select',
  templateUrl: './chat-select-item.component.html',
  styleUrls: ['./chat-select-item.component.css']
})
export class ChatSelectItemComponent implements OnInit{

  profileColor = ''

  @Input('room') roomIndex:number = -1
  receiverName:string ='bheki97'
  lastMsg:string = 'hello bheki'
  lastMsgSender:string = 'You'
  lastMsgTime = ''
  username = 'bheki'


  constructor(private roomService:GeekRoomService,private authService:GeekAuthService) {

  }

  returnInitial():string{

    return this.receiverName.charAt(0).toUpperCase()
  }

  changeActiveChat(){
    this.roomService.setActiveRoomIndex(this.roomIndex)
  }




  ngOnInit(): void {
    console.log('Room Id: '+this.roomIndex)

    if(this.roomIndex>=0){
      let room:GeekRoomModel = this.roomService.geekRooms.at(this.roomIndex) as GeekRoomModel
      // console.log(this.roomIndex)
      if (room.receiver){
        this.receiverName = room.receiver.username ||'unknown'

        this.profileColor = room.color
        const messages = room.messages
        const  msg = messages.at(messages.length-1)

        const lastDate = msg?.status?.sendDate

        if(lastDate){
          this.lastMsgTime = format(lastDate,'h:mm a')
        }


        this.lastMsg = msg?.message||'no msg'

        this.lastMsgSender = msg?.senderId==this.authService.authGeek?.geek?.geekId? 'You':room.receiver.username||'unknown'
      }

    }
  }

}
