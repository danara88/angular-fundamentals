import { Component } from '@angular/core';
import { StatusEnum } from '../../models/status.enum';

/**
 *
 * - **Attribute Directive:** Estas modfican la vista y el comportamiento de elementos en el DOM.
 * Ejemplo¡: NgClass, NgStyle, NgModle.
 */

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrl: './attribute-directives.component.css',
})
export class AttributeDirectivesComponent {
  public status: StatusEnum = StatusEnum.PENDING;
}
