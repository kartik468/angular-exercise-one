import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { User } from './models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[];
  user: User;
  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  onUserIdClick(userId: string) {
    this.router.navigate(['/users', userId]);
  }
}
