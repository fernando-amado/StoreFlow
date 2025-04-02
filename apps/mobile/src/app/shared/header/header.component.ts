import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@storeflow/design-system';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedModule, RouterModule],
  template: `<mat-toolbar class="sombra-header">
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
      <img src="/images/icono-header-store-flow.svg" />
    </div>
  </mat-toolbar> `,
})
export class HeaderComponent {
  rutaVolver = input<string>();
}
