import { ResultadoCargaMasiva } from './productos.model';
//borrar cuando se tenga las rutas
export const productosSimulados: ResultadoCargaMasiva = {
  errores: ['Alimentos SAS S.A.S.'],
  productos: [
    {
      nombre: 'Paca de leche x12 unidades',
      fabricanteAsociado: 'Alquería S.A.',
      codigo: 'A7X9B3Q5LZ82MND4VYKCJ6T1W0GFRP',
    },
    {
      nombre: 'Chocolatinas JET x40 unidades',
      fabricanteAsociado: 'Grupo Nutresa S.A.',
      codigo: 'MND4VYKCJ6T1W0GFRP',
    },
    {
      nombre: 'Galletas Festival x 10 unidades',
      fabricanteAsociado: 'Grupo Nutresa S.A.',
      codigo: 'A7X9B3Q5LZ82MND4VY',
    },
  ],
};

export const fabricantesSimulados = [
  { id: 1, nombre: 'Fabricante 1' },
  { id: 2, nombre: 'Fabricante 2' },
];
