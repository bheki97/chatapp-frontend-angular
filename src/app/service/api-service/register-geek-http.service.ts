import {HttpClient} from "@angular/common/http";
import {GeekRegisterModel} from "../../model/geek-register.model";
import {Injectable} from "@angular/core";


@Injectable()
export class RegisterGeekHttpService{


  constructor(private httpClient:HttpClient) {
  }
  verifyGeek(geekInfo:GeekRegisterModel){
    this.httpClient.post("http://localhost:8080/api/geek/verify",geekInfo)
  }

}
