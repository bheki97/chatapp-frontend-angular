import {MsgStatusModel} from "./msg-status.model";


export class MsgModel{

  msgId?:number;
  senderId?:number;
  roomId?:number;
  receiverId?:number;
  message?:string;
  status?:MsgStatusModel;
  msgIndex?:number

    constructor(msgId?:number,roomId?:number,receiverId?:number,senderId?:number,message?:string,status?:MsgStatusModel,msgIndex?:number) {
      this.msgId = msgId;
      this.roomId = roomId;
      this.senderId = senderId;
      this.message = message;
      this.receiverId =receiverId;
      this.status = status;
      this.msgIndex = msgIndex

    }

}
