import {Injectable} from "@angular/core";
import {MsgStatusUpdateModel} from "../../model/msg-status-update.model";
import {GeekRoomService} from "../room-service/geek-room.service";
import {WebSocketService} from "../web-socket-service/web-socket.service";
import {MsgModel} from "../../model/msg.model";
import {GeekRoomModel} from "../../model/room/geek-room.model";


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


        for(let j=messages.length-1;j>-1;j--){
          msg = messages[j]

          if(msg.msgId===status.msgId){

            if(msg.status){

              if(type==='read'){
                  msg.status.readDate = status.date
              }else if(type==='received'){
                msg.status.receiveDate = status.date

              }
              console.log('index val: '+j)
              messages.splice(j,1)
              messages.splice(j,0,Object.assign({}, msg))
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
