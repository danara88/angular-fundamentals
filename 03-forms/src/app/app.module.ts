import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-from/reactive-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TemplateFormComponent, ReactiveFormComponent],

  // FormsModule: Importar al usar formularios de tipo template
  // ReactiveFormsModule: Importar al usar formularios de tipo reactivo
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
