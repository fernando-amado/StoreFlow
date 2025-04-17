import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultadoCargaMasiva } from '../productos.model';
import { ResultadoCargaMasivaComponent } from './resultado-carga-masiva.component';

describe('ResultadoCargaMasivaComponent', () => {
  let component: ResultadoCargaMasivaComponent;
  let fixture: ComponentFixture<ResultadoCargaMasivaComponent>;
  const productosSimulados: ResultadoCargaMasiva = {
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
      imports: [ResultadoCargaMasivaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ResultadoCargaMasivaComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('resultadoCarga', productosSimulados);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
