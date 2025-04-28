import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Reclamation, ApiReclamation, ReclamationStatut, ReclamationType } from '../interfaces/reclamation.interface';
import { ReclamationComment } from '../interfaces/reclamation.interface';
@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  private apiUrl = 'http://localhost:5062/api/reclamations';

  constructor(private http: HttpClient) {}

  getReclamations(): Observable<Reclamation[]> {
    return this.http.get<ApiReclamation[]>(this.apiUrl).pipe(
      map(reclamations => reclamations.map(this.convertApiReclamation))
    );
  }
  getAllReclamations(): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>(this.apiUrl);
  }

  

  // Supprimer une réclamation par ID
  deleteReclamation(reclamationId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${reclamationId}`);
  }

  

  getReclamation(id: number): Observable<Reclamation> {
    return this.http.get<ApiReclamation>(`${this.apiUrl}/${id}`).pipe(
      map(this.convertApiReclamation)
    );
  }

  getUserReclamations(): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>(`${this.apiUrl}/mes-reclamations`);
  }

  getReclamationById(id: number): Observable<Reclamation> {
    return this.http.get<Reclamation>(`${this.apiUrl}/${id}`);
  }


  
  soumettreReclamation(reclamation: Reclamation): Observable<Reclamation> {
    const formData = new FormData();
    
    formData.append('description', reclamation.description);
    formData.append('type', reclamation.type);
  
    if (reclamation.statut) {
      formData.append('statut', reclamation.statut);
    }
  
    if (reclamation.dateSoumission) {
      formData.append('dateSoumission', reclamation.dateSoumission.toISOString());
    }
  
    if (reclamation.utilisateurId !== undefined) {
      formData.append('utilisateurId', reclamation.utilisateurId.toString());
    }
    
    if (reclamation.agentServiceClientId !== undefined) {
      formData.append('agentServiceClientId', reclamation.agentServiceClientId.toString());
    }
  
    if (reclamation.typeUtilisateur) {
      formData.append('typeUtilisateur', reclamation.typeUtilisateur);
    }
  
    return this.createReclamation(formData);
  }
  
  // services/reclamation.service.ts
createReclamation(formData: FormData): Observable<Reclamation> {
  return this.http.post<Reclamation>(this.apiUrl, formData);
}

  updateReclamation(id: number, changes: Partial<Reclamation>): Observable<Reclamation> {
    return this.http.patch<ApiReclamation>(`${this.apiUrl}/${id}`, changes).pipe(
      map(this.convertApiReclamation)
    );
  }

  private convertApiReclamation(apiReclamation: ApiReclamation): Reclamation {
    return {
      ...apiReclamation,
      dateSoumission: new Date(apiReclamation.dateSoumission)
    };
  }

  getStatutOptions(): ReclamationStatut[] {
    return Object.values(ReclamationStatut);
  }

  getTypeOptions(): ReclamationType[] {
    return Object.values(ReclamationType);
  }

  getReclamationTypes(): ReclamationType[] {
    return Object.values(ReclamationType);
  }

  getStatusClass(status: string): string {
    switch(status) {
      case ReclamationStatut.EN_ATTENTE: return 'status-pending';
      case ReclamationStatut.EN_COURS: return 'status-in-progress';
      case ReclamationStatut.RESOLUE: return 'status-resolved';
      case ReclamationStatut.REJETEE: return 'status-rejected';
      default: return '';
    }
  }
  getReclamationDetails(id: number): Observable<Reclamation> {
    return this.http.get<ApiReclamation>(`${this.apiUrl}/${id}`).pipe(
      map(this.convertApiReclamation)
    );
  }
  
  addComment(reclamationId: number, comment: string): Observable<Reclamation> {
    return this.http.post<ApiReclamation>(
      `${this.apiUrl}/${reclamationId}/comments`,
      { content: comment }
    ).pipe(
      map(this.convertApiReclamation)
    );
  }
  
  updateStatus(reclamationId: number, newStatus: string): Observable<Reclamation> {
    return this.http.patch<ApiReclamation>(
      `${this.apiUrl}/${reclamationId}/status`,
      { status: newStatus }
    ).pipe(
      map(this.convertApiReclamation)
    );
  }

  getReclamationsToTreat(): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>('/api/reclamations/to-treat');
  }

  

  // Méthode pour mettre à jour le statut d'une réclamation
  updateReclamationStatus(id: number, newStatus: string): Observable<Reclamation> {
    return this.http.put<Reclamation>(`${this.apiUrl}/${id}`, { statut: newStatus });
  }

  addCommentToReclamation(reclamationId: number, comment: ReclamationComment): Observable<Reclamation> {
    return this.http.post<Reclamation>(`${this.apiUrl}/${reclamationId}/comments`, comment);
  }

  
}