import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  
  credentials = {
    email: '',
    password: ''
  };

  error = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.credentials).subscribe({
      next: (response) => {
        this.authService.saveToken(response.token);
        const role = this.authService.getRoleFromToken();

        if (role === 'Admin') {
          this.router.navigate(['/admin']);
        } else if (role === 'Agent') {
          this.router.navigate(['/agent']);
        } else {
          this.error = 'Rôle non reconnu.';
        }
      },
      error: () => {
        this.error = 'Email ou mot de passe incorrect.';
      }
    });
  }
}
