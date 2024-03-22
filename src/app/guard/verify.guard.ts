import {CanActivateFn, Router} from '@angular/router';
import {SmsEmailVerifierService} from "../service/verify-service/sms-email-verifier.service";
import {inject} from "@angular/core";
import {RouteMsgService} from "../service/route-msg-service/route-msg.service";
import {EmailVerifierService} from "../service/verify-service/email-verifier.service";
export const verifyGuard: CanActivateFn = (route, state) => {


  const verifyService = inject(EmailVerifierService)
  const router  = inject(Router)
  const routeMsgServ = inject(RouteMsgService)

  if(verifyService.verificationCode){
    return  true
  }

  routeMsgServ.routeMsgService = "Please Register First before you can verify"
  router.navigate(['/register']).then()
  return false;
}
