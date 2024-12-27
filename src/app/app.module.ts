import { NgModule,forwardRef } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from "primeng/button";
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { MenuModule } from 'primeng/menu';
import { CalendarModule } from 'primeng/calendar';
import {ReactiveFormsModule, FormsModule, ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckboxModule } from 'primeng/checkbox';
import { LoginComponent } from './login/login.component';
import { PasswordModule } from 'primeng/password';
import { CommonModule } from '@angular/common';









@NgModule({
  declarations: [
    FooterComponent,
    AppComponent,
    AboutUsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    MenuModule,
    CalendarModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    CheckboxModule,
    PasswordModule,
    CommonModule
  ],
  providers: [
    provideClientHydration(),
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AboutUsComponent),
      multi: true,
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
