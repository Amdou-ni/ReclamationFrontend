import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-stb-login',
  templateUrl: './stb-login.component.html',
  styleUrls: ['./stb-login.component.scss']
})
export class StbLoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    const result = this.authService.login(this.email, this.password);

    if (result.success && this.authService.isClientSTB()) {
      this.router.navigate(['/client-dashboard']); // Redirige vers ton dashboard STB
    } else {
      this.errorMessage = 'Identifiants incorrects ou accès refusé.';
    }
  }
}
