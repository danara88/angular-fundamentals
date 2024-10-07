import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/user.component';
import { UserComponent } from './pages/user/user.component';

/**
 * Declarar todas tus rutas aqui
 */
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'user/:id', // Pasando parametros a la ruta
    component: UserComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full', // Significa que debe hacer completamente match con el path "/"
  },
  {
    path: '**', // Si la ruta no existe, redireccionar a /home
    redirectTo: '/home',
  },
];

@NgModule({
  // Importamos el module RouterModule y añadimos las rutas como rutas padre
  imports: [RouterModule.forRoot(routes)],

  // IMPORTANTE: Exportar el modulo RouterModule
  exports: [RouterModule],
})
export class AppRoutingModule {}
