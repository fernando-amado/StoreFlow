import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  input,
  signal,
  ViewChild,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatSelectionList } from '@angular/material/list';
import { SharedModule } from '@storeflow/design-system';
import { Producto } from '../clientes.model';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [SharedModule, ReactiveFormsModule, CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss',
})
export class ProductosComponent implements AfterViewInit {
  controlBuscar = new FormControl('');
  productos = input<Producto[]>([]);
  productosSeleccionados = signal<Producto[]>([]);
  @ViewChild(MatSelectionList) listaProductos!: MatSelectionList;

  get cantidadProductosSeleccionados() {
    return this.productosSeleccionados().length;
  }

  ngAfterViewInit(): void {
    this.listaProductos.registerOnChange((producto) => {
      this.productosSeleccionados.set(producto);
    });
  }
}
