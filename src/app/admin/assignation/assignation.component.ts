import { Component, OnInit } from '@angular/core';
import { AssignationService } from '../../services/assignation.service';
import { Assignation } from '../../interfaces/assignation';

@Component({
  selector: 'app-assignation',
  templateUrl: './assignation.component.html',
  styleUrls: ['./assignation.component.scss']
})
export class AssignationComponent implements OnInit {
  assignations: Assignation[] = [];
  newAssignation: Assignation = { id: '', taskId: '', userId: '', dateAssignation: new Date() }; // Initialisation

  constructor(private assignationService: AssignationService) {}

  ngOnInit() {
    this.loadAssignations();
  }

  // Charger les assignations
  loadAssignations() {
    this.assignationService.getAllAssignations().subscribe(assignations => {
      this.assignations = assignations;
    });
  }

  // Créer une nouvelle assignation
  createAssignation() {
    this.assignationService.createAssignation(this.newAssignation).subscribe(assignation => {
      this.assignations.push(assignation);
      this.newAssignation = { id: '', taskId: '', userId: '', dateAssignation: new Date() }; // Réinitialiser le formulaire
    });
  }

  // Supprimer une assignation
  deleteAssignation(id: string) {
    this.assignationService.deleteAssignation(id).subscribe(() => {
      this.assignations = this.assignations.filter(a => a.id !== id);
    });
  }
}
