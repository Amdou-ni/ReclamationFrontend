import { Component, OnInit } from '@angular/core';
import { ReclamationService } from '../../services/reclamation.service';
import { Reclamation } from '../../interfaces/reclamation.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mes-reclamations',
  templateUrl: './mes-reclamations.component.html',
  styleUrls: ['./mes-reclamations.component.scss']
})
export class MesReclamationsComponent implements OnInit {
  reclamations: Reclamation[] = [];
  isLoading = true;
  filteredReclamations: Reclamation[] = [];
  statusFilter: string = ''; // Initialisation explicite

  constructor(
    private reclamationService: ReclamationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadReclamations();
  }

  loadReclamations(): void {
    this.isLoading = true;
    this.reclamationService.getReclamations().subscribe({
      next: (reclamations) => {
        this.reclamations = reclamations || [];
        this.applyFilter();
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.reclamations = [];
        this.applyFilter();
      }
    });
  }

  applyFilter(): void {
    if (!this.statusFilter) {
      this.filteredReclamations = [...this.reclamations];
    } else {
      this.filteredReclamations = this.reclamations.filter(
        rec => rec.statut === this.statusFilter
      );
    }
  }

  viewDetails(id: number | undefined): void { // Accepte undefined
    if (id !== undefined) {
      this.router.navigate(['/stb/reclamation', id]);
    }
  }

  getStatusClass(status: string | undefined): string { // Accepte undefined
    return this.reclamationService.getStatusClass(status || '');
  }
}