import {Injectable} from "@angular/core";
import {GeekRoomService} from "../room-service/geek-room.service";
import {MsgModel} from "../../model/msg.model";
import {WebSocketService} from "../web-socket-service/web-socket.service";
import {MsgStatusUpdateModel} from "../../model/msg-status-update.model";
import {MsgStatusUpdaterService} from "../msg-status-updater-service/msg-status-updater.service";


@Injectable({
  providedIn:'root'
})export class NewMsgHandlerService{

  constructor(private roomService:GeekRoomService,private  msgUpdater:MsgStatusUpdaterService) {

  }


  handleNewMessage(msg:MsgModel){

    this.msgUpdater.sendUpdate('received',msg)



    const rooms = this.roomService.geekRooms
    let  room;
    for(let i=0;i<rooms.length;i++){
      room = rooms[i]
      if(room.roomId===msg.roomId){
        room.messages.push(msg)

        if(i===this.roomService.activeRoomIndex){
          this.msgUpdater.sendUpdate('read',msg)
        }

      }


    }

  }

  updateOwnMessage(msg:MsgModel){
    const rooms = this.roomService.geekRooms
    let  room;
    for(let i=0;i<rooms.length;i++){
      room = rooms[i]
      if(room.roomId===msg.roomId){
        const index = msg.msgIndex
        if(index){

          room.messages[index] = msg
          console.log(room.messages[index])
        }

      }


    }
  }

}
