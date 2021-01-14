import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../other/interface';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-verificar',
  templateUrl: './verificar.component.html',
  styleUrls: ['./verificar.component.scss']
})
export class VerificarComponent implements OnInit {

  constructor(
    public userService: UsersService,
    public router: Router,
    private _http: HttpClient
  ) { }

  ngOnInit(): void {
    //console.log(this._user)
    this.verificar();
  }
  pasouser1: Usuario
  
  verificar(){
    this.pasouser1=this.userService._user
    console.log(this.pasouser1.correo);
  }

}
