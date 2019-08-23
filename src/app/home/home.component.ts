import { Component } from '@angular/core';
import {LoginService} from '../services/login.service'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  providers : [LoginService]
})
export class HomeComponent {
  public loggedIn = true;
  public user : any ={};
  public coments : any;
  constructor( private _loginService : LoginService ){
  }
  ngOnInit () {
    this._loginService.userLogin().subscribe(
      result => {
        var data = Object.values(result)[1]
          this.user = data
      },
      error => {
        console.log(error)
      }
    )
    this._loginService.getComnent().subscribe(
      result => {
        var data = Object.values(result)[1]
          this.coments = data
          console.log(this.coments)
      },
      error => {
        console.log(error)
      }
    )
  }
  sendMessage(message:string, event: Event ){ 
    this._loginService.sendComent(message).subscribe(
      result =>{
          console.log(result)
      },
      error => {
          console.log(error)
      }
    )
  }
}