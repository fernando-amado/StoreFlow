import { Component, inject, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {
  AlertaService,
  SharedModule,
  TipoAlerta,
} from '@storeflow/design-system';
import { MensajesProductos } from '../productos.contantes';
import { ListadoFabricantes, RegistrarProducto } from '../productos.model';
import { ProductosService } from '../productos.service';
import { RegistrarProductosMasivoComponent } from '../registrar-productos-masivo/registrar-productos-masivo.component';

@Component({
  selector: 'app-registrar-productos',
  standalone: true,
  imports: [SharedModule, ReactiveFormsModule],
  providers: [ProductosService],
  templateUrl: './registrar-productos.component.html',
})
export class RegistrarProductosComponent {
  service = inject(ProductosService);
  alertaService = inject(AlertaService);
  listadoFabricantes = signal<ListadoFabricantes[]>([]);
  dialog = inject(MatDialog);
  formulario = new FormGroup({
    nombre: new FormControl('', [
      Validators.required,
      Validators.maxLength(150),
    ]),
    fabricanteAsociado: new FormControl<number | null>(null, [
      Validators.required,
    ]),
    codigo: new FormControl<number | null>(null, [
      Validators.required,
      Validators.maxLength(50),
    ]),
  });

  constructor() {
    this.obtenerListadoFabricantes();
  }

  obtenerListadoFabricantes() {
    this.service.obtenerListadoFabricantes().subscribe({
      next: (fabricantes) => {
        this.listadoFabricantes.set(fabricantes);
      },
    });
  }

  guardarProducto() {
    const datosFormulario = this.formulario.value as RegistrarProducto;
    this.service.guardarProducto(datosFormulario).subscribe({
      next: () => {
        this.formulario.reset();
        this.alertaService.abrirAlerta({
          tipo: TipoAlerta.Success,
          descricion: MensajesProductos.registroProductoExitoso,
        });
      },
    });
  }

  abrirModalRegistrarMasivo() {
    this.dialog.open(RegistrarProductosMasivoComponent, {
      width: '1067px',
      height: '593px',
    });
  }
}
