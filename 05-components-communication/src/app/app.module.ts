import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentA } from './components/component-a/component-a.component';
import { ComponentB } from './components/component-b/component-b.component';

@NgModule({
  declarations: [AppComponent, ComponentA, ComponentB],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
