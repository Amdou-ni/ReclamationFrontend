import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service'; // Assurez-vous que le chemin est correct

@Injectable({
  providedIn: 'root'
})
export class NonClientGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // Vérifie si l'utilisateur est un non-client ou un utilisateur non connecté
    if (this.authService.isPublicUser()) {
      return true;  // Permet l'accès si l'utilisateur est un non-client ou n'est pas connecté
    } else {
      // Si l'utilisateur est un client ou agent, on le redirige vers une autre page
      this.router.navigate(['/dashboard']); // Ou une autre page selon vos besoins
      return false;  // Bloque l'accès à la route
    }
  }
}
