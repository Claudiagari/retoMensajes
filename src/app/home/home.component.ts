import { Component } from '@angular/core';
import {LoginService} from '../services/login.service'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  providers : [LoginService]
})
export class HomeComponent {
  constructor( private _loginService : LoginService ){
  }
  ngOnInit () {
    this._loginService.userLogin().subscribe(
      result => {
            console.log(result)
      },
      error => {
        console.log(error)
      }
    )
  }

}