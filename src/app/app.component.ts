import {Component, OnDestroy, OnInit} from '@angular/core';
import {WebSocketService} from "./service/web-socket-service/web-socket.service";
import {Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{



  constructor(private httpClient:HttpClient) {
  }


  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {

  }
}

export  interface TellerInterface{
  tellerId?:number

  tellSomething():void;
}
export  class IphoneTeller implements TellerInterface{
  iphoneName?:string
  tellSomething(): void {
    console.log('I am an Iphone Teller: '+this.iphoneName)
  }

}
export  class SamsungTeller implements TellerInterface{

  tellerCountry?:string

  tellSomething(): void {
    console.log('I am a Samsung Teller: '+this.tellerCountry)
  }

}
