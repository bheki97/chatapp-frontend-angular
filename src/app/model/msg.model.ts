


export class MsgModel{

  private _msgId?:number;
  private _senderId?:string;
  private _roomId?:number;
  private _receiverId?:string;
  private _message?:string;
  private _sendDate?:Date;
    constructor(options: {msgId?:number,roomId?:number,receiverId?:string,senderId?:string,message?:string,sendDate?:Date}={}
    ) {
      this._msgId = options.msgId;
      this._roomId = options.roomId;
      this._senderId = options.senderId;
      this._message = options.message;
      this._sendDate = options.sendDate;

    }


  get receiverId(): string {
    return this._receiverId as string;
  }

  set receiverId(value: string) {
    this._receiverId = value;
  }

  get msgId(): number {
    return this._msgId as number;
  }

  set msgId(value: number) {
    this._msgId = value;
  }

  get roomId(): number {
    return this._roomId as number;
  }

  set roomId(value: number) {
    this._roomId = value;
  }

  get senderId(): string {
    return this._senderId as string;
  }

  set senderId(value: string) {
    this._senderId = value;
  }

  get message(): string {
    return this._message as string;
  }

  set message(value: string) {
    this._message = value;
  }

  get sendDate(): Date {
    return this._sendDate as Date;
  }

  set sendDate(value: Date) {
    this._sendDate = value;
  }
}
