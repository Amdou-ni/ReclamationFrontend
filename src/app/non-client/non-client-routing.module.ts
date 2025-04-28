import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NonClientComponent } from './non-client.component';

const routes: Routes = [{ path: '', component: NonClientComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NonClientRoutingModule { }
