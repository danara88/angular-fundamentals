import { Component } from '@angular/core';

@Component({
  selector: 'app-users', // <app-users></app-users>
  styleUrl: './users.component.css',
  templateUrl: './users.component.html',
})
export class UsersComponent {
  public username: string = 'daniel.aranda';
}
