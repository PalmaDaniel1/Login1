import { Injectable } from '@angular/core';

import  { HttpClient } from '@angular/common/http';
import { CookieService } from "ngx-cookie-service";
import { Observable } from 'rxjs';
import { URLSearchParams } from 'url';
import { Login, Usuario } from '../other/interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  _user: Usuario;
  aleatorio2: string;

  constructor(
    private http: HttpClient,
    private cookies: CookieService
  ) { }
  login(correo:String ): Observable<any> {
    //console.log(user)
    return this.http.get(`http://localhost:8888/registro/buscar/${correo}`);
  }
  aleatorio(): Observable<any>{
    return this.http.get('http://localhost:8888/registro/aleatorio');
  }
  register(user): Observable<any> {
    return this.http.post("http://localhost:8888/registro/agregar/", user);
  }
  update(_user:Usuario,confirm): Observable<any>{
    console.log(_user.correo,confirm)
    return this.http.patch(`http://localhost:8888/registro/actualizar/${_user.correo}`, confirm); 
  }
  setToken(token) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  }
  getUser() {
    return this.http.get("http://localhost:8888/registro/listar");
 }

}
