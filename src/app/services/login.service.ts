import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from "@angular/router";
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Injectable()

export class LoginService {
  public url:string;
  
  constructor(
    private _http: HttpClient
    ) {
        this.url = "https://ti.ucic.pe/";
     }

  login(username:string, password:string) {
   
    return this._http.post(this.url +'api/login', {
      email: username,
      password: password,  
    });
  }
}