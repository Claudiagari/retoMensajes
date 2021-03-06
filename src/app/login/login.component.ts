import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { RequestsService } from '../services/requests.service';


@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent  {
  
  constructor(private requestsService: RequestsService,private router:Router){
   }
  logIn(username: string, password: string, event: Event) {
    event.preventDefault(); 
  
    this.requestsService.login(username, password).subscribe(

      result => {
        var token = Object.values(result)[1].token;
        var id = String(token)
          localStorage.setItem('token', id)
      },
      error => {
        console.error(error);
      },

      () => this.navigate()
    );

  }

  navigate() {
    this.router.navigateByUrl('/home');
  }
 
  }
