import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import {GeekRoomModel} from "../../../model/room/geek-room.model";
import * as http from "http";
import {GeekAuthService} from "../../auth-service/geek-auth.service";
import {NewGeekRoomModel} from "../../../model/new-geek-room.model";


@Injectable({
  providedIn:'root'
})export class HttpRoomService{

  url = 'http://localhost:8080/room/'

  constructor(private httpClient:HttpClient,private authService:GeekAuthService) {
  }

  addNewGeekRoom(room:NewGeekRoomModel):Observable<GeekRoomModel>{
    const path  = this.url+'new-conversation'
    return this.httpClient.post<GeekRoomModel>(path,room)
  }

  getAllGeeksRooms():Observable<GeekRoomModel[]>{
    const path = this.url+'geek/'+this.authService.authGeek?.geek?.geekId
    return this.httpClient.get<GeekRoomModel[]>(path)
  }

}
