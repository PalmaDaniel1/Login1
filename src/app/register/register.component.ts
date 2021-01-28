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
export class RegisterComponent implements OnInit{
  celular: string;
  nombre: string;
  email: any;
  password: string;
  confirmPassword: string;
  passwordError: boolean;
  aleatorio: any;

  constructor(
    public userService: UsersService,
    public _MessageService: MensajeService,
    public router:Router
  ) { }

  ngOnInit(){
    this.numerosaleatorio();
  }
   public _user: Usuario

   numerosaleatorio() {
    this.userService
    .aleatorio()
    .subscribe(
      data => {
        //console.log(data)
        this.aleatorio = data
        //console.log(this.aleatorio)
      }
    );
    }


  register() {
    console.log(this.aleatorio);

     var user = {correo:this.email, nombre: this.nombre, celular:this.celular,  password: this.password, aleatorio: this.aleatorio};
    this.userService.register(user).subscribe(
      
      data => {
      //this.userService.setToken(data.token);
      this.userService._user=data;
      console.log(this.userService._user);
      //alert(data);

      //console.log(this.email);
      this.router.navigateByUrl("/Verificar");
    });   
  }

  contactForm(){
    var user = {email:this.email, nombre: this.nombre, aleatorio: this.aleatorio}
    console.log(user);
    this._MessageService.sendMessage(user).subscribe( () => {
      Swal.fire("Formulario de contacto", "Mensaje enviado correctamente",
       'success');
    })
  }
  
  ejectutar_dos_funciones(){
  if(this.password == this.confirmPassword){
    this.register();
    this.contactForm();
  }else{
  Swal.fire("Las contraseña debe ser la misma ", "Intente nuevamente ",'error' );
  }
  }

}
