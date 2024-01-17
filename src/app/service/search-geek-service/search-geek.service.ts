import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {GeekAuthService} from "../auth-service/geek-auth.service";
import {GeekModel} from "../../model/geek.model";
import {Observable} from "rxjs";
import {SearchedGeekModel} from "../../model/searched-geek.model";


@Injectable({
  providedIn:'root'
})export class SearchGeekService {

  url='http://localhost:8080'

  constructor(private httpClient:HttpClient,private authGeekService:GeekAuthService) {

  }

  returnAllGeeks():Observable<SearchedGeekModel[]> {
    return this.httpClient.get<SearchedGeekModel[]>(
      `${this.url}/geek/search/${this.authGeekService.authGeek?.geek?.geekId}`,
      { headers :this.returnHeaders() })
  }

  returnHeaders(){
    return new HttpHeaders({
      ['Authorization']:`Bearer ${this.authGeekService.authGeek?.authToken}`
    })
  }

}
