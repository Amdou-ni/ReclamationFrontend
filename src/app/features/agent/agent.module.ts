import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReclamationsListComponent } from './reclamations-list/reclamations-list.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    ReclamationsListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AgentModule { }
