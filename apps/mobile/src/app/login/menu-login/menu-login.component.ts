import { Component } from '@angular/core';
import { SharedModule } from '@storeflow/design-system';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-menu-login',
  standalone: true,
  imports: [HeaderComponent, SharedModule],
  templateUrl: './menu-login.component.html',
  styleUrl: './menu-login.component.scss',
})
export class MenuLoginComponent {}
