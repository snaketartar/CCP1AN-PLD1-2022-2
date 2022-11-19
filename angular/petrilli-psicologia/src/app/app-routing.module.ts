import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoricoComponent } from './historico/historico.component';
import { HomePageComponent } from './home-page/home-page.component';
import { InitialNavComponent } from './initial-nav/initial-nav.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { NovaConsultaComponent } from './nova-consulta/nova-consulta.component';
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
  path: 'historicoConsulta/:idUser',
  component: NavComponent,
  children: [
    {
      path: 'historicoConsulta/:idUser',
      component: HistoricoComponent
    },
    {
      path: 'novaConsulta/:idUser',
      component: NovaConsultaComponent
    },
  ]
}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
