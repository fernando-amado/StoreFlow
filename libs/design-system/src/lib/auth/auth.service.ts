import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private tokenKey = 'store_token';

  registrarToken(token: string): void {
    const tokenAEnviar = `Bearer ${token}`;
    localStorage.setItem(this.tokenKey, tokenAEnviar);
  }

  obtenerToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  eliminarToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  tieneToken(): boolean {
    return !!this.obtenerToken();
  }
}
