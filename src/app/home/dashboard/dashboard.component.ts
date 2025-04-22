import { Component, OnInit } from '@angular/core';
import { ReclamationService } from '../../services/reclamation.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  total = 0;
  enAttente = 0;
  traitees = 0;

  constructor(private reclamationService: ReclamationService) {}

  ngOnInit(): void {
    this.reclamationService.getAllReclamations().subscribe((reclamations) => {
      this.total = reclamations.length;
      this.enAttente = reclamations.filter(r => r.statut === 'En attente').length;
      this.traitees = reclamations.filter(r => r.statut === 'Traité').length;
    });
  }
}
