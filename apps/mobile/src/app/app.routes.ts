import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.routes').then((routes) => routes.LoginRoutes),
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
