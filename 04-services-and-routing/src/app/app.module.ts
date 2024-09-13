import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Pages imports
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { UsersComponent } from './pages/users/user.component';

@NgModule({
  // Importar los componentes que vamos a utilizar para este modulo (AppModule)
  declarations: [AppComponent, HomeComponent, UserComponent, UsersComponent],

  // Al usar rutas, tenemos que importar el modulo donde las tenemos declaradas: AppRoutingModule
  imports: [BrowserModule, AppRoutingModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
