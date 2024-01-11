import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {GeekAuthService} from "../../service/auth-service/geek-auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usernameDivOnFocus = false
  passwordDivOnFocus = false
  show = false
  activeToggleImg='assets/view-pwd-icon.svg'
  passwordType = 'password'
  btnClicked = false
  msg = ''
  loginFormGroup: FormGroup = new FormGroup({
    'username':new FormControl(null,Validators.required),
    'password':new FormControl(null,Validators.required)
  })


  constructor(private geekAuthService:GeekAuthService,private router:Router) {
  }

  divOnFocusOrBlur(divId:string,action:boolean){

    if(divId==='username'){
        this.usernameDivOnFocus = action
    }else if(divId==='password'){
      this.passwordDivOnFocus = action
    }

  }

  passwordToggle(){
    if (this.show){
      this.activeToggleImg='assets/view-pwd-icon.svg'
      this.passwordType = 'password'
    }else{
      this.activeToggleImg='assets/hide-pwd-icon.svg'
      this.passwordType = 'text'
    }

    this.show = !this.show
  }

  submitForm() {
    this.btnClicked = true
    if(this.loginFormGroup.valid){
      this.btnClicked = false

      this.geekAuthService.authenticateUser(
        {username:this.loginFormGroup.get('username')?.value,
        password:this.loginFormGroup.get('username')?.value})
        .subscribe( data =>{

          this.geekAuthService.authGeek = data
          this.geekAuthService.isAuthenticated = true
          this.router.navigate(['/chat']).then()


      },error => {

          this.msg = error.error

        })

      this.loginFormGroup.reset()
    }else{


    }


  }
}
