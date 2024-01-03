import { Component } from '@angular/core';
import {ModalEventService} from "../../../service/modal-service/modal-event.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private modalService:ModalEventService) {


  }


  closeModal(){
    this.modalService.firePopUp.next(-1)
  }
}
