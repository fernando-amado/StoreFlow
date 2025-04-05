import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter, Router } from '@angular/router';
import { TipoCategoria } from '@storeflow/design-system';
import { LoginService } from '../login.service';
import { LoginUrls } from '../login.urls';
import { LoginVendedorComponent } from './login-vendedor.component';

describe('LoginVendedorComponent', () => {
  let component: LoginVendedorComponent;
  let fixture: ComponentFixture<LoginVendedorComponent>;
  let httpMock: HttpTestingController;
  let router: Partial<Router>;
  const solicitud = { correo: 'hola@gmail.co', contrasena: '123456' };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginVendedorComponent, BrowserAnimationsModule],
      providers: [
        LoginService,
        provideRouter([]),
        HttpTestingController,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();
    router = TestBed.inject(Router);
    httpMock = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(LoginVendedorComponent);
    component = fixture.componentInstance;
    jest.spyOn(router, 'navigateByUrl');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe obtener un token del servicio , cuando se llame el metodo "ingresar" y que tipo de categoria sea vendedor ', () => {
    component.ingresar(solicitud);
    const peticion = httpMock.expectOne(LoginUrls.ingresar);
    expect(peticion.request.method).toEqual('POST');
    expect(peticion.request.body).toEqual({
      datosIngreso: solicitud,
      tipoCategoria: TipoCategoria.Vendedor,
    });
  });
});
