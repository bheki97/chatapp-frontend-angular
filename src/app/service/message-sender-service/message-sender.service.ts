import {Injectable} from "@angular/core";
import {GeekRoomService} from "../room-service/geek-room.service";
import {MsgModel} from "../../model/msg.model";
import {GeekAuthService} from "../auth-service/geek-auth.service";
import {RoomCreatorService} from "../room-creator-service/room-creator.service";
import {WebSocketService} from "../web-socket-service/web-socket.service";
import {MsgStatusModel} from "../../model/msg-status.model";
import {GeekRoomModel} from "../../model/room/geek-room.model";


@Injectable({
  providedIn:'root'
})export class MessageSenderService{


  constructor(private roomService:GeekRoomService,
              private authService:GeekAuthService,
              private roomCreatorService:RoomCreatorService,
              private socketService:WebSocketService) {
  }


  sendMessage(msg:string,roomIndex:number){

    const  msgModel = new MsgModel()
    msgModel.senderId = this.authService.authGeek?.geek?.geekId||-1
    msgModel.message = msg
    msgModel.receiverId = this.roomService.selectedGeekData?.geekId||-1

    const statusModel = new MsgStatusModel()
    statusModel.sendDate = new Date()

    msgModel.status = statusModel


    if(roomIndex>-1){
      const rooms = this.roomService.geekRooms

        const  room = rooms.at(roomIndex)
        msgModel.roomId = room?.roomId
        msgModel.receiverId = room?.receiver.geekId

        if(roomIndex!==0){
          rooms.splice(roomIndex,1)
          rooms.splice(0,0,room||new GeekRoomModel())
          this.roomService.activeRoomIndex=0
        }
        console.log(msgModel)
        room?.messages.push(msgModel)
        const length = room?.messages.length

        if(length){
          msgModel.msgIndex = length-1
        }


    }else{
      const roomId = this.createRoom()

      if(roomId && roomId>0){
        msgModel.roomId = roomId
      }else{
        return
      }

    }

    this.socketService.stompClient.send('/app/chat/one2one',{},JSON.stringify(msgModel))


  }

  private createRoom():number|undefined {
    this.roomCreatorService.createNewRoom().subscribe(data =>{
      this.roomService.geekRooms.push(data)
      this.roomService.newChatEmitter.next()
      this.roomService.setActiveRoomIndex(this.roomService.geekRooms.indexOf(data))

    }, error => {
      return undefined
    })

    return this.roomService.activeRoomIndex
  }


}
