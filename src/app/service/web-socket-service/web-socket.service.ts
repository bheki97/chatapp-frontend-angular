import {Injectable} from "@angular/core";
import { WebSocketSubject} from "rxjs/webSocket";
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
import {GeekAuthService} from "../auth-service/geek-auth.service";

@Injectable({
  providedIn:'root'
})export class WebSocketService {
  socket: WebSocketSubject<any>|undefined
  // private stompClient?:StompJs.Client

  // Initialize the Stomp client using the WebSocket connection
  stompClient:Stomp.Client
  constructor(private authService:GeekAuthService) {

    const socket1 = new SockJS('http://localhost:8080/chat-app')
    this.stompClient = Stomp.over(socket1)

  }


  connect(subscribeFunctions:{destination:string, subscribeFunc:(msg:any)=>void} []){

    this.stompClient.connect({
      Authorization:`Bearer ${this.authService.authGeek?.authToken}`,
    },()=>{

      for(let i=0;i<subscribeFunctions.length;i++){
        this.stompClient.subscribe(subscribeFunctions[i].destination, subscribeFunctions[i].subscribeFunc)
      }


    },error => {

    })

  }

  disconnect(){
    if(this.stompClient.connected){
      this.stompClient.disconnect(()=>{
        console.log('Web Socket Disconnected')
      })
    }
  }







}
