import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentDirectiveComponent } from './components/component-directive/component-directive.component';
import { AttributeDirectivesComponent } from './components/attribute-directives/attribute-directives.component';
import { StructuralDirectivesComponent } from './components/structural-directives/structural-directives.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentDirectiveComponent,
    AttributeDirectivesComponent,
    StructuralDirectivesComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
