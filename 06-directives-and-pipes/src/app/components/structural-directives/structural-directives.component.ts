import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { StatusEnum } from '../../models/status.enum';

/**
 * - **Structural Directive:** Estas directivas son utilizadas para manipular el DOM
 * y deciden qué se va a mostrar en la vista y que no.
 *
 * Ejemplo: *ngFor, *ngIf, \*ngSwitch.
 */

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrl: './structural-directives.component.css',
})
export class StructuralDirectivesComponent {
  public users: User[] = [
    {
      id: 1,
      name: 'Juan',
      surname: 'Alberto',
    },
    {
      id: 2,
      name: 'Beto',
      surname: 'Hernandez',
    },
    {
      id: 5,
      name: 'Fernanda',
      surname: 'Escobedo',
    },
  ];

  public isLoading: boolean = false;

  public status: StatusEnum = StatusEnum.COMPLETED;

  public statusEnum: typeof StatusEnum = StatusEnum;
}
