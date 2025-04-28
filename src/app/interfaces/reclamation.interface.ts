export interface Reclamation {
  id: number; 
  description: string;
  statut: string; 
  dateSoumission?: Date; 
  type: string;
  utilisateurId?: number; 
  agentServiceClientId?: number;
  typeUtilisateur?: string;
  comments?: ReclamationComment[];
  piecesJointes?: string[]; // URLs des fichiers
}

export interface ReclamationComment {
  id: number;
  content: string;
  author: string;
  createdAt: Date;
  isAgentComment: boolean;
}
  
  
  
  export enum ReclamationStatut {
    EN_ATTENTE = 'en_attente',
    EN_COURS = 'en_cours',
    RESOLUE = 'resolue',
    REJETEE = 'rejetee'
  }
  
  export enum ReclamationType {
    TECHNIQUE = 'technique',
    SERVICE = 'service',
    FACTURATION = 'facturation'
  }
  // Option pour gérer les dates string de l'API
export interface ApiReclamation {
  id: number;
  ticketNumber?: string;
  description: string;
  statut: string;
  dateSoumission: string; // Format ISO de l'API
  type: string;
  utilisateurId: number;
    agentServiceClientId?: number;
    typeUtilisateur?: string;
}