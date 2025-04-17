import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CanActivateFn } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService); // Injection des services dans une fonction
  const router = inject(Router); // Injection du Router dans une fonction

  const token = authService.getToken(); // Vérifier si le token existe
  if (!token) {
    router.navigate(['/login']); // Si pas de token, rediriger vers login
    return false;
  }

  const role = authService.getRoleFromToken(); // Vérifier le rôle depuis le token
  if (role === 'Admin') {
    return true; // Si rôle = 'Admin', autoriser l'accès
  } else {
    router.navigate(['/login']); // Sinon, rediriger vers login
    return false;
  }
};
