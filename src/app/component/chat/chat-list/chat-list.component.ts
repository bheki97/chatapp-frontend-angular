import {Component, OnInit} from '@angular/core';
import {GeekRoomModel} from "../../../model/room/geek-room.model";
import {GeekRoomService} from "../../../service/room-service/geek-room.service";

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit{

   rooms:GeekRoomModel[] =[]

  constructor(private roomService:GeekRoomService) {


  }

  ngOnInit(): void {
    this.roomService.roomLoadedEmitter.subscribe( ()=>{
      this.rooms = this.roomService.geekRooms
      console.log(this.rooms)
    })

  }

}
