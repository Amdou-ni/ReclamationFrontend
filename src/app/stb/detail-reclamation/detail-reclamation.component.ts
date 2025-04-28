import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReclamationService } from '../../services/reclamation.service';
import { Reclamation, ReclamationStatut } from '../../interfaces/reclamation.interface';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-detail-reclamation',
  templateUrl: './detail-reclamation.component.html',
  styleUrls: ['./detail-reclamation.component.scss']
})
export class DetailReclamationComponent implements OnInit {
  reclamation: Reclamation | null = null;
  isLoading = true;
  error = '';
  statusOptions = Object.values(ReclamationStatut);
  newCommentForm = this.fb.group({
    content: ['', [Validators.required, Validators.minLength(5)]]
  });

  constructor(
    private route: ActivatedRoute,
    private reclamationService: ReclamationService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id && !isNaN(+id)) {
      this.loadReclamation(+id);
    } else {
      this.error = 'ID de réclamation invalide';
      this.isLoading = false;
    }
  }

  loadReclamation(id: number): void {
    this.isLoading = true;
    this.reclamationService.getReclamationDetails(id).subscribe({
      next: (reclamation) => {
        this.reclamation = reclamation;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Erreur lors du chargement de la réclamation';
        this.isLoading = false;
        console.error(err);
      }
    });
  }

  addComment(): void {
    if (this.newCommentForm.invalid || !this.reclamation?.id) return;

    const content = this.newCommentForm.get('content')?.value;
    if (!content) return;

    this.reclamationService.addComment(this.reclamation.id, content).subscribe({
      next: (updatedReclamation) => {
        this.reclamation = updatedReclamation;
        this.newCommentForm.reset();
      },
      error: (err) => {
        console.error('Erreur:', err);
      }
    });
  }

  updateStatus(newStatus: string): void {
    if (!this.reclamation?.id) return;

    this.reclamationService.updateStatus(this.reclamation.id, newStatus).subscribe({
      next: (updatedReclamation) => {
        this.reclamation = updatedReclamation;
      },
      error: (err) => {
        console.error('Erreur:', err);
      }
    });
  }

  downloadFile(url: string): void {
    if (!url) return;
    window.open(url, '_blank');
  }

  getStatusClass(status?: string): string {
    if (!status) return '';
    return `status-${status.toLowerCase().replace('_', '-')}`;
  }

  extractFilename(url: string): string {
    if (!url) return 'fichier';
    const parts = url.split('/');
    return parts[parts.length - 1] || 'document';
  }
}