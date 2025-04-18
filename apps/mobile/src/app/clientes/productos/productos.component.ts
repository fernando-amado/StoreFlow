import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@storeflow/design-system';
import { Producto } from '../clientes.model';
import { ModalAgregarProductoService } from '../modal-agregar-producto/modal-agregar-producto.service';
import { ClientesStore } from '../state';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [SharedModule, ReactiveFormsModule, CommonModule],
  providers: [ModalAgregarProductoService],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss',
})
export class ProductosComponent {
  modalAgregarProductoService = inject(ModalAgregarProductoService);
  store = inject(ClientesStore);
  controlBuscar = new FormControl('');

  constructor() {
    this.controlBuscar.valueChanges.subscribe((valor) => {
      this.store.asignarFiltroProductos(valor);
    });
  }

  seleccionarProducto(producto: Producto) {
    producto.seleccionado
      ? this.store.seleccionarProducto(producto)
      : this.modalAgregarProductoService.abrirModal(producto);
  }
}
