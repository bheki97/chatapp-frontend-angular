import {Component, ElementRef, HostListener} from '@angular/core';

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

  hello() {
    console.log('Hello World')
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

  constructor(private elementRef: ElementRef) {}
}
