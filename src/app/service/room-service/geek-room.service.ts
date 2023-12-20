import {GeekRoomModel} from "../../model/room/geek-room.model";
import {Subject} from "rxjs";
import {Injectable} from "@angular/core";
import {ChatMsgModel} from "../../model/chat-msg.model";
import {GeekModel} from "../../model/geek.model";
import {MsgModel} from "../../model/msg.model";


@Injectable({
  providedIn:'root'
})export class GeekRoomService{

  private _geekRooms?:GeekRoomModel[]
  private _activeRoomId?:number
  private _activeRoomChanger?:Subject<void>


  constructor() {
      this._geekRooms = [
        new GeekRoomModel(1,
          [
          new MsgModel({
            message:'Hey, Bheki. Are you Good,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur consectetur, consequatur, doloribus est ex expedita illum labore magni molestiae necessitatibus porro quaerat qui tempore unde? Aliquid architecto et rem.',
            senderId:'bheki',
            sendDate:new Date(),
            msgId:1111}),
          new MsgModel({message:'Ola, Ke Xap wena?',
            sendDate:new Date(),
            senderId:'Seya',
            msgId:1112}),
          new MsgModel({message:'Hey, Great',
            sendDate:new Date(),
            senderId:'Seya',
            msgId:1113}),
          new MsgModel({
            message:'Hey, Bheki. Are you Good,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur consectetur, consequatur, doloribus est ex expedita illum labore magni molestiae necessitatibus porro quaerat qui tempore unde? Aliquid architecto et rem.',
            senderId:'bheki',
            sendDate:new Date(),
            msgId:1111}),
          new MsgModel({message:'Ola, Ke Xap wena?',
            sendDate:new Date(),
            senderId:'bheki',
            msgId:1112}),
          new MsgModel({message:'Hey, Bheki. Are you Good,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur consectetur, consequatur, doloribus est ex expedita illum labore magni molestiae necessitatibus porro quaerat qui tempore unde? Aliquid architecto et rem.',
            sendDate:new Date(),
            senderId:'Seya',
            msgId:1113})],
          new GeekModel('siya','makholwa','Seya','siya@gmail.com','+27751020834',new Date())),
        new GeekRoomModel(2,
          [
            new MsgModel({
              message:'Hey, Qophi. consequatur, doloribus est ex expedita illum labore magni molestiae necessitatibus porro quaerat qui tempore unde? Aliquid architecto et rem.',
              senderId:'bheki',
              sendDate:new Date(),
              msgId:1111}),
            new MsgModel({message:'Ola, Howzit?',
              sendDate:new Date(),
              senderId:'Mlando',
              msgId:1112}),
            new MsgModel({message:'Sila, Great',
              sendDate:new Date(),
              senderId:'bheki',
              msgId:1113}),
            new MsgModel({
              message:'Hey, Qophi. Are you Good,. Ab aspernatur consectetur, consequatur, doloribus est ex expedita illum labore.',
              senderId:'bheki',
              sendDate:new Date(),
              msgId:1111})],
          new GeekModel('Qophi','makholwa','Mlando','siya@gmail.com','+27751020834',new Date()))
      ]
      this._activeRoomId=-1

      this._activeRoomChanger = new Subject<void>();
  }


  get activeRoomChanger(): Subject<void> {
    return this._activeRoomChanger as Subject<void>;
  }

  set activeRoomChanger(value: Subject<void>) {
    this._activeRoomChanger = value;
  }

  get activeRoomId(): number {

    return this._activeRoomId as number;
  }

  set activeRoomId(value: number) {
    this._activeRoomId = value;

    if(this._activeRoomChanger){
      this._activeRoomChanger.next()
    }

  }

  get geekRooms(): GeekRoomModel[] {
    return this._geekRooms as GeekRoomModel[];
  }

  set geekRooms(value: GeekRoomModel[]) {
    this._geekRooms = value;
  }
}

