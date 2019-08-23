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
  
  constructor(
    private _http: HttpClient
    ) {
        
        this.url = "api/login";
        this.urlUser = "api/get/user"
        
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
}