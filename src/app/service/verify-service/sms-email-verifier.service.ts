import {Injectable} from "@angular/core";
import {EmailSmsCodeModel} from "../../model/email-sms-code.model";


@Injectable({
  providedIn:'root'
})export class SmsEmailVerifierService{

  public emailSmsCodeModel :EmailSmsCodeModel<any,any>|undefined = undefined

  verifyGeek(verification:{smsCode:any,emailCode:any}):boolean{
    console.log(verification)

    const email = this.emailSmsCodeModel?.emailCode
    const sms = this.emailSmsCodeModel?.smsCode

    console.log({sms: sms,email:email})

    return this.emailSmsCodeModel?.emailCode==verification.emailCode &&
      this.emailSmsCodeModel?.smsCode==verification.smsCode;
  }





}
