import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@storeflow/design-system';
import { AlertaService } from 'libs/design-system/src/lib/components/alerta/alerta.service';
import { HeaderComponent } from '../../shared/header/header.component';
import { LoginComponent } from '../../shared/login/login.component';
import { DatosIngreso, TipoCategoria } from '../login.model';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-cliente',
  standalone: true,
  imports: [LoginComponent, HeaderComponent],
  providers: [LoginService, AlertaService, AuthService],
  template: `<div class="column heigth-100">
    <app-header rutaVolver="/"></app-header>
    <div class="contenido-mobile column">
      <app-login
        data-testid="app-login"
        class="flex-1 column"
        (ingresar)="ingresar($event)"
      ></app-login>
    </div>
  </div> `,
})
export class LoginClienteComponent {
  service = inject(LoginService);
  router = inject(Router);
  authService = inject(AuthService);

  ingresar(datosIngreso: DatosIngreso) {
    this.service.ingresar(datosIngreso, TipoCategoria.cliente).subscribe({
      next: ({ token }) => {
        this.authService.registrarToken(token);
        this.router.navigateByUrl('/home');
      },
    });
  }
}
