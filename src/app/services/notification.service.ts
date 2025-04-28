import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notification } from '../interfaces/notification.interface'; // Importez l'interface

@Injectable({
  providedIn: 'root' // <-- Ceci est crucial pour l'injection
})
export class NotificationService {
  private apiUrl = 'http://localhost:5062/api/notifications';

  constructor(private http: HttpClient) {}

  // Récupérer les notifications
  getNotifications(): Observable<Notification[]> { // Utilisez l'interface Notification
    return this.http.get<Notification[]>(this.apiUrl);
  }
  

  // Marquer une notification comme lue
  markAsRead(id: string): Observable<void> {
    return this.http.patch<void>(`${this.apiUrl}/${id}/read`, {});
  }

  // Marquer toutes les notifications comme lues
  markAllAsRead(): Observable<void> {
    return this.http.patch<void>(`${this.apiUrl}/mark-all-read`, {});
  }
}
