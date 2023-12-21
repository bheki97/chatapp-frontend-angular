import {Component, OnInit} from '@angular/core';
import {GeekRoomModel} from "../../../model/room/geek-room.model";
import {GeekRoomService} from "../../../service/room-service/geek-room.service";

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit{

   rooms:number[] =[]

  constructor(private roomService:GeekRoomService) {
    this.rooms = roomService.geekRooms.map((v,i,a)=>{
      return i
    } )

  }

  ngOnInit(): void {
     // console.log(this.rooms)

  }


  protected readonly console = console;
}
