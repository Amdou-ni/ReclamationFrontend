import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { Utilisateur, Client, NonClient } from 'src/app/interfaces/utilisateur'; 

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss'],
})
export class UtilisateurDetailComponent implements OnInit {
  utilisateur: Utilisateur | null = null;  // Propriété pour stocker l'utilisateur générique
  client: Client | null = null;  // Propriété pour stocker l'utilisateur de type Client
  nonClient: NonClient | null = null;  // Propriété pour stocker l'utilisateur de type NonClient

  constructor(
    private route: ActivatedRoute,
    private utilisateurService: UtilisateurService
  ) {}

  ngOnInit(): void {
    const utilisateurId = this.route.snapshot.paramMap.get('id');
    if (utilisateurId) {
      this.loadUtilisateurDetails(utilisateurId);
    }
  }

  loadUtilisateurDetails(id: string): void {
    this.utilisateurService.getUtilisateurById(id).subscribe({
      next: (data) => {
        this.utilisateur = data;

        // Vérifiez le type de l'utilisateur et assignez-le à la propriété appropriée
        if (data.type === 'STB') {
          this.client = data as Client;  // Si c'est un Client, on l'assigne à 'client'
          this.nonClient = null;  // On s'assure que 'nonClient' est nul
        } else if (data.type === 'Non-Client') {
          this.nonClient = data as NonClient;  // Si c'est un Non-Client, on l'assigne à 'nonClient'
          this.client = null;  // On s'assure que 'client' est nul
        }
      },
      error: (err) => {
        console.error('Erreur lors de la récupération de l\'utilisateur', err);
      },
    });
  }

  editUtilisateur(): void {
    // Vous pouvez ajouter ici la logique pour modifier les détails de l'utilisateur
    console.log('Modifier l\'utilisateur', this.utilisateur);
  }
}
