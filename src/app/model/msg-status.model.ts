
export class MsgStatusModel{

  statusId?:number
  sendDate?:Date
  receiveDate?:Date
  readDate?:Date


  constructor(statusId?: number, sendDate?: Date, receiveDate?: Date, readDate?: Date) {
    this.statusId = statusId;
    this.sendDate = sendDate;
    this.receiveDate = receiveDate;
    this.readDate = readDate;
  }
}
