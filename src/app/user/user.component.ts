import { Component, OnInit } from '@angular/core';
import { UserService } from './user.services';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
  user: {name: string};
  isLoggedIn = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.user;
  }

}
