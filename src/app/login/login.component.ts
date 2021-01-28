import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Login } from '../other/interface';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  email : string;
  password: string;


  constructor(
    public userService: UsersService,
    public router: Router,
    private _http: HttpClient,
  ) { }

 ngOnInit(): void {

 }

   logi: Login={};  

  login(){
    var user = { correo: this.email };
    //console.log(user)
    this.userService 
    .login(user.correo)    
    .subscribe(
      (data) => {
        this.userService._user=data
        console.log(this.userService._user);
        if(this.password == this.userService._user.password && this.email == this.userService._user.correo){
        console.log("si coincide la contraseña");
          if (this.userService._user.confirm == 0) {
            console.log("if de confirm");
            this.router.navigateByUrl("/password");
          }else{
            if(this.userService._user.confirm == 1){
              this.router.navigateByUrl("/");
            }
          }
        //this.userService.setToken(data.token);
        //this.router.navigateByUrl("/");
        }else{
          Swal.fire('Correo ó contraseña incorrecta','alert','error')
        }
      },
      error => {
        console.log(error);
      }
    );
    
    
  }

}
