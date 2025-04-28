import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

interface UserData {
  role: string;
  type: string;
  id: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  private readonly USER_DATA_KEY = 'user_data';

  constructor(private router: Router) {}

  // Méthode de connexion
  login(email: string, password: string): { success: boolean, role?: string, message?: string } {
    let userData: UserData | null = null;

    // Connexion Client STB
    if (email === 'client@stb.com' && password === 'stb123') {
      userData = { role: 'Client', type: 'ClientSTB', id: '123' };
    }
    // Connexion Agent
    else if (email === 'agent@mail.com' && password === '123') {
      userData = { role: 'Agent', type: 'Agent', id: '456' };
    }
    // Connexion Admin
    else if (email === 'admin@mail.com' && password === '123') {
      userData = { role: 'Admin', type: 'Admin', id: '789' };
    }
    // Authentification échouée
    else {
      return { success: false, message: 'Identifiants incorrects.' };
    }

    // Sauvegarder les données de l'utilisateur et le token dans localStorage
    localStorage.setItem(this.TOKEN_KEY, 'fake-jwt-token');
    localStorage.setItem(this.USER_DATA_KEY, JSON.stringify(userData));
    return { success: true, role: userData.role };
  }

  // Récupérer le rôle de l'utilisateur actuel
  getRole(): string | null {
    const userData = this.getUserData();
    return userData?.role || null;
  }

  // Récupérer le token JWT
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  // Vérifier si l'utilisateur est connecté
  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  // Vérifier si l'utilisateur est un Client STB
  isClientSTB(): boolean {
    return this.getUserType() === 'ClientSTB';
  }

  // Vérifier si l'utilisateur est un Non-Client
  isPublicUser(): boolean {
    return !this.isLoggedIn() || this.getUserType() === 'NonClient';
  }

  // Déconnexion
  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_DATA_KEY);
    this.router.navigate(['/auth/login']);
  }

  // Méthodes privées pour récupérer les données de l'utilisateur
  private getUserData(): UserData | null {
    const data = localStorage.getItem(this.USER_DATA_KEY);
    return data ? JSON.parse(data) : null;
  }

  private getUserType(): string | null {
    const userData = this.getUserData();
    return userData?.type || null;
  }

  // Obtenir l'ID de l'utilisateur
  getClientIdFromToken(): string | null {
    const userData = this.getUserData();
    return userData?.id || null;
  }

  // Obtenir l'utilisateur actuel
  getCurrentUser(): UserData | null {
    return this.getUserData();
  }

  // Méthode générique pour obtenir l'ID de l'utilisateur
  getUserId(): string {
    const user = this.getCurrentUser();
    return user?.id || '';
  }

  // Vérifier si l'utilisateur est un Non-Client
  isNonClient(): boolean {
    return this.getUserType() === 'NonClient';
  }

  // Vérifier si l'utilisateur est un Agent
  isAgent(): boolean {
    return this.getUserType() === 'Agent';
  }

  // Login d'un Non-Client
  loginNonClient(): void {
    const userData: UserData = { role: 'NonClient', type: 'NonClient', id: 'non-client-id' };
    localStorage.setItem(this.TOKEN_KEY, 'fake-jwt-token');
    localStorage.setItem(this.USER_DATA_KEY, JSON.stringify(userData));
  }
}
