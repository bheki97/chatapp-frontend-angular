import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { ReactiveFormsModule} from "@angular/forms";
import { VerifyCodeComponent } from './component/verify-code/verify-code.component';
import { ChatComponent } from './component/chat/chat.component';
import { ChatSelectItemComponent } from './component/chat/chat-list/chat-select-item/chat-select-item.component';
import { ChatWindowComponent } from './component/chat/chat-window/chat-window.component';
import { ProfileComponent } from './component/profile/profile.component';
import { LogoutComponent } from './component/logout/logout.component';
import { ChatListComponent } from './component/chat/chat-list/chat-list.component';
import { ToolBarComponent } from './component/chat/chat-list/tool-bar/tool-bar.component';
import { WindowHeaderComponent } from './component/chat/chat-window/window-header/window-header.component';
import { WindowBaseComponent } from './component/chat/chat-window/window-base/window-base.component';
import { WindowListMessageComponent } from './component/chat/chat-window/window-list-message/window-list-message.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    VerifyCodeComponent,
    ChatComponent,
    ChatSelectItemComponent,
    ChatWindowComponent,
    ProfileComponent,
    LogoutComponent,
    ChatListComponent,
    ToolBarComponent,
    WindowHeaderComponent,
    WindowBaseComponent,
    WindowListMessageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
