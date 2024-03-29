import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {GeekAuthService} from "../../service/auth-service/geek-auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {RouteMsgService} from "../../service/route-msg-service/route-msg.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  usernameDivOnFocus = false
  passwordDivOnFocus = false
  show = false
  activeToggleImg='assets/view-pwd-icon.svg'
  passwordType = 'password'
  btnClicked = false
  formSubmitted = false
  msg = ''
  routMessage = ''
  loginFormGroup: FormGroup = new FormGroup({
    'username':new FormControl(null,Validators.required),
    'password':new FormControl(null,Validators.required)
  })


  constructor(private geekAuthService:GeekAuthService,private router:Router,private routeMsgService:RouteMsgService) {

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
    this.formSubmitted = true
    if(this.loginFormGroup.valid){

      this.btnClicked = false
      this.msg = ''

      this.geekAuthService.authenticateUser(
        {username:this.loginFormGroup.get('username')?.value,
        password:this.loginFormGroup.get('password')?.value})
        .subscribe( data =>{

          this.geekAuthService.authGeek = data
          console.log(data)
          this.geekAuthService.isAuthenticated = true
          this.router.navigate(['/chat']).then()


      },error => {

          this.msg = error.error
          if(this.msg == '[object ProgressEvent]')this.msg='server offline'
          console.log(this.msg)

        })

      this.loginFormGroup.reset()
    }else{


    }


  }

  ngOnInit(): void {
    this.routMessage = this.routeMsgService.routeMsgService
    this.routeMsgService.routeMsgService = ''



  }
}
