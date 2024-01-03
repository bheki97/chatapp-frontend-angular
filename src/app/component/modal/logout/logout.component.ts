import {Component, HostListener} from '@angular/core';
import {ModalEventService} from "../../../service/modal-service/modal-event.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {


  constructor(private modalService:ModalEventService) {


  }


  closeModal(){
    this.modalService.firePopUp.next(-1)
  }
}
