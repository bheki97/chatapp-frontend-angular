import {Injectable} from "@angular/core";
import {GeekModel} from "../../model/geek.model";
import {HttpClient} from "@angular/common/http";
import {EmailSmsCodeModel} from "../../model/email-sms-code.model";
import {Observable} from "rxjs";



@Injectable({
 providedIn:'root'
})export class GeekRegistrationService {

  geek:GeekModel|null = null

  constructor(private httpClient:HttpClient) {

  }


  requestForVerification(geek?:GeekModel):Observable<EmailSmsCodeModel<any,any>>|undefined{
    if(geek){
      this.geek = geek;
      console.log(geek)
      return this.httpClient.post<EmailSmsCodeModel<any,any>>('http://localhost:8080/registration/verification',geek)
    }

    return undefined;
  }


  completeRegistration():Observable<boolean>{
    return this.httpClient.post<boolean>('http://localhost:8080/registration',this.geek)
  }

}
