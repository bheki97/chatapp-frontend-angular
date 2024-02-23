

export class ChatMsgModel{

  private _msgId?:number;
  private _message?:string;
  private _senderId?:string;
  private _sendDate?:Date;


  constructor(options: {senderId?:string,msgId?:number,message?:string,sendDate?:Date}={}
  ) {
    this._msgId = options.msgId;
    this._message = options.message;
    this._senderId= options.senderId;
    this._sendDate = options.sendDate;

  }


  get senderId(): string {
    return this._senderId as string;
  }

  set senderId(value: string) {
    this._senderId = value;
  }

  get msgId(): number {
    return this._msgId as number;
  }

  set msgId(value: number) {
    this._msgId = value;
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
