// src/app/interfaces/utilisateur.interface.ts

export interface Utilisateur {
    id: string;         
    nom: string;        
    email: string;    
    telephone: string;
    type: 'STB' | 'Non-Client';  
  }
  
  export interface Client extends Utilisateur {
    stbId: string; // Identifiant du Set-Top Box (STB)
    // Ajoutez d'autres propriétés spécifiques au client STB si nécessaire
  }
  
  export interface NonClient extends Utilisateur {
    // Ajouter des propriétés spécifiques aux Non-Clients si nécessaire
    notes?: string;
  }
  