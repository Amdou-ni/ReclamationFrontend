import { Component, OnInit } from '@angular/core';
import { ReclamationService } from '../../services/reclamation.service';

@Component({
  selector: 'app-reclamations-list',
  templateUrl: './reclamations-list.component.html',
  styleUrls: ['./reclamations-list.component.scss']
})
export class ReclamationsListComponent implements OnInit {
  reclamations: any[] = [];

  constructor(private reclamationService: ReclamationService) {}

  ngOnInit(): void {
    this.reclamationService.getAllReclamations().subscribe({
      next: (data) => this.reclamations = data,
      error: (err) => console.error('Erreur de chargement :', err)
    });
  }
}

