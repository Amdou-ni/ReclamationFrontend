// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(private authService: AuthenticationService, private router: Router) {}

  
  login(): void {
    this.isLoading = true;
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        localStorage.setItem('auth_token', response.token);
  
        const userRole = response.role; // Récupérer le rôle envoyé par le serveur
        if (userRole === 'Agent') {
          this.router.navigate(['/agent']);
        } else if (userRole === 'Client') {
          this.router.navigate(['/client']);
        } else if (userRole === 'Admin') {
          this.router.navigate(['/admin']);
        } else {
          this.errorMessage = 'Rôle non reconnu';
        }
  
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Email ou mot de passe incorrects';
        this.isLoading = false;
      }
    });
  }
  
}
