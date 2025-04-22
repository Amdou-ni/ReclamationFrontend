import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UsersComponent } from './users/users.component';
import { TypesReclamationComponent } from './types-reclamation/types-reclamation.component';
import { AssignationComponent } from './assignation/assignation.component';
import { ReclamationsListComponent } from './reclamations-list/reclamations-list.component';


@NgModule({
  declarations: [
    UsersComponent,
    TypesReclamationComponent,
    AssignationComponent,
    ReclamationsListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
