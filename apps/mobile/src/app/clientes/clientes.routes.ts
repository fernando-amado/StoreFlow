import { Route } from '@angular/router';
import { ConsultarPedidoComponent } from './consultar-pedido/consultar-pedido.component';
import { CrearPedidoComponent } from './crear-pedido/crear-pedido.component';
import { EntregasProgramadasComponent } from './entregas-programadas/entregas-programadas.component';
import { MenuNavegacionClientesComponent } from './menu-navegacion-clientes/menu-navegacion-clientes.component';
import { ModalAgregarProductoService } from './modal-agregar-producto/modal-agregar-producto.service';
import { ClientesService } from './services/clientes.service';
import { ClientesStore } from './state';

export const ClientesRoutes: Route[] = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MenuNavegacionClientesComponent,
      },
      {
        path: 'crearPedido',
        component: CrearPedidoComponent,
      },
      {
        path: 'consultarPedido',
        component: ConsultarPedidoComponent,
      },
      {
        path: 'entregasProgramadas',
        component: EntregasProgramadasComponent,
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
    providers: [ClientesStore, ClientesService, ModalAgregarProductoService],
  },
];
