import { Component, inject } from '@angular/core';
import {
  AuthService,
  TipoCategoria,
  Utilidades,
} from '@storeflow/design-system';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-admin-shell',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './admin-shell.component.html',
  styleUrl: './admin-shell.component.scss',
})
export class AdminShellComponent {
  // quitar
  categoria = TipoCategoria.Vendedor;
  nombreUsuario = 'Camilo Barreto';
  authService = inject(AuthService);
  constructor() {
    this.authService.obtenerDatosSesion();
  }

  get sesion() {
    return Utilidades.obtenerSesion();
  }
}
