import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../other/interface';
import { MensajeService } from '../service_men/mensaje.service';
import { UsersService } from '../users/users.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-verificar',
  templateUrl: './verificar.component.html',
  styleUrls: ['./verificar.component.scss']
})
export class VerificarComponent {

  constructor(
    public userService: UsersService,
    public router: Router,
    private _http: HttpClient,
    public _MessageService: MensajeService
  ) { }

  pasouser1: Usuario;
  
  reenviar(){
    var user = this.userService._user
    console.log(user)
    this._MessageService.sendMessage(user)
    .subscribe( () => {
      Swal.fire("Reenvio de Mensaje", "Mensaje enviado correctamente",
       'success');
    })
    
  }

  

}
