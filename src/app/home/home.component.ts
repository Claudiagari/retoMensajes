import { Component, OnInit, DoCheck } from '@angular/core';
import {RequestsService} from '../services/requests.service'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  providers : [RequestsService]
})
export class HomeComponent implements OnInit, DoCheck{
  public loggedIn = true;
  public user : any ={};
  public coments : any;
  constructor( private _requestsService : RequestsService ){
  }
  ngOnInit () {
    this._requestsService.userLogin().subscribe(
      result => {
        var data = Object.values(result)[1]
          this.user = data
      },
      error => {
        console.log(error)
      }
    )
    this._requestsService.getComnent().subscribe(
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
  ngDoCheck (){
    console.log('doCheck ejecutado')
  }
  sendMessage(message:string, event: Event ){ 
    this._requestsService.sendComent(message).subscribe(
      result =>{
          console.log(result)

      },
      error => {
          console.log(error)
      }
    )
  }
}