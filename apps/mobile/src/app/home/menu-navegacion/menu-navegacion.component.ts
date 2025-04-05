import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from '@storeflow/design-system';
import { configuracionMenu } from '../home.constantes';

@Component({
  selector: 'app-menu-navegacion',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './menu-navegacion.component.html',
})
export class MenuNavegacionComponent {
  listadoMenu = configuracionMenu;
  nombreUsuario = input<string>();
  router = inject(Router);

  navegar(ruta: string) {
    this.router.navigateByUrl(`/home/${ruta}`);
  }
}
