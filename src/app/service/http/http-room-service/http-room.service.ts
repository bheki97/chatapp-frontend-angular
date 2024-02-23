import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import {GeekRoomModel} from "../../../model/room/geek-room.model";
import * as http from "http";
import {GeekAuthService} from "../../auth-service/geek-auth.service";


@Injectable({
  providedIn:'root'
})export class HttpRoomService{

  url = 'http://localhost:8080/room/geek/'

  constructor(private httpClient:HttpClient,private authService:GeekAuthService) {
  }

  getAllGeeksRooms():Observable<GeekRoomModel[]>{
    const path = this.url+this.authService.authGeek?.geek?.geekId
    return this.httpClient.get<GeekRoomModel[]>(path)
  }

}
