import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {GeekRegistrationService} from "../../service/registration-service/geek-registration.service";
import {SmsEmailVerifierService} from "../../service/verify-service/sms-email-verifier.service";
import {Router} from "@angular/router";
import {EmailSmsCodeModel} from "../../model/email-sms-code.model";
import {GeekModel} from "../../model/geek.model";

@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.component.html',
  styleUrls: ['./verify-code.component.css']
})
export class VerifyCodeComponent {

  email =''
  cellNum= ''
  name =''
  errMsg = ''


  verifyForm:FormGroup = new FormGroup({
    'emailCode':new FormControl(null),
  })

  constructor(private registrationService:GeekRegistrationService, private verifyService:SmsEmailVerifierService,
  private router:Router) {
    this.email = registrationService.geek?.email||''
    this.cellNum = registrationService.geek?.cellNumber||''
    this.name = registrationService.geek?.firstname||''

  }


  submitForm() {

    if(this.verifyService.verifyGeek(this.verifyForm.get('emailCode')?.value
    )){

      this.registrationService.completeRegistration().subscribe(data=>{
        if(data){
          this.verifyService.emailSmsCodeModel =undefined
          this.registrationService.geek = new GeekModel()
          console.log('Correct, registration completed')
          this.router.navigate(['/login']).then()
        }else{
          console.log('Registration Failed to complete!')

          this.verifyService.emailSmsCodeModel =undefined
          this.registrationService.geek = new GeekModel()

          this.router.navigate(['/register']).then()

        }
      },error => {
        console.log('Registration Failed to complete!\nerror: '+error.error)

        this.verifyService.emailSmsCodeModel =undefined
        this.registrationService.geek = new GeekModel()

        this.router.navigate(['/register']).then()
      })


    }else{
      this.errMsg = 'code does not match! Try again'
    }
    this.verifyForm.reset()
    console.log(this.verifyForm)
  }

}
