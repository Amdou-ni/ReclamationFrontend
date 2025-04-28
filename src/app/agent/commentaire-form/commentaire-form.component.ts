import { Component, Input, OnInit } from '@angular/core';
import { ReclamationService } from '../../services/reclamation.service';
import { Reclamation, ReclamationComment } from '../../interfaces/reclamation.interface';

@Component({
  selector: 'app-commentaire-form',
  templateUrl: './commentaire-form.component.html',
  styleUrls: ['./commentaire-form.component.scss']
})
export class CommentaireFormComponent implements OnInit {
  @Input() reclamation: Reclamation | null = null;  // Réclamation sur laquelle on ajoute un commentaire
  commentContent: string = '';  // Contenu du commentaire
  isAgentComment: boolean = false;  // Indique si c'est un commentaire de l'agent

  constructor(private reclamationService: ReclamationService) {}

  ngOnInit(): void {}

  // Méthode pour soumettre le formulaire
  onSubmit(): void {
    if (this.reclamation && this.commentContent) {
      const newComment: ReclamationComment = {
        id: Date.now(),  // Id généré pour ce commentaire
        content: this.commentContent,
        author: 'Agent',  // Ce sera toujours l'agent
        createdAt: new Date(),
        isAgentComment: this.isAgentComment
      };

      // Appel au service pour ajouter le commentaire
      this.reclamationService.addCommentToReclamation(this.reclamation.id, newComment).subscribe({
        next: () => {
          alert('Commentaire ajouté avec succès');
          this.commentContent = '';  // Réinitialiser le champ de commentaire
        },
        error: (err) => {
          console.error('Erreur lors de l\'ajout du commentaire', err);
          alert('Erreur lors de l\'ajout du commentaire');
        }
      });
    }
  }
}
