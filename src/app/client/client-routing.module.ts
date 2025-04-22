import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubmitReclamationComponent } from './soumission/submit-reclamation/submit-reclamation.component';
import { ReclamationListComponent } from './reclamation-list/reclamation-list.component';






const routes: Routes = [
  { path: 'soumission', component: SubmitReclamationComponent },
  {
  path: 'reclamations',
  component: ReclamationListComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
