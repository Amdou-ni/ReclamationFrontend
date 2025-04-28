import { Component, OnInit } from '@angular/core';
import { ReclamationService } from '../../services/reclamation.service';
import { Reclamation } from '../../interfaces/reclamation.interface';

@Component({
  selector: 'app-reclamations-list',
  templateUrl: './reclamations-list.component.html',
  styleUrls: ['./reclamations-list.component.scss']
})
export class ReclamationsListComponent implements OnInit {
  reclamations: Reclamation[] = [];

  constructor(private reclamationService: ReclamationService) {}

  ngOnInit() {
    this.loadReclamations();
  }

  loadReclamations() {
    this.reclamationService.getAllReclamations().subscribe(reclamations => {
      this.reclamations = reclamations;
    });
  }

  deleteReclamation(reclamationId: number) {
    this.reclamationService.deleteReclamation(reclamationId).subscribe(() => {
      this.loadReclamations();
    });
  }
}
