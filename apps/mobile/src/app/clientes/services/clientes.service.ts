import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Producto } from '../clientes.model';
import { ClientesUrls } from '../clientes.urls';
import { mockProductos } from '../mocks-clientes';

@Injectable()
export class ClientesService {
  http = inject(HttpClient);

  obtenerProductos(): Observable<Producto[]> {
    // return this.http.get<Producto[]>(ClientesUrls.obtenerProductos);
    return of(mockProductos);
  }
}
