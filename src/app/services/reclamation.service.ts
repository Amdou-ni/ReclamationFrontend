import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  private apiUrl = 'http://localhost:5062/api/reclamations'; // 🔁 Adapte si besoin

  constructor(private http: HttpClient) {}

  // ✅ Envoyer une réclamation
  envoyerReclamation(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  // ✅ Récupérer toutes les réclamations (ex: pour l'admin, agent, ou debug)
  getAllReclamations(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // ✅ Récupérer les réclamations d'un client (si tu gères l'utilisateur connecté côté back)
  getReclamationsByClient(clientId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/client/${clientId}`);
  }

  // ✅ Récupérer une seule réclamation
  getReclamationById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // ✅ Mettre à jour le statut (par Agent)
  updateReclamation(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
}
