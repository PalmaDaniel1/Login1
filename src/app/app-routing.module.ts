import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { VerificarComponent } from './verificar/verificar.component';
import { ValidarComponent } from './validar/validar.component';
import { PasswordComponent } from './password/password.component';

//routes:
const  Routes = [
  { path: "", component: AppComponent, pathMatch: "full"},
  { path: "", component: HomeComponent, pathMath: "full" },
  { path: "login", component: LoginComponent, pathMatch: "full"},
  { path: "register", component: RegisterComponent, pathMatch: "full"},
  { path: "Verificar",component: VerificarComponent, pathMatch: "full"},
  { path: "validar", component: ValidarComponent, pathMatch: "full"},
  { path: "password", component: PasswordComponent, pathMatch: "full" }
];

/*@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})*/
export const routing = RouterModule.forRoot(Routes);
//export class AppRoutingModule { }
