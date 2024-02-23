import {GeekRoomModel} from "../../model/room/geek-room.model";
import {Subject} from "rxjs";
import {Injectable} from "@angular/core";
import {GeekModel} from "../../model/geek.model";
import {MsgModel} from "../../model/msg.model";
import {ProfileColors} from "../../../assets/colors/profile-colors";



@Injectable({
  providedIn:'root'
})export class GeekRoomService{

  geekRooms:GeekRoomModel[]=[]
  newChatEmitter:Subject<any>;
  roomLoadedEmitter:Subject<void>;
  private _activeRoomIndex?:number
  private _selectedGeekData?:{geekId:number,geekName:string,profileColor:string}
  private _activeRoomChanger:Subject<void>
  private _selectGeekChanger:Subject<void>

  constructor() {
    this.newChatEmitter = new Subject<void>();
    this.roomLoadedEmitter = new Subject<void>();
    this._activeRoomIndex=-1
    this._selectGeekChanger = new Subject<void>()
    this._activeRoomChanger = new Subject<void>();
  }


  get selectedGeekData(): { geekId: number; geekName: string; profileColor: string }|undefined {
    return this._selectedGeekData;
  }

  set selectedGeekData(value: { geekId: number; geekName: string; profileColor: string }) {
    this._selectedGeekData = value;
  }
  get selectGeekChanger(): Subject<void> {
    return this._selectGeekChanger;
  }

  set selectGeekChanger(value: Subject<void>) {
    this._selectGeekChanger = value;
  }








  selectedGeek(selected:{geekId:number,geekName:string,profileColor:string}){
    this._activeRoomIndex = -1
    this._selectedGeekData = selected
    this._selectGeekChanger.next()
  }


  get activeRoomChanger(): Subject<void> {
    return this._activeRoomChanger as Subject<void>;
  }

  set activeRoomChanger(value: Subject<void>) {
    this._activeRoomChanger = value;
  }

  get activeRoomIndex(): number {

    return this._activeRoomIndex as number;
  }

  set activeRoomIndex(value: number) {
    this._activeRoomIndex = value;


  }

  public setActiveRoomIndex(value: number){
    this._activeRoomIndex = value;


    if(this._activeRoomChanger && value>-1){
      console.log('changing chat: '+value)
      this._activeRoomChanger.next()
    }
  }




}

