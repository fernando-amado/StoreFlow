import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule, TipoCategoria } from '@storeflow/design-system';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedModule, RouterModule],
  styleUrl: './header.component.scss',
  template: `<mat-toolbar class="sombra-header justify-content-between">
    <div class="row align-items-center gap-8">
      @if (rutaVolver()) {
        <button
          data-testid="boton-volver"
          size="small"
          name="boton-volver"
          mat-icon-button
          [routerLink]="rutaVolver()"
        >
          <mat-icon class="icon-size-16 color-grey">arrow_back</mat-icon>
        </button>
      }
      <img src="assets/images/icono-header-store-flow.svg" />
    </div>
    @if (nombreUsuario()) {
      <div class="row gap-4 align-items-center" data-testid="seccion-avatar">
        <p class="color-grey-700">{{ nombreUsuario() }}</p>

        <div class="avatar">
          <mat-icon>person</mat-icon>
        </div>
      </div>
    }
  </mat-toolbar> `,
})
export class HeaderComponent {
  rutaVolver = input<string>();
  nombreUsuario = input<string>();
}
