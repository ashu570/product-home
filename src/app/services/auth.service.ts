import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn =false;
  constructor(private client : HttpClient, private router : Router) { }
  public signup(data :any){
    return this.client.post("http://localhost:8080/signup",data)
  }
  public login(data:any){
    return this.client.post("http://localhost:8080/login",data)
  }
}
