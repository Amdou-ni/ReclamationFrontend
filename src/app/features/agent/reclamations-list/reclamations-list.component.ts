import { Component, OnInit } from '@angular/core';
import { ReclamationService } from 'src/app/core/services/reclamation.service';
import { Reclamation } from 'src/app/core/models/reclamation.model';

@Component({
  selector: 'app-reclamations-list',
  templateUrl: './reclamations-list.component.html',
  styleUrls: ['./reclamations-list.component.css']
})
export class ReclamationsListComponent implements OnInit {
  reclamations: Reclamation[] = [];

  constructor(private reclamationService: ReclamationService) {}

  ngOnInit(): void {
    this.reclamationService.getAllReclamations().subscribe({
      next: (data) => this.reclamations = data,
      error: (err) => console.error('Erreur chargement liste', err)
    });
  }
}
