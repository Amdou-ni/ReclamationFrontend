// src/app/core/services/reclamation.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reclamation } from 'src/app/core/models/reclamation.model';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  private baseUrl = 'http://localhost:5062/api/reclamation'; // Assure-toi que l'URL correspond à ton API

  constructor(private http: HttpClient) {}

  //  Envoyer une réclamation
  envoyerReclamation(data: Reclamation): Observable<Reclamation> {
    return this.http.post<Reclamation>(`${this.baseUrl}`, data)
      .pipe(
        catchError((error) => {
          console.error('Erreur lors de l\'envoi de la réclamation', error);
          throw error;
        })
      );
  }

  //  Récupérer une réclamation par son ID
  getReclamationById(id: string): Observable<Reclamation> {
    return this.http.get<Reclamation>(`${this.baseUrl}/${id}`);
  }

  //  Récupérer une réclamation par l'email de l'utilisateur
  getReclamationByEmail(email: string): Observable<Reclamation> {
    return this.http.get<Reclamation>(`${this.baseUrl}/email/${email}`); // Assure-toi que l'API supporte cette route
  }



  //  Récupérer toutes les réclamations (pour les agents par exemple)
getAllReclamations(): Observable<Reclamation[]> {
  return this.http.get<Reclamation[]>(this.baseUrl);
}

}
