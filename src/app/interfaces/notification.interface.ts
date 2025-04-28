// notification.interface.ts
export interface Notification {
    id: string; // Toujours string
    message: string;
    dateEnvoi: Date;
    destinataire: {
      id: string;
      type: 'user' | 'group' | 'system';
    };
    expired?: boolean;
  }
  
  export interface ApiNotification {
    id: string; // Changé pour matcher Notification
    message: string;
    dateEnvoi: string; // ISO string
    destinataire: {
      id: string;
      type: 'user' | 'group' | 'system';
    };
    expired?: boolean;
  }