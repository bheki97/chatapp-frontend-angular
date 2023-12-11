import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./component/login/login.component";
import {RegisterComponent} from "./component/register/register.component";
import {NgModule} from "@angular/core";
import {VerifyCodeComponent} from "./component/verify-code/verify-code.component";

const appRouters:Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegisterComponent},
  {path:'verify',component:VerifyCodeComponent}
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
