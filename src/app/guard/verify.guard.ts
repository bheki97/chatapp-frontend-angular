import {CanActivateFn, Router} from '@angular/router';
import {SmsEmailVerifierService} from "../service/verify-service/sms-email-verifier.service";
import {inject} from "@angular/core";
import {RouteMsgService} from "../service/route-msg-service/route-msg.service";
export const verifyGuard: CanActivateFn = (route, state) => {


  const verifyService = inject(SmsEmailVerifierService)
  const router  = inject(Router)
  const routeMsgServ = inject(RouteMsgService)

  if(verifyService.emailSmsCodeModel){
    return  true
  }

  routeMsgServ.routeMsgService = "Please Register First before you can verify"
  router.navigate(['/login']).then()
  return false;
}
