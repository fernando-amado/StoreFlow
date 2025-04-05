import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter, Router } from '@angular/router';
import { TipoCategoria } from '../login.model';
import { LoginService } from '../login.service';
import { LoginUrls } from '../login.urls';
import { LoginClienteComponent } from './login-cliente.component';

describe('LoginClienteComponent', () => {
  let component: LoginClienteComponent;
  let fixture: ComponentFixture<LoginClienteComponent>;
  let httpMock: HttpTestingController;
  let router: Partial<Router>;
  const solicitud = { correo: 'hola@gmail.co', contrasena: '123456' };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginClienteComponent, BrowserAnimationsModule],
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
    fixture = TestBed.createComponent(LoginClienteComponent);
    component = fixture.componentInstance;
    jest.spyOn(router, 'navigateByUrl');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe obtener un token del servicio , cuando se llame el metodo "ingresar"  ', () => {
    component.ingresar(solicitud);
    const peticion = httpMock.expectOne(LoginUrls.ingresar);
    expect(peticion.request.method).toEqual('POST');
    expect(peticion.request.body).toEqual({
      datosIngreso: solicitud,
      tipoCategoria: TipoCategoria.cliente,
    });
  });

  it('debe redirigir a la ruta "/home" cuando se llame el metodo "ingresar" y el servicio devuelva un token', () => {
    component.ingresar(solicitud);
    const peticion = httpMock.expectOne(LoginUrls.ingresar);
    peticion.flush({ token: 'token' });
    expect(router.navigateByUrl).toHaveBeenCalledWith('/home');
  });
});
