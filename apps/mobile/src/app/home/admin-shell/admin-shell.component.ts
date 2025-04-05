import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AuthService, Utilidades } from '@storeflow/design-system';

@Component({
  selector: 'app-admin-shell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-shell.component.html',
  styleUrl: './admin-shell.component.scss',
})
export class AdminShellComponent {
  authService = inject(AuthService);
  constructor() {
    this.authService.obtenerDatosSesion();
  }
}
