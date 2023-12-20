import { Component } from '@angular/core';

@Component({
  selector: 'app-window-base',
  templateUrl: './window-base.component.html',
  styleUrls: ['./window-base.component.css']
})
export class WindowBaseComponent {


  autoResize(event: any): void {
    const textarea = event.target;
    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight) + 'px';
  }
}
