import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { passwordsMatchValidator } from 'src/app/shared/match.validator';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  title="Signin";
  subtitle="Subtitle";

  signinForm: FormGroup;

  disabled_button = true;

  hide = true;
  hide_repeat = true;

  constructor(private user: UserService) {
    this.signinForm = new FormGroup({          
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]), 
      //this is for creating user
      password_repeat: new FormControl('', [Validators.required, Validators.minLength(6)]),
      username : new FormControl('', [Validators.required])
    }, {validators: passwordsMatchValidator}
    )
   }

  ngOnInit(): void {
  }

  onLoginWithGoogle()
  {
    console.log("logging with Google");
    this.user.googleLogin();
  }
  
  onLogin()
  {
    this.user.redirectToLogin();
  }

  onSingIn()
  {
    //console.log(this.loginForm.get('password').value);
    //this.user.redirectToLogin();
    //console.log(this.signinForm.valid)
    this.user.createUser(
      this.signinForm.get('email').value, 
      this.signinForm.get('password').value,
      this.signinForm.get('username').value
    );
  }

}
