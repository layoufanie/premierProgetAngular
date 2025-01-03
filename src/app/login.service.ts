import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  formLoginData: FormGroup;
  formAboutUsData: FormGroup;
  constructor(private fb: FormBuilder) {
    this.formLoginData= this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.formAboutUsData= this.fb.group({
      address: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  getLoginFormValue(): FormGroup {
    return this.formLoginData;
  }
  setLoginValue(value: FormGroup){
    this.formLoginData = value;
  }

  getAboutUsFormValue(): FormGroup {
    return this.formAboutUsData;
  }
  setAboutUsValue(value: FormGroup){
    this.formAboutUsData = value;
  }
}
