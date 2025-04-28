import { Component, Input } from '@angular/core';
import { Reclamation, ReclamationComment, ReclamationStatut, ReclamationType } from '../../interfaces/reclamation.interface'; // chemin ajusté

@Component({
  selector: 'app-detail-reclamation',
  templateUrl: './detail-reclamation.component.html',
  styleUrls: ['./detail-reclamation.component.css']
})
export class DetailReclamationComponent {
  @Input() reclamation!: Reclamation;

  statutLabels: Record<string, string> = {
    en_attente: 'En attente',
    en_cours: 'En cours',
    resolue: 'Résolue',
    rejetee: 'Rejetée'
  };

  typeLabels: Record<string, string> = {
    technique: 'Technique',
    service: 'Service',
    facturation: 'Facturation'
  };

  formatDate(date?: Date): string {
    if (!date) return '';
    return new Date(date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });
  }
}
