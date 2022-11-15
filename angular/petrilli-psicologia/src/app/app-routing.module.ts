import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { InitialNavComponent } from './initial-nav/initial-nav.component';
import { LoggedHomePageComponent } from './logged-home-page/logged-home-page.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: InitialNavComponent,
    children: [
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      },
    ]
  },
  {
  path: 'loggedHome',
  component: NavComponent,
  children: [
    {
      path: 'loggedHome',
      component: LoggedHomePageComponent
    },
  ]
}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
