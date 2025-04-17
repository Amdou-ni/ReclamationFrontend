import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService); // Injection des services dans une fonction
  const router = inject(Router); // Injection du Router dans une fonction

  const token = authService.getToken(); // Vérifier si le token existe
  if (token) {
    return true; // Si un token existe, l'utilisateur est authentifié, donc autoriser l'accès
  } else {
    router.navigate(['/login']); // Si pas de token, rediriger vers login
    return false;
  }
};
