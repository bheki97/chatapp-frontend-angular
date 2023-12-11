import {HttpClient} from "@angular/common/http";
import {GeekModel} from "../../model/geek.model";
import {Injectable} from "@angular/core";


@Injectable()
export class RegisterGeekHttpService{


  constructor(private httpClient:HttpClient) {
  }
  verifyGeek(geekInfo:GeekModel){
    this.httpClient.post("http://localhost:8080/api/geek/verify",geekInfo)
  }

}
