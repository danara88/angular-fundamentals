import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';

// @NgModule: Decorador para decirle a Angular que la clase AppModule será un módulo.
@NgModule({
  // Sirve para decalrar los componentes, pipes y directivas que serán parte de nuestro módulo
  declarations: [AppComponent, UsersComponent],

  // Sirve para importar solamente módulos
  imports: [BrowserModule, AppRoutingModule],

  // Sirve para inyectar servicios a nivel de módulo
  providers: [],

  // Sirve para exportar modulos, componentes, pipes y directivas
  exports: [],

  // Sirve para decirle a Angular, cuál será el componente que para a inicializar el módulo
  // al ser cargado.
  bootstrap: [AppComponent],
})
export class AppModule {}
