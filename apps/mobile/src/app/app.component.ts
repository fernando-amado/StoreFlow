import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  template: ` <img src="images/icon-principal.svg" alt="Hola" />
    <router-outlet> </router-outlet>`,
})
export class AppComponent {}
