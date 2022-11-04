import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [{
  path: '',
  component: NavComponent,
  children: [
    {
      path: '',
      component: HomePageComponent
    },
  ]
}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
