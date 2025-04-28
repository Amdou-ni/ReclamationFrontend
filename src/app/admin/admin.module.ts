import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsersComponent } from './users/users.component';
import { ReclamationsListComponent } from './reclamations-list/reclamations-list.component';
import { AssignationComponent } from './assignation/assignation.component';
import { TypesReclamationComponent } from './types-reclamation/types-reclamation.component';
import { AdminNotificationsComponent } from './notifications/notifications.component';

@NgModule({
  declarations: [
    UsersComponent,
    ReclamationsListComponent, // Ajoutez ici
    AssignationComponent,
    TypesReclamationComponent,
    AdminNotificationsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AdminModule { }
