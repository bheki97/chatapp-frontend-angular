import {MsgModel} from "../msg.model";
import {GeekModel} from "../geek.model";
import {ProfileColors} from "../../../assets/colors/profile-colors";


export class GeekRoomModel{
  roomId:number=-1
  color:string
  messages:MsgModel[] = []
  receiver:GeekModel = new GeekModel()


  constructor(roomId?: number, messages?: MsgModel[], receiver?: GeekModel) {
    this.roomId = roomId ||-1;
    this.messages = messages ||[];
    this.receiver = receiver ||new GeekModel();
    this.color = '#'+ProfileColors.at(Math.floor(Math.random() * ProfileColors.length))
  }



}
