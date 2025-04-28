import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service'; // ajuste le chemin si besoin

@Injectable({
  providedIn: 'root'
})
export class AgentGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    // Vérifie si l'utilisateur est connecté ET que c'est un Agent
    if (this.authService.isLoggedIn() && this.authService.getRole() === 'Agent') {
      return true;
    }
    // Sinon, redirige vers la page de login normale
    this.router.navigate(['/auth/login']);
    return false;
  }
}
