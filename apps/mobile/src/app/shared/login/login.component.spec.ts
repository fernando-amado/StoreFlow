import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter, Router } from '@angular/router';
import { TipoCategoria } from '@storeflow/design-system';
import { LoginRoutes } from '../../login/login.routes';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Partial<Router>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent, BrowserAnimationsModule],
      providers: [provideRouter(LoginRoutes)],
    }).compileComponents();
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('categoria', TipoCategoria.Cliente);
    jest.spyOn(router, 'navigateByUrl');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe desahabilitar el boton de ingresar cuando el formulario es invalido', () => {
    const boton = fixture.debugElement.query(
      By.css('button[data-testid="boton-ingresar"]')
    );
    expect(boton.nativeElement.disabled).toBeTruthy();
  });

  it('debe habilitar el boton de ingresar cuando el formulario es valido', () => {
    component.formulario.patchValue({
      correo: 'agusto@yomap.co',
      contrasena: '123456',
    });
    fixture.detectChanges();
    const boton = fixture.debugElement.query(
      By.css('button[data-testid="boton-ingresar"]')
    );
    expect(boton.nativeElement.disabled).toBeFalsy();
  });

  it('debe navegar a la ruta "registroCliente", cuando se haga clic en el botón "boton-registrate-aqui" y el tipo de categoria sea cliente', () => {
    const boton = fixture.debugElement.query(
      By.css('[data-testid="boton-registrate-aqui"]')
    );
    boton.nativeElement.click();
    console.log(component.configuracion);
    expect(TestBed.inject(Router).url).toBe('/registroCliente');
  });
});
