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
        this.logi=data
        console.log(this.logi);
        if(this.email == this.logi.correo){
                
        this.userService.setToken(data.token);
        this.router.navigateByUrl("/");
        }else{
          Swal.fire('Correo incorrecto','alert','error')
        }
      },
      error => {
        console.log(error);
      }
    );
    
    
  }

}
