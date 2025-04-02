import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { LoginComponent } from '../../shared/login/login.component';

@Component({
  selector: 'app-login-cliente',
  standalone: true,
  imports: [LoginComponent, HeaderComponent],
  template: `<div class="column heigth-100">
    <app-header rutaVolver="/"></app-header>
    <app-login class="flex-1 column"></app-login>
  </div> `,
})
export class LoginClienteComponent {}
