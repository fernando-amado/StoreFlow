import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {
  AuthService,
  TipoCategoria,
  Utilidades,
} from '@storeflow/design-system';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-admin-shell',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
  template: `<div class="column height-100">
    <app-header
      [rutaVolver]="rutaVolver"
      [mostrarAvatar]="true"
      [categoriaUsuario]="categoriaUsuario"
      [nombreUsuario]="nombreUsuario"
    ></app-header>
    <div class="contenido-mobile column">
      <router-outlet></router-outlet>
    </div>
  </div> `,
})
export class AdminShellComponent {
  //borrar
  nombreUsuario = 'Camilo Barreto';
  categoriaUsuario = TipoCategoria.Cliente;
  router = inject(Router);
  authService = inject(AuthService);
  constructor() {
    this.authService.obtenerDatosSesion();
  }

  get rutaVolver() {
    return this.router.url === '/home' ? '../login' : '../home';
  }

  get sesion() {
    return Utilidades.obtenerSesion();
  }
}
