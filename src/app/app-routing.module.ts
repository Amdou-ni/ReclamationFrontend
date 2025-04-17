import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SubmitReclamationComponent } from './features/client/submit-reclamation/submit-reclamation.component';
import { StatusReclamationComponent } from './features/client/status-reclamation/status-reclamation.component';
import { LoginComponent } from './features/auth/login/login.component';
import { DashboardComponent } from './features/admin/dashboard/dashboard.component';
import { ReclamationsListComponent } from './features/agent/reclamations-list/reclamations-list.component';

// Import des guards en fonction
import { adminGuard } from './core/guards/admin.guard';
import { agentGuard } from './core/guards/agent.guard';

const routes: Routes = [
  { path: '', redirectTo: 'reclamation', pathMatch: 'full' },

  //  Routes publiques
  { path: 'reclamation', component: SubmitReclamationComponent },
  { path: 'suivi', component: StatusReclamationComponent },
  { path: 'login', component: LoginComponent },

  //  Routes protégées par les guards
  { path: 'admin', component: DashboardComponent, canActivate: [adminGuard] },
  { path: 'agent', component: ReclamationsListComponent, canActivate: [agentGuard] },


  { path: '', redirectTo: 'reclamation', pathMatch: 'full' },
  { path: 'reclamation', component: SubmitReclamationComponent },
  { path: 'suivi/:id', component: StatusReclamationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: DashboardComponent },
  { path: 'agent', component: ReclamationsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
