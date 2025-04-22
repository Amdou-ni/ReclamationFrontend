import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  private apiUrl = 'http://localhost:5062/api/reclamations';


  constructor(private http: HttpClient) {}

  envoyerReclamation(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  getAllReclamations(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  
}
