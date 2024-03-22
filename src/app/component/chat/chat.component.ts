import {Component, OnDestroy, OnInit} from '@angular/core';
import {ModalEventService} from "../../service/modal-service/modal-event.service";
import {Subscription} from "rxjs";
import {WebSocketService} from "../../service/web-socket-service/web-socket.service";
import {GeekAuthService} from "../../service/auth-service/geek-auth.service";
import {HttpRoomService} from "../../service/http/http-room-service/http-room.service";
import {GeekRoomService} from "../../service/room-service/geek-room.service";
import {ProfileColors} from "../../../assets/colors/profile-colors";
import {GeekRoomModel} from "../../model/room/geek-room.model";
import {NewMsgHandlerService} from "../../service/new-msg-handler-service/new-msg-handler.service";
import {MsgModel} from "../../model/msg.model";
import {MsgStatusUpdateModel} from "../../model/msg-status-update.model";
import {MsgStatusUpdaterService} from "../../service/msg-status-updater-service/msg-status-updater.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit,OnDestroy{

  modal=-1
  modalSubscription?:Subscription
  subscription?: Subscription
  activeRoomId = -1
  activeRoomChangerListener?:Subscription



  constructor(private modalService:ModalEventService,
              private webSocketService:WebSocketService,
              private authService:GeekAuthService,
              private httpRoomService:HttpRoomService,
              private geekRoomService:GeekRoomService,
              private msgUpdaterService:MsgStatusUpdaterService,
              private newMsgHandler:NewMsgHandlerService,
              private msgStatusUpdater:MsgStatusUpdaterService
  ) {

  }

  ngOnDestroy(): void {
    if(this.modalSubscription){
      this.modalSubscription.unsubscribe()

    }

    if(this.subscription){
      this.subscription.unsubscribe()

    }

    this.webSocketService.disconnect()

  }

  ngOnInit(): void {


    console.log(this.authService.authGeek)
    this.modalSubscription = this.modalService.firePopUp.subscribe(n =>{
      this.modal=n

    })

    this.httpRoomService.getAllGeeksRooms().subscribe(response =>{
      for(let i=0;i<response.length;i++){
        const  room = response.at(i);

        if(room){
          room.color = '#'+ProfileColors.at(Math.floor(Math.random() * ProfileColors.length))
            const messages  = room.messages
            let status
            for(let j=messages.length-1;j>-1;j--){
              status= messages[j].status
              if(status){
                if (!status.receiveDate) {
                  status.receiveDate = new Date()
                  console.log(messages[j])
                  this.msgUpdaterService.sendUpdate('received',messages[j])
                }
              }
            }

        }

      }

      this.geekRoomService.geekRooms = response

      this.geekRoomService.roomLoadedEmitter.next()
      console.log('Fetched all chat rooms')
    })

    const subscriptions:{destination:string, subscribeFunc:(msg:any)=>void} []= [
      {destination:`/topic/read-msg-statuses/${this.authService.authGeek?.geek?.geekId}`,subscribeFunc:(msg=>{
          const update = JSON.parse(msg.body) as MsgStatusUpdateModel
          this.msgStatusUpdater.updateMsg('read',update)

        })},
      {destination:`/topic/own-messages/${this.authService.authGeek?.geek?.geekId}`,subscribeFunc:(msg=>{
            const newMsg = JSON.parse(msg.body) as MsgModel
              this.newMsgHandler.updateOwnMessage(newMsg)

        })},
      {destination:`/topic/received-msg-statuses/${this.authService.authGeek?.geek?.geekId}`,subscribeFunc:(msg=>{
          const update = JSON.parse(msg.body) as MsgStatusUpdateModel
              setTimeout(()=>{
                this.msgStatusUpdater.updateMsg('received',update)
              },2000)

        })},{destination:`/topic/messages/${this.authService.authGeek?.geek?.geekId}`, subscribeFunc:(msg =>{
          const newMsg = JSON.parse(msg.body) as MsgModel


        this.newMsgHandler.handleNewMessage(newMsg)

      })},{destination:`/topic/new-conversation/${this.authService.authGeek?.geek?.geekId}`, subscribeFunc:(room =>{
          const newRoom = JSON.parse(room.body) as GeekRoomModel


        this.handleNewRoom(newRoom)

      })}
    ]


    this.webSocketService.connect(subscriptions)




  }

  private handleNewRoom(newRoom: GeekRoomModel) {
    this.geekRoomService.geekRooms.splice(0,0,newRoom)
  }
}
