import { Component } from '@angular/core';
import  { MensajeService } from './service_men/mensaje.service';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'login';
  //constructor(public _MessageService: MensajeService){

  /*contactForm(user){
    console.log(user);
    this._MessageService.sendMessage(user).subscribe( () => {
      Swal.fire("Formulario de contacto", "Mensaje enviado correctamente",
       'success');
    })
  */


}
