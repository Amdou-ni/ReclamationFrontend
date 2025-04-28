// src/app/services/authentication.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = 'https://votre-api-backend.com/api/auth'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password });
  }

  // Vous pouvez aussi ajouter une méthode pour vérifier si l'utilisateur est connecté
  isLoggedIn(): boolean {
    // Vérifiez si un token d'authentification est stocké localement ou dans les cookies
    return !!localStorage.getItem('auth_token');
  }

  // Méthode pour déconnecter l'utilisateur
  logout(): void {
    localStorage.removeItem('auth_token');
  }
}
