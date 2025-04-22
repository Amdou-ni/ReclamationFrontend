import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
// Remove this line: import { LoginComponent } from 'src/app/auth/login/login.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  error = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login(): void {

    console.log('Tentative de connexion...');
    const success = this.authService.login(this.email, this.password);
    console.log('Login réussi ?', success);
    console.log('Token actuel :', this.authService.getToken());
    console.log('Role actuel via getRole() :', this.authService.getRole());
  
    if (success) {
      const role = this.authService.getRole();
  
      switch (role) {
        case 'Client':
          this.router.navigate(['/reclamation']);
          break;
        case 'Agent':
          this.router.navigate(['/agent']);
          break;
        case 'Admin':
          this.router.navigate(['/admin']);
          break;
        default:
          this.error = 'Rôle inconnu.';
      }
    } else {
      this.error = 'Email ou mot de passe incorrect';
    }


  
  }



  
  }
