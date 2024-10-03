import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './users.component.html',
})
export class UsersComponent {
  public users: any;
  constructor(private userService: UserService) {
    // Consumiendo API para obtener los usuarios
    this.userService.getUsers().subscribe((users) => {
      console.log(users);
      this.users = users;
    });
  }
}
