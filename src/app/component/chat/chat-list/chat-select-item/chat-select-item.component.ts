import { Component } from '@angular/core';
import {ProfileColors} from "../../../../../assets/colors/profile-colors";

@Component({
  selector: 'app-chat-select',
  templateUrl: './chat-select-item.component.html',
  styleUrls: ['./chat-select-item.component.css']
})
export class ChatSelectItemComponent {

  profileColor = '#'+ProfileColors.at(Math.floor(Math.random() * ProfileColors.length))

}
