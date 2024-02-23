import {inject, Injectable} from "@angular/core";
import {GeekRoomService} from "../room-service/geek-room.service";


//returns chatroom id if the searched geek has conversation with the currently logged in
@Injectable({
  providedIn:'root'
})export class ChatRoomExistsSearcherService {

  constructor(private roomService:GeekRoomService) {

  }

   searchChatRoomExists = (geeId:number):number =>{

    const  rooms = this.roomService.geekRooms

    for(let i=0;i<rooms.length;i++){
      const room = rooms[i]

      if(room.receiver.geekId ===geeId){
        return i
      }
    }

    return -1
  }
}

