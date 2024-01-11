import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthGeekModel} from "../../model/auth-geek.model";
import {Observable} from "rxjs";


@Injectable({
  providedIn:'root'
})export class GeekAuthService{

  isAuthenticated = false

  public authGeek:AuthGeekModel = new AuthGeekModel()

  constructor(private httpClient:HttpClient) {

  }

  authenticateUser(auth:{username:string,password:string}):Observable<AuthGeekModel>{

    return this.httpClient.post<AuthGeekModel>('http://localhost:8080/auth',auth);
  }






}
