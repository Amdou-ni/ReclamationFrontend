import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StbLoginComponent } from './auth/stb-login/stb-login.component';
import { NonClientComponent } from './non-client/non-client.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { UtilisateurDetailComponent } from './utilisateur-detail/utilisateur-detail.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './home/dashboard/dashboard.component'; 
import { AuthGuard } from './auth/auth.guard';
import { StbGuard } from './auth/stb.guard';
import { NonClientGuard } from './auth/non-client.guard';
import { AgentGuard } from './auth/agent.guard';
const routes: Routes = [
  {
    path: 'utilisateur/:id',
    component: UtilisateurDetailComponent,
  },
  { 
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  
  { 
    path: 'agent',loadChildren: () => import('./agent/agent.module').then(m => m.AgentModule)},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  { path: 'home',component: HomeComponent},
  { path: 'confirmation', component: ConfirmationComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'stb', loadChildren: () => import('./stb/stb.module').then(m => m.StbModule) },
  { path: 'espace-personnel', loadChildren: () => import('./non-client/non-client.module').then(m => m.NonClientModule) },
  { path: '**', redirectTo: 'home' },

  
  {
     path: 'login',component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },




  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'stb-login', component: StbLoginComponent },
  { path: 'non-client', component: NonClientComponent, canActivate: [NonClientGuard] },  // Accès direct pour Non-Client
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },  // Protégé pour les Agents
  { path: 'stb-dashboard', component: DashboardComponent, canActivate: [StbGuard] },

  
    // Auth pour Agent / Admin
    { path: 'auth/login', component: LoginComponent },
  
    // Auth pour Client STB
    { path: 'auth/stb-login', component: StbLoginComponent },
  
    // Accès public direct pour Non-Client
    { path: 'non-client', component: NonClientComponent },
  
    // Espace client STB après connexion
    { path: 'client-dashboard', component: DashboardComponent, canActivate: [StbGuard] },
  
    // Espace agent après connexion
    { path: 'agent-dashboard', component: DashboardComponent, canActivate: [AgentGuard] },
  
    // Page d'accueil par défaut
    { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  
    // 404
    { path: '**', redirectTo: '/auth/login' },


    {
      path: 'agent', 
      canActivate: [AgentGuard], 
      loadChildren: () => import('./agent/agent.module').then(m => m.AgentModule)
    },
    { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  ];
  



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }