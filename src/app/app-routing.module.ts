import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'about-us', pathMatch: 'full'
  },
  {
    path: 'about-us', component: AboutUsComponent
  },
  {
    path: 'footer', component: FooterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
