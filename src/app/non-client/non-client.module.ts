import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NonClientRoutingModule } from './non-client-routing.module';
import { NonClientComponent } from './non-client.component';
import { SoumissionComponent } from './soumission/soumission.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MesReclamationsComponent } from './mes-reclamations/mes-reclamations.component';
import { DetailReclamationComponent } from './detail-reclamation/detail-reclamation.component';


@NgModule({
  declarations: [
    NonClientComponent,
    SoumissionComponent,
    NotificationsComponent,
    MesReclamationsComponent,
    DetailReclamationComponent
  ],
  imports: [
    CommonModule,
    NonClientRoutingModule
  ]
})
export class NonClientModule { }
