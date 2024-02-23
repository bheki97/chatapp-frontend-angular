


export class MsgStatusUpdateModel {
  roomId?:number
  msgId?:number
  date?:Date
  statusId?:number


  constructor(roomId?: number, msgId?: number, date?: Date,statusId?:number) {
    this.roomId = roomId;
    this.msgId = msgId;
    this.date = date;
    this.statusId = statusId
  }
}
