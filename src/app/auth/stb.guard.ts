import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service'; // Assurez-vous que le chemin est correct

@Injectable({
  providedIn: 'root'
})
export class StbGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // Vérifiez si l'utilisateur est connecté et est un Client STB
    if (this.authService.isClientSTB()) {
      return true;  // Permet l'accès si l'utilisateur est un Client STB
    } else {
      // Si l'utilisateur n'est pas un Client STB, redirigez vers une autre page
      this.router.navigate(['/auth/login']); // Ou la page que vous souhaitez rediriger
      return false; // Bloque l'accès
    }
  }
}
