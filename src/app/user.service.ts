import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afAuth: AngularFireAuth, private router: Router) { 
    afAuth.onAuthStateChanged(user=>
      {
        if(user)
        {
          if(user.displayName) router.navigate(['/'])
        } else {
          router.navigate(['login'])
        }
      });
  }
  
  getUser()
  {
    //console.log(this.afAuth.user.);
    return this.afAuth.currentUser;
  }

  createUser(email : string, password : string, username : string){
    console.log('creating user...');

    this.afAuth.createUserWithEmailAndPassword(email, password) //create user
      .then( //after user is created...
        ()=>this.afAuth.currentUser //get current user
        .then(
          x=>{x.updateProfile({displayName: username}) //update
            .then( //after user is updated...
              ()=> this.router.navigate(['/'])  //redirect
            )
          }
        ) 
      );
  }

  loginWithCredentials(email, password)
  {
    this.afAuth.signInWithEmailAndPassword(email, password);
  }

  redirectToLogin()
  {
    this.router.navigate(['login']);
  }

  redirectToSignin()
  {
    this.router.navigate(['signin']);
  }

  googleLogin()
  {
    this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout(){
    this.afAuth.signOut();
  }
}
