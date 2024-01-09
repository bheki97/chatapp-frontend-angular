import {Injectable} from "@angular/core";
import {GeekModel} from "../../model/geek.model";
import {HttpClient} from "@angular/common/http";
import {EmailSmsCodeModel} from "../../model/email-sms-code.model";


@Injectable({
 providedIn:'root'
})export class GeekRegistrationService {

  geek:GeekModel|null = null
  emailSmsCodeModel :EmailSmsCodeModel<any,any>|null = null

  constructor(private httpClient:HttpClient) {

  }


  requestForVerification(geek?:GeekModel):boolean{
    if(geek){
      this.geek = geek;
    }

    if(this.geek){

    }

    return true;
  }




  completeRegistration():string|boolean{


    return 'completed!'
  }

}
