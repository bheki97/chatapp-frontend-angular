import {Component, OnInit} from '@angular/core';
import {ModalEventService} from "../../../service/modal-service/modal-event.service";
import {GeekRoomService} from "../../../service/room-service/geek-room.service";
import {ProfileColors} from "../../../../assets/colors/profile-colors";
import {SearchedGeekModel} from "../../../model/searched-geek.model";
import {SearchGeekService} from "../../../service/search-geek-service/search-geek.service";

@Component({
  selector: 'app-search-geek',
  templateUrl: './search-geek.component.html',
  styleUrls: ['./search-geek.component.css']
})
export class SearchGeekComponent implements OnInit{

  searchedGeeks:SearchedGeekModel[] = []

  constructor(private modalService:ModalEventService,private geekRoomService:GeekRoomService,private searchGeekService:SearchGeekService) {
  }
  startChatWithNewGeek(searchedGeek:SearchedGeekModel){
    const  color = '#'+ProfileColors.at(Math.floor(Math.random() * ProfileColors.length))
    this.geekRoomService.activeRoomIndex=-1
    this.geekRoomService.selectGeekChanger.next({geekId:searchedGeek.geekId||-1,geekName:searchedGeek.username||'',profileColor:color})
    this.closeModal()
  }

  ngOnInit() {
    this.searchGeekService.returnAllGeeks().subscribe( data=>{
      this.searchedGeeks = data
    })
  }


  closeModal(){
    this.modalService.firePopUp.next(-1)
  }
}
