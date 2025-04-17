import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ResultadoCargaMasiva } from '../productos.model';
import { ProductosService } from '../productos.service';
import { ProductosUrls } from '../productos.urls';
import { RegistrarProductosMasivoComponent } from './registrar-productos-masivo.component';

describe('RegistrarProductosMasivoComponent', () => {
  let component: RegistrarProductosMasivoComponent;
  let fixture: ComponentFixture<RegistrarProductosMasivoComponent>;
  let httpMock: HttpTestingController;

  const resultadoCarga: ResultadoCargaMasiva = {
    errores: ['Alimentos SAS S.A.S.'],
    productos: [
      {
        nombre: 'Paca de leche x12 unidades',
        fabricanteAsociado: 'Alquería S.A.',
        codigo: 'A7X9B3Q5LZ82MND4VYKCJ6T1W0GFRP',
      },
    ],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        ProductosService,
        HttpTestingController,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
      imports: [RegistrarProductosMasivoComponent],
    }).compileComponents();
    httpMock = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(RegistrarProductosMasivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe ocultarse la seccion de "cargando-masivo" y mostrarse la seccion de "adjuntar-archivo", cuando la propiedad de "cargandoMasivo" este en false  ', () => {
    const cargandoMasivo = fixture.debugElement.query(
      By.css(`[data-testid="cargando-masivo"]`)
    );

    const adjuntarArchivo = fixture.debugElement.query(
      By.css(`[data-testid="adjuntar-archivo"]`)
    );
    expect(cargandoMasivo).toBeNull();
    expect(adjuntarArchivo).toBeTruthy();
  });
  it('Debe mostrarse la seccion de "cargando-masivo" y ocultarse la seccion de "adjuntar-archivo", cuando la propiedad de "cargandoMasivo" este en true  ', () => {
    component.cargandoMasivo = true;
    fixture.detectChanges();
    const cargandoMasivo = fixture.debugElement.query(
      By.css('[data-testid="cargando-masivo"]')
    );

    const adjuntarArchivo = fixture.debugElement.query(
      By.css('[data-testid="adjuntar-archivo"]')
    );
    expect(cargandoMasivo).toBeTruthy();
    expect(adjuntarArchivo).toBeNull();
  });

  it('debe deshabilitar el boton de "guardar-producto-masivo" cuando no hayan productos cargados', () => {
    const boton = fixture.debugElement.query(
      By.css('button[data-testid="boton-guardar-producto-masivo"]')
    );
    expect(boton.nativeElement.disabled).toBeTruthy();
  });

  it('debe habilitarse el boton de "guardar-producto-masivo" cuando hayan productos cargados', () => {
    const boton = fixture.debugElement.query(
      By.css('button[data-testid="boton-guardar-producto-masivo"]')
    );
    component.resultadoCarga.set(resultadoCarga);
    fixture.detectChanges();
    expect(boton.nativeElement.disabled).toBeFalsy();
  });

  it('debe cargar el archivo, cuando se cargue un archivo "producto-cargar-masivo"  ', () => {
    const cargar = fixture.debugElement.query(
      By.css('[data-testid="producto-cargar-masivo"]')
    );
    const file = new File(['archivo'], 'archivo.csv', { type: 'text/csv' });

    const inputElement = cargar.nativeElement;
    Object.defineProperty(inputElement, 'files', {
      value: [file],
    });
    cargar.nativeElement.dispatchEvent(new Event('change'));
    const esperadoBody = new FormData();
    esperadoBody.append('file', file);
    const peticion = httpMock.expectOne(ProductosUrls.cargarProductosMasivo);

    expect(peticion.request.method).toEqual('POST');
    expect(peticion.request.body).toEqual(esperadoBody);
    peticion.flush(resultadoCarga);
    expect(component.resultadoCarga()).toEqual(resultadoCarga);
  });
});
