import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

constructor(private formBuilder: FormBuilder, private authService : AuthService, private router : Router) { }

ngOnInit() {
  this.signupForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],
    address : [''],
    phone : [''],
    gender : ['']
  }, { validator: this.checkPasswords });
}
checkPasswords(group: FormGroup) {
  let pass = group.get('password')?.value;
  let confirmPass = group.get('confirmPassword')?.value;
  return pass === confirmPass ? null : { notSame: true }
}
submit(){
  if(this.signupForm.valid){
    delete this.signupForm.value.confirmPassword;
    this.authService.signup(this.signupForm.value).subscribe(
      {
        next : ()=>{
          this.router.navigateByUrl("/login")
        },
        error :()=>console.log
      }
    )
  }
}
}
