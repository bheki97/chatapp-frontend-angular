import {Component, ElementRef, HostListener} from '@angular/core';
import {ModalEventService} from "../../../../service/modal-service/modal-event.service";
import {GeekAuthService} from "../../../../service/auth-service/geek-auth.service";
import {ProfileColors} from "../../../../../assets/colors/profile-colors";

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent {

  isDropdownOpen = false;
  initials=''
  color='#CB8888'

  constructor(private elementRef: ElementRef,private modalService:ModalEventService,authService:GeekAuthService) {
    this.initials = authService.authGeek? authService.authGeek.geek?
      authService.authGeek.geek.username?authService.authGeek.geek.username.charAt(0).toUpperCase():'G':'G':'G'
      this.color = '#'+ProfileColors.at(Math.floor(Math.random() * ProfileColors.length))

  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  popUpViewProfile() {
    this.modalService.firePopUp.next(1)
    this.modalService.activePop=1;
  }

  popUpLogout() {
    this.modalService.firePopUp.next(2)
    this.modalService.activePop=2;
  }

  popUpSearchGeek() {
    this.modalService.firePopUp.next(3)
    this.modalService.activePop=2;
  }



  @HostListener('document:click', ['$event'])
  handleDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;

    // Close dropdown if the click is outside of the dropdown menu
    if (!this.isDropdownOpen || this.elementRef.nativeElement.contains(target)) {
      return;
    }


    this.isDropdownOpen = false;
  }


}
