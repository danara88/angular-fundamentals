import { Component } from '@angular/core';

// @Component: Decorar para decirle a Angular que la clase AppComponent será un componente.
@Component({
  // Nombre del tag que tendrá nuetro componente para incluirlo en nuestro archivo HTML.
  // Ejemplo: <app-root><app-root/>
  selector: 'app-root',

  // Este es el HTML asociado al componente
  templateUrl: './app.component.html',

  // Este es la hoja de estilos asociada al componente
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '01-modules-and-components';
}
