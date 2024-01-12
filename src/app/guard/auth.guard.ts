import {CanActivateFn, NavigationExtras, Router} from '@angular/router';
import {GeekAuthService} from "../service/auth-service/geek-auth.service";
import {inject} from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {
  const  authServ  = inject(GeekAuthService)
  const router  = inject(Router)

  if(authServ.isAuthenticated){
    return  true;
  }


  router.navigate(['/login']).then()
  return false;
};
