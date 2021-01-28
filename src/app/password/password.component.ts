import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users/users.service';

import { Usuario } from '../other/interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
  password: string;

  constructor(
    public userService: UsersService,
    public router: Router,
  ) { }

  ngOnInit(): void {
  }
  user:Usuario
  _user2: Usuario;
  verificar_passsword(){
    this.user = this.userService._user;
    console.log(this.user.aleatorio, this.password);
    if (this.user.aleatorio == this.password) {
      console.log(this.user.password);
      var _user1 = {confirm:1}
      this.userService
      .update(this.user,_user1)
      .subscribe(
        (data) => {
          this._user2 = data
          Swal.fire("Validación", " Acción realizada correctamente",
       'success');
        },
        error => {
          console.log(error);
        }
      );
    }
  }

}
