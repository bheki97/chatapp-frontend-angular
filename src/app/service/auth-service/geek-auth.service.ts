import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthGeekModel} from "../../model/auth-geek.model";
import {Observable} from "rxjs";


@Injectable({
  providedIn:'root'
})export class GeekAuthService{

  isAuthenticated = false

  public authGeek:AuthGeekModel|undefined = new AuthGeekModel()

  constructor(private httpClient:HttpClient) {

  }

  authenticateUser(auth:{username:string,password:string}):Observable<AuthGeekModel>{

    return this.httpClient.post<AuthGeekModel>('http://localhost:8080/auth',auth);
  }


  getHttpHeaders(){
    return new HttpHeaders({
      Authorization:`Bearer ${this.authGeek?.authToken}`
    })
  }



}
