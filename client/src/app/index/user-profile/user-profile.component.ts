import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(private service: AuthService) { }

  user;

  ngOnInit() {
this.profile();
  }
  profile() {
    this.user = this.service.getToken();
    this.service.getUser(this.user._id);
  }
}
