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

  constructor(private service: LoginService, private route: Router) {
  this.myFormLogin = this.service.getLoginFormValue()
  }


  navigate(){
    this.service.setLoginValue(this.myFormLogin)
    this.route.navigate(['about-us']);
  }

}
