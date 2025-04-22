import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../home/dashboard/dashboard.component';


import { ReclamationsListComponent } from './reclamations-list/reclamations-list.component';
import { AuthGuard } from '../auth/auth.guard'; // Chemin selon ton projet

const routes: Routes = [
  {
    path: 'reclamations-list',
    component: ReclamationsListComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Admin'] }
  },

  {
    path: '',
    component: DashboardComponent, // <- à importer
    canActivate: [AuthGuard],
    data: { roles: ['Admin'] }
  }




  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
