import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path:'', component:MenuComponent
  }
,
  {
   path:'login',
   component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'home',
    component:HomeComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
