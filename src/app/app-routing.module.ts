import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { ConfirmationComponent } from './confirmation/confirmation.component';

const routes: Routes = [
  { 
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  { 
    path: 'client',
    loadChildren: () => import('./client/client.module').then(m => m.ClientModule)
  },
  { 
    path: 'agent',
    loadChildren: () => import('./agent/agent.module').then(m => m.AgentModule)
  },
  
  { 
    path: 'admin', 
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  { 
    path: 'home',
    component: HomeComponent // Route directe pour HomeComponent
  },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth/login' },

  { path: 'confirmation', component: ConfirmationComponent }



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }