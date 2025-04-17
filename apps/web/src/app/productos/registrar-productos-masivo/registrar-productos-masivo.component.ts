import { Component, inject, signal } from '@angular/core';

import { SharedModule, Utilidades } from '@storeflow/design-system';
import { ResultadoCargaMasiva } from '../productos.model';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-registrar-productos-masivo',
  standalone: true,
  imports: [SharedModule],
  providers: [ProductosService],
  templateUrl: './registrar-productos-masivo.component.html',
  styleUrl: './registrar-productos-masivo.component.scss',
})
export class RegistrarProductosMasivoComponent {
  service = inject(ProductosService);
  datosArchivo = signal<File>({} as File);
  cargandoMasivo = false;
  resultadoCarga = signal<ResultadoCargaMasiva>({
    productos: [],
    errores: [],
  });

  get tamanioArchivo() {
    return Utilidades.obtenerTamanioArchivo(this.datosArchivo().size);
  }

  get disabledButton() {
    return this.resultadoCarga().productos.length === 0;
  }

  adjuntarArchivo(event: Event) {
    const elemento = event.target as HTMLInputElement;
    const archivo = elemento.files?.[0];
    if (archivo) {
      this.datosArchivo.set(archivo);
      this.cargandoMasivo = true;
      this.cargarProductosMasivoService(archivo);
    }
  }

  cargarProductosMasivoService(archivo: File) {
    this.service.cargarProductosMasivo(archivo).subscribe({
      next: (productos) => {
        this.cargandoMasivo = false;
        this.resultadoCarga.set(productos);
      },
    });
  }
}
