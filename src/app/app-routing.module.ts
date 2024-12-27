import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'about-us', component: AboutUsComponent
  },
  {
    path: 'footer', component: FooterComponent
  },
  {
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
