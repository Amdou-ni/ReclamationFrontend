import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReclamationService } from '../../services/reclamation.service';

@Component({
  selector: 'app-soumission',
  templateUrl: './soumission.component.html',
  styleUrls: ['./soumission.component.scss']
})
export class SoumissionComponent {
  reclamationForm: FormGroup;
  isSubmitting = false;
  typesReclamation = [
    { value: 'technique', label: 'Problème technique' },
    { value: 'livraison', label: 'Problème de livraison' },
    { value: 'facturation', label: 'Erreur de facturation' },
    { value: 'autre', label: 'Autre problème' }
  ];

  constructor(
    private fb: FormBuilder,
    private reclamationService: ReclamationService,
    private router: Router
  ) {
    this.reclamationForm = this.fb.group({
      type: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]],
      fichier: [null]
    });
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.reclamationForm.patchValue({ fichier: input.files[0] });
      this.reclamationForm.get('fichier')?.updateValueAndValidity();
    }
  }

  onSubmit(): void {
    if (this.reclamationForm.invalid || this.isSubmitting) {
      this.reclamationForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    const formData = new FormData();

    formData.append('type', this.reclamationForm.value.type);
    formData.append('description', this.reclamationForm.value.description);
    if (this.reclamationForm.value.fichier) {
      formData.append('fichier', this.reclamationForm.value.fichier);
    }

    this.reclamationService.createReclamation(formData).subscribe({
      next: () => {
        this.router.navigate(['/non-client/mes-reclamations']);
      },
      error: (error) => {
        console.error('Erreur lors de la soumission', error);
        this.isSubmitting = false;
      },
      complete: () => {
        this.isSubmitting = false;
      }
    });
  }
}