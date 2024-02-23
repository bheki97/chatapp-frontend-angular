import {WebSocketResponseInterface} from "../interfaces/web-socket-response.interface";
import {GeekRoomService} from "../../service/room-service/geek-room.service";


export class NewMessageModel implements WebSocketResponseInterface{

  msgId?:number
  roomId?:number
  senderId?:number
  message?:string
  sendDate?:Date

  dispatchResponse(): void {


  }

}
