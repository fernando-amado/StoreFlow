import { MenuNavegacion } from './home.model';

export const listadoMenuNavegacion: MenuNavegacion[] = [
  {
    titulo: 'Fabricantes',
    iconoLista: 'account_circle',
    url: '/fabricantes',
  },
  {
    titulo: 'Productos',
    iconoLista: 'local_grocery_store',
    url: '/productos',
  },
  {
    titulo: 'Vendedores',
    iconoLista: 'monetization_on',
    url: '/vendedores',
  },
  {
    titulo: 'Planes de venta',
    iconoLista: 'request_quote',
    url: '/planesVenta',
  },
  {
    titulo: 'Informes',
    iconoLista: 'assignment',
    url: '/informes',
  },
  {
    titulo: 'Compras y bodegas',
    iconoLista: 'shopping_bag',
    url: '/comprasBodega',
  },
  {
    titulo: 'Análisis de tiendas',
    iconoLista: 'slow_motion_video',
    url: '/analisisTiendas',
  },
  {
    titulo: 'Programación de rutas',
    iconoLista: 'local_shipping',
    url: '/programacionRutas',
  },
];
