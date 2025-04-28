import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicGuard implements CanActivate {
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    // Utilisez la méthode correcte isClientSTB() au lieu de isClient()
    if (this.authService.isPublicUser()) {
      return true;
    }
    
    // Redirection vers le dashboard client si c'est un client STB
    return this.router.createUrlTree(['/client/dashboard']);
  }
}