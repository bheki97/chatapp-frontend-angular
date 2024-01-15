import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./component/login/login.component";
import {RegisterComponent} from "./component/register/register.component";
import {NgModule} from "@angular/core";
import {VerifyCodeComponent} from "./component/verify-code/verify-code.component";
import {ChatComponent} from "./component/chat/chat.component";
import {authGuard} from "./guard/auth.guard";
import {verifyGuard} from "./guard/verify.guard";

const appRouters:Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'chat',component:ChatComponent,canActivate:[authGuard]},
  {path:'verify',component:VerifyCodeComponent,canActivate:[verifyGuard]}
]
@NgModule({
  imports: [
    RouterModule.forRoot(appRouters)
  ],
  exports:[
   RouterModule
  ]
})
export class AppRoutingModule{

}
