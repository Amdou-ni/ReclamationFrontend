import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TypesReclamation } from '../interfaces/types-reclamation';

@Injectable({
  providedIn: 'root'
})
export class TypesReclamationService {
  private apiUrl = 'https://api.example.com/types-reclamations'; // Remplacez par votre URL d'API

  constructor(private http: HttpClient) {}

  // Récupérer tous les types de réclamations
  getAllTypes(): Observable<TypesReclamation[]> {
    return this.http.get<TypesReclamation[]>(this.apiUrl);
  }
}
