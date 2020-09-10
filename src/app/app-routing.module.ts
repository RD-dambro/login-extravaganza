import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { SigninComponent } from 'src/app/signin/signin.component';
import { WelcomeComponent } from 'src/app/welcome/welcome.component';
import { AngularFireAuthGuard, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToWelcome = () => redirectLoggedInTo(['welcome']);
const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    canActivate: [AngularFireAuthGuard], 
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'login', 
    component: LoginComponent
  }, 
  {
    path: 'signin', component: SigninComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
