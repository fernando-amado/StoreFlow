import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  template: `<h1>Hola Mundo</h1>
    <button mat-button>Hello</button> `,
})
export class AppComponent {}
