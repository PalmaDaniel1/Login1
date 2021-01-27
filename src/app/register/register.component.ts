import { Component, OnInit } from '@angular/core';
import { MensajeService } from '../service_men/mensaje.service';
import { UsersService } from '../users/users.service';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Usuario } from '../other/interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  celular: string;
  nombre: string;
  email: any;
  password: string;
  confirmPassword: string;
  passwordError: boolean;
  numero1: number;

  constructor(
    public userService: UsersService,
    public _MessageService: MensajeService,
    public router:Router
  ) { }
   public _user: Usuario
  register() {
    this.numerosaleatorio();
     var user = {correo:this.email, nombre: this.nombre, celular:this.celular,  password: this.password,  };
    this.userService.register(user).subscribe(
      
      data => {
      //this.userService.setToken(data.token);
      this.userService._user=data
      console.log(this.userService._user);
      //alert(data);

      //console.log(this.email);
      this.router.navigateByUrl("/Verificar");
    });   
  }

  contactForm(){
    var user = {email:this.email, nombre: this.nombre}
    console.log(user);
    this._MessageService.sendMessage(user).subscribe( () => {
      Swal.fire("Formulario de contacto", "Mensaje enviado correctamente",
       'success');
    })
  }
  
  numerosaleatorio() {
    var numero = [];
    for (let i=1; i<5;i++){
      var aleatorio = Math.round(Math.random()*10);
      numero[i] = aleatorio;
    }
    //this.numero1 = numero.;
    //console.log("Número aleatorio entre 0 y 10:"+numero1);
  }

  ejectutar_dos_funciones(){
  if(this.password == this.confirmPassword){
    this.register();
    this.numerosaleatorio();
    //this.contactForm();
  }else{
  Swal.fire("Las contraseña debe ser la misma ", "Intente nuevamente ",'error' );
  }
  }

}
