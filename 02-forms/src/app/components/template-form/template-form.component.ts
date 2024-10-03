import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
})
export class TemplateFormComponent {
  // Este es nuestro modelo que vamos a manipular usando nuestro formulario.
  // Asignarle sus valores iniciales.
  product: Product = {
    name: '',
    description: '',
    category: '',
    status: false,
  };

  onSubmit(form: NgForm) {
    console.log(form);
    if (form.invalid) {
      console.log('El formulario es invalido!');
      return;
    }

    // Acceder al valor de cada uno de los inputs
    console.log('Values:');
    console.log(form.controls['name'].value);
    console.log(form.controls['description'].value);
    console.log(form.controls['category'].value);

    // Objeto product con los valores actualizados
    console.log('Product object');
    console.log(this.product);
  }
}
