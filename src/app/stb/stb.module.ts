import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StbRoutingModule } from './stb-routing.module';
import { StbComponent } from './stb.component';
import { SoumissionComponent } from './soumission/soumission.component';
import { MesReclamationsComponent } from './mes-reclamations/mes-reclamations.component';
import { StbNotificationsComponent } from './notifications/notifications.component'; // Import corrigé
import { DetailReclamationComponent } from './detail-reclamation/detail-reclamation.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    StbComponent,
    SoumissionComponent,
    MesReclamationsComponent,
    StbNotificationsComponent, // Nom corrigé
    DetailReclamationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    StbRoutingModule
  ]
})
export class StbModule { }