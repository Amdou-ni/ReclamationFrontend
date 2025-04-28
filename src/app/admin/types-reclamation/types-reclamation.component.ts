import { Component, OnInit } from '@angular/core';
import { TypesReclamationService } from '../../services/types-reclamation.service';
import { TypesReclamation } from '../../interfaces/types-reclamation';

@Component({
  selector: 'app-types-reclamation',
  templateUrl: './types-reclamation.component.html',
  styleUrls: ['./types-reclamation.component.scss']
})
export class TypesReclamationComponent implements OnInit {
  typesReclamations: TypesReclamation[] = [];

  constructor(private typesReclamationService: TypesReclamationService) {}

  ngOnInit() {
    this.loadTypesReclamations();
  }

  loadTypesReclamations() {
    this.typesReclamationService.getAllTypes().subscribe(types => {
      this.typesReclamations = types;
    });
  }
}
