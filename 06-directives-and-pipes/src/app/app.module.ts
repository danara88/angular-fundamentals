import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentDirectiveComponent } from './components/component-directive/component-directive.component';
import { AttributeDirectivesComponent } from './components/attribute-directives/attribute-directives.component';
import { StructuralDirectivesComponent } from './components/structural-directives/structural-directives.component';
import { PipesExampleComponent } from './components/pipes-example/pipes-example.component';
import { ActiveUsersPipe } from './pipes/active-users.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ComponentDirectiveComponent,
    AttributeDirectivesComponent,
    StructuralDirectivesComponent,
    PipesExampleComponent,
    ActiveUsersPipe,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
