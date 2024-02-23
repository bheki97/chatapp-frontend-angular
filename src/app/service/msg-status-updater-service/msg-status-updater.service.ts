import {Injectable} from "@angular/core";
import {MsgStatusUpdateModel} from "../../model/msg-status-update.model";
import {GeekRoomService} from "../room-service/geek-room.service";
import {WebSocketService} from "../web-socket-service/web-socket.service";
import {MsgModel} from "../../model/msg.model";


@Injectable({
  providedIn:'root'
})export class MsgStatusUpdaterService{

  constructor(private roomService:GeekRoomService,private socketService:WebSocketService) {
  }

  updateMsg(type:string,status:MsgStatusUpdateModel){
    const rooms = this.roomService.geekRooms
    let room,msg;

    for(let i=0;i<rooms.length;i++){
      room = rooms[i]

      if(room.roomId===status.roomId){
        const messages = room.messages
        for(let j=0;j<messages.length;j++){
          msg = messages[i]
          if(msg.msgId===status.msgId){

            if(msg.status){

              if(type==='read'){
                  msg.status.readDate = status.date
                  break
              }
              if(type==='received'){
                msg.status.receiveDate = status.date
              }
              break


            }


          }

        }

        break
      }


    }




  }

  sendUpdate(type:string,msg:MsgModel){

    const msgUpdate = new MsgStatusUpdateModel()
    msgUpdate.msgId = msg.msgId
    msgUpdate.statusId = msg.status?.statusId
    msgUpdate.roomId = msg.roomId
    msgUpdate.date = new Date()

    console.log(`Message Update: ${type},${msgUpdate}`)

    this.socketService.stompClient.send(`/app/chat/msg-update/${type}/${msg.senderId}`,{},JSON.stringify(msgUpdate))

  }


}
