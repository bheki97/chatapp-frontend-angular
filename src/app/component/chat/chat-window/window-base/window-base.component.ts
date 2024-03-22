import {Component, OnDestroy, OnInit} from '@angular/core';
import {GeekRoomService} from "../../../../service/room-service/geek-room.service";
import {Subscription} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MessageSenderService} from "../../../../service/message-sender-service/message-sender.service";
import {GeekRoomModel} from "../../../../model/room/geek-room.model";
import {MsgModel} from "../../../../model/msg.model";
import {GeekAuthService} from "../../../../service/auth-service/geek-auth.service";
import {NewGeekRoomModel} from "../../../../model/new-geek-room.model";
import {HttpRoomService} from "../../../../service/http/http-room-service/http-room.service";
import {WebSocketService} from "../../../../service/web-socket-service/web-socket.service";

@Component({
  selector: 'app-window-base',
  templateUrl: './window-base.component.html',
  styleUrls: ['./window-base.component.css']
})
export class WindowBaseComponent implements OnInit,OnDestroy{

  activeChatSubscription?:Subscription
  activeNewRoomChangerListener?:Subscription
  activeRoomIndex:number
  roomId?:number
  geekId:number

  sendMessageForm:FormGroup

  autoResize(event: any): void {
    const textarea = event.target;
    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight) + 'px';
  }

  constructor(private roomService:GeekRoomService,
              private httpRoomService:HttpRoomService,
              private socketService:WebSocketService,
              private MsgSenderService:MessageSenderService,
              private authService:GeekAuthService) {
    this.sendMessageForm = new FormGroup({
      'message' :new FormControl(null,Validators.required)
    })

    this.activeRoomIndex = roomService.activeRoomIndex
    if(this.activeRoomIndex>-1){
      this.roomId = this.roomService.geekRooms.at(this.activeRoomIndex)?.roomId
    }

    this.geekId = this.roomService.geekRooms.at(this.activeRoomIndex)?.receiver?.geekId || roomService.selectedGeekData?.geekId ||-1
    console.log('from chat base: '+this.activeRoomIndex)
  }

  ngOnInit(): void {
      this.activeChatSubscription = this.roomService.activeRoomChanger.subscribe(()=>{
        this.activeRoomIndex = this.roomService.activeRoomIndex
      })
    this.activeNewRoomChangerListener =  this.roomService.selectGeekChanger.subscribe(()=>this.activeRoomIndex=this.roomService.activeRoomIndex)

  }

  ngOnDestroy(): void {
    if(this.activeChatSubscription){
      this.activeChatSubscription.unsubscribe()
    }
  }


  sendMessage() {

    if(this.sendMessageForm.valid && this.activeRoomIndex>-2){
      const msg = this.sendMessageForm.get('message')?.value
      console.log(
        `Room id: ${this.activeRoomIndex}, message${msg}`)

      if( this.activeRoomIndex>-1){
        this.MsgSenderService.sendMessage(msg,this.activeRoomIndex)
      }else{
        this.sendNewMessage(msg);
      }



      this.activeRoomIndex=0
    }

  }

  private sendNewMessage(msg: string) {
    const room = new NewGeekRoomModel()
    room.geekId2 = this.roomService.selectedGeekData?.geekId
    room.geekId1 = this.authService.authGeek?.geek?.geekId
    const message = new MsgModel()

    message.message = msg
    message.receiverId = this.roomService.selectedGeekData?.geekId
    message.senderId = this.authService.authGeek?.geek?.geekId
    room.msg = message

    console.log(room)

    this.httpRoomService.addNewGeekRoom(room).subscribe(response =>{
      console.log(`Response: ${JSON.stringify(response)}`)
      const rooms = this.roomService.geekRooms
      rooms.splice(0,0,response)
      this.roomService.setActiveRoomIndex(0)
      this.socketService.stompClient.send('/app/chat/new-conversation/'+response.receiver.geekId,{},JSON.stringify(response.roomId))


    })





  }
}
