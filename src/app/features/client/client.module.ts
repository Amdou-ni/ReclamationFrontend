import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitReclamationComponent } from './submit-reclamation/submit-reclamation.component';
import { StatusReclamationComponent } from './status-reclamation/status-reclamation.component';
import { FormsModule } from '@angular/forms'; // ✅ importer le FormsModule
import { HttpClientModule } from '@angular/common/http';
import { SuiviReclamationComponent } from './suivi-reclamation/suivi-reclamation.component';


@NgModule({
  declarations: [
    SubmitReclamationComponent,
    StatusReclamationComponent,
    SuiviReclamationComponent
  ],
  imports: [
    CommonModule,
    FormsModule ,
    HttpClientModule
  ]
})
export class ClientModule { }
