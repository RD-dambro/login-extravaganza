import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title="Login";
  subtitle="Subtitle";
  loginForm: FormGroup;

  hide = true;

  constructor( private user: UserService) { 
    this.loginForm = new FormGroup({          
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]), 
    })
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
    this.loginForm.valid? this.user.loginWithCredentials(
      this.loginForm.get('email').value, 
      this.loginForm.get('password').value
    ): console.log("form is valid: " + this.loginForm.valid);
    
  }

  onSingIn()
  {
    //console.log(this.loginForm.get('password').value);
    this.user.redirectToSignin();
  }

}
