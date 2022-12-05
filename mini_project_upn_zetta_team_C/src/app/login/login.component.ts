import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubSink } from 'subsink';
import { AuthService } from '../auth/auth.service';

interface Payload {
  email: string,
  password: string
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private subs = new SubSink();
  loginForm: FormGroup = this.initFormGroup();

  constructor(
    private fb : FormBuilder,
    private authService : AuthService,
    private route : Router
    ) { }

  ngOnInit(): void {
  }

  initFormGroup(){
    return this.fb.group({
      email : ['',[Validators.required]],
      password : ['',[Validators.required]]
    })
  }

  login(){
    const payload: Payload = this.loginForm.value;
    this.subs.sink = this.authService.loginUser(payload.email,payload.password).subscribe(resp=>{
      console.log(resp)
      if(resp){
        this.route.navigate(['/home'])
      }
    })
  }
}
