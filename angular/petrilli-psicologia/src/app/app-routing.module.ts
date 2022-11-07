import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [{
  path: '',
  component: NavComponent,
  children: [
    {
      path: '',
      component: HomePageComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
  ]
}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
