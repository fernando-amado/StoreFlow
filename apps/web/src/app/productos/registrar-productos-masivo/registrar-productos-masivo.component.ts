import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { SharedModule, Utilidades } from '@storeflow/design-system';
import { EstadoCarga } from '../productos.enum';
import { ResultadoCargaMasiva } from '../productos.model';
import { ProductosService } from '../productos.service';
import { ResultadoCargaMasivaComponent } from '../resultado-carga-masiva/resultado-carga-masiva.component';

@Component({
  selector: 'app-registrar-productos-masivo',
  standalone: true,
  imports: [SharedModule, ResultadoCargaMasivaComponent, CommonModule],
  providers: [ProductosService],
  templateUrl: './registrar-productos-masivo.component.html',
  styleUrl: './registrar-productos-masivo.component.scss',
})
export class RegistrarProductosMasivoComponent {
  service = inject(ProductosService);
  datosArchivo = signal<File>({} as File);
  estadoCargaEnum = EstadoCarga;
  estadoCarga = EstadoCarga.inicial;
  resultadoCarga = signal<ResultadoCargaMasiva>({} as ResultadoCargaMasiva);

  get tamanioArchivo() {
    return Utilidades.obtenerTamanioArchivo(this.datosArchivo().size);
  }

  get estadoCargaEsCompletado() {
    return this.estadoCarga === EstadoCarga.completado;
  }

  get disabledButton() {
    return !this.resultadoCarga().productos;
  }

  adjuntarArchivo(event: Event) {
    const elemento = event.target as HTMLInputElement;
    const archivo = elemento.files?.[0];
    if (archivo) {
      this.datosArchivo.set(archivo);
      this.estadoCarga = EstadoCarga.cargando;
      this.cargarProductosMasivoService(archivo);
    }
  }

  cargarProductosMasivoService(archivo: File) {
    this.service.cargarProductosMasivo(archivo).subscribe({
      next: (productos) => {
        this.estadoCarga = EstadoCarga.completado;
        this.resultadoCarga.set(productos);
      },
    });
  }
}
