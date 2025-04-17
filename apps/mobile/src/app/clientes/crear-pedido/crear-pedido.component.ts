import { Component, inject, signal } from '@angular/core';
import { SharedModule } from '@storeflow/design-system';
import { CardInformacionComponent } from '../../shared/card-informacion/card-informacion.component';
import { Producto } from '../clientes.model';
import { ProductosComponent } from '../productos/productos.component';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-crear-pedido',
  standalone: true,
  imports: [SharedModule, CardInformacionComponent, ProductosComponent],
  providers: [ClientesService],
  template: `<div class="p-16 column gap-20 height-100">
    <app-card-informacion
      [titulo]="titulo"
      [descripcion]="descripcion"
    ></app-card-informacion>
    <div class="flex-1">
      <mat-tab-group color="accent" class="height-100 tab-100 gap-8">
        <mat-tab>
          <ng-template mat-tab-label i18n="producto.tabs.productos"
            >Productos</ng-template
          >
          <div class="height-100">
            <app-productos
              class="height-100"
              [productos]="productos()"
            ></app-productos>
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
  service = inject(ClientesService);
  productos = signal<Producto[]>([]);

  get titulo() {
    return $localize`:@@tituloCrearPedido:Crear un pedido`;
  }

  get descripcion() {
    return $localize`:@@descripcionCrearPedido:Selecciona los productos que necesitas y la cantidad`;
  }

  constructor() {
    this.obtenerProductos();
  }

  obtenerProductos() {
    this.service.obtenerProductos().subscribe((productos) => {
      this.productos.set(productos);
    });
  }
}
