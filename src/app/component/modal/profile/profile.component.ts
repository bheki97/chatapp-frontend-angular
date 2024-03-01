import {Component, OnInit} from '@angular/core';
import {ModalEventService} from "../../../service/modal-service/modal-event.service";
import {GeekAuthService} from "../../../service/auth-service/geek-auth.service";
import {GeekModel} from "../../../model/geek.model";
import {ProfileColors} from "../../../../assets/colors/profile-colors";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  geek?:GeekModel
  color='#CB8888'

  constructor(private modalService:ModalEventService,authService:GeekAuthService) {
    this.geek = authService.authGeek?.geek
    this.color = '#'+ProfileColors.at(Math.floor(Math.random() * ProfileColors.length))

  }

  closeModal(){
    this.modalService.firePopUp.next(-1)
  }

  ngOnInit(): void {

    if(!this.geek){
      this.closeModal()
    }
  }
}
