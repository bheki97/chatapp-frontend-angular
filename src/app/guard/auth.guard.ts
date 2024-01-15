import {CanActivateFn, NavigationExtras, Router} from '@angular/router';
import {GeekAuthService} from "../service/auth-service/geek-auth.service";
import {inject} from "@angular/core";
import {RouteMsgService} from "../service/route-msg-service/route-msg.service";

export const authGuard: CanActivateFn = (route, state) => {
  const  authServ  = inject(GeekAuthService)
  const router  = inject(Router)
  const routeMsgServ = inject(RouteMsgService)

  if(authServ.isAuthenticated){
    return  true;
  }

  routeMsgServ.routeMsgService = "You're not Authenticated, Please Login First"
  router.navigate(['/login']).then()
  return false;

};
