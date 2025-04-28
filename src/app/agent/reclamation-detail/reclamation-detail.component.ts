import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReclamationService } from '../../services/reclamation.service';
import { Reclamation, ReclamationStatut } from '../../interfaces/reclamation.interface';

@Component({
  selector: 'app-reclamation-detail',
  templateUrl: './reclamation-detail.component.html',
  styleUrls: ['./reclamation-detail.component.scss']
})
export class ReclamationDetailComponent implements OnInit {
  reclamation: Reclamation | null = null;
  statusOptions = [
    { value: ReclamationStatut.EN_ATTENTE, label: 'En attente' },
    { value: ReclamationStatut.EN_COURS, label: 'En cours' },
    { value: ReclamationStatut.RESOLUE, label: 'Résolue' },
    { value: ReclamationStatut.REJETEE, label: 'Rejetée' }
  ];
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reclamationService: ReclamationService
  ) {}

  ngOnInit(): void {
    // Récupérer l'ID de la réclamation à partir des paramètres d'URL
    const reclamationId = this.route.snapshot.paramMap.get('id');
    if (reclamationId) {
      this.loadReclamationDetails(Number(reclamationId));
    }
  }

  // Fonction pour charger les détails de la réclamation par ID
  loadReclamationDetails(id: number): void {
    this.reclamationService.getUserReclamations().subscribe({
      next: (data: Reclamation[]) => {
        // Chercher la réclamation par ID
        this.reclamation = data.find(r => r.id === id) || null;

        // Si la réclamation n'a pas de statut, on lui attribue un statut par défaut
        if (this.reclamation && !this.reclamation.statut) {
          this.reclamation.statut = ReclamationStatut.EN_ATTENTE;  // Valeur par défaut
        }

        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erreur lors du chargement de la réclamation', err);
        this.isLoading = false;
      }
    });
  }

  // Fonction pour mettre à jour le statut de la réclamation
  updateStatus(newStatus: string): void {
    if (this.reclamation) {
      this.reclamationService.updateReclamationStatus(this.reclamation.id, newStatus).subscribe({
        next: () => {
          // Mise à jour locale du statut
          this.reclamation!.statut = newStatus;
          alert('Statut de la réclamation mis à jour avec succès.');
        },
        error: (err) => {
          console.error('Erreur lors de la mise à jour du statut', err);
          alert('Une erreur est survenue lors de la mise à jour du statut.');
        }
      });
    }
  }

}
