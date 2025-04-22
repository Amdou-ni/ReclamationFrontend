import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { SubmitReclamationComponent } from './soumission/submit-reclamation/submit-reclamation.component';
import { ReclamationListComponent } from './reclamation-list/reclamation-list.component';


@NgModule({
  declarations: [
    SubmitReclamationComponent,
    ReclamationListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClientRoutingModule,
    ReactiveFormsModule // Pour les formulaires réactifs (optionnel mais recommandé)
  ],

  exports: [SubmitReclamationComponent] // Si nécessaire
})
export class ClientModule { }




