import { Component } from '@angular/core';
import {ModalEventService} from "../../../service/modal-service/modal-event.service";
import {GeekRoomService} from "../../../service/room-service/geek-room.service";
import {ProfileColors} from "../../../../assets/colors/profile-colors";

@Component({
  selector: 'app-search-geek',
  templateUrl: './search-geek.component.html',
  styleUrls: ['./search-geek.component.css']
})
export class SearchGeekComponent {


  constructor(private modalService:ModalEventService,private geekRoomService:GeekRoomService) {
  }
  startChatWithNewGeek(name:string){
    const  color = '#'+ProfileColors.at(Math.floor(Math.random() * ProfileColors.length))
    this.geekRoomService.activeRoomIndex=-1
    this.geekRoomService.selectGeekChanger.next({geekName:name,profileColor:color})
    this.closeModal()
  }


  closeModal(){
    this.modalService.firePopUp.next(-1)
  }
}
