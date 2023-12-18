import {Component, ElementRef, NgZone} from '@angular/core';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent {

  constructor(private el: ElementRef, private ngZone: NgZone) { }

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      this.scrollToBottom();
    });
  }

  private scrollToBottom() {
    const scrollContainer = this.el.nativeElement.querySelector('.msg-list');
    if (scrollContainer) {
      scrollContainer.scrollTop = scrollContainer.scrollHeight;
    }
  }

}
