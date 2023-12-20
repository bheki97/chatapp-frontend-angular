import {MsgModel} from "../msg.model";
import {GeekModel} from "../geek.model";


export class GeekRoomModel{
  private _roomId:number=-1
  private _messages:MsgModel[] = []
  private _receiver:GeekModel = new GeekModel()


  constructor(roomId?: number, messages?: MsgModel[], receiver?: GeekModel) {
    this._roomId = roomId ||-1;
    this._messages = messages ||[];
    this._receiver = receiver ||new GeekModel();
  }


  get roomId(): number {
    return this._roomId as number;
  }

  set roomId(value: number) {
    this._roomId = value;
  }

  get messages(): MsgModel[] {
    return this._messages as MsgModel[];
  }

  set messages(value: MsgModel[]) {
    this._messages = value;
  }

  get receiver(): GeekModel {
    return this._receiver as GeekModel;
  }

  set receiver(value: GeekModel) {
    this._receiver = value;
  }
}
