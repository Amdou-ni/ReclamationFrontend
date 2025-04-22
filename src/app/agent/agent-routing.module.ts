import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeComponent } from './liste/liste.component'; // ✅ bon chemin

import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ListeComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Agent'] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }
