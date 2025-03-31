import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./login/login.routes').then((routes) => routes.LoginRoutes),
  },
];
