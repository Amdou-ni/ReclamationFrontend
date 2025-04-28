import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReclamationService } from '../../services/reclamation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-soumission',
  templateUrl: './soumission.component.html',
  styleUrls: ['./soumission.component.scss']
})
export class SoumissionComponent {
  reclamationForm: FormGroup;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private reclamationService: ReclamationService,
    private router: Router
  ) {
    this.reclamationForm = this.fb.group({
      type: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]],
      file: [null]
    });
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.reclamationForm.patchValue({ file: file });
    }
  }

  onSubmit(): void {
    if (this.reclamationForm.invalid || this.isSubmitting) return;

    this.isSubmitting = true;
    const formData = new FormData();
    
    formData.append('type', this.reclamationForm.get('type')?.value);
    formData.append('description', this.reclamationForm.get('description')?.value);
    
    const file = this.reclamationForm.get('file')?.value;
    if (file) {
      formData.append('file', file);
    }

    this.reclamationService.createReclamation(formData).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.router.navigate(['/stb/mes-reclamations']);
      },
      error: (err) => {
        console.error('Erreur:', err);
        this.isSubmitting = false;
      }
    });
  }
}