import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

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



  loginFormGroup: FormGroup = new FormGroup({
    'username':new FormControl(null),
    'password':new FormControl(null)
  })

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

      this.loginFormGroup?.reset()
  }
}
