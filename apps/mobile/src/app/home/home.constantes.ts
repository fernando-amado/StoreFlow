import { ConfiguracionMenu } from './home.interface';

export const configuracionMenu: ConfiguracionMenu[] = [
  {
    titulo: $localize`:@@menuCrearPedido:Crear un pedido`,
    imagen: {
      src: 'assets/images/notas.svg',
      width: 34,
      height: 31,
    },
    ruta: 'clientes/crearPedido',
  },
  {
    titulo: $localize`:@@menuConsultarPedido:Consultar pedido`,
    imagen: { src: 'assets/images/icon-principal.svg', width: 33, height: 29 },
    ruta: 'clientes/consultarPedido',
  },
  {
    titulo: $localize`:@@menuEntregasProgramadas:Entregas programadas`,
    imagen: { src: 'assets/images/calendario.svg', width: 25, height: 28 },
    ruta: 'clientes/entregasProgramadas',
  },
];
