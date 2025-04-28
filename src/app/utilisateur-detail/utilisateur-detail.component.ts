// src/app/components/utilisateur-detail/utilisateur-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { Utilisateur } from 'src/app/interfaces/utilisateur'; 


@Component({
  selector: 'app-utilisateur-detail',
  templateUrl: './utilisateur-detail.component.html',
  styleUrls: ['./utilisateur-detail.component.scss'],
})
export class UtilisateurDetailComponent implements OnInit {
  utilisateur: Utilisateur | null = null;

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
      },
      error: (err) => {
        console.error('Erreur lors de la récupération de l\'utilisateur', err);
      },
    });
  }
}
