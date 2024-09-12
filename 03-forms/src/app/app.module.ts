import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-from/reactive-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TemplateFormComponent, ReactiveFormComponent],
  imports: [BrowserModule, FormsModule], // Al usar formularios de tipo template, debemos importar FormsModule
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
