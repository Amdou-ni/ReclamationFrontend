import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignationComponent } from './assignation/assignation.component';
import { AdminNotificationsComponent } from './notifications/notifications.component';
import { ReclamationsListComponent } from './reclamations-list/reclamations-list.component';
import { TypesReclamationComponent } from './types-reclamation/types-reclamation.component';
import { UsersComponent } from './users/users.component';
import { AdminGuard } from 'src/app/auth/admin.guard'; // Votre guard admin

const routes: Routes = [
  { path: 'assignation', component: AssignationComponent, canActivate: [AdminGuard] },
  { path: 'notifications', component: AdminNotificationsComponent, canActivate: [AdminGuard] },
  { path: 'reclamations-list', component: ReclamationsListComponent, canActivate: [AdminGuard] },
  { path: 'types-reclamation', component: TypesReclamationComponent, canActivate: [AdminGuard] },
  { path: 'users', component: UsersComponent, canActivate: [AdminGuard] },
  { path: '', redirectTo: 'reclamations-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
