import { Component } from '@angular/core';
import { SharedModule } from '@storeflow/design-system';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedModule],
  template: `<mat-toolbar class="sombra-header">
    <img src="/images/icono-header-store-flow.svg" alt="" />
  </mat-toolbar> `,
})
export class HeaderComponent {}
