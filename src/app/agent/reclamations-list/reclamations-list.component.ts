import { Component, OnInit } from '@angular/core';
import { ReclamationService } from '../../services/reclamation.service';
import { Reclamation, ReclamationStatut, ReclamationType } from '../../interfaces/reclamation.interface';

@Component({
  selector: 'app-reclamations-list',
  templateUrl: './reclamations-list.component.html',
  styleUrls: ['./reclamations-list.component.scss']
})
export class ReclamationsListComponent implements OnInit {
  reclamations: Reclamation[] = [];
  filteredReclamations: Reclamation[] = [];
  isLoading = true;
  statusFilter: string = 'all';
  typeFilter: string = 'all';

  // Options pour les filtres
  statusOptions = [
    { value: 'all', label: 'Tous les statuts' },
    { value: ReclamationStatut.EN_ATTENTE, label: 'En attente' },
    { value: ReclamationStatut.EN_COURS, label: 'En cours' },
    { value: ReclamationStatut.RESOLUE, label: 'Résolue' },
    { value: ReclamationStatut.REJETEE, label: 'Rejetée' }
  ];

  typeOptions = [
    { value: 'all', label: 'Tous les types' },
    { value: ReclamationType.TECHNIQUE, label: 'Technique' },
    { value: ReclamationType.SERVICE, label: 'Service' },
    { value: ReclamationType.FACTURATION, label: 'Facturation' }
  ];

  displayedColumns: string[] = ['id', 'type', 'dateSoumission', 'statut', 'actions'];

  constructor(private reclamationService: ReclamationService) {}

  ngOnInit(): void {
    this.loadReclamations();
  }

  loadReclamations(): void {
    this.isLoading = true;
    this.reclamationService.getReclamationsToTreat().subscribe({
      next: (data: Reclamation[]) => {
        this.reclamations = data;
        this.applyFilters();
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erreur lors du chargement', err);
        this.isLoading = false;
      }
    });
  }

  applyFilters(): void {
    this.filteredReclamations = this.reclamations.filter(reclamation => {
      const statusMatch = this.statusFilter === 'all' || reclamation.statut === this.statusFilter;
      const typeMatch = this.typeFilter === 'all' || reclamation.type === this.typeFilter;
      return statusMatch && typeMatch;
    });
  }

  // Redirection vers les détails de la réclamation
  viewDetails(id: number): void {
    // Ici, tu devras mettre à jour la logique pour afficher les détails de la réclamation
    // Par exemple, router.navigate(['détail', id]);
  }
}
