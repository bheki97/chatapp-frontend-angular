import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {GeekAuthService} from "../auth-service/geek-auth.service";
import {Observable} from "rxjs";
import {SearchedGeekModel} from "../../model/searched-geek.model";


@Injectable({
  providedIn:'root'
})export class SearchGeekService {

  url='http://localhost:8080'

  constructor(private httpClient:HttpClient,private authGeekService:GeekAuthService) {

  }

  returnAllGeeks():Observable<SearchedGeekModel[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.authGeekService.authGeek?.authToken}`);
    console.log('Headers: '+ headers.get('Authorization'))
    return this.httpClient.get<SearchedGeekModel[]>(
      `${this.url}/geek/search/${this.authGeekService.authGeek?.geek?.geekId}`,{ headers,withCredentials:true })
  }




}
