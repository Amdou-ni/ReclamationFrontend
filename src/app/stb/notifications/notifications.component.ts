import { Component } from '@angular/core';
import { NotificationService } from '../../services/notification.service'; // Chemin relatif corrigé

@Component({
  selector: 'app-stb-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class StbNotificationsComponent {
  notifications$ = this.notificationsService.getNotifications();

  constructor(private notificationsService: NotificationService) {}

  markAsRead(id: string): void {
    this.notificationsService.markAsRead(id).subscribe({
      next: () => {
        // Recharger les notifications ou filtrer celle marquée comme lue
        this.notifications$ = this.notificationsService.getNotifications();
      },
      error: (err) => console.error('Erreur:', err)
    });
  }

  // Marquer toutes les notifications comme lues
  markAllAsRead(): void {
    this.notificationsService.markAllAsRead().subscribe({
      next: () => {
        this.notifications$ = this.notificationsService.getNotifications();
      },
      error: (err) => console.error('Erreur:', err)
    });
  }

  // Obtenir l'icône appropriée selon le type de notification
  getNotificationIcon(type: string): string {
    switch(type.toLowerCase()) {
      case 'alert': return 'icon-alert';
      case 'warning': return 'icon-warning';
      default: return 'icon-info';
    }
}}