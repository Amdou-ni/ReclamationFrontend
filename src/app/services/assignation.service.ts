import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Assignation } from '../interfaces/assignation'; // Importez l'interface

@Injectable({
  providedIn: 'root'
})
export class AssignationService {
  private apiUrl = 'http://localhost:5062/api/assignations'; // Remplacez par votre URL d'API

  constructor(private http: HttpClient) {}

  // Récupérer toutes les assignations
  getAllAssignations(): Observable<Assignation[]> {
    return this.http.get<Assignation[]>(this.apiUrl);
  }

  // Créer une nouvelle assignation
  createAssignation(assignation: Assignation): Observable<Assignation> {
    return this.http.post<Assignation>(this.apiUrl, assignation);
  }

  // Supprimer une assignation
  deleteAssignation(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
