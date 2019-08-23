import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from "@angular/router";
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer '+ localStorage.getItem('token')
  })
};
@Injectable()

export class LoginService {
  
  
  public url:string;
  public urlUser :string;
  public urlComents : string;
  public urlSendComent : string;

  constructor(
    private _http: HttpClient
    ) {
        
        this.url = "api/login";
        this.urlUser = "api/get/user";
        this.urlComents = "/api/get/comments";
        this.urlSendComent = "/api/set/comment";
     }
  login(username:string, password:string) {
      return this._http.post(this.url , {
      email: username,
      password: password,  
    });
  }
  userLogin() {
    return this._http.get(this.urlUser, httpOptions)
  }

  getComnent(){
    return this._http.get(this.urlComents, httpOptions)
  }

  sendComent(mesagge:string){
      return this._http.post(this.urlSendComent, {
        body:mesagge
      },httpOptions)
  }

}