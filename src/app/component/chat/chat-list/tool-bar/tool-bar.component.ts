import {Component, ElementRef, HostListener} from '@angular/core';
import {ModalEventService} from "../../../../service/modal-service/modal-event.service";

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent {

  isDropdownOpen = false;
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  popUpViewProfile() {
    this.modalService.firePopUp.next(1)
  }

  popUpLogout() {
    this.modalService.firePopUp.next(2)
  }

  popUpSearchGeek() {
    this.modalService.firePopUp.next(3)
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

  constructor(private elementRef: ElementRef,private modalService:ModalEventService) {


  }
}
