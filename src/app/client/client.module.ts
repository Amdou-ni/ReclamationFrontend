import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { SubmitReclamationComponent } from './soumission/submit-reclamation/submit-reclamation.component';


@NgModule({
  declarations: [
    SubmitReclamationComponent
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




