import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReclamationService } from 'src/app/core/services/reclamation.service'; // Assurez-vous que ce service est créé

@Component({
  selector: 'app-status-reclamation',
  templateUrl: './status-reclamation.component.html',
  styleUrls: ['./status-reclamation.component.css']
})
export class StatusReclamationComponent implements OnInit {
  reclamation: any; // Remplace par le type correct, par ex. Reclamation
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private reclamationService: ReclamationService
  ) {}

  ngOnInit(): void {
    // Récupérer l'ID de la réclamation depuis les paramètres de l'URL
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getReclamationStatus(id);
    }
  }

  getReclamationStatus(id: string): void {
    this.reclamationService.getReclamationById(id).subscribe({
      next: (data) => {
        this.reclamation = data;
      },
      error: (error) => {
        this.errorMessage = 'Erreur lors de la récupération des informations de réclamation.';
        console.error(error);
      }
    });
  }
}
