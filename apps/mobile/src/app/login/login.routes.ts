import { Route } from '@angular/router';
import { LoginClienteComponent } from './login-cliente/login-cliente.component';
import { MenuLoginComponent } from './menu-login/menu-login.component';

export const LoginRoutes: Route[] = [
  { path: '', component: MenuLoginComponent },
  {
    path: 'cliente',
    component: LoginClienteComponent,
  },
];
