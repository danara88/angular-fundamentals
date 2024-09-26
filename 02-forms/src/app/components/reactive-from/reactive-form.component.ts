import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
})
export class ReactiveFormComponent {
  // Creación del formulario para crear un prodcuto
  createProductForm: FormGroup = new FormGroup({
    // Name field
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),

    // Description field
    description: new FormControl('', [Validators.required]),

    // Category field
    category: new FormControl('', [Validators.required]),

    // Statis field
    status: new FormControl(false, []),
  });

  onSubmit() {
    if (this.createProductForm.invalid) {
      console.log('Formulario invalido!');
      return;
    }

    console.log(this.createProductForm.controls);
  }
}
