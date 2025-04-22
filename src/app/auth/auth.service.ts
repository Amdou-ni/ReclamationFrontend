import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'token';

  // Simule un login et stocke un faux JWT
  login(email: string, password: string): boolean {
    let fakeToken = '';

    if (email === 'client@mail.com' && password === '123') {
      fakeToken = this.encodeToken({ role: 'Client' });
    } else if (email === 'agent@mail.com' && password === '123') {
      fakeToken = this.encodeToken({ role: 'Agent' });
    } else if (email === 'admin@mail.com' && password === '123') {
      fakeToken = this.encodeToken({ role: 'Admin' });
    } else {
      return false;
    }

    localStorage.setItem(this.tokenKey, fakeToken);
    return true;
  }

  // Retourne le token
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Retourne le rôle du token décodé
  getRole(): string | null {
    const token = this.getToken();
    if (!token) return null;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.role || null;
    } catch (e) {
      return null;
    }
  }

  // Vérifie si un token est présent
  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  // Déconnexion
  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  // Encode un faux JWT
  private encodeToken(payload: any): string {
    const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
    const body = btoa(JSON.stringify(payload));
    return `${header}.${body}.signature`;
  }
}
