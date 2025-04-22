import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReclamationService } from 'src/app/services/reclamation.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-submit-reclamation',
  templateUrl: './submit-reclamation.component.html',

  styleUrls: ['./submit-reclamation.component.scss']
})
export class SubmitReclamationComponent implements OnInit {
  reclamation = {
    nom: '',
    email: '',
    telephone: '',
    type: '',
    description: ''
  };

  

constructor(
  private reclamationService: ReclamationService,
  private router: Router
) {}



  ngOnInit(): void {}

  onSubmit() {
    this.reclamationService.envoyerReclamation(this.reclamation).subscribe({
      next: (res) => {
        console.log('Réclamation envoyée avec succès', res);
        alert('Réclamation envoyée avec succès !');
        this.reclamation = {
          nom: '',
          email: '',
          telephone: '',
          type: '',
          description: ''
        };

        this.router.navigate(['/confirmation']); // crée une route ou composant confirmation si besoin

      },
      error: (err) => {
        console.error('Erreur lors de l\'envoi de la réclamation', err);
        alert('Erreur lors de l\'envoi de la réclamation.');
      }
    });
  }
  
}
