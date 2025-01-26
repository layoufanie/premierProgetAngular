import { Component } from '@angular/core';
import {LoginService} from "../login.service";
import {Router} from "@angular/router";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
myFormLogin: FormGroup;
showErrorMessage = false;
  secondErrorMessage = false;

  constructor(private service: LoginService, private route: Router) {
  this.myFormLogin = this.service.getLoginFormValue()
  }

  userValue(event: Event){
if(this.myFormLogin.value.firstname){
  this.showErrorMessage = false;
}
  }

  userValue2(event: Event){
    if(this.myFormLogin.value.lastname){
      this.secondErrorMessage = false;
    }
  }

  onBlur(){
if(!this.myFormLogin.value.firstname){
  this.showErrorMessage = true;
}

  }
  inBlur() {
    if (!this.myFormLogin.value.lastname) {
      this.secondErrorMessage = true;
    }
  }

  navigate(){
    this.service.setLoginValue(this.myFormLogin)
    this.route.navigate(['about-us']);
  }

}
