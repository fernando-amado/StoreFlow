import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Producto } from '../clientes.model';
import { ClientesUrls } from '../clientes.urls';
import { ClientesService } from '../services/clientes.service';
import { CrearPedidoComponent } from './crear-pedido.component';

describe('CrearPedidoComponent', () => {
  let component: CrearPedidoComponent;
  let fixture: ComponentFixture<CrearPedidoComponent>;
  let httpMock: HttpTestingController;

  const esperadoProductos: Producto[] = [
    {
      imagen: 'https://i.ibb.co/Qvcf4M7R/Leche.png',
      nombre: 'Leche ',
      precio: 20000,
      codigo: '123456789',
    },
    {
      imagen: 'https://i.ibb.co/BVxrgLNY/jugo.png',
      nombre: 'Jugo de naranja',
      precio: 10000,
      codigo: '987654321',
    },
  ];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearPedidoComponent, BrowserAnimationsModule],
      providers: [
        ClientesService,
        HttpTestingController,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();
    httpMock = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(CrearPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe obtener el listado de productos al iniciar el componente', () => {
    const peticion = httpMock.expectOne(ClientesUrls.obtenerProductos);
    peticion.flush(esperadoProductos);
    expect(peticion.request.method).toEqual('GET');
    expect(component.productos()).toEqual(esperadoProductos);
  });
});
