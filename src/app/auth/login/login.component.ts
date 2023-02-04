import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  spinning:boolean = false;
  constructor(private authService : AuthService, private router : Router){}
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  get username() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  onSubmit() {
    this.spinning = true;
    if(this.loginForm.valid){
    this.authService.login(this.loginForm.value).subscribe(
      {
        next : ()=>{
          this.authService.isLoggedIn = true;
          this.spinning = false;
          this.router.navigateByUrl("");
        }
        ,
        error : ()=>{
          this.spinning = false;
          this.loginForm.setErrors({invalidData:{invalid:true}})
        }
      }
    )
    }
  }
}