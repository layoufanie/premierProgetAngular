import { Component } from '@angular/core';
import {LoginService} from "../login.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  date: Date | undefined;
  checked: boolean = false;

  myFormAboutUs: FormGroup;

  constructor(private service: LoginService, private route: Router, private fb: FormBuilder, private router: Router) {
    this.myFormAboutUs = this.service.getAboutUsFormValue()
  }


  navigateToLogin(){
    this.service.setAboutUsValue(this.myFormAboutUs)
    this.route.navigate(['login']);
  }
}
