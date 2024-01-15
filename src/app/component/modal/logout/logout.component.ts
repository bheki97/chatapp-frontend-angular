import {Component, HostListener} from '@angular/core';
import {ModalEventService} from "../../../service/modal-service/modal-event.service";
import {GeekAuthService} from "../../../service/auth-service/geek-auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {


  constructor(private modalService:ModalEventService,
              private authService:GeekAuthService,
              private router:Router) {


  }


  closeModal(){
    this.modalService.firePopUp.next(-1)
  }

  logout(){
    this.authService.isAuthenticated = false;
    this.authService.authGeek = undefined
    this.router.navigate(['/login']).then()
  }
}
