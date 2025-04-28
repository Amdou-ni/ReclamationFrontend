import { Component, OnInit } from '@angular/core';
import { Notification } from '../../interfaces/notification.interface'; // Ajuste le chemin si nécessaire
import { NotificationService } from '../../services/notification.service'; // Ton service pour charger les notifications
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  providers: [DatePipe] // Pour utiliser DatePipe dans le .ts si besoin
})
export class NotificationsComponent implements OnInit {
  notifications: Notification[] = [];
  isLoading: boolean = true;

  constructor(
    private notificationService: NotificationService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.loadNotifications();
  }

  loadNotifications(): void {
    this.isLoading = true;
    this.notificationService.getNotifications().subscribe({
      next: (data: Notification[]) => {
        this.notifications = data.map(notification => ({
          ...notification,
          dateEnvoi: new Date(notification.dateEnvoi)
        }));
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Erreur de chargement des notifications', error);
        this.isLoading = false;
      }
    });
  }

  getDestinataireLabel(type: string): string {
    switch (type) {
      case 'user': return 'Utilisateur';
      case 'group': return 'Groupe';
      case 'system': return 'Système';
      default: return type;
    }
  }
}
