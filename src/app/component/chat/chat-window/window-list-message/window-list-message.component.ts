import {Component} from '@angular/core';
import {ChatMsgModel} from "../../../../model/chat-msg.model";

@Component({
  selector: 'app-window-list-message',
  templateUrl: './window-list-message.component.html',
  styleUrls: ['./window-list-message.component.css']
})
export class WindowListMessageComponent {

   roomId?:number;
   receiverId:string = 'bheki';
   username?:string = 'siya';

  messages:ChatMsgModel[] = [
    new ChatMsgModel({
      message:'Hey, Bheki. Are you Good,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur consectetur, consequatur, doloribus est ex expedita illum labore magni molestiae necessitatibus porro quaerat qui tempore unde? Aliquid architecto et rem.',
      senderId:'bheki',
      sendDate:new Date(),
      msgId:1111}),
    new ChatMsgModel({message:'Ola, Ke Xap wena?',
      sendDate:new Date(),
      senderId:'bheki',
      msgId:1112}),
    new ChatMsgModel({message:'Hey, Great',
      sendDate:new Date(),
      senderId:'siya',
      msgId:1113}),
    new ChatMsgModel({
      message:'Hey, Bheki. Are you Good,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur consectetur, consequatur, doloribus est ex expedita illum labore magni molestiae necessitatibus porro quaerat qui tempore unde? Aliquid architecto et rem.',
      senderId:'bheki',
      sendDate:new Date(),
      msgId:1111}),
    new ChatMsgModel({message:'Ola, Ke Xap wena?',
      sendDate:new Date(),
      senderId:'bheki',
      msgId:1112}),
    new ChatMsgModel({message:'Hey, Bheki. Are you Good,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur consectetur, consequatur, doloribus est ex expedita illum labore magni molestiae necessitatibus porro quaerat qui tempore unde? Aliquid architecto et rem.',
      sendDate:new Date(),
      senderId:'siya',
      msgId:1113}),
    new ChatMsgModel({
      message:'Hey, Bheki. Are you Good,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur consectetur, consequatur, doloribus est ex expedita illum labore magni molestiae necessitatibus porro quaerat qui tempore unde? Aliquid architecto et rem.',
      senderId:'bheki',
      sendDate:new Date(),
      msgId:1111}),
    new ChatMsgModel({message:'Ola, Ke Xap wena?',
      sendDate:new Date(),
      senderId:'bheki',
      msgId:1112}),
    new ChatMsgModel({message:'Hey, Great',
      sendDate:new Date(),
      senderId:'siya',
      msgId:1113}),
  ];


}
