import { Component } from '@angular/core';
import { Reclamation } from 'src/app/core/models/reclamation.model';
import { ReclamationService } from 'src/app/core/services/reclamation.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service'; // pour récupérer l'ID utilisateur via le token

@Component({
  selector: 'app-submit-reclamation',
  templateUrl: './submit-reclamation.component.html',
  styleUrls: ['./submit-reclamation.component.css']
})
export class SubmitReclamationComponent {
  reclamation: Reclamation = {
    Id: '',                         // Identifiant de la réclamation
    Description: '',                 // Description de la réclamation
    Statut: 'En attente',            // Statut initial à "En attente"
    DateSoumission: new Date().toISOString(), // Date de soumission
    Type: '',                        // Type de la réclamation (Technique, Service, Autre)
    UtilisateurId: '',               // ID utilisateur, à récupérer du token (si nécessaire)
    AgentServiceClientId: ''         // ID de l'agent, si applicable
  };

  constructor(
    private reclamationService: ReclamationService,
    private router: Router,
    private authService: AuthService // Injection du service d'authentification pour récupérer l'utilisateur
  ) {
    console.log("✅ SubmitReclamationComponent chargé !");
    
    // Récupérer l'ID de l'utilisateur via le service AuthService (en supposant que ce service existe)
    const userId = this.authService.getUserIdFromToken?.();
    if (userId) {
      this.reclamation.UtilisateurId = userId;
    }
  }

  // Fonction appelée lors de la soumission du formulaire
  onSubmit() {
    // Vérification que les champs obligatoires sont remplis
    if (this.reclamation.Description && this.reclamation.Type) {
      // Mise à jour du statut et de la date au moment de l'envoi
      this.reclamation.DateSoumission = new Date().toISOString();
      this.reclamation.Statut = 'En attente'; // Initialiser le statut comme "En attente" à la soumission

      // Appel au service pour envoyer la réclamation
      this.reclamationService.envoyerReclamation(this.reclamation).subscribe({
        next: (response) => {
          console.log('Réclamation envoyée avec succès', response);
          this.router.navigate(['/suivi']); // Redirection vers la page de suivi des réclamations
        },
        error: (error) => {
          console.error('Erreur lors de l\'envoi de la réclamation', error);
        }
      });
    } else {
      console.log('Veuillez remplir tous les champs obligatoires.');
    }
  }
}
