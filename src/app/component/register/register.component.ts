import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit{
  active = false;
  registrationFormGroup: FormGroup = new FormGroup({
      'firstname':new FormControl(null,Validators.required),
      'lastname':new FormControl(null,Validators.required),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'password':new FormControl(null,Validators.required),
      'confirmPassword':new FormControl(null,Validators.required),
      'cellNumber':new FormControl(null,Validators.required),
  });

  ngOnInit(): void {

  }

  formSubmit(){
    console.log(this.registrationFormGroup)
  }

}
