import { Component } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrl: './pipes-example.component.css',
})
export class PipesExampleComponent {
  public currentDate = new Date();
  public users: User[] = [
    {
      id: 1,
      name: 'Juan',
      surname: 'Alberto',
      isActive: false,
    },
    {
      id: 2,
      name: 'Beto',
      surname: 'Hernandez',
      isActive: true,
    },
    {
      id: 5,
      name: 'Fernanda',
      surname: 'Escobedo',
      isActive: true,
    },
    {
      id: 6,
      name: 'Fernanda',
      surname: 'Escobedo',
      isActive: false,
    },
  ];
}
