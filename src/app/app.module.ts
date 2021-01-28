import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppRoutingModule } from './app-routing.module';
import { routing } from './app-routing.module'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CookieService } from 'ngx-cookie-service';
import { MensajeService } from './service_men/mensaje.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VerificarComponent } from './verificar/verificar.component';
import { MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { ValidarComponent } from './validar/validar.component';
import { UsersService } from './users/users.service';
import { PasswordComponent } from './password/password.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    VerificarComponent,
    ValidarComponent,
    PasswordComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [CookieService,
  MensajeService,
  UsersService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
