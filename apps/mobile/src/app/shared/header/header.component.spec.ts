import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe ocultarse el botón de volver si no hay ruta', () => {
    fixture.componentRef.setInput('rutaVolver', null);
    fixture.detectChanges();

    const botonVolver = fixture.debugElement.query(
      By.css(`[name="boton-volver"]`)
    );
    expect(botonVolver).toBeNull();
  });
  it('Debe mostrarse el botón de volver si tiene alguna ruta', () => {
    fixture.componentRef.setInput('rutaVolver', 'Home');
    fixture.detectChanges();

    const botonVolver = fixture.debugElement.query(
      By.css(`[name="boton-volver"]`)
    );
    expect(botonVolver).toBeTruthy();
  });
});
