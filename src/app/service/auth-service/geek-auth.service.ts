import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthGeekModel} from "../../model/auth-geek.model";


@Injectable({
  providedIn:'root'
})export class GeekAuthService{

  isAuthenticated = false

  public authGeek:AuthGeekModel|null = null

  constructor(private httpClient:HttpClient) {

  }

  authenticateUser(auth:{username:string,password:string}):string|boolean{


    return false;
  }




}
