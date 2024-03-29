

export class SendMsgModel{


  private _senderId?:string
  private _receiverId?:string
  private _message?:string
  messageIndex?:number


  constructor(senderId?: string, receiverId?: string, message?: string,messageIndex?:number) {
    this._senderId = senderId;
    this._receiverId = receiverId;
    this._message = message;
    this.messageIndex = messageIndex
  }


  get senderId(): string {
    return this._senderId as string;
  }

  set senderId(value: string) {
    this._senderId = value;
  }

  get receiverId(): string {
    return this._receiverId as string;
  }

  set receiverId(value: string) {
    this._receiverId = value;
  }

  get message(): string {
    return this._message as string;
  }

  set message(value: string) {
    this._message = value;
  }
}
