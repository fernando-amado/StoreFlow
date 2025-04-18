import { patchState, withMethods } from '@ngrx/signals';
import { SignalsOf } from '@storeflow/design-system';
import { ClientesState, ProductoSeleccionado } from '../clientes.model';

export const actionsStore = withMethods(
  (state: SignalsOf<Partial<ClientesState>>) => ({
    asignarFiltroProductos: (filtroProducto: string | null) =>
      patchState(state, { filtroProducto }),
  })
);
