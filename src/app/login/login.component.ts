import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { LoginService } from '../services/login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent  {
  constructor(private loginService: LoginService){
    
  }
  ngOnInit() {
    
    this.loginService.login('claudia.garibotto@gmail.com', 'p_ucic_1257').subscribe(
      res => {
        console.log(res);      
    });
  }

}