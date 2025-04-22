import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reclamation-list',
  templateUrl: './reclamation-list.component.html',
  styleUrls: ['./reclamation-list.component.scss']
})
export class ReclamationListComponent implements OnInit {
  // Liste des réclamations
  reclamations = [
    { id: 1, sujet: 'Problème de carte', statut: 'En attente' },
    { id: 2, sujet: 'Virement non reçu', statut: 'Traité' },
    { id: 3, sujet: 'Demande d\'information', statut: 'En cours' }
  ];

  // Propriété pour le filtre
  filtreStatut: string = '';

  constructor() {}

  ngOnInit(): void {}

  // Méthode pour filtrer les réclamations
  getReclamationsFiltrees() {
    if (!this.filtreStatut) {
      return this.reclamations;
    }
    return this.reclamations.filter(rec => rec.statut === this.filtreStatut);
  }
}