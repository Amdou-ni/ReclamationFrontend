import { Component, OnInit } from '@angular/core';
import { ReclamationService } from '../../services/reclamation.service';
import { 
  Reclamation,
  ReclamationStatut,
  ReclamationType,
  ReclamationComment
} from '../../interfaces/reclamation.interface'; // Chemin corrigé
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-mes-reclamations',
  templateUrl: './mes-reclamations.component.html',
  styleUrls: ['./mes-reclamations.component.scss'],
  providers: [DatePipe]
})
export class MesReclamationsComponent implements OnInit {
  reclamations: Reclamation[] = [];
  filteredReclamations: Reclamation[] = [];
  isLoading = true;
  statusFilter: string = 'all';
  typeFilter: string = 'all';

  // Options pour les filtres
  statusOptions = [
    { value: 'all', label: 'Tous statuts' },
    { value: ReclamationStatut.EN_ATTENTE, label: 'En attente' },
    { value: ReclamationStatut.EN_COURS, label: 'En cours' },
    { value: ReclamationStatut.RESOLUE, label: 'Résolue' },
    { value: ReclamationStatut.REJETEE, label: 'Rejetée' }
  ];

  typeOptions = [
    { value: 'all', label: 'Tous types' },
    { value: ReclamationType.TECHNIQUE, label: 'Technique' },
    { value: ReclamationType.SERVICE, label: 'Service' },
    { value: ReclamationType.FACTURATION, label: 'Facturation' }
  ];

  displayedColumns: string[] = ['id', 'type', 'date', 'statut', 'actions'];

  constructor(
    private reclamationService: ReclamationService,
    private router: Router,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.loadReclamations();
  }

  loadReclamations(): void {
    this.isLoading = true;
    this.reclamationService.getUserReclamations().subscribe({
      next: (data: Reclamation[]) => {
        this.reclamations = data.map(r => ({
          ...r,
          dateSoumission: r.dateSoumission ? new Date(r.dateSoumission) : new Date()
        }));
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
      const statusMatch = this.statusFilter === 'all' || 
                         reclamation.statut === this.statusFilter;
      const typeMatch = this.typeFilter === 'all' || 
                       reclamation.type === this.typeFilter;
      return statusMatch && typeMatch;
    });
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

  getTypeLabel(type: string): string {
    switch(type) {
      case ReclamationType.TECHNIQUE: return 'Technique';
      case ReclamationType.SERVICE: return 'Service';
      case ReclamationType.FACTURATION: return 'Facturation';
      default: return type;
    }
  }

  viewDetails(id: number): void {
    this.router.navigate(['/non-client/reclamation', id]);
  }
}