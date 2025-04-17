export interface ListadoFabricantes {
  id: number;
  nombre: string;
}

export interface RegistrarProducto {
  nombre: string;
  fabricanteAsociado: number;
  codigo: number;
}

export interface Producto {
  nombre: string;
  fabricanteAsociado?: string;
  codigo: string;
}

export interface ResultadoCargaMasiva {
  errores: string[];
  productos: Producto[];
}
