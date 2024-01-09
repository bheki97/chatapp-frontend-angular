import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit{
  active = false;
  errMsg = 'geek already exists'


  status = 1;

  registrationFormGroup: FormGroup = new FormGroup({
      'firstname':new FormControl(null,
        [
          Validators.required,
          this.fieldHasLessThan2Chars
        ]
      ),
      'lastname':new FormControl(null,
        [
          Validators.required,
          this.fieldHasLessThan2Chars
        ]
      ),
      'email':new FormControl(null,
        [
          Validators.required,
          Validators.email
        ]
      ),
      'password':new FormControl(null,
        [
        Validators.required,
        this.passHasLessThan8Chars,
        this.passHasNoLowercase,
        this.passHasNoUppercase,
        this.passHasNoNumeric,
        this.passHasNoSpecChars
        ]
      ),
      'confirmPassword':new FormControl(null,[Validators.required
        ,this.confirmPasswordMatchesNot.bind(this)]
      ),
      'cellNumber':new FormControl(null,[Validators.required,
      ]),
  });

  ngOnInit(): void {


  }

  formSubmit(){
    console.log(this.registrationFormGroup)
  }

  passHasLessThan8Chars(formControl:FormControl): {[s:string]:boolean }|null {
    // console.log(formControl.touched)
    if(!formControl.value || formControl.value.length<8){

        return {hasLessThan8Chars :true};
    }

    return null;
  }
  fieldHasLessThan2Chars(formControl:FormControl): {[s:string]:boolean }|null {
    // console.log(formControl.touched)
    if(!formControl.value || formControl.value.length<2){

      return {hasLessThan2Chars :true};
    }

    return null;
  }

  passHasNoSpecChars(formControl:FormControl): {[s:string]:boolean }|null {

    return /[^a-zA-Z0-9]/.test(formControl.value)? null:{hasNoSpecChars :true};
  }
  count=-1
  passHasNoLowercase(formControl:FormControl): {[s:string]:boolean }|null {



    return /[a-z]/.test(formControl.value)? null:{hasNoLowercase :true};
  }

  passHasNoUppercase(formControl:FormControl): {[s:string]:boolean }|null {

    return /[A-Z]/.test(formControl.value)? null:{hasNoUppercase :true};
  }

  passHasNoNumeric(formControl:FormControl): {[s:string]:boolean }|null {

    return /[0-9]/.test(formControl.value)? null:{hasNoNumeric :true};
  }

  confirmPasswordMatchesNot(formControl:FormControl): {[s:string]:boolean }|null {
    if(this.registrationFormGroup){
      console.log(this.registrationFormGroup.valid)
    }
    return formControl.touched && this.registrationFormGroup && this.registrationFormGroup.get('password') && formControl.value===this.registrationFormGroup.get('password')?.value? null:{confirmPasswordMatchesNot :true};
  }


  onInput(event: any){
    if(this.registrationFormGroup){

      const formControl = this.registrationFormGroup.get('cellNumber');
      if(formControl){
        formControl.setValue(formControl.value.replace(/[^+\d]|(?<=.)\+/g, ''), { emitEvent: false })
      }

    }
  }


  submitForm(){
    console.log(this.registrationFormGroup)
    console.log(this.registrationFormGroup.valid)
    this.registrationFormGroup.reset()
  }

}
