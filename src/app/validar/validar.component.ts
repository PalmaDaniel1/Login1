import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../other/interface';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-validar',
  templateUrl: './validar.component.html',
  styleUrls: ['./validar.component.scss']
})
export class ValidarComponent implements OnInit {

  constructor(
    public userService: UsersService,
    public router: Router,
    private _http: HttpClientModule
  ) { }

  hola;

  ngOnInit(): void {
    //this.config = this.userService.getRemoteObservable()
    this.validar();
  }
  config:Usuario
  _user2: Usuario;
  _user3: Usuario
 // correo:string
  validar(){
    var confirm = 1
    //console.log("Hola")
    //console.log(this.userService._user)
    this._user3=this.userService._user
    console.log(this._user3);
    var _user1 = {confirm:1}
    this._user2=this.userService._user;
    this.userService
    .update(this._user2,_user1)
    .subscribe(
      (data) => {
        this._user2 = data
        console.log(this._user2)
      
      },
      error =>{
        console.log(error);
      }
    );
  }

}
