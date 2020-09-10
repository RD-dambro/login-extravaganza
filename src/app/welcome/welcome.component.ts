import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  displayName;
  constructor(private user: UserService) { 
    user.getUser().then(data=> this.displayName = data.displayName);
  }

  ngOnInit(): void {
  }

  logout()
  {
    this.user.logout();
  }

}
