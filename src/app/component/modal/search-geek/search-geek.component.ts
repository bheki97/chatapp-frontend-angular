import {Component, OnInit} from '@angular/core';
import {ModalEventService} from "../../../service/modal-service/modal-event.service";
import {GeekRoomService} from "../../../service/room-service/geek-room.service";
import {ProfileColors} from "../../../../assets/colors/profile-colors";
import {SearchedGeekModel} from "../../../model/searched-geek.model";
import {SearchGeekService} from "../../../service/search-geek-service/search-geek.service";
import {ChatRoomExistsSearcherService} from "../../../service/search-chat-exists-service/search-chat-room.exists";

@Component({
  selector: 'app-search-geek',
  templateUrl: './search-geek.component.html',
  styleUrls: ['./search-geek.component.css']
})
export class SearchGeekComponent implements OnInit{

  searchedGeeks:SearchedGeekModel[] = []

  constructor(private geekRoomSearcher:ChatRoomExistsSearcherService,private modalService:ModalEventService,private geekRoomService:GeekRoomService,private searchGeekService:SearchGeekService) {
  }
  startChatWithNewGeek(searchedGeek:SearchedGeekModel){
    const index = this.geekRoomSearcher.searchChatRoomExists(searchedGeek.geekId||-1)

      if(index>-1){
        this.geekRoomService.setActiveRoomIndex(index)
     }else{
        const color = '#'+ProfileColors.at(Math.floor(Math.random() * ProfileColors.length))
        this.geekRoomService.selectedGeek({geekId:searchedGeek.geekId||-1,geekName:searchedGeek.username||'',profileColor:color})
     }






     this.closeModal()

  }

  ngOnInit() {
    this.searchGeekService.returnAllGeeks().subscribe( data=>{
      this.searchedGeeks = data
    },error => {
      console.log(error)
    })
  }


  closeModal(){
    this.modalService.firePopUp.next(-1)
  }
}
