import { Component, inject } from '@angular/core';
import { SharedModule } from '@storeflow/design-system';
import { CardInformacionComponent } from '../../shared/card-informacion/card-informacion.component';
import { ProductosComponent } from '../productos/productos.component';
import { ClientesService } from '../services/clientes.service';
import { ClientesStore } from '../state';

@Component({
  selector: 'app-crear-pedido',
  standalone: true,
  imports: [SharedModule, CardInformacionComponent, ProductosComponent],
  providers: [ClientesService],
  template: `<div class="p-16 column gap-20 heigth-100">
    <app-card-informacion
      [titulo]="titulo"
      [descripcion]="descripcion"
    ></app-card-informacion>
    <div class="flex-1">
      <mat-tab-group
        color="accent"
        class="heigth-100 tab-100 gap-8"
        animationDuration="0ms"
      >
        <mat-tab>
          <ng-template mat-tab-label i18n="producto.tabs.productos"
            >Productos</ng-template
          >
          <div class="heigth-100">
            <app-productos></app-productos>
          </div>
        </mat-tab>
        <mat-tab>
          <ng-template mat-tab-label i18n="producto.tabs.pedidosPendientes"
            >Pedidos pendientes</ng-template
          >
          pedidos pendientes
        </mat-tab>
      </mat-tab-group>
    </div>
  </div> `,
})
export class CrearPedidoComponent {
  store = inject(ClientesStore);

  get titulo() {
    return $localize`:@@tituloCrearPedido:Crear un pedido`;
  }

  get descripcion() {
    return $localize`:@@descripcionCrearPedido:Selecciona los productos que necesitas y la cantidad`;
  }

  constructor() {
    this.store.obtenerProductos();
  }
}
