import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubmitReclamationComponent } from './soumission/submit-reclamation/submit-reclamation.component';

const routes: Routes = [
  { path: 'soumission', component: SubmitReclamationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
