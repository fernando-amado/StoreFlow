import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DatosIngreso, TipoCategoria } from './login.model';
import { LoginUrls } from './login.urls';

@Injectable()
export class LoginService {
  http = inject(HttpClient);

  ingresar(
    datosIngreso: DatosIngreso,
    tipoCategoria: TipoCategoria
  ): Observable<{ token: string }> {
    //cambiar por el servicio real
    return this.http.post<{ token: string }>(LoginUrls.ingresar, {
      datosIngreso,
      tipoCategoria,
    });
    // return of({ token: 'hola soy token' });
  }
}
