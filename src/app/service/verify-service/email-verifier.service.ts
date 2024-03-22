import {Injectable} from "@angular/core";


@Injectable({
  providedIn:'root'
})export class EmailVerifierService{

  verificationCode?:any

  verifyGeek(userCode:any):boolean{
    return userCode==this.verificationCode
  }

}
