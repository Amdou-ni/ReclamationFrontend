import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { UserRole } from '../interfaces/user';

import { StbComponent } from './stb.component';
import { SoumissionComponent } from './soumission/soumission.component';
import { MesReclamationsComponent } from './mes-reclamations/mes-reclamations.component';
import { StbNotificationsComponent } from './notifications/notifications.component'; // Changé ici
import { DetailReclamationComponent } from './detail-reclamation/detail-reclamation.component';

const routes: Routes = [
  {
    path: '',
    component: StbComponent,
    canActivate: [AuthGuard],
    data: { requiredUserRole: UserRole.STB },
    children: [
      { path: '', redirectTo: 'mes-reclamations', pathMatch: 'full' },
      {
        path: 'soumission',
        component: SoumissionComponent,
        data: { title: 'Nouvelle réclamation STB' }
      },
      {
        path: 'mes-reclamations',
        component: MesReclamationsComponent,
        data: { title: 'Mes réclamations STB' }
      },
      {
        path: 'notifications',
        component: StbNotificationsComponent, // Changé ici
        data: { title: 'Notifications STB' }
      },
      {
        path: 'reclamation/:id',
        component: DetailReclamationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StbRoutingModule { }