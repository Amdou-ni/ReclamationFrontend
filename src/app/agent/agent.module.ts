import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentRoutingModule } from './agent-routing.module';
import { ListeComponent } from './liste/liste.component';
import { ReclamationsListComponent } from './reclamations-list/reclamations-list.component';
import { ReclamationDetailComponent } from './reclamation-detail/reclamation-detail.component';
import { CommentaireFormComponent } from './commentaire-form/commentaire-form.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';


@NgModule({
  declarations: [
    ListeComponent,
    ReclamationsListComponent,
    ReclamationDetailComponent,
    CommentaireFormComponent,
    ClientDetailComponent
  ],
  imports: [
    CommonModule,
    AgentRoutingModule
  ]
})
export class AgentModule { }
