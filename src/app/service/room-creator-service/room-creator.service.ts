import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {GeekRoomModel} from "../../model/room/geek-room.model";
import {GeekAuthService} from "../auth-service/geek-auth.service";
import {GeekRoomService} from "../room-service/geek-room.service";


@Injectable({
  providedIn:'root'
})export class RoomCreatorService{


  constructor(private httpClient:HttpClient,private authService:GeekAuthService,private roomService:GeekRoomService) {

  }



  createNewRoom(){
    const headers = this.authService.getHttpHeaders()
    const geekId1 = this.authService.authGeek?.geek?.geekId
    const geekId2 = this.roomService.selectedGeekData?.geekId


    return this.httpClient.post<GeekRoomModel>('',{geekId1:geekId1, geekId2:geekId2},{headers})
  }
}
