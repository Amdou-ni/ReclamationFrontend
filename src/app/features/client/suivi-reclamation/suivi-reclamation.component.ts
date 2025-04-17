import { Component, OnInit } from '@angular/core';
import { ReclamationService } from 'src/app/core/services/reclamation.service';
import { Reclamation } from 'src/app/core/models/reclamation.model';

@Component({
  selector: 'app-suivi-reclamation',
  templateUrl: './suivi-reclamation.component.html',
  styleUrls: ['./suivi-reclamation.component.css']
})
export class SuiviReclamationComponent implements OnInit {
  searchCriteria = {
    reclamationId: '',  // Pour l'ID de la réclamation
    email: ''           // Pour l'email de l'utilisateur
  };
  
  reclamation: Reclamation | null = null;  // Stocke la réclamation récupérée
  errorMessage: string = '';  // Message d'erreur si aucune réclamation n'est trouvée

  constructor(private reclamationService: ReclamationService) {}

  ngOnInit(): void {}

  // Fonction pour effectuer la recherche
  onSearch(): void {
    if (this.searchCriteria.reclamationId) {
      // Si un ID de réclamation est fourni, on l'utilise pour la recherche
      this.getReclamationById(this.searchCriteria.reclamationId);
    } else if (this.searchCriteria.email) {
      // Si un email est fourni, on l'utilise pour la recherche
      this.getReclamationByEmail(this.searchCriteria.email);
    } else {
      // Si aucun critère n'est rempli
      this.errorMessage = 'Veuillez entrer un ID de réclamation ou un email.';
    }
  }

  // Récupérer une réclamation par son ID
  getReclamationById(id: string): void {
    this.reclamationService.getReclamationById(id).subscribe({
      next: (data) => {
        this.reclamation = data;
        this.errorMessage = '';  // Réinitialiser le message d'erreur si la réclamation est trouvée
      },
      error: (err) => {
        console.error('Erreur lors de la récupération de la réclamation', err);
        this.errorMessage = 'Réclamation non trouvée pour cet ID.';
        this.reclamation = null;  // Réinitialiser la réclamation si l'ID n'existe pas
      }
    });
  }

  // Récupérer une réclamation par l'email de l'utilisateur
  getReclamationByEmail(email: string): void {
    this.reclamationService.getReclamationByEmail(email).subscribe({
      next: (data) => {
        this.reclamation = data;
        this.errorMessage = '';  // Réinitialiser le message d'erreur si la réclamation est trouvée
      },
      error: (err) => {
        console.error('Erreur lors de la récupération de la réclamation', err);
        this.errorMessage = 'Réclamation non trouvée pour cet email.';
        this.reclamation = null;  // Réinitialiser la réclamation si l'email n'existe pas
      }
    });
  }
}
