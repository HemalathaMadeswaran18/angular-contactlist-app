import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }
,
  {path:'register',component:RegisterComponent},
  {path:'contact',component:ContactlistComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
