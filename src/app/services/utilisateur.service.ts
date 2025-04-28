// src/app/services/utilisateur.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur, Client, NonClient } from '../interfaces/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private apiUrl = 'http://localhost:5062/api/utilisateur';

  constructor(private http: HttpClient) {}

  // Méthode pour récupérer un utilisateur par ID
  getUtilisateurById(id: string): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.apiUrl}/${id}`);
  }

  // Méthode pour récupérer les utilisateurs de type 'STB' ou 'Non-Client'
  getUtilisateursByType(type: 'STB' | 'Non-Client'): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(`${this.apiUrl}?type=${type}`);
  }

  getUtilisateur(id: string) {
    return { id, nom: 'Utilisateur Exemple', email: 'email@example.com' }; // Exemple de retour fictif
  }
}
