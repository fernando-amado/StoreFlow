import { Route } from '@angular/router';
import { LoginClienteComponent } from './login-cliente/login-cliente.component';
import { LoginVendedorComponent } from './login-vendedor/login-vendedor.component';
import { MenuLoginComponent } from './menu-login/menu-login.component';
import { RegistroClienteComponent } from './registro-cliente/registro-cliente.component';

export const LoginRoutes: Route[] = [
  { path: '', component: MenuLoginComponent },
  {
    path: 'cliente',
    component: LoginClienteComponent,
  },
  {
    path: 'vendedor',
    component: LoginVendedorComponent,
  },
  {
    path: 'registroCliente',
    component: RegistroClienteComponent,
  },
];
